# 99 MySQL常见问题的解决

## 1.MySQL8.0时间与系统时间相差8小时

```mysql
# 查看mysql时间
select now();

# 查看时区
show variables like "%time_zone%";

# 修改mysql全局时区为北京时间，即东八区
set global time_zone = '+8:00';

# 修改当前会话时间为北京时间
set time_zone = '+8:00';

# 刷新配置立即生效
flush privileges;
```

