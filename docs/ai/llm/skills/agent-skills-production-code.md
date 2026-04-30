# Google大神开源 Agent Skills：谷歌工程最佳实践，让AI编程智能体写出生产级优质代码

> 来源：[Google大神开源Agent Skills：谷歌工程最佳实践](https://mp.weixin.qq.com/s/DTC7Gs-JaoBYXq5agvKy0g) | 作者：道哥说AI | 来源：AI架构之道

## 为什么需要智能体技能（Agent Skills）

AI编程智能体默认会选择最简路径——这通常意味着跳过规格文档、测试、安全评审以及所有能保障软件可靠性的实践环节。智能体技能（Agent Skills）为智能体提供了结构化工作流，确保其遵循与资深工程师开发生产级代码时同等严格的规范。

每项技能都凝聚了来之不易的工程经验：何时编写规格文档、需要测试哪些内容、如何进行评审以及何时发布上线。这些并非通用提示词——而是那种带有明确观点、以流程为导向的工作流，正是这种工作流将生产级质量的工作与原型级质量的工作区分开来。

技能中融入了谷歌工程文化的最佳实践——包括《谷歌软件工程》和谷歌工程实践指南中的相关理念：

- **API设计**中的海勒姆定律
- **测试**中的碧昂斯法则和测试金字塔
- **代码评审**中的变更规模控制和评审速度规范
- **简化代码**中的切斯特顿栅栏原则
- **Git工作流**中的主干开发模式
- **CI/CD**中的左移测试和特性开关
- 专门将代码视为负债的**废弃管理**技能

## 项目介绍

智能体技能（Agent Skills）是面向AI编程智能体的生产级工程技能包，封装了资深工程师的开发工作流、质量门禁与最佳实践，引导AI智能体输出符合生产要求的代码。

项目核心是解决AI开发流程不规范问题，融入谷歌工程最佳实践，适配Claude Code、GitHub Copilot等主流AI工具，遵循MIT开源协议，可自由用于各类场景。

- **最新版本**：0.5.0（发布于2026年4月10日）
- **提交数**：121次
- **贡献者**：13位
- **主要目录**：skills（20项核心技能）、agents（3个专业角色人设）、references（4项补充检查清单）
- **开源地址**：[https://github.com/addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

## 技能体系

智能体技能包含 **7个核心斜杠指令**（对应开发全生命周期）和 **20项细分技能**，指令作为入口，自动激活对应细分技能，同时支持根据开发场景自动触发相关技能（如设计API触发api-and-interface-design技能）。技能均以SKILL.md文件形式呈现，遵循统一结构规范，可直接导入各类支持Markdown指令文件的AI工具使用。

### 7个核心指令

| 操作场景 | 指令 | 核心原则 |
| --- | --- | --- |
| 明确要构建的内容 | `/spec` | 先写规格，再写代码 |
| 规划实现方案 | `/plan` | 拆分为细小、原子化任务 |
| 增量式构建 | `/build` | 一次只完成一个功能切片 |
| 验证功能可用 | `/test` | 测试就是证明 |
| 合并前代码评审 | `/review` | 提升代码健康度 |
| 简化代码逻辑 | `/code-simplify` | 清晰优于巧妙 |
| 发布至生产环境 | `/ship` | 更快即更安全 |

### 20项细分技能

每项技能均为结构化工作流，包含步骤、验证门禁与反合理化约束表，可直接引用使用。

#### Define - 明确构建目标

| 技能名称 | 技能说明 | 使用场景 |
| --- | --- | --- |
| idea-refine | 通过结构化发散与收敛思考，将模糊想法转化为具体方案，帮助将模糊需求转化为可执行的PRD文档 | 有粗略概念，需要进一步梳理完善 |
| spec-driven-development | 编写覆盖目标、指令、结构、代码风格、测试与边界的PRD文档，再编写代码 | 启动新项目、新功能或重大变更 |

#### Plan - 任务拆解

| 技能名称 | 技能说明 | 使用场景 |
| --- | --- | --- |
| planning-and-task-breakdown | 将需求规格拆解为可验证的细小任务，明确验收标准与依赖顺序 | 已有需求规格，需要拆分为可执行单元 |

#### Build - 编写代码

| 技能名称 | 技能说明 | 使用场景 |
| --- | --- | --- |
| incremental-implementation | 采用垂直切片开发模式，依次完成实现、测试、验证、提交，支持特性开关、安全默认值 | 任何涉及多个文件的修改 |
| test-driven-development | 遵循红-绿-重构、测试金字塔（80/15/5）等原则 | 实现逻辑、修复Bug或修改行为 |
| context-engineering | 在合适时机为智能体提供精准信息，包括规则文件、上下文打包、MCP集成 | 启动会话、切换任务或输出质量下降时 |
| source-driven-development | 所有框架决策均基于官方文档，包含验证、引用来源、标记未验证内容 | 需要为框架/库编写权威、可溯源的代码 |
| frontend-ui-engineering | 涵盖组件架构、设计系统、状态管理、响应式设计，遵循WCAG 2.1 AA无障碍标准 | 构建或修改用户界面 |
| api-and-interface-design | 采用契约优先设计，融入海勒姆定律、单一版本规则等 | 设计API、模块边界或公共接口 |

#### Verify - 确保功能可用

| 技能名称 | 技能说明 | 使用场景 |
| --- | --- | --- |
| browser-testing-with-devtools | 通过Chrome DevTools MCP获取实时运行数据，包括DOM检查、控制台日志、网络追踪 | 开发或调试浏览器端应用 |
| debugging-and-error-recovery | 提供五步问题排查法（复现→定位→简化→修复→防护），包含熔断机制、安全降级 | 测试失败、构建报错或行为异常 |

#### Review - 合并前质量门禁

| 技能名称 | 技能说明 | 使用场景 |
| --- | --- | --- |
| code-review-and-quality | 开展五维度评审，控制变更大小（约100行），包含严重程度标签、评审速度规范 | 任何变更合并前 |
| code-simplification | 遵循切斯特顿栅栏原则、500行规则，在保留行为不变的前提下降低代码复杂度 | 代码可运行但可读性、可维护性不足 |
| security-and-hardening | 覆盖OWASP Top 10防护、认证模式、密钥管理、依赖审计等 | 处理用户输入、认证、数据存储或外部集成 |
| performance-optimization | 采用"先测量后优化"理念，包含核心网页指标目标、性能分析、打包体积分析 | 有性能要求或怀疑存在性能退化 |

#### Ship - 可靠部署

| 技能名称 | 技能说明 | 使用场景 |
| --- | --- | --- |
| git-workflow-and-versioning | 遵循主干开发、原子提交原则，控制变更大小（约100行） | 任何代码修改（始终适用） |
| ci-cd-and-automation | 融入左移测试、更快即更安全理念，支持特性开关、质量门禁流水线 | 搭建或修改构建与部署流水线 |
| deprecation-and-migration | 秉持代码即负债理念，包含强制/建议式废弃、迁移方案、僵尸代码清理 | 移除旧系统、用户迁移或功能下线 |
| documentation-and-adrs | 涵盖架构决策记录、API文档、内联文档规范，重点记录决策原因 | 做出架构决策、修改API或发布功能 |
| shipping-and-launch | 包含上线前检查清单、特性开关生命周期、灰度发布、回滚流程 | 准备部署至生产环境 |

### 3个智能体角色人设

| 智能体 | 角色 | 评审视角 |
| --- | --- | --- |
| code-reviewer | 资深主任工程师 | 五维度代码评审，以"主任工程师是否会批准"为标准 |
| test-engineer | 测试专家 | 聚焦测试策略、覆盖率分析，遵循"验证为先"模式 |
| security-auditor | 安全工程师 | 开展漏洞检测、威胁建模、OWASP评估 |

### 4项参考清单

| 参考文档 | 覆盖内容 |
| --- | --- |
| testing-patterns.md | 测试结构、命名、Mock、React/API/端到端示例、测试反模式 |
| security-checklist.md | 提交前检查、认证、输入校验、请求头、跨域、OWASP Top 10 |
| performance-checklist.md | 核心网页指标、前后端检查清单、测量指令 |
| accessibility-checklist.md | 键盘导航、屏幕阅读器适配、视觉设计、ARIA规范、辅助测试工具 |

## 快速上手

### Claude Code（推荐）

Claude Code是官方优先适配的工具，支持插件市场一键安装，也可本地部署用于开发调试。

**应用市场安装（推荐）**

```bash
/plugin marketplace add addyosmani/agent-skills/plugin install agent-skills@addy-agent-skills
```

常见问题：SSH克隆错误时，添加SSH密钥或临时切换HTTPS：

```bash
git config --global url."https://github.com/".insteadOf "git@github.com:"
```

**本地/开发环境安装**

```bash
git clone https://github.com/addyosmani/agent-skills.git
claude --plugin-dir /path/to/agent-skills
```

**使用验证**：输入任意核心指令（如`/spec`），若出现技能激活提示即说明安装成功。

### Cursor

- **单技能导入**：复制需要的 `SKILL.md` 到 `.cursor/rules/` 目录
- **全量导入**：在Cursor设置中添加skills目录引用

### Gemini CLI

```bash
gemini skills install https://github.com/addyosmani/agent-skills.git --path skills
```

或从本地克隆安装：

```bash
git clone https://github.com/addyosmani/agent-skills.git
gemini skills install ./agent-skills/skills/
```

### Windsurf

将skills目录下所有SKILL.md文件内容复制到Windsurf的规则配置中。

### OpenCode

```bash
skill load ./agent-skills/skills/
skill run spec-driven-development
```

### GitHub Copilot

1. 将agents目录下的智能体定义复制到Copilot角色配置
2. 将skills目录下所有SKILL.md内容写入 `.github/copilot-instructions.md`

### Kiro IDE & CLI

- **项目级**：创建 `.kiro/skills/` 目录，复制所有技能
- **全局级**：复制到 `~/.kiro/skills` 目录

### Codex / 其他智能体

技能均为纯Markdown格式，可适配任何支持系统提示或指令文件的AI智能体：

1. 克隆仓库
2. 打开需要的SKILL.md文件
3. 将内容粘贴到系统提示框或指令文件中

## 注意事项

- 所有工具安装后建议重启工具确保技能加载生效
- 若技能无法触发，检查技能文件路径是否正确，或查看工具日志
- 项目持续更新，可通过 `git pull` 获取最新技能
- 所有技能遵循MIT开源协议，可自由修改、分发
