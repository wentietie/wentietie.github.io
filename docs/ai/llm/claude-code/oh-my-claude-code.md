# Oh-My-ClaudeCode (OMC)：Claude Code 多智能体编排框架

> v4.10.2 - HUD Upgrades, LSP Diagnostics & Security Hardening

[[toc]]

## 一、是什么

**Oh-My-ClaudeCode (OMC)** 是 Claude Code 的多智能体编排框架，核心理念：

> **Don't learn Claude Code. Just use OMC.**

它是一个** specialized orchestration layer**，内置电池仓式智能体和构建管道感知工作流，让你可以用自然语言描述需求，OMC 自动调度专业智能体完成任务。

---

## 二、核心数据

| 指标 | 数值 |
|------|------|
| Specialized Agents | **32** |
| Built-in Skills | **40+** |
| Faster Execution | **3-5x** |
| Token Savings | **30-50%** |

---

## 三、核心特性

### 1. 零学习曲线

> Just describe what you want in natural language. No commands to memorize, no configuration needed.

用自然语言描述你的需求，无需记忆命令，无需配置。

### 2. 多智能体编排

> 32 specialized agents for architecture, research, design, testing, and data science - automatically delegated.

32 个专业智能体，包括：
- **架构师 (Architect)** - 架构分析、技术决策
- **研究员 (Researcher)** - 调研、信息检索
- **设计师 (Designer)** - UI/UX 设计
- **测试工程师 (Tester)** - 测试用例、QA
- **数据科学家 (Data Scientist)** - 数据分析、机器学习

### 3. 并行执行

> Up to 5 concurrent workers with Ultrapilot mode. 3-5x faster than sequential execution.

Ultrapilot 模式支持最多 5 个并发工作者，比顺序执行快 3-5 倍。

### 4. 智能成本优化

> Smart Cost Optimization - 30-50% token savings

自动优化 Token 使用，节省 30-50% 成本。

---

## 四、32 个专业智能体

**分析类**
| 智能体 | 职责 |
|-------|------|
| architect | 架构分析、技术决策 |
| debugger | 调试和问题定位 |
| verifier | 验证和确认 |

**执行类**
| 智能体 | 职责 |
|-------|------|
| executor | 执行开发任务 |
| build-fixer | 修复构建错误 |

**搜索与研究**
| 智能体 | 职责 |
|-------|------|
| explore | 快速扫描代码库 |
| researcher | 信息检索和研究 |

**前端与 UX**
| 智能体 | 职责 |
|-------|------|
| designer | UI/UX 设计 |
| ux-researcher | 用户体验研究 |
| info-architect | 信息架构 |

**测试与 QA**
| 智能体 | 职责 |
|-------|------|
| qa-tester | QA 测试 |
| test-engineer | 测试工程 |
| tdd-guide | TDD 指导 |

**代码审查**
| 智能体 | 职责 |
|-------|------|
| code-reviewer | 代码审查 |
| style-reviewer | 样式规范审查 |
| quality-reviewer | 质量审查 |
| api-reviewer | API 审查 |
| perf-reviewer | 性能审查 |
| security-reviewer | 安全审查 |

**规划与产品**
| 智能体 | 职责 |
|-------|------|
| planner | 规划 |
| critic | 批评和评审 |
| analyst | 分析 |
| product-manager | 产品管理 |
| product-analyst | 产品分析 |
| quality-strategist | 质量策略 |

**专家**
| 智能体 | 职责 |
|-------|------|
| scientist | 科学研究 |
| writer | 技术写作 |
| vision | 愿景和方向 |
| dependency-expert | 依赖专家 |

> 所有智能体支持 model 参数 - 可指定 haiku、sonnet 或 opus

---

## 五、工作模式

| 模式 | 说明 | 示例 |
|------|------|------|
| **Autopilot** | 默认模式全自动执行 | `autopilot: build a todo app` |
| **Ultrapilot** | 3-5x 更快，最多 5 个并发 | `ultrapilot: build a fullstack app` |
| **Swarm** | N 个协调智能体，原子任务认领 | `/swarm 5:executor "fix all errors"` |
| **Pipeline** | 顺序智能体链式执行 | `/pipeline explore → architect → executor` |
| **Ralph** | 持久模式，Architect 验证后才停止 | `ralph: refactor auth system` |

