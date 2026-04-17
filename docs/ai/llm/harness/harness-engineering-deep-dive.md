# Harness Engineering（挽具工程学）深度解析：从概念到实践的完整指南

> 更新日期：2026-04-17 | 预计阅读时间：15 分钟

## 开篇：一个改变游戏规则的认知
**"模型决定上限，Harness（挽具）决定底线。"**

---

## 一、为什么需要 Harness Engineering（挽具工程学）？

### 1.1 一个你一定遇到过的场景

想象你雇了一个"天才实习生"：

- 打字极快，精力无限
- 什么都懂一点，永远不抱怨加班
- 但真实工作中，你很快会发现：

| 常见症状 | 具体表现 |
|---------|---------|
| 偷懒 | 多步骤任务做到一半，就说"已完成" |
| 迷失 | 长任务里忘了初始目标，来回试已失败的方法 |
| 自我感觉太好 | 评估自己写的代码，常说"没问题"哪怕有明显 bug |
| 上下文混乱 | 对话一长、信息一多，就开始草草收尾 |
| 无视规矩 | 团队有明确规范，它仍按自己熟悉的风格乱写 |

这些问题，**很多时候不是因为模型不够聪明，而是因为它缺少一套外部约束和反馈系统。**

### 1.2 三层演进：从"怎么问"到"怎么搭环境"

过去几年，AI 工程实践的关注重点经历了逐层外扩：

| 阶段 | 核心问题 | 设计对象 | 类比 |
|-----|---------|---------|------|
| **Prompt Engineering（提示词工程学）** | 该怎么问？ | 发给模型的指令文本 | 告诉厨师"中火煎3分钟" |
| **Context Engineering（上下文工程学）** | 该让模型看到什么？ | 模型推理时可见的上下文 | 给厨师备好食材和菜谱 |
| **Harness Engineering（挽具工程学）** | 整个运行环境怎么设计？ | Agent（智能体） 的约束、反馈、验证和执行系统 | 设计整个厨房的动线、安全规范、质检流程 |

三层是嵌套关系：**Prompt ⊂ Context ⊂ Harness**

- Prompt 解决"说什么"
- Context 解决"给什么"
- Harness 解决"整个系统怎么让它稳定做成"

---

## 二、Harness Engineering（挽具工程学）到底是什么？

### 2.1 名字背后的隐喻

"Harness"（挽具）这个词本身就透露着本质——它是用来驾驭"烈马"的装置。

LLM（大语言模型）/Agent（智能体）就像这种烈马：

- **能力很强**，自主性很高
- **但并不天然可靠**
- **不天然遵守项目规则**
- **不天然知道什么时候该停、该验证、该求助**

Harness 的价值，就是让它的能力真正**可驾驭**。

一个精准的技术类比：

> 模型像 CPU，上下文窗口像 RAM，Harness 像围绕 Agent（智能体）的**运行控制层（操作系统）**。

- 模型负责推理
- 上下文提供工作记忆
- Harness 负责组织流程、约束行为、保存状态、校验结果、处理异常

### 2.2 精准定义

**Harness Engineering（挽具工程学）是围绕 AI Agent（智能体）构建的一整套约束、上下文管理、反馈回路（Feedback Loop（反馈回路））与执行控制机制，目的是让模型在明确边界内，稳定、可靠、可追踪地完成复杂任务。**

它关心的核心问题：

- 怎么组织任务？
- 怎么限制行为？
- 怎么管理上下文？
- 怎么验证结果？
- 怎么处理中途失败？
- 怎么让同类错误别反复发生？

**一句话大白话：Harness 不是让模型更聪明，而是让模型真正能上生产。**

---

## 三、六层架构：Harness 的完整设计图谱

这是理解 Harness 最核心的框架——六个层级，从信息边界到约束恢复，层层递进。

### L1：信息边界层

**解决的核心问题：Agent（智能体）该知道什么、不该知道什么。**

关键设计：
- 定义角色与目标
- 裁剪无关信息
- 确定知识边界

就像操作系统的权限管理——不是所有内存都能访问。

### L2：工具系统层

**解决的核心问题：Agent（智能体）怎么跟外部世界交互。**

关键设计：
- 工具选拔（选哪些工具可用）
- 调用时机（什么时候该调用）
- 结果反馈（工具返回怎么解析）

### L3：执行编排层

**解决的核心问题：多步骤任务怎么串起来。**

关键设计：
- 理解 → 判断 → 分析 → 生成 → 检查
- 状态机（State Machine）控制执行阶段
- 阶段间强制转换规则

### L4：记忆与状态层

**解决的核心问题：长任务中间结果怎么管。**

