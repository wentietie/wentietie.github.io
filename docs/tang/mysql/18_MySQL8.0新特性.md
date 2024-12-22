# 18 MySQL8.0新特性

## 18.1 MySQL80.0新特性概述

### 18.1.1 MySQL8.0新增特性

- **更简便的NoSQL支持**。从5.6版本开始，MySQL就开始支持简单的NoSQL存储功能。MySQL8.0对这一功能做了优化，以更灵活的方式实现NoSQL，不再依赖模式。

- **更好的索引**。新增`隐藏索引`和`降序索引`。`隐藏索引`可以用来测试去掉索引对查询性能的影响；在查询中混合存在多列索引时，使用`降序索引`可以提高查询性能。

- **更完善的JSON支持**。从5.7版本开始支持原生json数据的存储，8.0进行了优化。

  - 增加了聚合函数`JSON_ARRAYGG`和`JSON_OBJECTAGG`，将参数聚合为JSON数组或对象；
  - 新增行内操作符`->>`，是列路径运算符`->`的增强，对JSON排序做了提升；
  - 优化了JSON的更新操作

- **安全和账户管理**。新增`caching_sha2_password`授权插件、角色、密码历史记录和FIPS模式支持。提高了数据库的安全性和性能，使数据库管理员能更灵活的进行账户管理工作。

- **InnoDB的变化**。`InnoDB是MySQL默认的存储引擎`，8.0在其自增、索引、加密、死锁、共享锁等方面做了大量的`改进和优化`，并且支持原子数据定义语言（DDL），提高了数据安全性，对事务提供更好的支持。

- **数据字典**。新增事务数据字典，用来存储数据库对象信息。数据字典存储在内部事务表中。

- **原子数据定义语言**，即`原子DDL`。目前只有InnoDB引擎支持。

  - 定义：原子数据定义语句（DDL）将与DDL操作相关的数据字典更新、存储引擎操作、二进制日志写入结合到一个单独的原子事务中。
  - 好处：即使服务器崩溃，事务也会提交或回滚。
  - 具体表现：使用支持原子DDL的引擎所创建的表，在执行`DROP TABLE`、`CREATE TABLE`、`ALTER TABLE`、`RENAME TABLE`、`TRUNCATE TABLE`、`CREATE TABLESPACE`、`DROP TABLESPACE`等操作时，都支持原子操作，即*事务要么完全操作成功，要么失败后回滚，不再进行部分提交*。

- **资源管理**。MySQL 8开始支持创建和管理`资源组`，允许将服务器内运行的线程分配给特定的分组，以便线程根据组内可用资源执行.

- **字符集支持**。MySQL 8默认字符集改为`utf8mb4` ，并首次增加了日语所特定使用的集 合，utf8mb4_ja_0900_as_cs。

- **优化器增强**。MySQL优化器开始支持隐藏索引和降序索引。隐藏索引不会被优化器使用，验证索引的必 要性时不需要删除索引，先将索引隐藏，如果优化器性能无影响就可以真正地删除索引。降序索引允许 优化器对多个列进行排序，并且允许排序顺序不一致。

- **公用表表达式**。公用表表达式（Common Table Expressions）简称为CTE，MySQL现在支持`递归`和`非递归`两种形式的CTE。

- **窗口函数**。在之前的版本中已存在的大部分 聚合函数 在MySQL 8中也可以 作为窗口函数来使用。

  <p><front style="background: yellow">窗口函数如下：</front></p>
  | 函数名称           | 描述                                                |
  | ------------------ | --------------------------------------------------- |
  | ROW_NUMBER()       | 顺序排序                                            |
  | RANK()             | 并列排序，会跳过重复的序号，如1、1、3               |
  | DENSE_RANK()       | 并列排序，不会跳过重复的序号，如1、1、2             |
  | PERCENT_RANK       | 等级值百分比                                        |
  | CUME_DIST()        | 累积分布值                                          |
  | LAG(expr, n)       | 返回当前行的往前数第n行的expr的值。expr是表中字段名 |
  | LEAD(expr, n)      | 返回当前行的往后数第n行的expr的值。expr是表中字段名 |
  | FIRST_VALUE(expr)  | 返回第一个expr的值。expr是表中字段名                |
  | LAST_VALUE(expr)   | 返回最后一个expr的值。expr是表中字段名              |
  | NTH_VALUE(expr, n) | 返回第n个expr的值。expr是表中字段名                 |
  | NTILE(n)           | 将分区中的有序数据分成n个桶，记录桶编号             |

- **正则表达式支持**。增加了`REGEXP_LIKE()`、` EGEXP_INSTR()`、`REGEXP_REPLACE()`和 `REGEXP_SUBSTR()`等函数来提升性能，另外，`regexp_stack_limit`和 `regexp_time_limit`系统变量能够通过匹配引擎来控制资源消耗。

- **内部临时表**。`TempTable存储引擎取代MEMORY存储引擎成为内部临时表的默认存储引擎 `。TempTable存储 引擎为VARCHAR和VARBINARY列提供高效存储。`internal_tmp_mem_storage_engine`会话变量定义了内部 临时表的存储引擎，可选的值有两个，`TempTable`和`MEMORY`，其中TempTable为默认的存储引擎。 `temptable_max_ram`系统配置项定义了TempTable存储引擎可使用的最大内存数量。

