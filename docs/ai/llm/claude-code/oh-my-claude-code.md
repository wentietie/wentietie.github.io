# Oh-My-ClaudeCode：Claude Code 增强插件

> 多智能体协作和并行执行，让多个专业 AI 同时干活

## 核心定位

Oh-My-ClaudeCode（OMC）是 Claude Code 的增强插件，核心能力是**多智能体协作和并行执行**。

它不是流程工具，也不是规范工具，而是把 Claude Code 的底层能力拉满。

## 解决什么问题

单个 AI 模型能力有限，复杂任务处理慢。OMO 引入多智能体协作，让多个专业 AI 同时干活。

## 内置 AI 团队

| 智能体 | 角色 | 职责 |
|-------|-----|-----|
| Sisyphus | 团队领袖 | 规划、调度、最终代码合并 |
| Oracle | 架构师 | 分析架构、评估风险、技术决策 |
| Librarian | 代码库专家 | 查阅文档、搜索代码、理解现有实现 |
| Explore | 侦察兵 | 极速扫描代码库 |
| Frontend | 前端工程师 | UI实现、样式调整 |
| Document-Writer | 技术作家 | 写 README、API 文档 |

在对话中可以直接 @oracle 调用某个专家。

## 核心功能

### 魔法词 ulw（UltraWork）

在提示词前加上 `ulw`，OMO 会自动激活全部增强功能：多代理并行、深度工具链，子任务智能调度。

```bash
ulw 帮我实现用户登录功能，支持JWT和刷新令牌
```

加了 `ulw` 之后，Sisyphus 会先规划，Oracle 评审方案，Librarian 搜索现有代码，Frontend 和 Backend 分别实现——全部并行。

### 后台并行任务

OMO 支持同时运行多个子智能体，互不阻塞。你可以让 Oracle 检查后端安全，Librarian 搜索 API 文档，Frontend 写 UI，三个同时进行，结果自动汇总。

## 安装

```bash
# 先安装 bun（推荐）
npm install -g bun

# 安装 Oh My OpenAgent
bunx oh-my-openagent install
```

安装过程会问几个问题：有没有 Claude Pro 订阅？有没有 ChatGPT Plus？没有的话直接选 No。

## 验证安装

在 Claude Code 会话中输入 `ulw test`，如果 AI 进入多智能体模式，说明安装成功。

## /init-deep：深度初始化

在项目目录下首次启动后，执行：

```bash
/init-deep
```

它会探索整个工程，生成分层的 AGENTS.md 文件。后续 AI 执行任务时通过读取这些文件快速了解项目。

---

## OpenCode 铁三角

OpenCode 生态里的三个工具配合使用：

| 工具 | 层级 | 角色 | 核心职责 |
|-----|-----|-----|---------|
| **OpenSpec** | 规范层 | 项目管理员 | 定义"做什么"，管理变更文档 |
| **Superpowers** | 能力层 | 任务指挥官 | 决定"谁来做"，拆解并行任务 |
| **OMO** | 基础设施层 | 工具执行者 | 执行"怎么做"，提供底层工具 |

### 什么时候用哪个

| 场景 | 推荐工具 | 原因 |
|-----|---------|-----|
| 快速原型验证 | OMO | 追求速度，不纠结质量 |
| 核心业务代码 | Superpowers | 强制 TDD，保证质量 |
| 团队协作、需要文档 | OpenSpec | 规范统一、可追溯 |
| 生产级项目开发 | 三者协同 | 规范+流程+效率，缺一不可 |
| 改一行代码的 bugfix | 原生 | 杀鸡不用牛刀 |

---

**标签**：#OhMyClaudeCode #OMO #MultiAgent