关键设计：
- 当前状态与中间产物分离
- 长期记忆与短期工作记忆分离
- 支持上下文可恢复

### L5：评估与观测层

**解决的核心问题：Agent（智能体）怎么知道自己做对了。**

关键设计：
- 独立验证机制（"自知之明"）
- 自动化检查（Linter（代码检查工具）、test、typecheck）
- 外部系统状态确认

### L6：约束校验与恢复层

**解决的核心问题：出错了怎么办。**

关键设计：
- 规则拦截（禁止非法操作）
- 重试/回滚机制
- 循环失败检测（熔断器/Circuit Breaker 模式）

**入门建议：从 L1 和 L6 入手，投入产出比最高。**

---

## 四、上下文 40% 阈值：一条关键警戒线

当上下文利用率超过 40%，Agent（智能体）的表现会发生质变：

| 区间 | 表现 |
|-----|-----|
| **Smart Zone（智能区间）(0-40%)** | 推理聚焦、工具调用准确、代码质量高 |
| **Dumb Zone（愚蠢区间） (>40%)** | 幻觉增多、兜圈子、格式混乱 |

### 核心策略：不是压缩，而是 Context Resets（上下文重置）

当上下文快满时，正确的做法不是无限压缩，而是：

1. **结构化交接**：生成状态文档（已完成、当前进度、下一步、注意事项）
2. **启动全新 Agent（智能体）**：通过交接文档恢复状态
3. **类似重启进程解决内存泄漏**

这解决了长任务的最大痛点：上下文越来越脏、模型越来越不愿意认真收尾。

---

## 五、三根支柱：构建可靠 Harness 的核心能力

### 支柱一：可读性——让 Agent（智能体）读得懂你的系统

Agent（智能体）在每次会话开始时，对你的项目几乎一无所知。你必须明确告诉它：

- 项目是什么技术栈
- 代码目录怎么分
- 哪些规则不能碰
- 改完代码要跑什么命令
- 什么算完成

这就是 **AGENTS.md（智能体说明文件）** 的价值——给 Agent（智能体）看的项目说明书。

```markdown
# AGENTS.md（智能体说明文件）示例

## 项目概览
Next.js 14 + TypeScript 全栈项目，使用 App Router。

## 技术栈
- 框架：Next.js 14（App Router，不要用 Pages Router）
- 语言：TypeScript（严格模式）
- 测试：Vitest + Testing Library

## 开发命令
- 安装依赖：`pnpm install`
- 验证：`pnpm typecheck && pnpm lint && pnpm test`

## 架构约束
- 所有 API（应用程序接口） 路由放在 app/api/ 下
- 业务逻辑放在 lib/ 下

## 验证方式
改完代码后必须执行：
1. `pnpm typecheck`
2. `pnpm lint`
3. `pnpm test`
```

**关键点：不是信息越多越好。** AGENTS.md（智能体说明文件） 只保留最关键规则，详细设计放到 `docs/`，让 Agent（智能体）按需查阅。

### 支柱二：防御机制——让 Agent（智能体）跑在轨道里

**软约束不够，关键流程必须有硬约束。**

软约束（不可靠）：
- "请先做计划再执行"
- "请不要跳过测试"

硬约束（必须执行）：
- 没计划就不允许进入下一阶段
- 改了文件必须先跑测试
- 没验证通过就不能宣称完成
- 某些目录根本不允许写入

#### 示例一：状态机（State Machine）锁定执行阶段

```python
from enum import Enum

class AgentPhase(Enum):
    RESEARCH = "research"
    PLAN = "plan"
    EXECUTE = "execute"
    VERIFY = "verify"

class PhaseStateMachine:
    ALLOWED_TRANSITIONS = {
        AgentPhase.RESEARCH: [AgentPhase.PLAN],
        AgentPhase.PLAN: [AgentPhase.EXECUTE, AgentPhase.RESEARCH],
        AgentPhase.EXECUTE: [AgentPhase.VERIFY],
        AgentPhase.VERIFY: [AgentPhase.EXECUTE, AgentPhase.PLAN],
    }

    PHASE_PERMISSIONS = {
        AgentPhase.RESEARCH: ["read_file", "search_code", "list_files"],
        AgentPhase.EXECUTE: ["read_file", "write_file", "run_command"],
        AgentPhase.VERIFY: ["run_tests", "run_lint", "run_typecheck"],
    }
```

好处：
- 任务进度清晰
- 可以局部重试
- 可以强制先想后做

#### 示例二：防"嘴上完成，实际上没做"

