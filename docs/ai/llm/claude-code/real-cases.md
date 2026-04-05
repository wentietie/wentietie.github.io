# Claude Code 真实案例与深度解析

> 来源：微信公众号文章整合

## 案例一：档案编研智能辅助选题系统

### 项目背景

为综合档案馆的编研人员做一个智能辅助选题系统，核心能力包括：
- 馆藏资源分析
- 社会需求感知
- 选题智能评估（四维评分）
- 多级审批流转
- 编研任务跟踪

### 三工具分工

| 工具 | 职责 |
|-----|-----|
| OpenSpec | 将自然语言需求转换为完整工程规范文档 |
| Superpowers | 自动审查所有规范文档，发现缺陷、遗漏 |
| Claude Code | 根据完善后的规范文档，自动生成代码 |

### OpenSpec 生成规范

输入一条指令：
```
/opsx:propose 我想为综合档案馆的编研人员做一个智能辅助选题系统...
```

OpenSpec 自动生成：
```
openspec/changes/archives-topic-system/
├── proposal.md
├── design.md
├── tasks.md
└── specs/
    ├── topic-recommendation/spec.md
    ├── topic-evaluation/spec.md
    ├── approval-workflow/spec.md
    └── ...
```

### Superpowers 审查发现的问题

**高优先级问题（6条）**：
1. 未区分"在编编研项目"与"新增选题"的关系
2. 馆藏数据接入方式未定义
3. 审批流程缺少"暂缓"状态
4. 用户角色定义不完整
5. AI 报告未定义档案业务专业约束
6. 缺少选题知识库的冷启动方案

**中优先级问题（4条）**：
7. 纪念节点数据来源未说明
8. 编研任务跟踪缺少成果归档环节
9. 数据库缺少关键索引声明
10. 多馆部署场景未说明

### 产出

- 12 个任务组，78 个具体任务
- 规范文档达到可直接开发的企业级标准
- 核心功能 100% 可用

### 核心优势

> 有开发者反馈：使用 Superpowers 后，测试覆盖率从不到 30% 提升到了 85%-95%。

---

## 案例二：Matt Van Horn 的 Claude Code 工作流

30 天产出了 70 个 plan 文件和 263 次 commit，给 Python、OpenCV、Vercel Agent Browser、Zed 等知名开源项目贡献了代码。

**核心数据**：
- 80% 时间在规划和思考
- 20% 时间在实际写代码

### 核心理念：Planning-First

永远不要直接写代码。每个任务都从 `/ce:plan` 开始，启动多个研究 agent 并行工作。

### 研究先行

在开始规划之前，先跑 `/last30days` 命令，自动聚合最近 30 天社区里的讨论。

### 语音优先

使用 Monologue 语音输入工具直接对着 Claude Code 说话。可以一边开车（Tesla FSD 自动驾驶），一边用语音写代码。

### 并行开发：4-6 个窗口同时跑

- 一个在规划
- 一个在构建
- 一个在调研
- 一个在调试

### 三个关键配置

1. **权限旁路**：在 `~/.claude/settings.json` 中启用 `bypass permissions`
2. **音频通知 Hook**：完成任务后自动播放提示音
3. **Zed 500ms 自动保存**：实时看到 Claude 在改什么文件

### 完整工具栈

| 层级 | 工具 |
|-----|------|
| 核心层 | Claude Code、Ghostty、Zed |
| 输入层 | Monologue、Granola |
| 增强层 | Compound Engineering、`/last30days` |
| 远程层 | OpenClaw（Telegram）、Mac Mini |

### 成本控制

- $200/月的 Claude Max 额度
- $200/月的 Codex 计划
- 当 Claude 额度快用完时，用 `--codex flag` 转给 Codex

**$400/月，换来的是一个人干十个人的活。**

### 思维方式转变

从"我来写代码"到"我来指导 AI 写代码"：
- 规划能力 > 编码能力
- 表达能力 > 打字速度
- 系统思维 > 局部优化
- 上下文管理 > 记忆力

---

## 源码解析：51万行代码分析

基于 Claude Code v2.1.88 源码（51万行 TypeScript，1902 个文件）

### 项目规模

| 模块 | 行数 | 占比 |
|-----|-----|-----|
| utils | 180,472 | 35.2% |
| components | 81,546 | 15.9% |
| services | 53,680 | 10.5% |
| tools | 50,828 | 9.9% |
| commands | 26,428 | 5.2% |

### 五条设计原则

1. **工具即能力边界**：agent 能做什么完全由工具集决定
2. **Fail-closed 安全默认**：工具默认不可并行、默认非只读、权限默认需要确认
3. **Context Engineering > Prompt Engineering**：精心组装完整的上下文环境
4. **可组合性**：子 agent 复用主 agent 的 `query()` 函数
5. **编译时消除 > 运行时判断**：未启用的功能在 bundle 中完全不存在

### Agent Loop 两层循环模型

- **QueryEngine**：处理会话管理（多轮状态、transcript 持久化）
- **queryLoop**：处理单轮执行（API 调用、工具执行、错误恢复）

使用 AsyncGenerator 的三个原因：
1. **背压**：调用方按需消费
2. **中断语义**：`generator.return()` 级联关闭
3. **流式组合**：子 agent 直接嵌套

---

**标签**：#ClaudeCode #真实案例 #源码解析