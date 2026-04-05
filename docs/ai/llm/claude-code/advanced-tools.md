# Claude Code 高级工具：HUD 可视化

> 让 AI 协作从"猜谜"变成"并肩作战"

## Claude HUD：让 AI 协作透明化

### 为什么需要 HUD

你在终端里用 Claude Code 写代码，敲完提示词就等着它"干活"。可过一会儿你发现：

- 它到底在读哪些文件？
- 调用了什么子 Agent？
- 上下文还剩多少？
- 任务清单完成多少？

一切全黑盒，只能干瞪眼。

### Claude HUD 是什么

GitHub：https://github.com/jarrodwatts/claude-hud

专门给 Claude Code 加了一个"仪表盘"，把上下文长度、正在执行的工具、子 Agent 状态、待办事项进度，全都实时显示在输入框下方。

### 默认显示（仅占 2 行）

```
[Opus | Max] │ my-project git:(main*)
Context █████░░░░░ 45% │ Usage ██░░░░░░░░ 25% (1h 30m / 5h)
```

### 额外信息（敲 `/claude-hud:configure` 开启）

- **工具活动**：`◐ Edit: auth.ts | ✓ Read ×3 | ✓ Grep ×2`
- **子 Agent 状态**：`◐ explore [haiku]: Finding auth code (2m 15s)`
- **Todo 进度**：`▸ Fix authentication bug (2/5)`

### 三种预设

| 预设 | 内容 |
|-----|-----|
| **Full** | 全开，工具+Agent+Todo+Git+时长全显示 |
| **Essential** | 保留活动行和 Git，适合日常 |
| **Minimal** | 只留模型和上下文条，极简党最爱 |

### 安装步骤

```bash
# 1. 添加市场
/plugin marketplace add jarrodwatts/claude-hud

# 2. 安装插件
/plugin install claude-hud

# 3. Linux 用户注意
mkdir -p ~/.cache/tmp && TMPDIR=~/.cache/tmp claude

# 4. 配置
/claude-hud:setup
```

### 高级自定义

敲 `/claude-hud:configure` 进入图形化向导，可以：

- 调整项目路径显示 1-3 级目录
- 改上下文条颜色（绿色/黄色/红色阈值）
- 决定是否显示 Git 脏状态
- 切换单行紧凑模式还是多行展开模式

配置文件位置：`~/.claude/plugins/claude-hud/config.json`

---

**标签**：#ClaudeCode #HUD #Visualization