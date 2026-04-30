# Anthropic 官方亲授：一个 CLAUDE.md 文件让你的 AI 编程效率提升 10 倍

> 来源：[Anthropic 官方亲授：一个 CLAUDE.md 文件让你的 AI 编程效率提升 10 倍](https://mp.weixin.qq.com/s/jlKLDJU2Qjqgpvy5IpqvSw) | 作者：悟鸣 | 来源：悟鸣AI

## 常见误区

### 误区 1：以为 AI 越强越不需要规范

"Claude 这么聪明，我直接说需求不就行了吗？"

并不是这样。当前阶段，大家用的大模型大多数是通用模型，虽然编码方面可能超过很多程序员，但是如果需求描述不够清晰，编码规范不够明确，效果会大打折扣。

**给定规范，AI 才更能写出符合你要求的代码。**

### 误区 2：把 AI 当工具，而不是"合作者"

现在虽然模型越来越强，但是还没有主动打通反馈的循环。比如说他给你一个建议，最后采纳了没有，最后的效果怎么样，它都不知道，就无从改进。

**没有给 AI 建立规则和反馈机制，它永远只是一个"听话的工具"。**

想要"越用越好用"，需要让 AI 从反馈中学习、持续进化。

## 背景

Boris Cherny（Anthropic 的 Claude Code 创造者）在 X 上分享了他和团队日常使用 Claude Code 的内部最佳实践和工作流程。有人将这些推文整理成一个结构化的 CLAUDE.md 文件，你可以直接放到任何项目中。

这份 CLAUDE.md 包含 **六大核心模块**：

- 工作流编排
- 子 Agent 策略
- 自我改进循环
- 完成前验证
- 自主 bug 修复
- 核心原则

随着你用得越多，Claude 的错误率会下降，因为它从你的反馈中学习。如果你每天使用 AI 进行开发，这将为你节省大量时间。

## CLAUDE.md 完整内容（中文版）

```
## 工作流编排

### 1. 规划节点默认行为（Plan Node Default）
- 对任何非平凡任务（3 个以上步骤或涉及架构决策）进入规划模式
- 如果出现问题，立即停止并重新规划——不要强行推进
- 不仅在构建时使用规划模式，验证步骤也要用
- 前期编写详细规范以减少歧义

### 2. 子 Agent 策略（Subagent Strategy）
- 大量使用子 Agent 以保持主上下文窗口整洁
- 将研究、探索和并行分析卸载给子 Agent
- 对于复杂问题，通过子 Agent 投入更多算力
- 每个子 Agent 专注一个任务以实现精准执行

### 3. 自我改进循环（Self-Improvement Loop）
- 用户做出任何纠正后：将模式更新到 `tasks/lessons.md`
- 为自己编写规则以防止重复犯错
- 对这些经验教训进行无情迭代，直到错误率下降
- 会话开始时审查相关项目的经验教训

### 4. 完成前验证（Verification Before Done）
- 在证明任务有效之前，永远不要标记为完成
- 在相关时对比主分支和你的修改之间的行为差异
- 问自己："高级工程师会批准这个吗？"
- 运行测试、检查日志、证明正确性

### 5. 追求优雅（Demand Elegance，平衡）
- 对于非平凡的修改：暂停并问"有没有更优雅的方式？"
- 如果修复方案感觉像补丁："基于我现在所知的一切，实现优雅的解决方案"
- 对于简单、明显的修复跳过这一步——不要过度设计
- 在展示工作之前挑战自己的方案

### 6. 自主 bug 修复（Autonomous Bug Fixing）
- 收到 bug 报告时：直接修复它。不要寻求手把手指导
- 指出日志、错误、失败的测试，然后解决它们
- 用户无需任何上下文切换
- 无需被告知如何做，直接去修复失败的 CI 测试

## 任务管理

1. **先规划**：将计划写入 `tasks/todo.md`，包含可勾选的项目
2. **验证计划**：开始实现前先确认
3. **跟踪进度**：逐步标记完成的项目
4. **解释变更**：每一步提供高层级摘要
5. **记录结果**：在 `tasks/todo.md` 中添加审查部分
6. **捕获经验**：纠正后更新 `tasks/lessons.md`

## 核心原则

- **简单优先**：让每个变更尽可能简单，只影响必要的代码
- **不偷懒**：找到根本原因。不做临时修复。高级开发标准。
- **最小影响**：变更应该只触及必要部分。避免引入 bug
```

## CLAUDE.md 完整内容（英文版）

```
## Workflow Orchestration

### 1. Plan Node Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately - don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One tack per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes - don't over-engineer
- Challenge your own work before presenting

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests - then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.
```

## 使用建议

需要注意的是，虽然上述提示词中支持"自我改进循环"，但特别依赖人类的反馈。

"人总是懒的"，加上很多"上下文"没有在 Coding 的时候放进去，会导致效果大打折扣。因此，大家在 Coding 的时候，尽量给足上下文，给出有用的反馈。

CLAUDE.md 的本质是一份人机协作的"契约"。精心打磨这个文件，才能让 AI 发挥最大潜力。如果你觉得这份 CLAUDE.md 有用，下一个项目可以试试看。
