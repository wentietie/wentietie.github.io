# Claude Code Best Practice - 从氛围编程到智能体工程的系统化实战指南

> 来源：[claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 作者：Shayan Rais (shanraisshan) | 被 Claude Code 创造者 Boris Cherny 多次引用

## 项目简介

**claude-code-best-practice** 是目前最全面的 Claude Code 开源实战指南，项目口号是 **"from vibe coding to agentic engineering"**（从氛围编程到智能体工程）。

它不是零散的技巧堆砌，而是一套系统化的知识库，收录了 **86+ 条实战技巧**，涵盖 Agents、Commands、Skills、Hooks、MCP 五大核心模块，横向对比 **10+ 套主流开发工作流**，提供从入门到进阶的完整学习路径。

## 核心模块速查

| 模块 | 配置位置 | 说明 |
|------|---------|------|
| Subagents | `.claude/agents/<name>.md` | 专用子代理，按功能/角色划分 |
| Commands | `.claude/commands/<name>.md` | 一键调用的 Slash 命令 |
| Skills | `.claude/skills/<name>/SKILL.md` | 可复用技能，支持渐进式加载 |
| Workflows | 基于命令编排 | Research → Plan → Execute → Review → Ship |
| Hooks | `.claude/hooks/` | 事件驱动的自动化钩子 |
| MCP Servers | `.claude/settings.json` / `.mcp.json` | 外部工具集成协议 |
| Memory | `CLAUDE.md` / `.claude/rules/` | 项目记忆与规则系统 |
| Settings | `.claude/settings.json` | 权限、模型、输出风格等配置 |

## 项目配置结构

在目标代码库根目录创建 `.claude/` 文件夹：

```
.claude/
├── commands/        # 常用命令（如 /refactor、/techdebt）
├── skills/          # 可复用技能（含 SKILL.md、scripts/、examples/）
├── agents/          # 专用子代理配置
├── hooks/           # 事件钩子（如提交前格式化）
└── settings.json    # 项目级配置（模型、权限、状态栏）
```

同时创建根目录 `CLAUDE.md` 文件，记录项目技术栈和开发规范（**控制在 200 行内**）。

## 10+ 主流工作流对比

所有工作流最终都收敛到同一架构模式：**Research → Plan → Execute → Review → Ship**

| 工作流 | Stars | 特点 |
|--------|-------|------|
| **Superpowers** | 200k | 最热门，Research → Plan → Execute → Review → Ship → Deploy → Monitor |
| **Everything Claude Code (ECC)** | 188k | 48 命令 + 143 技能，来自 Anthropic 黑客松获胜项目 |
| **Spec Kit** | 104k | 规格驱动开发，Spec → Plan → Execute → Review → Ship |
| **gstack** | 100k | YC 支持，最多步骤的完整流水线 |
| **Matt Pocock Skills** | 97k | TypeScript 专家，高质量技能集 |
| **Get Shit Done (GSD)** | 63k | 33 命令 + 67 技能，实战导向 |
| **OpenSpec** | 50k | 轻量级规格方案 |
| **BMAD-METHOD** | 48k | 全流程方法论 |
| **oh-my-claudecode** | 34k | 多智能体编排层，19 代理 + 39 技能 |
| **agent-skills** | 27k | 3 命令 + 7 技能 + 21 代理 |
| **Compound Engineering** | 17k | 49 命令，复合工程方法论 |
| **HumanLayer** | 11k | 6 技能 + 27 命令，人机协作方案 |

## 跨模型协作方案

Claude Code 支持与其他模型协作的三种机制：

| 方式 | 说明 | 代表项目 |
|------|------|---------|
| **Plugin** | 其他模型的 CLI 在 Claude Code 内运行（如 `/codex:review`） | openai/codex-plugin-cc (18k Stars) |
| **MCP** | 通过 MCP 协议调用其他模型 | pal-mcp-server (12k Stars，支持 50+ 模型) |
| **Router** | 替换 Claude Code 的 API 端点到其他供应商 | claude-code-router (34k Stars) |

## 83 条实战技巧精选

### 提示工程（3 条）

- **挑战 Claude** — "grill me on these changes and don't make a PR until I pass your test" 或 "prove to me this works"
- **推倒重来** — 当修复效果不佳时，"knowing everything you know now, scrap this and implement the elegant solution"
- **简洁即力量** — Claude 修 bug 大多数情况只需贴上 bug 描述，说 "fix"，不要微操

### 上下文管理（5 条）

- **上下文腐败** — 在 1M 上下文模型中，~300-400k tokens 后智能开始退化，不要让会话漂移过远
- **愚蠢区域** — ~40% 上下文时开始退化。新手建议控制在 40% 以下，老手激进地控制在 30% 以下
- **回滚 > 修正** — 双击 Esc 或 `/rewind` 回到失败尝试之前，重新提示。不要在上下文中留下失败尝试
- **手动 compact** — 带提示的 `/compact`（如 `/compact focus on the auth refactor`）比自动压缩效果更好
- **善用子代理** — 问自己"我还需要这些工具输出吗，还是只需要结论？"子代理的 20 次文件读取 + 12 次 grep 只有最终报告返回主上下文

### CLAUDE.md 优化（8 条）

- **控制在 200 行以内**，HumanLayer 只有 60 行
- 使用 `.claude/rules/*.md` 自动加载到每个会话
- 使用 `<important if="...">` 标签包裹领域特定规则，防止 Claude 忽略
- Monorepo 使用多个 CLAUDE.md（祖先 + 后代加载）
- 用 `settings.json` 做确定性行为（如 attribution.commit），不要放在 CLAUDE.md 中

### 技能开发（9 条）

- **Skills 是文件夹，不是文件** — 使用 `references/`、`scripts/`、`examples/` 子目录实现渐进式加载
- 每个技能中建立 **Gotchas 部分** — 最高信号内容，记录 Claude 的失败模式
- **description 字段是触发器，不是摘要** — 写给模型看（"when should I fire?"）
- 不要陈述显而易见的内容，聚焦于推动 Claude 超越默认行为的信息
- 不要给 Claude 写死板的步骤指令，给出目标和约束即可

### Git/PR 管理（5 条）

- **PR 保持小而专注** — p50 为 118 行（45K 行分 141 个 PR 在一天内完成）
- **始终 Squash Merge** — 干净的线性历史，一个功能一个提交
- **频繁提交** — 每小时至少一次，任务完成后立即提交
- 在同事 PR 上 @claude 自动生成 lint 规则
- 使用 `/code-review` 进行多代理 PR 分析

### 调试技巧（6 条）

- 遇到问题时**截图分享给 Claude**
- 使用 MCP（Chrome、Playwright）让 Claude 自主查看控制台日志
- 让 Claude 把需要监控的终端作为**后台任务**运行
- 使用 `/doctor` 诊断安装、认证和配置问题
- 跨模型 QA — 例如用 Codex 做计划和实现审查
- **Agent 搜索（glob + grep）胜过 RAG** — Claude Code 曾尝试并放弃了向量数据库

## 最新 Hot Features

| 功能 | 触发方式 | 说明 |
|------|---------|------|
| Ultrareview | `/ultrareview` | 任务追踪与审查 |
| Ultraplan | `/ultraplan` | 高级规划模式 |
| Auto Mode | `Shift+Tab` | 模型自动判断安全命令并审批 |
| Fast Mode | `/fast` | Opus 4.6 快速输出模式 |
| Computer Use | MCP Server | 桌面自动化 |
| Agent Teams | 内置环境变量 | 多代理并行开发 |
| Git Worktrees | `--worktree/-w` | 隔离工作树并行开发 |
| Scheduled Tasks | `/loop`、`/schedule` | 定时任务，最长 7 天 |
| Voice Dictation | `/voice` | 语音输入，10x 生产力提升 |
| Remote Control | `/remote-control`、`/rc` | 远程控制模式 |
| Chrome | `--chrome` | 浏览器集成 |
| Deep Links | `claude-cli://open?repo=…&q=…` | 深度链接跳转 |

## 如何使用

### 新手起步

1. 阅读 Tips 中的 **Prompting** 和 **Workflows** 章节
2. 运行 `/weather-orchestrator` 体验完整的 Command → Agent → Skill 流程
3. 不要把 Claude 当聊天机器人用，学会原语（agents、commands、skills、hooks）并组装成自己的工作流

### 高频操作封装

将日常重复任务（如重构、代码审查）转为 Commands 或 Skills，存入 `.claude/` 对应目录。

### 问题排查

遇到具体场景（如调试、PR 管理）直接查阅对应 Tips 分类。

## 推荐资源

### 文章

| 文章 | 作者 | 日期 |
|------|------|------|
| 6 Tips for Getting More Out of Opus 4.7 | Boris Cherny | 2026/04/16 |
| Session Management & 1M Context | Thariq | 2026/04/16 |
| 15 Hidden & Under-Utilized Features in Claude Code | Boris Cherny | 2026/03/30 |
| Lessons from Building Claude Code: How We Use Skills | Thariq | 2026/03/17 |
| Seeing like an Agent | Thariq | 2026/02/28 |
| 12 ways how people are customizing their claudes | Boris Cherny | 2026/02/12 |

### 视频/播客

| 视频 | 作者 | 时间 |
|------|------|------|
| From Vibe Coding to Agentic Engineering | Andrej Karpathy | 2026/05/02 |
| Full Walkthrough: Workflow for AI Coding | Matt Pocock | 2026/04/24 |
| Building Claude Code with Boris Cherny | Boris Cherny | 2026/03/04 |
| Head of Claude Code: What happens after coding is solved | Boris Cherny | 2026/02/19 |
| Inside Claude Code With Its Creator Boris Cherny | Boris Cherny | 2026/02/17 |

## 同类工具对比

| 对比维度 | claude-code-best-practice | GitHub Copilot Cookbook | awesome-cursor |
|---------|--------------------------|------------------------|----------------|
| 定位 | Claude Code 系统化实战手册 | Copilot 官方示例 | Cursor 规则与提示词市场 |
| 核心内容 | 86+ 条踩坑经验、10+ 工作流对比 | 功能演示代码 | 提示词模板、规则集 |
| 工作流选型 | 10+ 套方案横向对比 | 无系统对比 | 无系统对比 |
| Beta 追踪 | 实时 Hot Features 表格 | 随官方文档更新 | 无系统追踪 |
| 官方背书 | 被 Claude Code 创造者多次引用 | 微软官方 | 纯社区资源 |

## 项目地址

- GitHub：[https://github.com/shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice)
- 2026 年 3 月登上 GitHub Trending