- **日志记录**。在MySQL 8中错误日志子系统由一系列MySQL组件构成。这些组件的构成由系统变量 log_error_services来配置，能够实现日志事件的过滤和写入。

- 

- **增强的MySQL复制**。MySQL 8复制支持对`JSON文档`进行`部分更新`的`二进制日志记录` ，该记录使用紧凑的二进制格式 ，从而*节省记录完整JSON文档的空间*。当使用基于语句的日志记录时，这种紧凑的日志记录会自动完成，并且可以通过将新的`binlog_row_value_options`系统变量值设置为PARTIAL_JSON来启用。

### 18.1.2 MySQL8.0移除的就特性

-  **查询缓存**。查询缓存已被移除 ，删除的项有：
   - 语句：FLUSH QUERY CACHE和RESET QUERY CACHE。 
   - 系统变量：query_cache_limit、query_cache_min_res_unit、query_cache_size、 query_cache_type、query_cache_wlock_invalidate。 
   - 状态变量：Qcache_free_blocks、 Qcache_free_memory、Qcache_hits、Qcache_inserts、Qcache_lowmem_prunes、Qcache_not_cached、 Qcache_queries_in_cache、Qcache_total_blocks。 
   - 线程状态：checking privileges on cached query、checking query cache for query、invalidating query cache entries、sending cached result to client、storing result in query cache、waiting for query cache lock。 
-  **加密相关**。
   - 删除的加密相关的内容有：ENCODE()、DECODE()、ENCRYPT()、DES_ENCRYPT()和 DES_DECRYPT()函数，配置项des-key-file，系统变量have_crypt，FLUSH语句的DES_KEY_FILE选项， HAVE_CRYPT CMake选项。 
   - 对于移除的ENCRYPT()函数，考虑使用SHA2()替代，对于其他移除的函数，使 用AES_ENCRYPT()和AES_DECRYPT()替代。 
-  **空间函数相关**。在MySQL 5.7版本中，多个空间函数已被标记为过时。这些过时函数在MySQL 8中都已被 移除，只保留了对应的ST_和MBR函数。
-  **\N和NULL**。在SQL语句中，解析器不再将\N视为NULL，所以在SQL语句中应使用NULL代替\N。这项变化 不会影响使用LOAD DATA INFILE或者SELECT...INTO OUTFILE操作文件的导入和导出。在这类操作中，NULL 仍等同于\N。 
-  **mysql_install_db**。在MySQL分布中，已移除了mysql_install_db程序，数据字典初始化需要调用带着-- initialize或者--initialize-insecure选项的mysqld来代替实现。另外，--bootstrap和INSTALL_SCRIPTDIR CMake也已被删除。
-  **通用分区处理程序**。通用分区处理程序已从MySQL服务中被移除。为了实现给定表分区，表所使用的存 储引擎需要自有的分区处理程序。 提供本地分区支持的MySQL存储引擎有两个，即InnoDB和NDB，而在 MySQL 8中只支持InnoDB。 
-  **系统和状态变量信息**。在INFORMATION_SCHEMA数据库中，对系统和状态变量信息不再进行维护。 GLOBAL_VARIABLES、SESSION_VARIABLES、GLOBAL_STATUS、SESSION_STATUS表都已被删除。另外，系 统变量show_compatibility_56也已被删除。被删除的状态变量有Slave_heartbeat_period、 Slave_last_heartbeat,Slave_received_heartbeats、Slave_retried_transactions、Slave_running。以上被删除 的内容都可使用性能模式中对应的内容进行替代。
-  **mysql_plugin工具**。mysql_plugin工具用来配置MySQL服务器插件，现已被删除，可使用--plugin-load或- -plugin-load-add选项在服务器启动时加载插件或者在运行时使用INSTALL PLUGIN语句加载插件来替代该 工具

## 18.2 新特性1-窗口函数

### 18.2.1 概述

- **作用**：类似于在查询中使用`GROUP BY`对数据进行分组，不同的是，分组操作会把分组的结果汇聚成一条记录，*窗口函数是将结果置于每一条数据记录中*。

- **分类**：

  - `静态窗口函数`：函数的窗口大小是固定的，不会因为记录的不同而不同
  - `动态窗口函数`：函数的窗口大小会随着记录的不同而变化

