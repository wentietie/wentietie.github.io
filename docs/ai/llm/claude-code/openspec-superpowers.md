# OpenSpec + Superpowers：规范驱动开发完整指南

> 一个定规范，一个管执行。搞懂这两者的关系，你才算真正会用 AI 编程工具。

## 核心定位

| 工具 | 层级 | 角色 | 核心职责 |
|-----|-----|-----|---------|
| **OpenSpec** | 规范层 | 项目管理员 | 定义"做什么"，管理变更文档 |
| **Superpowers** | 能力层 | 任务指挥官 | 决定"谁来做"，拆解并行任务 |

两者配合使用，才能打造一套极致的自动化工作流。

---

## OpenSpec：给 AI 画施工图纸

### 核心理念

> "Agree before you build — human and AI align on specs before any code gets written."

**先定规矩，再写代码。**

OpenSpec 解决的核心问题是：AI 经常写跑偏。OpenSpec 强制你先用文档把需求定死，AI 照着文档执行，不会自己发挥。

### 核心设计：specs/ 和 changes/ 分离

OpenSpec 最巧妙的设计是把"当前状态"和"变更提案"分开管理：

```
openspec/
├── specs/              # 所有系统规范的当前真相来源（像Git的main分支）
│   └── [capability]/
│       └── spec.md
└── changes/             # 所有提议、进行中、已归档的变更
    └── [change-name]/
        ├── proposal.md     # 为什么要改、改什么
        ├── tasks.md       # 实施检查清单
        └── specs/         # 规范的增量"补丁"
```

用版本控制的类比：
- `specs/` 像 Git 的 main 分支
- `changes/` 像功能分支

### 安装（Windows版）

```bash
# 1. 安装 OpenSpec CLI
npm install -g @fission-ai/openspec@latest

# 2. 验证安装
openspec --version

# 3. 在项目中初始化
cd your-project
openspec init
```

Windows 常见坑：如果 PowerShell 报错"无法加载文件"，以管理员身份运行：

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 核心命令

OpenSpec 1.0 默认启用 4 个核心命令：

| 命令 | 作用 | 什么时候用 |
|-----|-----|----------|
| `/opsx:explore` | 探索模式，只讨论不产出文档 | 思路不清晰，先聊聊 |
| `/opsx:propose` | 一次性生成所有规划文档 | 思路清晰，直接开干 |
| `/opsx:apply` | 按 tasks.md 逐项实施代码 | 规划做完，开始写代码 |
| `/opsx:archive` | 归档完成的变更 | 代码写完，合并规范 |

```bash
# 查看当前配置
openspec config list

# 切换到自定义模式（启用扩展命令）
openspec config profile custom
openspec update
```

---

## Superpowers：给 AI 上工程纪律

### 核心理念

> "Superpowers is a complete software development workflow for your coding agents"

**不按流程走就卡住。**

Superpowers 解决的核心问题是：AI 太"聪明"了，总想走捷径。Superpowers 强制 AI 按固定步骤走，把软件工程的最佳实践变成 AI 必须遵守的规则。

**数据**：GitHub 11.5万颗星，官方插件市场23万次安装，Claude Code 第三方插件中排首位。

### 核心工作流（7步）

| 步骤 | 技能名 | 做什么 |
|-----|-------|------|
| 1 | brainstorming | 头脑风暴，问清楚需求（苏格拉底式提问） |
| 2 | using-git-worktrees | 创建隔离的 Git 工作空间 |
| 3 | writing-plans | 拆解成2-5分钟的小任务 |
| 4 | subagent-driven-development | 派子智能体执行，两阶段审查 |
| 5 | test-driven-development | 强制 TDD（不写测试就删代码） |
| 6 | requesting-code-review | 代码审查，关键问题阻塞进度 |
| 7 | finishing-a-development-branch | 完成分支，提供合并选项 |

### 强制 TDD：不写测试就删代码

Superpowers 对测试的态度非常硬核：**先写测试，再写代码**。如果在测试之前写了代码，直接删掉。

规则是严格的 RED-GREEN-REFACTOR 循环：

1. **RED**：写一个预期会失败的测试
2. **GREEN**：写最少的代码让它通过
3. **REFACTOR**：重构代码

不是警告，不是提示，是**直接删**。

> 有开发者反馈：使用 Superpowers 后，测试覆盖率从不到 30% 提升到了 85%-95%。

### 安装

在 OpenCode 对话框中输入：

```
Fetch and follow instructions from https://raw.githubusercontent.com/obra/superpowers/refs/heads/main/.opencode/INSTALL.md
```

AI 会自动完成安装。

验证安装：在 OpenCode 会话中输入 `do you have superpowers?`，如果回复确认并列出技能，说明安装成功。

---

## 铁三角配合流程

### 工具职责总结

