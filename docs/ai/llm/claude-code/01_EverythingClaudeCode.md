# Everything Claude Code - 终极完全指南

> Everything Claude Code (ECC) 团队 | 版本：v1.9.0

## 什么是 Everything Claude Code

**Everything Claude Code (ECC)** 是一个经过实战检验的 Claude Code 工具增强套件，来自 Anthropic 黑客马拉松获胜项目。

它不是简单的配置文件集合，而是一套完整的 AI 辅助开发系统：

- ✅ **36 个专业代理** - 针对不同任务的专业化子代理
- ✅ **142 个技能** - 可重用的工作流和领域知识
- ✅ **68 个命令** - 一键调用的开发命令
- ✅ **自动化钩子** - 基于事件触发的自动化流程
- ✅ **12 种语言支持** - 涵盖主流编程语言的规则和最佳实践
- ✅ **持续学习** - 从你的开发会话中自动提取模式

## 系统要求

| 要求 | 说明 |
|------|------|
| 操作系统 | macOS、Linux、Windows (WSL) |
| Node.js | 18+ |
| Claude Code | 最新版本 |
| 网络 | 需要互联网连接 |

## 安装步骤

### 方式一：通过 Claude Code 插件市场安装

```bash
# 启动 Claude Code
claude

# 在 Claude Code 中运行
/plugin search everything-claude-code
/plugin install everything-claude-code@everything-claude-code
```

### 方式二：手动完整安装

```bash
# 1. 克隆仓库
git clone https://github.com/affaan-m/everything-claude-code.git
cd everything-claude-code

# 2. 安装依赖
npm install

# 3. 运行安装脚本
node scripts/ecc.js install

# 4. 按照提示选择安装配置文件
```

安装脚本会引导你完成整个过程，支持选择性安装。

### 验证安装

安装完成后，验证是否正确：

```bash
# 检查已安装的插件
/plugin list everything-claude-code@everything-claude-code

# 测试一个命令
/everything-claude-code:doctor

# 如果你手动安装了规则，可以直接用
/doctor
```

如果输出诊断信息没有错误，说明安装成功。

## 核心概念

理解这些核心概念能帮助你更好地使用 ECC：

### 代理 (Agents)

**代理**是专注于特定任务的子 AI 助手。每个代理有专门的提示词和工具配置。

**示例**：

- `planner` - 专做实现计划，不写代码
- `code-reviewer` - 专门审查代码质量
- `security-reviewer` - 专门找安全问题
- `go-reviewer` - 专门审查 Go 代码

**工作方式**：当你调用相应命令时，ECC 会自动启动专业代理来处理任务。

### 技能 (Skills)

**技能**是可重用的开发知识和工作流模板。

**示例**：

- `tdd-workflow` - 测试驱动开发的方法论
- `typescript-patterns` - TypeScript 最佳实践模式
- `security-hardening` - 安全加固知识
- `react-components` - React 组件开发模式

**工作方式**：Claude 会自动根据上下文应用相关技能，你也可以显式引用。

### 命令 (Commands)

**命令**是用户可以直接通过 `/command` 调用的功能。

**示例**：

- `/plan` - 规划功能
- `/tdd` - 开始 TDD 工作流
- `/code-review` - 执行代码审查

**使用方式**：在 Claude Code 输入框直接输入 `/命令名` 即可调用。

### 钩子 (Hooks)

**钩子**是基于事件触发的自动化流程。

**示例**：

- `session-persistence` - 自动保存会话上下文
- `security` - 代码提交前的安全检查
- `commit-msg` - 自动生成提交信息

**工作方式**：钩子在特定事件（如代码提交、任务开始/结束）发生时自动执行。

### 规则 (Rules)

**规则**是 Claude Code 在执行任务时遵循的指南。

**包含内容**：

- 代码风格规范
- 安全最佳实践
- 架构模式
- 性能优化建议

## 常用命令详解

### 规划与执行

| 命令 | 描述 |
|------|------|
| `/plan` | 规划功能实现步骤 |
| `/multi-plan` | 并行制定多个计划 |
| `/multi-execute` | 并行执行多个任务 |
| `/multi-workflow` | 完整并行工作流 |

### 代码审查

| 命令 | 描述 |
|------|------|
| `/code-review` | 执行代码审查 |
| `/security-review` | 安全审查 |
| `/typescript-review` | TypeScript 代码审查 |
| `/java-review` | Java 代码审查 |
| `/go-review` | Go 代码审查 |
| `/rust-review` | Rust 代码审查 |

### 开发工作流