- **概览**：窗口函数总体上可以分为序号函数、分布函数、前后函数、首尾函数和其他函数，如下：

  | 函数分类 | 函数               | 描述                                                |
  | -------- | ------------------ | --------------------------------------------------- |
  | 序号函数 | ROW_NUMBER()       | 顺序排序                                            |
  | 序号函数 | RANK()             | 并列排序，会跳过重复的序号，如1、1、3               |
  | 序号函数 | DENSE_RANK()       | 并列排序，不会跳过重复的序号，如1、1、2             |
  | 分布函数 | PERCENT_RANK       | 等级值百分比                                        |
  | 分布函数 | CUME_DIST()        | 累积分布值                                          |
  | 前后函数 | LAG(expr, n)       | 返回当前行的往前数第n行的expr的值。expr是表中字段名 |
  | 前后函数 | LEAD(expr, n)      | 返回当前行的往后数第n行的expr的值。expr是表中字段名 |
  | 首尾函数 | FIRST_VALUE(expr)  | 返回第一个expr的值。expr是表中字段名                |
  | 首尾函数 | LAST_VALUE(expr)   | 返回最后一个expr的值。expr是表中字段名              |
  | 其他函数 | NTH_VALUE(expr, n) | 返回第n个expr的值。expr是表中字段名                 |
  | 其他函数 | NTILE(n)           | 将分区中的有序数据分成n个桶，记录桶编号             |


### 18.2.2 语法

```mysql
SELECT [列名1, 列名2, ...,] 函数 OVER ([PARTITION BY 字段名 ORDER BY 字段名 ASC|DESC])
FROM ...
...
```

或

```mysql
SELECT [列名1, 列名2, ...,] 函数 OVER 窗口名
FROM ...
[WHERE ...]
WINDOW 窗口名 AS ([PARTITION BY 字段名 ORDER BY 字段名 ASC|DESC])
...
```

<p><front style="background: yellow">说明：</front></p>

- `OVER`：指定窗口函数的范围。

  - 如果省略括号中的内容（即`函数 OVER()`），则窗口会包含满足WHERE条件的所有记录，窗口函数会基于所有满足WHERE条件的记录并进行计算。

  - 如果OVER()中使用了ORDER BY，FROM后边建议不要使用ORDER BY了，否则结果出人意料：

    当sql语句中的order by子句里的内容和窗口函数over()中的order by子句里的内容一样，那么sql语句中的排序将先执行,窗口函数在分析时就不必再排序；order by 字段两者不一致时，那么sql语句中的排序将最后在窗口函数分析结束后执行排序。所以如果在over中已经添加了order by…，就不建议在from后面再添加相同的order by。二者一致的话还好(效果一样，没有差别)，但不一致时结果有时就可能令人费解了。

  - `OVER ([PARTITION BY 字段名1 ORDER BY 字段名2 ASC|DESC])`表示根据字段名1进行分组，在分组内按照字段名2排序

- `PARTITION BY`：指定窗口函数按照哪些字段进行分组。

  分组后，窗口函数可以在每个分组中分别执行。

- `ORDER BY`：指定窗口函数按照哪些字段进行排序。

  执行排序操作使窗口函数按照排序后的数据记录的顺序进行编号

- `WINDOW 子句`：可以只用WINDOW子句为窗口函数命名，在窗口函数的OVER关键字后边直接使用窗口名即可

### 18.2.3 序号函数

##### ① ROW_NUMBER()

- 语法：`ROW_NUMBER() OVER ([PARTITION BY 字段1 ORDER BY 字段名2 ASC|DESC])`

- 含义：

  - 按照字段1分组，分组内按照字段2排序，然后按照排好的顺序给**每个分组内**的记录按照顺序编号。
  - **每个分组内的编号是连续且唯一的**。
  - 如果`PARTITION BY 字段1`省略，表示整个表是一个分组
  - 如果`ORDER BY 字段名2`省略，按照默认排序方式进行排序

- 举例：查询goods中商品信息，并给不用类型的服装以价格由高到低进行编号，且保持编号的唯一性。

  ```mysql
  mysql> SELECT row_number() OVER (PARTITION BY category_id ORDER BY price DESC) AS num, id, category_id, `NAME`, price
      -> FROM goods;
  +-----+----+-------------+-----------------+---------+
  | num | id | category_id | NAME            | price   |
  +-----+----+-------------+-----------------+---------+
  |   1 |  7 |           1 | 呢绒外套        |  399.90 |
  |   2 |  5 |           1 | 牛仔裤          |   89.90 |
  |   3 |  9 |           1 | 卫衣            |   89.90 |
  |   4 |  2 |           1 | 连衣裙          |   79.90 |
  |   5 |  1 |           1 | T恤             |   39.90 |
  |   6 | 11 |           1 | 百褶裙          |   29.90 |
  |   1 | 10 |           2 | 山地自行车      | 1399.90 |
  |   2 |  6 |           2 | 运动外套        |  799.90 |
  |   3 | 12 |           2 | 滑板            |  499.90 |
  |   4 |  4 |           2 | 骑行装备        |  399.90 |
  |   5 |  8 |           2 | 自行车          |  399.90 |
  |   6 |  3 |           2 | 登山杖          |   59.90 |
  +-----+----+-------------+-----------------+---------+
  12 rows in set (0.00 sec)
  ```

##### ② RANK()函数

- 语法：`RANK() OVER ([PARTITION BY 字段1 ]ORDER BY 字段名2 ASC|DESC)`

- 含义：

  - 按照字段1分组，分组内按照字段2排序，然后按照排好的顺序给**每个分组内**的记录按照顺序编号。
  - 序号是可以重复的。
  - 会跳过重复序号，如1、2、2、4