```python
class ToolCallValidator:
    def validate_completion(self, agent_output, tool_call_log):
        if agent_output.claims_done and not tool_call_log.has_calls:
            return ForcedAction(
                action="retry",
                reason="你声称任务已完成，但没有工具调用记录。"
            )

        if tool_call_log.has_file_writes and not tool_call_log.has_test_runs:
            return ForcedAction(
                action="run_tests",
                reason="检测到文件修改但未运行测试。"
            )
```

#### 示例三：循环失败检测（熔断器/Circuit Breaker）

```python
class LoopDetector:
    def __init__(self, max_retries=3):
        self.failure_log = []
        self.max_retries = max_retries

    def should_break(self, proposed_action: str) -> bool:
        same_failures = [
            f for f in self.failure_log
            if f["action"] == proposed_action
        ]
        return len(same_failures) >= self.max_retries
```

#### 示例四：权限边界

```python
class PermissionBoundary:
    FORBIDDEN_PATHS = [".env", "secrets/", "config/production/", ".git/"]

    def check_file_access(self, file_path: str, operation: str):
        for forbidden in self.FORBIDDEN_PATHS:
            if file_path.startswith(forbidden):
                raise PermissionDeniedError(
                    f"禁止{operation}文件：{file_path}"
                )
```

### 支柱三：反馈回路（Feedback Loop（反馈回路））——让 Agent（智能体）在犯错后越来越稳

**生成和评估最好分开。** Agent（智能体） 自己评自己，往往容易"放水"。

#### 方法一：自动化验证

```python
class FeedbackLoop:
    def run_verification(self, changed_files: list[str]):
        results = []

        type_result = self.run_command("pnpm typecheck")
        results.append(("typecheck", type_result))

        lint_result = self.run_command("pnpm lint")
        results.append(("lint", lint_result))

        test_result = self.run_command("pnpm test")
        results.append(("test", test_result))

        return VerifyResult(
            passed=all(r.success for _, r in results),
            details=[...]
        )
```

#### 方法二：执行与评审分离（双 Agent（智能体）架构）

```
Agent（智能体） A：写代码 / 做实现
    ↓
Agent（智能体） B：按标准评审 / 找问题
    ↓
Agent（智能体） A：根据反馈修复
    ↓
再次验证
```

#### 方法三：错误经验持久化

```markdown
# .harness/lessons-learned.md

## 2026-03-20: Prisma 迁移必须在测试前执行
- 问题：修改 schema 后没跑 migrate
- 修复：在验证步骤中加入 migrate 检查
- 状态：已纳入硬约束
```

形成闭环：
```
Agent（智能体） 犯错
→ 分析根因
→ 更新文档 / 约束 / 验证
→ 下次自动带上
→ 同类错误减少
```

---

## 六、P0/P1/P2 行动清单

### P0（立即可做）

| 行动 | 为什么 | 参考 |
|-----|-------|-----|
| 创建 AGENTS.md（智能体说明文件） 并持续维护 | Agent（智能体） 每次启动自动加载，犯错就更新 | Hashimoto 每一行对应一个历史失败案例 |
| 构建自定义 Linter（代码检查工具） + 修复指令 | 报错消息直接告诉怎么改 | OpenAI 的 Linter（代码检查工具） 报错自带修复方法 |
| 团队知识放进仓库 | 写在 Slack/Wiki 对 Agent（智能体） 等于不存在 | OpenAI 以仓库为唯一事实源 |

**注意**：AGENTS.md（智能体说明文件） 只当目录用（约100行），详细规则放子文档按需加载

### P1

- 分层管理上下文（渐进式披露）
- 建立进度文件和功能列表（JSON（结构化数据格式）格式）
- 给 Agent（智能体） 端到端验证能力（浏览器自动化）
- 控制上下文利用率 ≤40%

### P2

- Agent（智能体） 专业化分工
- 定期垃圾回收
- 可观测性集成

---

## 七、从零搭最小可用 Harness

### 第一步：写一个 AGENTS.md（智能体说明文件）

先别追求完美，先把最关键的三类信息写清楚：

- **WHAT**：项目是什么、技术栈是什么
- **HOW**：常用命令、开发流程、验证方式
- **RULES**：哪些规范必须遵守、哪些目录禁止改

### 第二步：加一条硬约束

> 只要改了业务代码，就必须跑测试。

```python
def post_edit_guard(agent, edited_files):
    src_files = [f for f in edited_files if f.startswith("src/")]
    if not src_files:
        return

    result = agent.execute("pnpm test --run")
    if not result.success:
        agent.feedback(f"测试失败：\n{result.stderr}\n请修复后重新运行。")
        return RetrySignal()
```

### 第三步：引入反馈回路（Feedback Loop（反馈回路））