| 命令 | 描述 |
|------|------|
| `/tdd` | 开始测试驱动开发 |
| `/init` | 初始化项目 |
| `/build-fix` | 修复构建错误 |
| `/terminal-setup` | 设置终端快捷键 |

### 诊断与修复

| 命令 | 描述 |
|------|------|
| `/doctor` | 诊断安装问题 |
| `/status` | 查看状态和 Token 使用 |
| `/repair` | 修复问题 |
| `/compact` | 压缩对话节省 Token |

## 典型工作流

### 新功能开发流程

```
1. 规划 → /plan "实现用户认证功能"
2. 审查 → /code-review
3. 实现 → Claude 自动实现
4. 测试 → 运行测试确保通过
5. 提交 → /commit
```

### 修复 Bug 流程

```
1. 诊断 → 描述问题现象
2. 定位 → Claude 查找问题代码
3. 修复 → 生成修复方案
4. 验证 → 运行测试确认修复
```

### 代码审查流程

```
1. 执行 → /code-review
2. 查看 → 代理分析代码
3. 修复 → 根据建议修改
4. 复审 → 再次审查确认
```

### 重构流程

```
1. 规划 → /plan "重构模块 X"
2. 分析 → 代理分析依赖关系
3. 执行 → 分步骤重构
4. 测试 → 确保功能不变
```

## 语言特定配置

### TypeScript/JavaScript

```bash
cp -r rules/common ~/.claude/rules/
cp -r rules/typescript ~/.claude/rules/
cp -r rules/react ~/.claude/rules/
```

**专用命令**：

```bash
/typescript-review  # TypeScript 代码审查
/ts-fix             # TypeScript 错误修复
/react-review       # React 代码审查
```

### Python

```bash
cp -r rules/common ~/.claude/rules/
cp -r rules/python ~/.claude/rules/
```

**专用命令**：

```bash
/python-review     # Python 代码审查
/python-build-fix  # Python 构建错误修复
```

### Go

```bash
cp -r rules/common ~/.claude/rules/
cp -r rules/go ~/.claude/rules/
```

**专用命令**：

```bash
/go-review        # Go 代码审查
/go-build-fix     # Go 构建错误修复
```

### Java

```bash
cp -r rules/common ~/.claude/rules/
cp -r rules/java ~/.claude/rules/
```

**专用命令**：

```bash
/java-review     # Java 代码审查
/java-build-fix  # Java 构建错误修复
```

### Rust

```bash
cp -r rules/common ~/.claude/rules/
cp -r rules/rust ~/.claude/rules/
```

**专用命令**：

```bash
/rust-review     # Rust 代码审查
```

### C++

```bash
cp -r rules/common ~/.claude/rules/
cp -r rules/cpp ~/.claude/rules/
```

**包含规则**：

- `cpp-modern.md` - 现代 C++ 规范
- `cpp-testing.md` - C++ 测试模式（GoogleTest）

## 高级功能

### 并行任务处理

ECC 支持使用 Git worktree 进行并行任务处理，可以同时处理多个任务：

**可用命令**：

- `/multi-plan` - 并行制定多个计划
- `/multi-execute` - 并行执行多个任务
- `/multi-backend` - 并行开发后端功能
- `/multi-frontend` - 并行开发前端功能
- `/multi-workflow` - 完整并行工作流

**安装依赖**：

```bash
npx ccg-workflow
```

> ⚠️ 注意：这需要额外安装依赖，基础安装不包含。

**使用示例**：

```bash
/multi-workflow "实现用户认证、文章管理、评论系统三个功能"
```

这会在多个 git worktree 中同时开发，最后合并结果。

### 持续学习

ECC 支持从你的开发会话中自动提取模式，变成可重用的技能：

```bash
# 开发完成后，提取当前会话的模式
/learn
```

系统会：

1. 分析你在当前会话中的决策
2. 提取可重用的模式
3. 保存到你的个人技能目录
4. 未来开发中自动应用

### 内存持久化

ECC 钩子会自动：

- 会话结束时保存上下文
- 下次打开项目时自动加载
- 跨会话保留开发状态

这个功能自动开启，不需要额外配置。

### Token 优化

ECC 自带 Token 优化系统：

- 自动精简系统提示
- 选择性加载规则
- 背景进程处理大任务
- 缓存常用结果

可以通过 `/status` 查看当前 Token 使用情况。

### MCP 外部服务集成

ECC 预配置了常用的 MCP 服务器，可以直接使用：