- 说明：OVER()中必须使用ORDER BY 语句，否则排序序号全都为1

- 举例：查询goods中商品信息，并给不用类型的服装以价格由高到低进行编号，且跳过重复序号

  ```mysql
  mysql> SELECT RANK() OVER (PARTITION BY category_id ORDER BY price DESC) AS num, id, category_id, `NAME`, price
      -> FROM goods;
  +-----+----+-------------+-----------------+---------+
  | num | id | category_id | NAME            | price   |
  +-----+----+-------------+-----------------+---------+
  |   1 |  7 |           1 | 呢绒外套        |  399.90 |
  |   2 |  5 |           1 | 牛仔裤          |   89.90 |
  |   2 |  9 |           1 | 卫衣            |   89.90 |
  |   4 |  2 |           1 | 连衣裙          |   79.90 |
  |   5 |  1 |           1 | T恤             |   39.90 |
  |   6 | 11 |           1 | 百褶裙          |   29.90 |
  |   1 | 10 |           2 | 山地自行车      | 1399.90 |
  |   2 |  6 |           2 | 运动外套        |  799.90 |
  |   3 | 12 |           2 | 滑板            |  499.90 |
  |   4 |  4 |           2 | 骑行装备        |  399.90 |
  |   4 |  8 |           2 | 自行车          |  399.90 |
  |   6 |  3 |           2 | 登山杖          |   59.90 |
  +-----+----+-------------+-----------------+---------+
  12 rows in set (0.00 sec)
  
  ```

##### ③ DENSE_RANK()函数

- 语法：`DENSE_RANK() OVER ([PARTITION BY 字段1 ]ORDER BY 字段名2 ASC|DESC)`

- 含义：

  - 按照字段1分组，分组内按照字段2排序，然后按照排好的顺序给**每个分组内**的记录按照顺序编号。
  - 序号是可以重复的。
  - 不会跳过重复序号，如1、2、2、3

- 说明：OVER()中必须使用ORDER BY 语句，否则排序序号全都为1

- 举例：查询goods中商品信息，并给不用类型的服装以价格由高到低进行编号，且不要跳过重复序号。

  ```mysql
  mysql> SELECT DENSE_RANK() OVER (PARTITION BY category_id ORDER BY price DESC) AS num, id, category_id, `NAME`, price
      -> FROM goods;
  +-----+----+-------------+-----------------+---------+
  | num | id | category_id | NAME            | price   |
  +-----+----+-------------+-----------------+---------+
  |   1 |  7 |           1 | 呢绒外套        |  399.90 |
  |   2 |  5 |           1 | 牛仔裤          |   89.90 |
  |   2 |  9 |           1 | 卫衣            |   89.90 |
  |   3 |  2 |           1 | 连衣裙          |   79.90 |
  |   4 |  1 |           1 | T恤             |   39.90 |
  |   5 | 11 |           1 | 百褶裙          |   29.90 |
  |   1 | 10 |           2 | 山地自行车      | 1399.90 |
  |   2 |  6 |           2 | 运动外套        |  799.90 |
  |   3 | 12 |           2 | 滑板            |  499.90 |
  |   4 |  4 |           2 | 骑行装备        |  399.90 |
  |   4 |  8 |           2 | 自行车          |  399.90 |
  |   5 |  3 |           2 | 登山杖          |   59.90 |
  +-----+----+-------------+-----------------+---------+
  12 rows in set (0.00 sec)
  ```

### 18.2.4 分布函数

##### ① PERCENT_RANK()函数

- 语法：`PERCENT_RANK() OVER ([PARTITION BY 字段1 ]ORDER BY 字段名2 ASC|DESC)`

- 含义：

  - 按照RANK()函数计算出来的编号，计算当前分组中每条记录的**等级值百分比**
  - 公式为`(rank-1)/(rows-1)`，其中rank为使用RANK()产生的序号，rows为当前分组中的总记录条数

- 说明：OVER()中必须使用ORDER BY语句，否则计算出来的值为0（因为rank=1）

- 举例：查询goods中商品信息，并计算不同类别的商品价格的等级百分比

  ```mysql
  mysql> SELECT RANK() OVER (PARTITION BY category_id ORDER BY price DESC) AS r,
      -> PERCENT_RANK() OVER (PARTITION BY category_id ORDER BY price DESC) AS 'pr_%',
      -> id, category_id, category, NAME, price, stock
      -> FROM goods;
  +---+------+----+-------------+---------------------+-----------------+---------+-------+
  | r | pr_% | id | category_id | category            | NAME            | price   | stock |
  +---+------+----+-------------+---------------------+-----------------+---------+-------+
  | 1 |    0 |  7 |           1 | 女装/女士精品       | 呢绒外套        |  399.90 |  1200 |
  | 2 |  0.2 |  5 |           1 | 女装/女士精品       | 牛仔裤          |   89.90 |  3500 |
  | 2 |  0.2 |  9 |           1 | 女装/女士精品       | 卫衣            |   89.90 |  1500 |
  | 4 |  0.6 |  2 |           1 | 女装/女士精品       | 连衣裙          |   79.90 |  2500 |
  | 5 |  0.8 |  1 |           1 | 女装/女士精品       | T恤             |   39.90 |  1000 |
  | 6 |    1 | 11 |           1 | 女装/女士精品       | 百褶裙          |   29.90 |   500 |
  | 1 |    0 | 10 |           2 | 户外运动            | 山地自行车      | 1399.90 |  2500 |
  | 2 |  0.2 |  6 |           2 | 户外运动            | 运动外套        |  799.90 |   500 |
  | 3 |  0.4 | 12 |           2 | 户外运动            | 滑板            |  499.90 |  1200 |
  | 4 |  0.6 |  4 |           2 | 户外运动            | 骑行装备        |  399.90 |  3500 |
  | 4 |  0.6 |  8 |           2 | 户外运动            | 自行车          |  399.90 |  1000 |
  | 6 |    1 |  3 |           2 | 户外运动            | 登山杖          |   59.90 |  1500 |
  +---+------+----+-------------+---------------------+-----------------+---------+-------+
  12 rows in set (0.00 sec)
  ```