| 系统 | 职责 | 本次会话体现 |
|-----|-----|----------|
| **OpenSpec** | 规范定义、变更追踪、文档归档 | `/opsx:propose` 创建变更、`/opsx:archive` 归档 |
| **Superpowers** | 任务规划、并行执行，专业代理 | Plan Agent 分解任务、task() 子代理 |

### 完整工作流（5阶段）

#### 阶段1：提案创建（OpenSpec主导）

```bash
/opsx:propose user-management-api
```

OpenSpec 解析命令，创建变更目录 `openspec/changes/user-management-api/`，并调用 task() 代理生成 4 个 artifacts：

- `proposal.md` — 为什么做
- `design.md` — 怎么做
- `specs/*` — 具体规范
- `tasks.md` — 实施步骤

#### 阶段2：需求澄清（Superpowers Plan Agent 动态调整）

检测技术栈差异后，Plan Agent 重新制定计划：

```markdown
Wave 1 (无依赖):
  ├─ 项目脚手架
  └─ 配置文件

Wave 2 (依赖 Wave 1):
  ├─ 数据库模型
  ├─ 安全工具
  └─ pytest fixtures

Wave 3 (依赖 Wave 2):
  ├─ 用户注册端点
  ├─ 用户查询端点
  └─ 用户删除端点

Wave 4 (依赖 Wave 3):
  ├─ 单元测试
  └─ 集成测试

Wave 5 (依赖 Wave 4):
  └─ API文档
```

关键洞察：当 OpenSpec 规范与实际需求不匹配时，Superpowers 的 Plan Agent 会进行**动态调整**，而不是机械执行原有 tasks.md。

#### 阶段3：并行实现（Superpowers 执行）

- 共调用 11 次 task()，每次创建一个子代理
- 每个子代理内部使用工具：write 创建文件、read 读取上下文、lsp_diagnostics 验证代码、bash 运行测试

#### 阶段4：测试验证

```bash
python -m pytest tests/ -v
```

#### 阶段5：归档（OpenSpec 闭环）

```bash
/opsx:archive user-management-api
```

关键洞察：
- OpenSpec 的 tasks.md 是原始规范的追踪
- 实际代码实现在对话中动态完成
- 归档时保留规范文档，实际代码保留在项目目录
- 两者分离，既保证可追溯，又不限制灵活调整

### SDD 工作流案例

规范驱动开发（SDD）结合 OpenSpec 和 Superpowers 的极致标准化工作流：

#### 1. 理清需求与制定规范

```bash
# 使用 brainstorming 技能
/superpowers:brainstorm

# 使用 OpenSpec 生成规范
/opsx:propose <功能名称>
```

#### 2. 建立独立开发环境

使用 Superpowers 的 `git-worktrees` 技能为当前 feature 创建独立工作区和开发分支。

#### 3. 任务拆解与细化

使用 `writing-plans` 来继续细化和拆分任务，确保每个任务都足够小（几分钟内完成）。

#### 4. 强制规范化执行

使用 `subagent-driven-development` 或 `executing-plans` 逐一执行，**严格遵守 TDD 规范**。

#### 5. 审查与收尾

```bash
# Code Review
/superpowers:requesting-code-review

# 代码合并
/superpowers:finishing-a-development-branch

# 归档
/opsx:archive
```

---

## 什么时候用哪个

| 场景 | 推荐工具 | 原因 |
|-----|---------|-----|
| 快速原型验证 | 原生 | 追求速度，不纠结质量 |
| 核心业务代码 | Superpowers | 强制 TDD，保证质量 |
| 团队协作、需要文档 | OpenSpec | 规范统一、可追溯 |
| 生产级项目开发 | 两者协同 | 规范+流程，缺一不可 |
| 改一行代码的 bugfix | 原生 | 杀鸡不用牛刀 |

---

## 常见问题

**Q1: 为什么我输入 `/opsx:verify` 提示命令不存在？**

A: OpenSpec 1.0 默认只启用 4 个核心命令。要启用扩展命令，需要先：

```bash
openspec config profile custom
openspec update
```

**Q2: OpenSpec 的 tasks.md 和实际代码任务不一致怎么办？**

A: 正常现象。OpenSpec 的 tasks.md 是初始规范，实际执行时 Superpowers 的 Plan Agent 会根据需求动态调整。

**Q3: 两者有依赖关系吗？**

A: 没有硬性依赖，可以独立使用。但配合起来效果更好：
- OpenSpec 负责"定方向"
- Superpowers 负责"定计划"

---

## 相关资源

- OpenSpec GitHub：搜索 `@fission-ai/openspec`
- Superpowers GitHub：https://github.com/obra/superpowers
- 官方技能市场：https://skills.sh/

---

**标签**：#OpenSpec #Superpowers #SDD #工作流