### 魔法关键词

| 关键词 | 功能 |
|--------|------|
| `autopilot` | 全自动执行 |
| `ultrapilot` | 并行构建 |
| `ralph` | 持久模式 |
| `ulw` | 最大并行 |
| `eco` | Token 高效 |
| `plan` | 规划访谈 |
| `swarm` | 协调智能体 |
| `team` | 智能体团队 |
| `cancel` | 停止任何模式 |

### 组合使用

```bash
# 持久 + 并行
ralph ulw: migrate database

# 预算友好
eco autopilot: build a blog

# 协调智能体处理特定任务
/swarm 3:executor "fix TypeScript errors"
```

---

## 六、与 Superpowers 配合

OMC 和 Superpowers 是互补关系：

| 角色 | 插件 | 职责 | 目标 |
|------|------|------|------|
| **总指挥** | **OMC** | 拆解任务、并行调度 | **效率** |
| **质检员** | **Superpowers** | 强制 TDD、代码审查 | **质量** |

> OMC 让你"快"，Superpowers 让你"好"

### 配置配合

编辑 `~/.config/oh-my-claudecode/config.yaml`：

```yaml
default_skills:
  - superpowers

format: false  # 避免与 Superpowers 规范冲突
```

---

## 七、安装

### 三步快速安装

**第一步：安装插件**
```bash
/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claude-code
/plugin install oh-my-claude-code
```

**第二步：运行安装向导**
```bash
/oh-my-claude-code:omc-setup
```
看到 `✓ Configuration complete!` 表示配置完成。

**第三步：开始使用**
```bash
autopilot: build a REST API for managing tasks
```

> That's it. Everything else is automatic.

### 30 秒快速上手

| 步骤 | 命令 | 说明 |
|------|------|------|
| 1 | `/plugin marketplace add ...` | 添加插件市场 |
| 2 | `/plugin install oh-my-claude-code` | 安装插件 |
| 3 | `/oh-my-claude-code:omc-setup` | 运行安装向导 |
| 4 | `autopilot: <任务描述>` | 开始全自动执行 |

### 验证安装

安装完成后，OMC 会自动激活，无需额外验证。

或使用内置的 `/init-deep` 命令初始化项目。

---

## 八、/init-deep 深度初始化

首次在项目目录下启动后，执行：

```bash
/init-deep
```

功能：
- 探索整个工程结构
- 生成分层的 AGENTS.md 文件
- 建立项目上下文知识库

后续 AI 执行任务时会自动读取这些文件，快速理解项目。

---

## 九、与 OpenSpec 的关系

OpenCode 生态铁三角：

| 工具 | 层级 | 角色 | 核心职责 |
|-----|------|------|---------|
| **OpenSpec** | 规范层 | 项目管理员 | 定义"做什么"，管理变更文档 |
| **Superpowers** | 能力层 | 任务指挥官 | 决定"谁来做"，拆解并行任务 |
| **OMC** | 执行层 | 工具执行者 | 执行"怎么做"，提供底层工具 |

### 使用场景选择

| 场景 | 推荐工具 |
|------|---------|
| 快速原型验证 | OMC |
| 核心业务代码 | Superpowers |
| 团队协作、需要文档 | OpenSpec |
| 生产级项目开发 | 三者协同 |
| 改一行代码的 bugfix | 原生 Claude Code |

---

## 十、总结

> OMC 是一个** specialized orchestration layer**，为 Claude Code 提供多智能体编排能力。

**核心理念**：Don't learn Claude Code. Just use OMC.

| 优势 | 说明 |
|------|------|
| 零学习曲线 | 自然语言交互 |
| 多智能体 | 32 个专业智能体 |
| 并行执行 | 最多 5 个并发 |
| 成本优化 | 节省 30-50% Token |
| 流程感知 | 构建管道感知工作流 |

---

## 相关资源

- [官方网站](https://ohmyclaudecode.com/)
- [GitHub](https://github.com/anthropic/oh-my-claude-code)
- [Superpowers 指南](../omc-superpowers-guide.md)
- [Skills 盘点](./skills-2026.md)

**标签**：#OhMyClaudeCode #OMC #MultiAgent #ClaudeCode