##### ② CUME_DIST()函数

- 语法：`CUME_DIST() OVER ([PARTITION BY 字段1 ]ORDER BY 字段名2 ASC|DESC)`

- 含义：计算每条记录在当前分组中所占百分比，公式如下：

  - 使用`ASC`升序排序：根据公式`当前分组中小于等于当前值的数据行数 / 该分组总行数totalrows`计算每条记录的百分比
  - 使用`DESC`降序排序：根据公式`当前分组中大于等于当前值的数据行数 / 该分组总行数totalrows`计算每条记录的百分比

- 说明：OVER()中必须使用ORDER BY语句，否则计算出来的值都为1

- 举例：查询goods中商品信息，并计算不同类别的商品价格小于等于当前商品价格的比例

  ```mysql
  mysql> SELECT CUME_DIST() OVER (PARTITION BY category_id ORDER BY price ASC) AS 'cd_%',
      -> id, category, NAME, price
      -> FROM goods;
  +---------------------+----+---------------------+-----------------+---------+
  | cd_%                | id | category            | NAME            | price   |
  +---------------------+----+---------------------+-----------------+---------+
  | 0.16666666666666666 | 11 | 女装/女士精品       | 百褶裙          |   29.90 |
  |  0.3333333333333333 |  1 | 女装/女士精品       | T恤             |   39.90 |
  |                 0.5 |  2 | 女装/女士精品       | 连衣裙          |   79.90 |
  |  0.8333333333333334 |  5 | 女装/女士精品       | 牛仔裤          |   89.90 |
  |  0.8333333333333334 |  9 | 女装/女士精品       | 卫衣            |   89.90 |
  |                   1 |  7 | 女装/女士精品       | 呢绒外套        |  399.90 |
  | 0.16666666666666666 |  3 | 户外运动            | 登山杖          |   59.90 |
  |                 0.5 |  4 | 户外运动            | 骑行装备        |  399.90 |
  |                 0.5 |  8 | 户外运动            | 自行车          |  399.90 |
  |  0.6666666666666666 | 12 | 户外运动            | 滑板            |  499.90 |
  |  0.8333333333333334 |  6 | 户外运动            | 运动外套        |  799.90 |
  |                   1 | 10 | 户外运动            | 山地自行车      | 1399.90 |
  +---------------------+----+---------------------+-----------------+---------+
  12 rows in set (0.00 sec)
  ```

### 18.2.5 前后函数

也称<front style="background: yellow">偏移量函数</front>

##### ① LAG(expr)函数

- 语法：`LAG(expr[,n, [default]]) OVER ([PARTITION BY 字段1 ORDER BY 字段名2 ASC|DESC])`

- 含义：查询当前记录的**往前数**第n个expr的值。参数说明如下：

  - `expr`：必填。表示当前记录的哪个字段
  - `n`：选填。默认为1
  - `default`：选填。默认为null。表示当前行如果是当前分区内第一条则显示default值。

- 举例：查询商品id为1的商品销售额，并计算当天销售额与*前1天*销售额的差值

  ```mysql
  mysql> SELECT g.id, g.`NAME`, g.category, t.sale_date, t.sales_sum,
      -> (t.sales_sum - LAG(t.sales_sum, 1, 0) OVER (PARTITION BY t.goods_id ORDER BY sale_date ASC)) diff_sales_num
      -> FROM goods g
      -> LEFT JOIN (
      -> SELECT goods_id, DATE_FORMAT(create_time, '%Y-%m-%d') sale_date, SUM(sales) sales_sum
      -> FROM sale_log
      -> GROUP BY goods_id, DATE_FORMAT(create_time, '%Y-%m-%d')
      -> ) t ON t.goods_id = g.id
      -> WHERE g.id = 1;
  +----+------+---------------------+------------+-----------+----------------+
  | id | NAME | category            | sale_date  | sales_sum | diff_sales_num |
  +----+------+---------------------+------------+-----------+----------------+
  |  1 | T恤  | 女装/女士精品       | 2020-11-10 |         5 |              5 |
  |  1 | T恤  | 女装/女士精品       | 2020-11-11 |         1 |             -4 |
  |  1 | T恤  | 女装/女士精品       | 2020-11-12 |         1 |              0 |
  |  1 | T恤  | 女装/女士精品       | 2020-11-13 |         3 |              2 |
  +----+------+---------------------+------------+-----------+----------------+
  4 rows in set (0.00 sec)
  ```

