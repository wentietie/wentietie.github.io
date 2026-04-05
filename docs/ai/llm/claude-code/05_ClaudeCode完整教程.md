# Claude Code 完整使用教程

## 什么是 Claude Code？

Claude Code 是 Anthropic 官方出品的命令行 AI 编程助手，让你在终端里直接与 AI 协作完成编码任务。它是一个"能直接操作你仓库的 AI 同事"，比网页聊天更适合做真实项目开发。

## 三种使用方式对比

| 方式 | 适合人群 | 优点 | 缺点 |
|------|----------|------|------|
| Web 端 | 完全新手 | 无需安装 | 功能受限 |
| Claude Code CLI | 专业开发者 | 功能完整 | 需要安装 |
| API + 第三方工具 | 高级用户 | 高度可定制 | 配置复杂 |

## Windows 安装指南

### 前置条件

#### 1.1 安装 Node.js（必需）

Claude Code 基于 Node.js，需要 Node 18+（推荐 LTS 20+）。

1. 打开官网： https://nodejs.org
2. 下载 LTS 版（建议 20.x LTS）
3. 双击安装，全部 Next
4. 验证安装：

```powershell
node -v
npm -v
```

#### 1.2 安装 Git（强烈推荐）

Claude Code 会用 Git 来读项目历史、生成 diff、开 PR 等。

1. 打开官网： https://git-scm.com/download/win
2. 下载后一路 Next
3. 验证安装：

```powershell
git --version
```

#### 1.3 选择终端

推荐使用：
- **Windows Terminal**（推荐）- Microsoft Store 搜索安装
- PowerShell
- VS Code 内置 Terminal
- Git Bash

### 安装 Claude Code

#### 使用 npm 全局安装

```powershell
npm install -g @anthropic-ai/claude-code
```

**权限问题解决**：
- 用管理员权限打开 PowerShell
- 或使用 npx 临时运行

**验证安装**：

```powershell
claude --version
```

#### npm 太慢？使用国内镜像

```powershell
# 临时使用国内镜像
npm config set registry https://registry.npmmirror.com
npm install -g @anthropic-ai/claude-code

# 完成后可以改回官方源
npm config set registry https://registry.npmjs.org
```

## 登录与配置

### 获取 API Key

1. 访问 Anthropic 官网或国内代理（如 乘丰AI）
2. 注册/登录账号
3. 获取 API Key（格式类似 `sk-xxxxxxxxx`）

### Windows 设置环境变量

```powershell
# 方式一：临时设置（当前终端有效）
$env:ANTHROPIC_API_KEY = "你的Key"
$env:ANTHROPIC_BASE_URL = "https://api.anthropic.com"

# 方式二：永久设置（需管理员权限）
[System.Environment]::SetEnvironmentVariable(
    "ANTHROPIC_API_KEY",
    "你的Key",
    [System.EnvironmentVariableTarget]::User
)
```

### 国内用户特别配置

如果在中国大陆使用，可能需要配置代理：

```powershell
$env:HTTP_PROXY = "http://127.0.0.1:7890"
$env:HTTPS_PROXY = "http://127.0.0.1:7890"
```

## 首次运行

### 基本启动

```powershell
cd D:\projects\my-app
claude
```

首次运行时会提示你：
- 检测当前目录是否为 Git 仓库
- 询问是否允许读取/改写文件
- 选择默认模型

### 初始化确认

```
? 检测到当前目录不是 Git 仓库。是否初始化一个新的 Git 仓库？ (y/N)
? 是否允许 Claude 读取和修改文件？ (y/N)
? 选择默认模型：claude-opus-4、claude-sonnet-4、claude-haiku-4
```

## 核心使用方法

### 让 Claude 理解项目

**输入**：
```
先快速浏览项目结构，告诉我它的技术栈、入口文件、主要模块。
```

Claude 会自动：
- 列目录结构
- 读 package.json / README
- 总结技术栈

### 添加新功能

**模板**：
```
在 React 前端里新增一个「用户列表」页面：
- 路由 /users
- 调后端 GET /api/users
- 表格展示 name/email/role
- 失败时显示 toast
请直接改代码并告诉我改了哪些文件。
```

### 修复 Bug

**模板**：
```
我跑 npm test 报错如下（贴错误日志）。
请定位原因并修复。
```

### 重构代码