```
Agent（智能体） 写代码
→ 自动 lint + test
→ 失败则反馈
→ Agent（智能体） 修复
→ 再验证
→ 直到通过或升级人工
```

### 第四步：处理长任务的上下文问题

```python
class ContextManager:
    MAX_CONTEXT_UTILIZATION = 0.6

    async def run_with_reset(self, agent, task):
        subtasks = self.decompose_task(task)

        for subtask in subtasks:
            if agent.context_utilization > self.MAX_CONTEXT_UTILIZATION:
                handoff_doc = await agent.generate_handoff(
                    prompt="总结：1.已完成 2.当前进度 3.下一步 4.注意事项"
                )
                agent = agent.fresh_session()
                agent.load_context(handoff_doc)

            await agent.execute(subtask)
```

**核心思路：不要让一个会话死扛到底，而是让任务可交接、可重置、可续跑。**

---

## 八、完整执行时序示例

假设 Agent（智能体） 收到任务："修复 src/login.tsx 中的登录 bug"

1. Harness 启动新会话，加载 AGENTS.md（智能体说明文件），初始化状态为 RESEARCH
2. Agent（智能体） 请求读取 login.tsx
3. Harness 检查：RESEARCH 阶段允许 read_file，放行
4. Agent（智能体） 想直接改代码
5. Harness 检查：RESEARCH 阶段不允许 write_file，拒绝
6. Agent（智能体） 转而请求进入 PLAN 阶段
7. Harness 校验状态迁移合法，允许进入 PLAN
8. Agent（智能体） 生成修复计划
9. Harness 允许 create_plan
10. Agent（智能体） 请求进入 EXECUTE
11. Harness 允许状态迁移
12. Agent（智能体） 修改 login.tsx
13. Harness 记录到文件修改事件
14. Harness 自动触发验证守卫
15. Harness 强制进入 VERIFY，运行 typecheck / lint / test
16. 若全部通过，则任务完成；否则把错误反馈给 Agent（智能体） 重试

**关键分工**：
- **Agent（智能体）** 负责推理和执行
- **Harness** 负责约束和裁判

---

## 九、给工程师的对标翻译

| Harness 概念 | 后端里更像什么 |
|-------------|----------------|
| AGENTS.md（智能体说明文件） | README + 开发规范 + contributor guide |
| 状态机（State Machine）约束 | 工作流引擎 / Saga / Temporal |
| 权限边界 | RBAC（基于角色的访问控制） + 沙箱 + ACL（访问控制列表） |
| 工具调用验证 | 中间件 / AOP（面向切面编程） / 网关后置校验 |
| 自动验证回路 | CI/CD（持续集成/持续部署） + 质量门禁 |
| 多 Agent（智能体）评审 | Code Review / 审批流 |
| 上下文重置 | 无状态服务 + 会话持久化 |
| 循环失败检测 | 熔断器/Circuit Breaker / 重试策略 |
| Harness 整体 | 面向 Agent（智能体） 的执行控制系统 |

---

## 十、未解决的前沿问题

| 问题 | 现状 |
|-----|-----|
| 棕地项目怎么改造 | 所有公开案例全是绿地项目，零方法论 |
| 怎么验证 Agent（智能体） 做对了事 | "验证做对了事"远未解决 |
| AI 生成代码的长期可维护性 | LLM（大语言模型） 代码经常重新实现已有功能 |
| Harness 该做厚还是做薄 | 场景决定，随模型变强应定期简化 |

---

## 总结：Harness 的本质

模型已经足够强了，接下来的竞争，越来越多是在**"谁更会设计它的运行环境"**。

**一句话定义**：

> **Harness Engineering（挽具工程学），不是让模型更聪明，而是让模型真正可驾驭、可上线、可交付。**

**三个核心要点**：

- **可读性**：让 Agent（智能体） 读得懂你的系统（AGENTS.md（智能体说明文件））
- **防御**：让 Agent（智能体） 跑在轨道里，不靠自觉靠约束
- **反馈**：让 Agent（智能体） 在犯错后越来越稳（执行与评审分离）

---

## 参考阅读

- [OpenAI - Harness Engineering: Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering/)
- [Anthropic - Harness Design for Long-Running Application Development](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [Mitchell Hashimoto - My AI Adoption Journey](https://mitchellh.com/writing/my-ai-adoption-journey)
- [Martin Fowler - Harness Engineering](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html)
- [Stripe - Minions: One-Shot, End-to-End Coding Agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)
- [LangChain - The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/)
- [Can.ac - The Harness Problem](https://blog.can.ac/2026/02/12/the-harness-problem/)
- [JavaGuide - 一文搞懂 Harness Engineering](https://javaguide.cn/ai/agent/harness-engineering.html)