##### ② LEAD(expr)函数

- 语法：`LEAD(expr[,n, [default]]) OVER ([PARTITION BY 字段1 ORDER BY 字段名2 ASC|DESC])`
- 含义：查询当前记录的**往后数**第n个expr的值。参数说明如下：
  - `expr`：必填。表示当前记录的哪个字段
  - `n`：选填。默认为1
  - `default`：选填。默认为null。表示当前行如果是当前分区内最后一条则显示default值。

### 18.2.6 首尾函数

##### ① FIRST_VALUE(expr)函数

- 语法：`FIRST_VALUE(expr) OVER ([PARTITION BY 字段1 ORDER BY 字段名2 ASC|DESC])`

- 含义：返回当前分组（排序后）的**第一个值**

- 举例：查询商品id为1的商品销售额，并计算当天销售额与*最大*销售额的差值

  ```mysql
  mysql> SELECT g.id, g.`NAME`, g.category, t.sale_date, t.sales_sum,
      -> (FIRST_VALUE(t.sales_sum) OVER (PARTITION BY t.goods_id ORDER BY sales_sum DESC) - t.sales_sum) diff_sales_num
      -> FROM goods g
      -> LEFT JOIN (
      -> SELECT goods_id, DATE_FORMAT(create_time, '%Y-%m-%d') sale_date, SUM(sales) sales_sum
      -> FROM sale_log
      -> GROUP BY goods_id, DATE_FORMAT(create_time, '%Y-%m-%d')
      -> ) t ON t.goods_id = g.id
      -> WHERE g.id = 1;
  +----+------+---------------------+------------+-----------+----------------+
  | id | NAME | category            | sale_date  | sales_sum | diff_sales_num |
  +----+------+---------------------+------------+-----------+----------------+
  |  1 | T恤  | 女装/女士精品       | 2020-11-10 |         5 |              0 |
  |  1 | T恤  | 女装/女士精品       | 2020-11-13 |         3 |              2 |
  |  1 | T恤  | 女装/女士精品       | 2020-11-11 |         1 |              4 |
  |  1 | T恤  | 女装/女士精品       | 2020-11-12 |         1 |              4 |
  +----+------+---------------------+------------+-----------+----------------+
  4 rows in set (0.00 sec)
  ```

##### ② LAST_VALUE(expr)函数

- 语法：`LAST_VALUE(expr) OVER ([PARTITION BY 字段1 ORDER BY 字段名2 ASC|DESC])`
- 含义：返回当前分组（排序后）的**最后一个值**

### 18.2.7 聚合函数

<p><front style="background: yellow">聚合函数也能当做窗口函数使用</front></p>

聚合函数：`SUM()`、`AVG()`、`COUNT()`、`MIN()`、`MAX()`

举例：以SUM()为例，查询商品每天销售额

```mysql
mysql> SELECT DISTINCT sl.goods_id, g.`NAME`, DATE_FORMAT(sl.create_time, '%Y-%m-%d') sale_date,
    -> SUM(sl.sales) OVER (PARTITION BY sl.goods_id, DATE_FORMAT(sl.create_time, '%Y-%m-%d')) sales_sum
    -> FROM sale_log sl
    -> LEFT JOIN goods g ON g.id = sl.goods_id;
+----------+-----------------+------------+-----------+
| goods_id | NAME            | sale_date  | sales_sum |
+----------+-----------------+------------+-----------+
|        1 | T恤             | 2020-11-10 |         5 |
|        1 | T恤             | 2020-11-11 |         1 |
|        1 | T恤             | 2020-11-12 |         1 |
|        1 | T恤             | 2020-11-13 |         3 |
|        2 | 连衣裙          | 2020-11-10 |         1 |
|        2 | 连衣裙          | 2020-11-11 |         1 |
|       10 | 山地自行车      | 2020-11-15 |         2 |
+----------+-----------------+------------+-----------+
7 rows in set (0.00 sec)
```

### 18.2.8 其他函数

##### ① NTH_VALUE(expr,n)函数

- 语法：`NTH_VALUE(expr,n) OVER ([PARTITION BY 字段1 ORDER BY 字段名2 ASC|DESC])`

- 含义：返回第n条记录的expr值