**模板**：
```
现在 src/utils/date.ts 有很多重复逻辑。
请重构成更清晰可维护的版本，保证所有单测仍通过。
```

## 常用命令与技巧

### CLI 内部快捷指令

| 指令 | 用途 | 示例 |
|------|------|------|
| `@file` | 引用文件 | `请看 @src/app.tsx 帮我加一个 loading` |
| `@dir` | 引用目录 | `请扫一遍 @src/components 里所有组件` |
| `diff / show` | 显示变更 | `给我展示 diff` |

### 交互技巧

#### 1. 先理解再执行

```
先给我一个分步骤计划（不改代码）。
我确认后你再开始改。
```

#### 2. 引用项目资源

```
现在 src/components/ 下有一个 Button 组件。
请在 @src/components 里新增一个 Modal 组件，保持相同风格。
```

#### 3. 限制变更范围

```
请只修改 src/api/ 目录下的文件，
不要改动 src/components/ 和 src/pages/。
```

## Git 集成

### 创建 Feature 分支并开发

```
请按最佳实践新建一个 feature 分支，完成修改后总结变更，并给出 PR 描述。
```

Claude 会：
- 创建规范命名的分支
- 生成符合团队规范的 commit message
- 输出 PR 描述模板

### Commit 规范建议

```
[feat] 添加用户认证功能
[fix] 修复登录超时问题
[refactor] 重构数据库连接模块
[docs] 更新 API 文档
[test] 添加单元测试覆盖率
```

## 进阶玩法

### 1. 先计划后执行

```
先给我一个分步骤计划（不改代码）。
我确认后你再开始改。
```

### 2. 自动补充测试

```
这个功能需要单测覆盖。
请补齐 Jest 测试并保证通过。
```

### 3. 多任务协作

```
任务优先级：
1. 修复登录 bug
2. 重构 auth 模块
3. 补测试
逐项完成，每项都先解释原因再改代码。
```

### 4. 代码审查

```
请审查 src/utils/ 下的代码，指出潜在问题和优化建议。
```

## 常见问题与解决

### 问题 1：claude 不是内部命令

**原因**：npm 全局 bin 没进 PATH

**解决**：

```powershell
# 1. 找到 npm 全局目录
npm config get prefix

# 2. 把 prefix 下的 node_modules\.bin 加进系统 PATH

# 3. 重新打开终端验证
claude --version
```

### 问题 2：网络连接失败

**解决方案**：
- 开启代理（Clash/ZeroTier/系统代理）
- 确保能访问 Anthropic API
- 检查防火墙设置

### 问题 3：权限不足

**解决方案**：
- 用管理员权限打开 PowerShell
- 把项目放到用户目录（如 D:\projects）
- 避免放在系统盘受限目录

### 问题 4：中文路径问题

**解决方案**：
- 项目放在纯英文路径：`D:\projects\my-app`
- 避免中文目录名

### 问题 5：Git 仓库问题

**解决方案**：
- 确保目录是 Git 仓库：`git init`
- 确保有 .gitignore 文件
- 确保有写权限

## 推荐使用习惯

1. **需求要写清楚**：包括输入/输出/约束/边界
2. **让 Claude 先理解项目**：首次交互时全面了解
3. **每次改动后自己跑测试**：不要完全依赖 AI
4. **用 Git 记录/回滚大改动**：保留历史版本
5. **先要计划再执行**：重要决策先确认

## 模板指令库

### 模板 1：项目理解

```
你现在在我的项目根目录。
请快速阅读 README、package.json 和关键入口文件，给出：
- 技术栈
- 目录结构说明
- 我应该从哪个入口理解业务
```

### 模板 2：添加功能

```
需求如下：...
约束如下：...
请先给实现计划（不要改代码）。
我确认后你再修改，并展示 diff。
```

### 模板 3：修复 Bug

```
我遇到 bug：...
复现步骤：...
错误日志：...
请定位原因 → 提供修复 → 补测试 → 给出验证方式。
```

### 模板 4：代码审查

```
请审查 src/ 下的认证模块代码：
- 检查安全漏洞
- 指出性能问题
- 建议优化方向
```

### 模板 5：技术选型

```
我需要实现实时聊天功能，考虑：
- WebSocket
- Server-Sent Events
- Long Polling
请分析各方案优缺点，给出推荐。
```
