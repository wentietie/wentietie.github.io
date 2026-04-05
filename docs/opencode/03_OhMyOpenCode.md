# Oh-My-OpenCode 完全指南

## 什么是 Oh-My-OpenCode？

Oh-My-OpenCode 是 OpenCode 生态系统中最重要的插件系统，它为 OpenCode 提供了多 Agent 协作、智能规划和工作流自动化等高级功能。

## Oh-My-OpenCode 的核心价值

### 1. 多 Agent 协作

传统 AI 编程助手通常是单一 Agent，处理复杂任务时效率受限。Oh-My-OpenCode 引入多 Agent 架构：

- **规划 Agent**：负责任务分解和计划制定
- **执行 Agent**：负责具体代码实现
- **审查 Agent**：负责代码质量和规范检查

### 2. 智能循环模式

内置多种循环模式，适应不同任务类型：

| 模式 | 特点 | 适用场景 |
|------|------|----------|
| `ulw` | 快速迭代 | 需要快速出结果的简单任务 |
| `raph` | 深度思考 | 复杂问题需要深入分析 |
| `default` | 平衡模式 | 一般性任务 |

### 3. Token 消耗优化

通过智能任务分解和上下文管理，降低 Token 消耗。

## 安装 Oh-My-OpenCode

### 方式一：自动安装

```bash
opencode plugin install oh-my-opencode
```

### 方式二：手动配置

在 `opencode.json` 中添加：

```json
{
  "plugins": ["oh-my-opencode"],
  "omo": {
    "enabled": true
  }
}
```

## 基础配置

### 配置文件位置

```
C:\Users\你的用户名\.config\opencode\opencode.json
```

### 基础配置示例

```json
{
  "plugins": ["oh-my-opencode"],
  "omo": {
    "enabled": true,
    "agent": {
      "model": "glm-5",
      "loop_mode": "raph",
      "max_iterations": 10
    },
    "context": {
      "max_tokens": 4096,
      "optimize": true
    }
  }
}
```

## 进阶配置

### 多 Agent 配置

```json
{
  "omo": {
    "agents": {
      "planner": {
        "model": "deepseek-reasoner",
        "role": "分解任务，制定执行计划"
      },
      "executor": {
        "model": "glm-5",
        "role": "按照计划执行具体编码"
      },
      "reviewer": {
        "model": "kimi-2.5",
        "role": "检查代码质量和规范"
      }
    }
  }
}
```

### 循环模式配置

```json
{
  "omo": {
    "loop": {
      "mode": "raph",
      "stop_condition": {
        "max_iterations": 10,
        "token_budget": 100000,
        "quality_threshold": 0.8
      }
    }
  }
}
```

## 使用技巧

### 1. 选择合适的模型组合

根据实际测试经验：

- **主代理推荐**：`glm-5` 或 `deepseek-reasoner`
- **辅助代理**：`kimi-2.5` 适合快速审查
- **避免**：`glm-5` 有时写代码会很慢，可考虑换成其他模型

### 2. Token 消耗优化

Oh-My-OpenCode 使用过程中 Token 消耗量往往较大，以下技巧可以帮助节省：

#### 技巧一：明确任务边界

```
❌ 不要：帮我重构整个项目
✅ 要：在 src/utils/date.ts 中，重构日期格式化函数
```

#### 技巧二：分步执行

```
❌ 不要：一步完成所有功能
✅ 要：先实现核心逻辑，再逐步添加边缘情况
```

#### 技巧三：选择合适的循环模式

- 简单任务用 `ulw`
- 复杂任务用 `raph`
- 不要对简单任务过度使用复杂模式

### 3. 任务描述模板

使用结构化的任务描述可以提升效率：

```
## 任务目标
[清晰描述要完成的任务]

## 约束条件
[必须满足的条件，如性能、兼容性等]

## 参考资料
[相关文档或现有代码]

## 验收标准
[如何判断任务完成]
```

## Oh-My-OpenCode vs 原生 OpenCode

| 特性 | Oh-My-OpenCode | 原生 OpenCode |
|------|----------------|---------------|
| 多 Agent | ✅ 支持 | ❌ 单 Agent |
| 循环模式 | ✅ 多种模式 | ❌ 单次交互 |
| Token 优化 | ✅ 智能优化 | ❌ 需手动控制 |
| 任务分解 | ✅ 自动分解 | ❌ 需手动分解 |
| 学习曲线 | 较陡 | 平缓 |

## 常见问题

### Q1: Token 消耗太大怎么办？

**解决方案**：
1. 降低 `max_iterations` 限制
2. 使用 `ulw` 模式替代 `raph`
3. 减少任务范围，增加交互频率
4. 考虑使用更轻量的模型

### Q2: 多 Agent 协作不稳定？

**解决方案**：
1. 确保各 Agent 模型配置正确
2. 检查 API Key 额度
3. 降低并发请求
4. 增加任务确认节点

### Q3: 循环模式如何选择？

**参考原则**：
- 紧急简单任务 → `ulw`
- 重要复杂任务 → `raph`
- 一般任务 → `default`

## 与其他工具配合

### Zed + Oh-My-OpenCode

```
┌─────────────┐
│   Zed IDE   │
│  (图形编辑)  │
└──────┬──────┘
       │
       ↓
┌─────────────────────┐
│   OpenCode + Oh     │
│   (终端 + 多Agent)  │
└─────────────────────┘
```

### MCP 扩展

```json
{
  "omo": {
    "mcp": {
      "enabled": true,
      "servers": ["filesystem", "docker", "database"]
    }
  }
}
```

## 最佳实践总结

1. **从小任务开始**：先在简单任务上熟悉 Oh-My-OpenCode
2. **选择合适模型**：不是越强越好，要平衡效果和成本
3. **控制 Token 预算**：设置 `token_budget` 避免意外超支
4. **善用循环模式**：不同任务用不同模式
5. **保持人工监督**：AI 辅助不是替代人工审核

## 更新与升级

```bash
# 检查更新
opencode plugin update oh-my-opencode

# 升级到最新版
opencode plugin upgrade oh-my-opencode
```