- 举例：查询goods中商品信息，并计算不同商品类型中排名第2高的价格信息

  ```mysql
  mysql> SELECT id, category, NAME, price,
      -> NTH_VALUE(price,2) OVER (PARTITION BY category_id ORDER BY price DESC) AS second_price
      -> FROM goods;
  +----+---------------------+-----------------+---------+--------------+
  | id | category            | NAME            | price   | second_price |
  +----+---------------------+-----------------+---------+--------------+
  |  7 | 女装/女士精品       | 呢绒外套        |  399.90 |         NULL |
  |  5 | 女装/女士精品       | 牛仔裤          |   89.90 |        89.90 |
  |  9 | 女装/女士精品       | 卫衣            |   89.90 |        89.90 |
  |  2 | 女装/女士精品       | 连衣裙          |   79.90 |        89.90 |
  |  1 | 女装/女士精品       | T恤             |   39.90 |        89.90 |
  | 11 | 女装/女士精品       | 百褶裙          |   29.90 |        89.90 |
  | 10 | 户外运动            | 山地自行车      | 1399.90 |         NULL |
  |  6 | 户外运动            | 运动外套        |  799.90 |       799.90 |
  | 12 | 户外运动            | 滑板            |  499.90 |       799.90 |
  |  4 | 户外运动            | 骑行装备        |  399.90 |       799.90 |
  |  8 | 户外运动            | 自行车          |  399.90 |       799.90 |
  |  3 | 户外运动            | 登山杖          |   59.90 |       799.90 |
  +----+---------------------+-----------------+---------+--------------+
  12 rows in set (0.00 sec)
  ```

##### ② NTILE(n)函数

- 语法：`NTILE(n) OVER ([PARTITION BY 字段1 ORDER BY 字段名2 ASC|DESC])`

- 含义：在每个分组中，将数据分为n个桶（组），并记录桶编号

- 举例：查询goods中商品信息，并将不同商品类型中的商品按照价格降序分为3个桶（组）

  ```mysql
  mysql> select NTILE(3) OVER (PARTITION BY category_id ORDER BY price DESC) AS num,
      -> id, `NAME`, category, price
      -> FROM goods;
  +------+----+-----------------+---------------------+---------+
  | num  | id | NAME            | category            | price   |
  +------+----+-----------------+---------------------+---------+
  |    1 |  7 | 呢绒外套        | 女装/女士精品       |  399.90 |
  |    1 |  5 | 牛仔裤          | 女装/女士精品       |   89.90 |
  |    2 |  9 | 卫衣            | 女装/女士精品       |   89.90 |
  |    2 |  2 | 连衣裙          | 女装/女士精品       |   79.90 |
  |    3 |  1 | T恤             | 女装/女士精品       |   39.90 |
  |    3 | 11 | 百褶裙          | 女装/女士精品       |   29.90 |
  |    1 | 10 | 山地自行车      | 户外运动            | 1399.90 |
  |    1 |  6 | 运动外套        | 户外运动            |  799.90 |
  |    2 | 12 | 滑板            | 户外运动            |  499.90 |
  |    2 |  4 | 骑行装备        | 户外运动            |  399.90 |
  |    3 |  8 | 自行车          | 户外运动            |  399.90 |
  |    3 |  3 | 登山杖          | 户外运动            |   59.90 |
  +------+----+-----------------+---------------------+---------+
  12 rows in set (0.00 sec)
  ```

### 18.2.9  WINDOW语法的使用

- 18.2.8-②例子可改写为：

  ```mysql
  SELECT DISTINCT sl.goods_id, g.`NAME`, DATE_FORMAT(sl.create_time, '%Y-%m-%d') sale_date, 
  	SUM(sl.sales) OVER w_sales_sum_cal sales_sum
  FROM sale_log sl
  LEFT JOIN goods g ON g.id = sl.goods_id
  WINDOW w_sales_sum_cal AS (PARTITION BY sl.goods_id, DATE_FORMAT(sl.create_time, '%Y-%m-%d'));
  ```

- 18.2.4-①例子可改写为：

  ```mysql
  SELECT RANK() OVER w_price_desc_rank AS r,
  	PERCENT_RANK() OVER w_price_desc_rank AS 'pr_%',
  	id, category_id, category, NAME, price, stock
  FROM goods
  -- WHERE category_id = 1 # 如果有where条件，where条件需要写在WINDOW语句之前
  WINDOW w_price_desc_rank AS (PARTITION BY category_id ORDER BY price DESC);
  ```

### 18.2.10 小结-窗口函数的特点

- 窗口函数可以对数据进行分组，并且可以在组内排序
- 窗口函数不会因分组而减少原表中的行数

### 18.2.9 测试中用到的表及数据

