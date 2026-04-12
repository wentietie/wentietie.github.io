# Oh-My-ClaudeCode (OMC)：Claude Code 多智能体编排框架

> Multi-agent orchestration for Claude Code. Zero learning curve.

[[toc]]

## 一、是什么

**Oh-My-ClaudeCode (OMC)** 是 Claude Code 的多智能体编排框架。

> **Don't learn Claude Code. Just use OMC.**

用自然语言描述你的需求，OMC 自动调度专业智能体完成工作。零学习曲线，无需记忆命令。

---

## 二、核心数据

| 指标 | 数值 |
|------|------|
| Specialized Agents | **19+** (含层级变体) |
| Built-in Skills | **40+** |
| Faster Execution | **3-5x** |
| Token Savings | **30-50%** |

---

## 三、核心特性

### 1. 零学习曲线

> Zero configuration required - Works out of the box with intelligent defaults

无需配置， 开箱即用。

### 2. Team-First 编排

> Team is the canonical orchestration surface in OMC

**v4.1.7+** 推荐使用 Team 模式作为标准多智能体界面。

### 3. 多 AI 支持

| 提供商 | 安装 | 用途 |
|--------|------|------|
| Claude Code | 内置 | 默认智能体 |
| Codex CLI | `npm install -g @openai/codex` | 架构验证、代码审查 |
| Gemini CLI | `npm install -g @google/gemini-cli` | UI/UX 设计、大上下文任务 |

### 4. tmux 集成

OMC 的 `omc team` 和限流检测功能需要 **tmux**：

