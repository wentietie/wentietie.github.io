# 常用命令
# 1.node相关

## 1.1 设置node是否可调度

```shell
# 暂停调度
kubectl cordon 节点名
# 回复调度
kubectl uncordon 节点名
```

## 1.2 删除node

```shell
kubectl delete node 节点名
```