```mysql
# 创建goods表
CREATE TABLE goods(
	id INT PRIMARY KEY AUTO_INCREMENT,
	category_id INT,
	category VARCHAR(15),
	NAME VARCHAR(30),
	price DECIMAL(10,2),
	stock INT,
	upper_time DATETIME
);

INSERT INTO goods(category_id,category,NAME,price,stock,upper_time)
VALUES
(1, '女装/女士精品', 'T恤', 39.90, 1000, '2020-11-10 00:00:00'),
(1, '女装/女士精品', '连衣裙', 79.90, 2500, '2020-11-10 00:00:00'),
(2, '户外运动', '登山杖', 59.90, 1500, '2020-11-10 00:00:00'),
(2, '户外运动', '骑行装备', 399.90, 3500, '2020-11-10 00:00:00'),
(1, '女装/女士精品', '牛仔裤', 89.90, 3500, '2020-11-10 00:00:00'),
(2, '户外运动', '运动外套', 799.90, 500, '2020-11-10 00:00:00'),
(1, '女装/女士精品', '呢绒外套', 399.90, 1200, '2020-11-10 00:00:00'),
(2, '户外运动', '自行车', 399.90, 1000, '2020-11-10 00:00:00'),
(1, '女装/女士精品', '卫衣', 89.90, 1500, '2020-11-10 00:00:00'),
(2, '户外运动', '山地自行车', 1399.90, 2500, '2020-11-10 00:00:00'),
(1, '女装/女士精品', '百褶裙', 29.90, 500, '2020-11-10 00:00:00'),
(2, '户外运动', '滑板', 499.90, 1200, '2020-11-10 00:00:00');

# 创建销售记录表
create table sale_log(
	id int PRIMARY KEY auto_increment,
	goods_id int,
	sales int COMMENT '本次售出数量',
	create_time datetime
);

INSERT INTO `sale_log` VALUES (1, 1, 1, '2020-11-10 02:10:33');
INSERT INTO `sale_log` VALUES (2, 1, 4, '2020-11-10 12:10:33');
INSERT INTO `sale_log` VALUES (3, 1, 1, '2020-11-11 22:10:33');
INSERT INTO `sale_log` VALUES (4, 2, 1, '2020-11-10 22:10:33');
INSERT INTO `sale_log` VALUES (5, 2, 1, '2020-11-11 09:10:33');
INSERT INTO `sale_log` VALUES (6, 1, 1, '2020-11-12 11:11:13');
INSERT INTO `sale_log` VALUES (7, 1, 1, '2020-11-13 16:10:33');
INSERT INTO `sale_log` VALUES (8, 1, 2, '2020-11-13 17:50:33');
INSERT INTO `sale_log` VALUES (9, 10, 2, '2020-11-15 17:50:33');
```

## 18.3 新特性2-公用表表达式

> 概念

<p><front style="background: yellow">公用表表达式</front>，简称**CTE**（Common Table Expressions）。
CTE是一个命名的临时结果集，作用范围是当前语句。可以将CTE理解成一个可以复用的子查询，但是**CTE可以引用其他CTE**，但是子查询不能引用其他子查询。</p>

> 分类

按照**语法结构和执行方式**的不同，可以分为两类：

- `普通公用表表达式`
- `递归公用表表达式`

### 18.3.1 普通公用表表达式

- 语法：

  ```mysql
  WITH CTE名称
  AS (查询语句)
  SELECT|DELETE|UPDATE 语句;
  ```

- 举例：查询员工所在部门的详细信息。

  因为有的部门没有员工，这些部门是不能显示的，所以不能直接返回部门表信息。

  ```mysql
  WITH cte_emps_dept_id
  AS (SELECT DISTINCT department_id FROM emps)
  SELECT d.*
  FROM depts d 
  LEFT JOIN cte_emps_dept_id c ON c.department_id = d.department_id
  ```

### 18.3.2 递归公用表表达式

- 语法：

  ```mysql
  WITH RECURSIVE CTE名称
  AS (查询语句①) 
  SELECT|DELETE|UPDATE 语句;
  ```

  <p><front style="background: yellow">说明：</front></p>

  - `查询语句①`由两部分组成：

    - `种子查询`：用来**获取递归的初始值**。这个查询只运行一次，以创建初始数据集

    - `递归查询`：递归查询会一直执行，直到没有任何新的查询数据产生，递归返回。

      **递归查询中，不用或慎用外连接，最好使用内连接（`[inner] join ... on`）**

    - **二者通过关键字`UNION [ALL]`进行连接**

- 举例：针对于我们常用的emps表，包含employee_id，last_name和manager_id三个字段。如果a是b 的管理者，那么，我们可以把b叫做a的下属，如果同时b又是c的管理者，那么c就是b的下属，是a的下下 属。 要求：使用递归公用表表达式查询出所有具有下下属身份的人员信息。

  <p><front style="background: yellow">步骤：</front></p>

  - ① 通过种子查询，获取公司最大领导，即第一层员工。使用n记录员工层级，第一层员工记n=1
  - ② 开始进行递归查询。查询出以公用表表达式中员工为领导的员工，并记录该层员工的n值为公用表表达式中的n值+1，递归返回
  - ③ 最后的查询，筛选出公用表表达式中属于下下属身份的员工，即n>=3的员工

  ```mysql
  WITH RECURSIVE cte_emp
  AS (
      -- 种子查询，获取第一层员工
  	SELECT employee_id, last_name, manager_id, 1 AS n FROM emps WHERE manager_id IS NULL 
  	UNION ALL 
      -- 递归查询，获取每一层员工
  	SELECT e.employee_id, e.last_name, e.manager_id, cte_emp.n+1 
      FROM emps e 
      JOIN cte_emp ON cte_emp.employee_id = e.manager_id
  )
  SELECT * FROM cte_emp WHERE n >= 3
  ```

### 18.3.3 小结

公用表表达式的作用是可以替代子查询，而且可以被多次引用。递归公用表表达式对查询有一个共同根 节点的树形结构数据非常高效，可以轻松搞定其他查询方式难以处理的查询。