| MCP 服务器 | 用途 | 配置位置 |
|------------|------|----------|
| GitHub | PR/Issue 操作、代码查询 | mcp-configs/github.json |
| Firecrawl | 网页抓取、文档获取 | mcp-configs/firecrawl.json |
| Supabase | 数据库集成 | mcp-configs/supabase.json |
| Memory | 持久化语义内存 | mcp-configs/memory.json |
| Sequential Thinking | 深度思考链 | mcp-configs/sequential-thinking.json |
| Vercel | 部署集成 | mcp-configs/vercel.json |

在你的 Claude Code `settings.json` 中引入这些配置即可使用。

## 故障排除

### 问题：命令找不到

**症状**：`/plan` 提示命令不存在

**解决**：

1. 检查插件是否安装：`/plugin list`
2. 如果通过插件市场安装，需要加命名空间：`/everything-claude-code:plan`
3. 重新安装插件：`/plugin reinstall everything-claude-code@everything-claude-code`

### 问题：规则不生效

**症状**：Claude 不遵守 ECC 规则

**解决**：

1. 检查规则目录：`ls ~/.claude/rules/` 应该能看到 `common/`
2. 确认你复制的是目录，不是目录内的文件
3. 重启 Claude Code
4. 检查规则文件权限

### 问题：钩子不运行

**症状**：钩子没有自动触发

**解决**：

1. 检查 Node.js 版本：`node -v` 必须 >= 18
2. 检查脚本权限：`chmod +x scripts/*.js`
3. 查看错误日志：钩子输出到 stderr，检查 Claude Code 日志

### 问题：安装后测试失败

**解决**：

```bash
# 重新安装依赖
npm install

# 运行测试
node tests/run-all.js
```

如果有个别测试失败，可以提交 issue。

### 问题：multi-* 命令无法运行

**解决**：

```bash
# 安装额外依赖
npx ccg-workflow
```

## 常见问题

**Q: 需要付费吗？**

A: Everything Claude Code 是 MIT 许可开源项目，完全免费。

**Q: 支持 Claude Code 桌面版吗？**

A: 支持，所有功能都能正常使用。

**Q: 可以只安装我需要的组件吗？**

A: 支持，v1.9.0 开始支持选择性安装，可以通过清单配置只安装需要的语言和组件。

**Q: 会修改我的系统吗？**

A: ECC 只安装文件到 `~/.claude/` 目录，不会修改系统其他地方。卸载可以完全清除。

**Q: 如何卸载？**

A:

```bash
# 通过插件市场卸载
/plugin uninstall everything-claude-code@everything-claude-code

# 删除规则
rm -rf ~/.claude/rules/common
rm -rf ~/.claude/rules/你的语言目录

# 删除 ECC 数据
rm -rf ~/.claude/ecc/
```

**Q: 如何更新？**

A:

```bash
# 插件市场更新
/plugin update everything-claude-code@everything-claude-code

# 手动更新
cd everything-claude-code
git pull
node scripts/ecc.js install
```

**Q: Windows 支持吗？**

A: 完全支持，所有脚本都用 Node.js 重写，跨平台兼容。

**Q: 包管理器支持哪些？**

A: 支持 npm、pnpm、yarn、bun，自动检测，也可以手动指定。

## 进阶技巧

### 1. 自定义安装配置

你可以创建自己的安装清单，只安装需要的组件：

```json
{
  "name": "my-profile",
  "description": "My ECC installation",
  "components": {
    "agents": ["planner", "code-reviewer", "security-reviewer"],
    "rules": ["common", "typescript", "react"],
    "commands": ["plan", "tdd", "code-review", "build-fix"],
    "hooks": ["security", "session-persistence"]
  }
}
```

### 2. 设置默认包管理器

```bash
# 全局设置
node scripts/setup-package-manager.js --global pnpm

# 当前项目设置
node scripts/setup-package-manager.js --project bun
```

### 3. 使用诊断工具

```bash
# 诊断安装
/doctor

# 查看状态
/status

# 修复问题
/repair
```

### 4. 结合 MCP 内存

启用 MCP 内存后，ECC 可以：

- 跨会话记住你的偏好
- 语义搜索之前的决策
- 持续改进推荐

### 5. 利用持续学习

在完成一个复杂任务后：

```bash
/learn
```

这会提取这次开发的模式，未来类似任务会做得更好。

## 更多资源

- 官方 GitHub：https://github.com/affaan-m/everything-claude-code
- 精简指南（英文）：https://x.com/affaanmustafa/status/2012378465664745795
- 详细指南（英文）：https://x.com/affaanmustafa/status/2014040193557471352
- 安全指南（英文）：https://x.com/affaanmustafa/status/2033263813387223421

## 许可证

MIT License
