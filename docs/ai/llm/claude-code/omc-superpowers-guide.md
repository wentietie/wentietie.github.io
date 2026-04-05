# OMC + Superpowers 使用指南

[[toc]]

## 一、核心定位：让 OMC 负责"宏观指挥"，Superpowers 负责"微观执行"

OMC 和 Superpowers 的定位非常清晰，是**互补关系**：

| 角色 | 插件 | 职责 | 比喻 |
| :--- | :--- | :--- | :--- |
| **总指挥** | **Oh My Claude Code (OMC)** | 拆解宏观任务、并行调度智能体、自动化调用工具，核心目标是**提升效率** | 项目经理 |
| **质检员** | **Superpowers** | 强制执行 TDD、代码审查等最佳实践，确保代码质量和流程规范性，核心目标是**保证质量** | 资深架构师 |

### 核心理念

> **OMC 让你"快"，Superpowers 让你"好"**

- 单独用 OMC：可能会因缺少规范导致代码混乱
- 单独用 Superpowers：面对复杂项目时手动操作多，效率低下
- **两者配合**：取长补短，实现 1+1 > 2

---

## 二、安装与核心配置

### 1. 分别安装插件

先安装 Superpowers，再安装 OMC。

**安装 Superpowers**
```bash
# 添加插件市场
/plugin marketplace add obra/superpowers-marketplace

# 安装 Superpowers 插件
/plugin install superpowers@superpowers-marketplace
```

**安装 Oh My Claude Code**
```bash
/plugin install oh-my-claudecode@claude-plugins-official
```

### 2. 关键配置：让 Superpowers 成为 OMC 智能体的"默认技能"

这是最关键的一步。编辑 OMC 配置文件 `~/.config/oh-my-claudecode/config.yaml`：

```yaml
# ~/.config/oh-my-claudecode/config.yaml
default_skills:
  - superpowers
```

这样 OMC 在调度任何智能体时，都会自动带上 Superpowers 的"规范"。

### 3. 解决潜在冲突：禁用 OMC 的自动格式化

为了避免 OMC 的自动格式化与 Superpowers 的代码规范产生冲突：

```yaml
# ~/.config/oh-my-claudecode/config.yaml
format: false
```

---

## 三、黄金法则：何时必须使用 Skill

> **只要有 1% 的可能性 skill 适用，就必须调用 Skill 工具检查。**

### 必须检查 Skill 的场景

| 场景 | 对应 Skill |
|------|-----------|
| 修复 Bug | `superpowers:systematic-debugging` |
| 实现功能/修复 | `superpowers:test-driven-development` |
| 完成开发分支 | `superpowers:finishing-a-development-branch` |
| 提交代码/创建PR前 | `superpowers:verification-before-completion` |
| 接收代码审查反馈 | `superpowers:receiving-code-review` |
| 开始创意工作（构建功能、组件） | `superpowers:brainstorming` |
| 执行多步骤计划 | `superpowers:executing-plans` / `superpowers:writing-plans` |
| 使用 Git Worktree | `superpowers:using-git-worktrees` |
| 创建新 Skill | `superpowers:writing-skills` |

---

## 四、推荐工作流

### 场景一：复杂项目开发

对于功能较多、需要并行处理的项目，使用 `omc ultrawork` 命令：

```bash
omc ultrawork --agents 2 "开发一个带用户认证的 FastAPI 项目"
```

- `--agents 2` 限制了并行智能体的数量，避免因任务过多导致响应变慢
- OMC 会自动拆解任务
- 每个被调用的智能体都将遵循 Superpowers 的规范（TDD、代码审查等）

### 场景二：小型模块开发或特定任务

对于功能单一的模块开发、重构或调试任务，用 `omc assign` 分配任务：

```bash
omc assign "refactor: 重构 utils/helpers.py 模块，使其更符合单一职责原则"
```

智能体会在 Superpowers 的约束下：
1. 先分析
2. 再规划
3. 最后执行重构
4. 确保代码质量

---

## 五、常用命令速查

| 命令 | 用途 |
|------|------|
| `/omc plan` | 战略规划 + 可选访谈流程 |
| `/omc deep-dive` | 深度代码库初始化 + 需求结晶 |
| `/omc trace` | 证据驱动的问题追踪 |
| `/omc ultraqa` | QA 循环 - 测试/验证/修复 |
| `/omc team` | 多代理协作团队 |
| `/omc ultrawork` | 高吞吐量并行执行 |
| `/omc ralph` | 自我参照循环直到任务完成 |
| `/omc autopilot` | 全自动执行（从想法到代码） |

---

## 六、常见问题与解决

| 问题 | 原因 | 解决方案 |
| :--- | :--- | :--- |
| OMC 调度的智能体未加载 Superpowers | 配置文件 `config.yaml` 中 `default_skills` 未正确配置或未重启 OMC | 检查并修正配置文件，然后重启 OMC |
| 配合后响应变慢 | 并行智能体数量过多，叠加 Superpowers 的审查导致计算量增大 | 在 `omc ultrawork` 命令后添加 `--agents 2` (或 2-3) 参数，限制并行数 |
| OMC 自动格式化与 Superpowers 规范冲突 | 两者的代码格式化规则不一致 | 在 `config.yaml` 中设置 `format: false`，禁用 OMC 的自动格式化 |
| 加载技能时提示 "skill not found" | Superpowers 的技能链接创建失败或仓库克隆不完整 | 重新创建符号链接或重新克隆 Superpowers 仓库 |

---

## 七、Skill 类型

### 流程型 Skill（刚性 - 必须严格遵循）

| Skill | 用途 |
|-------|------|
| `systematic-debugging` | 系统化调试工作流 |
| `test-driven-development` | TDD 开发流程 |
| `brainstorming` | 头脑风暴流程 |

### 实现型 Skill（灵活 - 可根据上下文调整）

| Skill | 用途 |
|-------|------|
| `frontend-design` | 前端界面设计 |
| `mcp-builder` | MCP 服务器构建 |
| `pdf` / `docx` / `xlsx` | 文档处理 |
| `pptx` | PPT 制作 |

---

## 八、总结

> OMC 与 Superpowers 的组合，本质上是通过 **"自动化调度 + 工程化规范"**，让 AI 辅助开发既有效率，又有质量保障。

| 角色 | 职责 |
|------|------|
| **OMC** | 负责宏观调度 |
| **Superpowers** | 负责微观执行 |

各司其职，互不冲突，是 AI 辅助开发的高效实践。

---

## 九、相关资源

- [Superpowers 官方文档](https://claude.com/docs/claude-code)
- [OMC 官方文档](https://ohmyclaudecode.com/)
- [GitHub](https://github.com/anthropic/oh-my-claude-code)
