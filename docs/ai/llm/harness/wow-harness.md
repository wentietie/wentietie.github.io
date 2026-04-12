# Wow-harness：Claude Code 的治理层

> 来源：微信公众号「开源星探」

## 背景

56 天，1295 次提交，156 万行代码——全是 AI 自己写的。

有没有试过，把一整个项目交给 AI？不是让它帮你补个函数、改个 bug。而是——你说一句"我要做 X"，然后它自己设计架构、拆任务、写代码、跑测试、做审查、出 PR。

今天开源的这个东西，就是让这件事成为可能的核心——**wow-harness，Claude Code 的治理层**。

## 一句话说清它是什么

Wow-harness 给你的 Claude Code 项目装上一套完整的工程治理。

一行命令安装。装完之后，AI agent 获得四个能力：

- **自组织**——16 个专业 skill，从架构到开发到审查，各司其职，8 关状态机管控全流程
- **自学习**——AI 犯过的错自动提取成规则，注入执行层，同样的坑永不再踩
- **自发现**——从你的工作历史中识别重复模式，提议封装成新 skill，harness 会长出新能力
- **自安装**——三档深度，按你的信任度选择，幂等安装，不覆盖已有配置

不是提示词。不是文档。是**机械化的工程治理**。

## 为什么需要它

用过 Claude Code 的人都有体感：AI 写代码很快，但放心交给它是另一回事。

你在 CLAUDE.md 里写了一堆规则。AI 有时候听，有时候不听。不是它故意的——对话长了，早期规则会被上下文压缩挤掉。实测下来，CLAUDE.md 的规则遵从率大概 **20%**。

你叫审查 AI "只看不改"。它有 **30%** 的概率会忍不住顺手把代码改了。

AI 说"完成了"。你去一查，测试没跑，文件没提交。统计过，stop 尝试中有 **67%** 没有真正完成的证据。

这些不是 bug。这是 LLM 的**结构性特征**。解决方法不是写更好的提示词。是**造机械装置**。

## 自组织：你说一句话，它自己干完

你说"我要做一个用户注册页面"。接下来发生的事：

- **Gate 0** — lead 接管，锁定问题，判定变更分类
- **Gate 1** — arch 输出架构设计，列清所有消费方
- **Gate 2** — 自动启动一个全新的、独立的 AI 做审查。这个审查 AI 不共享之前的对话，从头看。而且它的工具清单里没有 Edit 和 Write——物理上改不了代码
- **Gate 3-4** — 输出详细计划，plan-lock 冻结方案，再做一轮独立审查
- **Gate 5** — task-arch 把计划拆成可并行执行的工作包
- **Gate 6** — 独立审查工作包拆分
- **Gate 7** — harness-dev 写代码，边写边记日志
- **Gate 8** — 终审，独立 AI + 端到端验收，通过了才出 PR

你做的事：定方向、纠偏、accept PR。中间全自动。

16 个 skill 各司其职：lead、arch、harness-dev、guardian-fixer、task-arch、harness-ops、harness-eng-test、harness-lab、crystal-learn、skill-discovery、plan-lock、bug-triage、harness-eng、harness-voice、bug-pipeline、harness-dev-handoff。

## 自学习：犯一次错，永久免疫

Wow-harness 有一个叫 **crystal-learn** 的能力。它的角色是适应性免疫系统。

它不修具体 bug。它提取"这类错误为什么总会回来"，把它压成不变量。

目前已经从不真实生产事故中提取了 **8 条已确认不变量**：

| 编号 | 名称 | 描述 |
|------|------|------|
| INV-0 | 快照幻觉 | 记忆中的文件状态不等于磁盘当前状态，声称某文件存在之前，必须实际确认 |
| INV-1 | 波纹衰减 | 改了源头不等于改完，改动后必须 grep 消费方 |
| INV-2 | 格式断崖 | 表面格式正确不代表语义正确 |
| INV-3 | 并发写入 | 多 agent 并行时，共享文件必须有写入协调 |
| INV-4 | 真相源分裂 | 同一个事实写在两个地方，迟早不一致，必须收敛到单一源 |
| INV-5 | 语义搭便车 | 表面一样不代表语义一样，复用前先问"原来为什么这么写" |
| INV-6 | 验证衰减 | 只测最容易的一层，难的跳过，验证必须从用户价值链倒推 |
| INV-7 | 无主接缝 | 两个模块的交界处没人管，共享接口必须指定 seam_owner |

这不是规则库。这是**免疫系统**。

## 自安装：一行命令，开箱即用

```bash
git clone https://github.com/NatureBlueee/wow-harness.git
cd wow-harness
python3 scripts/install/phase2_auto.py /path/to/your/project
```

三档安装，按你的信任深度选：

- **drop-in** — 原样安装所有 hook 和 skill，不读你的任何文件，适合先试试看
- **adapt（默认）** — 读你的 README 和文档，把 skill 适配到你的项目上下文
- **mine** — 读你的工作 transcript，深度适配到你的开发模式

## 机械约束：让规则变成红绿灯

wow-harness 有 **18 个 hook**，覆盖 7 个生命周期阶段。它们在动作发生的那一刻介入，不是事后审查：

- **SessionStart** — 加载上下文、重置风险状态、检查工具可用性
- **PreToolUse** — 在 AI 执行动作之前拦截，危险部署？直接 exit 2，物理阻断
- **PostToolUse** — 编辑了文件？自动注入这个文件所属领域的规则
- **Stop** — AI 想退出？先解析本 session 的 transcript，提取写过的文件列表
- **SessionEnd** — 自动反思、分析行为轨迹、持久化进度
- **PreCompact** — 上下文压缩前，自动保存关键目标信息
- **PostToolUseFailure** — 工具调用失败后自动记录

不是"提醒你别做"。是**红绿灯**——不管你记不记得交规，红灯就是停。

## 我们拿它做了什么

wow-harness 从 Towow（通爻）的生产开发中提取出来。

56 天。1295 次提交。156 万行代码。1992 个测试。一个人 + AI，全自主交付了：

- 后端协议引擎
- MCP 服务器（PyPI + npm 双发布）
- 官网
- Admin 管理后台
- 多个场景垂直应用

## 链接

- GitHub：github.com/NatureBlueee/wow-harness
- License：MIT