| 平台 | 安装方式 |
|------|----------|
| macOS | `brew install tmux` |
| Ubuntu/Debian | `sudo apt install tmux` |
| Fedora | `sudo dnf install tmux` |
| Arch | `sudo pacman -S tmux` |
| Windows | [psmux](https://github.com/marlocarlo/psmux) |

---

## 四、编排模式

| 模式 | 说明 | 使用场景 |
|------|------|----------|
| **Team (推荐)** | 标准分阶段管道：`team-plan → team-prd → team-exec → team-verify → team-fix` | 协作 Claude 智能体处理共享任务列表 |
| **omc team** | tmux CLI 工作器 - 真实 claude/codex/gemini 进程 | Codex/Gemini CLI 任务 |
| **ccg** | 通过 `/ask codex` + `/ask gemini` 三模型顾问 | 混合后端+UI 工作 |
| **Autopilot** | 自主执行（单主导智能体） | 端到端功能开发 |
| **Ultrawork** | 最大并行度（非 Team） |  burst 并行修复/重构 |
| **Ralph** | 带 verify/fix 循环的持久模式 | 必须完全完成的任务 |
| **Pipeline** | 顺序分阶段处理 | 严格排序的多步转换 |

---

## 五、智能体

### 分析类
| 智能体 | 职责 |
|-------|------|
| architect | 架构分析、技术决策 |
| debugger | 调试和问题定位 |
| verifier | 验证和确认 |

### 执行类
| 智能体 | 职责 |
|-------|------|
| executor | 执行开发任务 |
| build-fixer | 修复构建错误 |

### 搜索与研究
| 智能体 | 职责 |
|-------|------|
| explore | 快速扫描代码库 |
| researcher | 信息检索和研究 |

### 前端与 UX
| 智能体 | 职责 |
|-------|------|
| designer | UI/UX 设计 |
| ux-researcher | 用户体验研究 |
| info-architect | 信息架构 |

### 测试与 QA
| 智能体 | 职责 |
|-------|------|
| qa-tester | QA 测试 |
| test-engineer | 测试工程 |
| tdd-guide | TDD 指导 |

### 代码审查
| 智能体 | 职责 |
|-------|------|
| code-reviewer | 代码审查 |
| style-reviewer | 样式规范审查 |
| quality-reviewer | 质量审查 |
| api-reviewer | API 审查 |
| perf-reviewer | 性能审查 |
| security-reviewer | 安全审查 |

### 规划与产品
| 智能体 | 职责 |
|-------|------|
| planner | 规划 |
| critic | 批评和评审 |
| analyst | 分析 |
| product-manager | 产品管理 |
| product-analyst | 产品分析 |
| quality-strategist | 质量策略 |

### 专家
| 智能体 | 职责 |
|-------|------|
| scientist | 科学研究 |
| writer | 技术写作 |
| vision | 愿景和方向 |
| dependency-expert | 依赖专家 |

> 所有智能体支持 model 参数 - 可指定 haiku、sonnet 或 opus

---

## 六、魔法关键词

| 关键词 | 效果 | 示例 |
|--------|------|------|
| `team` | Team 编排 | `/team 3:executor "fix all TypeScript errors"` |
| `omc team` | tmux CLI 工作器 | `omc team 2:codex "security review"` |
| `ccg` | Codex + Gemini 合成 | `/ccg review this PR` |
| `autopilot` | 全自动执行 | `autopilot: build a todo app` |
| `ralph` | 持久模式 | `ralph: refactor auth` |
| `ulw` | 最大并行 | `ulw fix all errors` |
| `ralplan` | 迭代规划共识 | `ralplan this feature` |
| `deep-interview` | 苏格拉底式需求澄清 | `deep-interview "vague idea"` |
| `deepsearch` | 代码库搜索路由 | `deepsearch for auth middleware` |
| `ultrathink` | 深度推理模式 | `ultrathink about this architecture` |
| `cancelomc` / `stopomc` | 停止 OMC 模式 | `stopomc` |

> **注意：** `swarm` 兼容性别名已移除；请迁移到 `/team` 语法。`ralph` 自动包含 ultrawork 的并行执行。

### 组合使用

```bash
# 持久 + 并行
ralph ulw: migrate database

# 预算友好
eco autopilot: build a blog

# Team 协调智能体
/team 3:executor "fix TypeScript errors"
```

---

## 七、安装

### 三步快速安装

**第一步：安装插件**
```bash
/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode
/plugin install oh-my-claudecode
```

**第二步：运行安装向导**
```bash
/setup
# 或
/omc-setup
```

**第三步：开始使用**
```bash
autopilot: build a REST API for managing tasks
```

> That's it. Everything else is automatic.

### npm 安装（可选）

如果偏好 npm CLI/运行时方式：

```bash
npm i -g oh-my-claude-sisyphus@latest
```

> **包名说明：** 仓库、插件和命令是 **oh-my-claudecode**，但 npm 包名是 `oh-my-claude-sisyphus`。

### 启用 Team 模式

在 `~/.claude/settings.json` 中启用 Claude Code 原生团队：

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

> 如果团队被禁用，OMC 会警告你并尽可能回退到非团队执行。

---

## 八、更新

### marketplace 安装
```bash
# 1. 更新 marketplace 克隆
/plugin marketplace update omc

# 2. 重新运行安装
/setup
```

### npm 安装
```bash
npm i -g oh-my-claude-sisyphus@latest
```

### 诊断问题
```bash
/omc-doctor
```

---

## 九、深度访谈

不确定需求、想法模糊或想精细管理设计时：

```
/deep-interview "I want to build a task management app"
```

深度访谈使用苏格拉底式提问来澄清你的想法，揭示隐藏假设，确保你知道确切要构建什么后再开始执行。

---

## 十、CLI 工具

### omc ask - 顾问模式

```bash
omc ask claude "review this migration plan"
omc ask codex --prompt "identify architecture risks"
omc ask gemini --prompt "propose UI polish ideas"
```

### omc wait - 限流等待

```bash
omc wait          # 检查状态，获取指导
omc wait --start  # 启用自动恢复守护进程
omc wait --stop   # 禁用守护进程
```

### omc team - tmux 工作器

```bash
omc team 2:codex "security review"
omc team 2:gemini "redesign UI components"
omc team 1:claude "implement the payment flow"
omc team status auth-review
omc team shutdown auth-review
```

---

## 十一、通知配置

### Discord/Telegram/Slack

```bash
omc config-stop-callback discord --enable --webhook <url> --tag-list "@here"
omc config-stop-callback telegram --enable --token <bot_token> --chat <chat_id> --tag-list "@alice,bob"
omc config-stop-callback slack --enable --webhook <url> --tag-list "<!here>,<@U1234567890>"
```

---

## 十二、贡献者

### 核心维护者

| 角色 | 名称 | GitHub |
|------|------|--------|
| 创建者 & 主导 | Yeachan Heo | [@Yeachan-Heo](https://github.com/Yeachan-Heo) |
| 维护者 | HaD0Yun | [@HaD0Yun](https://github.com/HaD0Yun) |

### 顶级贡献者

| 名称 | GitHub |
|------|--------|
| riftzen-bit | [@riftzen-bit](https://github.com/riftzen-bit) |
| Seunggwan Song | [@nathan-song](https://github.com/nathan-song) |
| JunghwanNA | [@shaun0927](https://github.com/shaun0927) |
| Junho Yeo | [@junhoyeo](https://github.com/junhoyeo) |

---

## 十三、相关资源

- [官方网站](https://ohmyclaudecode.com/)
- [GitHub](https://github.com/Yeachan-Heo/oh-my-claudecode)
- [官方文档](https://yeachan-heo.github.io/oh-my-claudecode-website)
- [Discord 社区](https://discord.gg/PUwSMR9XNk)
- [Superpowers 指南](./omc-superpowers-guide.md)
- [Skills 盘点](./skills-2026.md)

**标签**：#OhMyClaudeCode #OMC #MultiAgent #ClaudeCode
