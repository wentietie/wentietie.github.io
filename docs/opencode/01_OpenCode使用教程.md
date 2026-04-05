# OpenCode 使用教程

## 什么是 OpenCode？

OpenCode 是开源版的 Claude Code，是一个为终端设计的 AI 编程助手。它具有原生的文本用户界面，支持 75+ 模型的多模型架构，目前在 GitHub 上已获得超过 6.4 万 Stars，拥有 100 万月活开发者。

## OpenCode vs Claude Code

| 特性 | OpenCode | Claude Code |
|------|----------|-------------|
| 开源 | ✅ 完全开源 | ❌ 闭源 |
| 模型支持 | 75+ 模型 | Anthropic 官方模型 |
| 成本 | 灵活多样 | API 费用 |
| 适用场景 | 从0到1搭建，复杂大任务 | 日常编程辅助 |

## 安装 OpenCode

### 前置条件

- Node.js 18+ (推荐 LTS 20+)
- Git (强烈推荐)

### 安装步骤

1. **使用 npm 全局安装**：

```bash
npm install -g opencode
```

2. **国内镜像安装**（可选）：

```bash
npm config set registry https://registry.npmmirror.com
npm install -g opencode
```

### 验证安装

```bash
opencode --version
```

## 首次运行

进入项目目录并运行：

```bash
cd your-project-directory
opencode
```

首次运行时会提示你：
- 配置 API Key
- 选择默认模型
- 设置项目权限

## 配置说明

OpenCode 的配置文件位于：

```
C:\Users\你的用户名\.config\opencode\opencode.json
```

如果文件不存在，请手动创建该目录。

### 基础配置示例

```json
{
  "model": "glm-5",
  "api_key": "your-api-key",
  "base_url": "your-api-base-url"
}
```

## 常用命令与交互技巧

### 文件引用

使用 `@file` 引用文件：

```
请看 @src/app.tsx 帮我加一个 loading 状态
```

使用 `@dir` 引用目录：

```
请扫一遍 @src/components 里所有组件
```

### 类提示命令

```
diff / show
```

用于展示代码变更。

## Zed + OpenCode 高效组合

OpenCode 可以搭配 Zed IDE 使用，通过 Agent Servers 插件实现图形界面编程：

1. 安装 Zed IDE
2. 安装 Agent Servers 插件
3. 配置 OpenCode 连接

比起纯 CLI，图形界面能更直观地完成代码级修改。

## Oh-My-OpenCode 插件

Oh-My-OpenCode 是 OpenCode 生态中重要的插件系统，它能实现多 Agent 协作工作流。

### 主要功能

- 多 Agent 任务分解
- 自动规划执行步骤
- Token 消耗优化

### 使用技巧

- 主代理推荐使用 glm-5 或 deepseek-reasoner
- 配合 ulw 或 raph 循环模式效果更佳
- 注意控制 token 消耗

## 常见问题

### 1. opencode 不是内部命令

**原因**：npm 全局 bin 没进 PATH

**解决**：

```bash
# 找到 npm 全局目录
npm config get prefix

# 将 node_modules\.bin 加入系统 PATH
```

### 2. 网络连接问题

- 公司网络环境下可能需要代理
- 配置代理或使用可访问的网络环境

### 3. Token 消耗过大

- 使用 Oh-My-OpenCode 时注意任务分解
- 选择合适的模型平衡效果与成本

## 适用场景建议

**适合使用 OpenCode 的场景**：

- 从 0 到 1 的项目搭建
- 复杂的大任务分解
- 需要多模型切换的项目
- 开源项目开发

**更适合其他工具的场景**：

- 小任务或局部模块修改（考虑 Trae）
- 简单的单点功能实现
