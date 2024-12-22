# npm包打补丁
:::tip 
参考地址：[临时修改npm库](https://juejin.cn/post/6944999020943114254)
:::
使用patch-package和postinstall-postinstall

## 步骤
1. 添加库
   yarn add patch-package postinstall-postinstall -D
2. 修改文件
   修改需要修改的文件
3. 创建布丁，package-name是修改的包名
   npx patch-package package-name
4. package.json中scripts添加
```json
"scripts": {
  "postinstall": "patch-package"
}
```

