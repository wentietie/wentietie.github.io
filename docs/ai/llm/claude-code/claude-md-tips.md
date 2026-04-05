# Claude Code 效率提升：CLAUDE.md 与 Token 优化

> 来源：微信公众号文章整合

## CLAUDE.md 全面指南

### 为什么需要 CLAUDE.md

Claude 每次会话开始时都是"失忆"的。它不知道你代码风格偏好，不知道该如何运行测试，也不知道你的团队使用特定的分支命名规范。

CLAUDE.md 正是为了解决这个问题而存在的。Claude 会自动读取它，因此你的偏好可以在不同会话之间持续生效。

### 如何创建

最快的方式是使用 `/init` 命令。在项目目录中运行它，Claude 会根据你的项目结构和检测到的技术栈，生成一个初始版本。

```bash
/init
```

生成后建议：**删除不需要的部分**。相比从头写，删除要容易得多。

### 文件位置

| 位置 | 范围 |
|-----|-----|
| 项目根目录 | 提交到版本控制，团队共享 |
| `.claude/CLAUDE.md` | 配置文件集中放置 |
| `~/.claude/CLAUDE.md` | 用户级默认配置，所有项目生效 |
| `CLAUDE.local.md` | 不纳入版本控制的个人偏好 |

> 注意：文件名必须严格命名为 `CLAUDE.md`（CLAUDE 全大写，.md 小写）

### 如何组织

#### 必备内容

1. **项目背景（Project context）**
   - 用一句话让 Claude 快速进入状态
   - 例如："这是一个使用 Stripe 支付的 Next.js 电商应用。"

2. **代码风格（Code style）**
   - 格式和代码模式偏好
   - 要具体："使用 ES modules，偏好具名导出"

3. **命令（Commands）**
   - 如何运行测试、构建、Lint、部署

4. **坑点/注意事项（Gotchas）**
   - 项目特有的警告和陷阱

#### 完整示例

```markdown
# Project: ShopFront

Next.js 14 e-commerce application with App Router, Stripe payments, and Prisma ORM.

## Code Style
- TypeScript strict mode, no `any` types
- Use named exports, not default exports
- CSS: Tailwind utility classes, no custom CSS files

## Commands
- `npm run dev`: Start development server (port 3000)
- `npm run test`: Run Jest tests
- `npm run test:e2e`: Run Playwright end-to-end tests
- `npm run lint`: ESLint check
- `npm run db:migrate`: Run Prisma migrations

## Architecture
- `/app`: Next.js App Router pages and layouts
- `/components/ui`: Reusable UI components
- `/lib`: Utilities and shared logic
- `/prisma`: Database schema and migrations
- `/app/api`: API routes

## Important Notes
- NEVER commit .env files
- The Stripe webhook handler in /app/api/webhooks/stripe must validate signatures
- Product images are stored in Cloudinary, not locally
- See @docs/authentication.md for auth flow details
```

### @imports 引用机制

CLAUDE.md 支持使用 `@path/to/file` 导入其他文件：

```markdown
See @README.md for project overview
See @docs/api-patterns.md for API conventions
See @package.json for available npm scripts
```

### .claude/rules/ 模块化规则

对于更大的项目，可以拆分成多个规则文件：

```
your-project/
├── .claude/
│   ├── CLAUDE.md           # 主项目说明
│   └── rules/
│       ├── code-style.md   # 代码风格规范
│       ├── testing.md      # 测试约定
│       └── security.md     # 安全要求
```

### 维护建议

1. **工作时不断补充规则**：当 Claude 做出一个你想纠正的假设时，直接说"把这条规则加进我的 CLAUDE.md"
2. **定期回顾和整理**：每隔几周让 Claude 帮你审查并优化一次 CLAUDE.md
3. **对关键规则进行强调**：
   - "IMPORTANT：绝不要直接修改 migrations 文件夹"
   - "YOU MUST：提交前必须运行测试"

### 最佳实践清单

- [ ] 开头用一句话说明项目是什么
- [ ] 代码风格偏好要具体、可执行
- [ ] 包含关键命令（测试、构建、Lint、部署）
- [ ] 对坑点的描述要足够具体
- [ ] 控制在 300 行以内
- [ ] 把详细说明移动到通过 @import 引用的文件中
- [ ] 删除任何过时的或与新规则冲突的内容
- [ ] 对真正关键的规则进行强调
- [ ] 在工作过程中持续添加指令

## 第一性原理 CLAUDE.md

把"第一性原理"写入到 CLAUDE.md 里，效果惊人：

```markdown
「以第一性原理！从原始需求和问题本质出发，不从惯例或模板出发。
1. 不要假设我清楚自己想要什么。动机或目标不清晰时，停下来讨论。
2. 目标清晰但路径不是最短的，直接告诉我并建议更好的办法。
3. 遇到问题追根因，不打补丁。每个决策都要能回答"为什么"。
4. 输出说重点，砍掉一切不改变决策的信息。」
```

会让你完全惊喜。

## Token 效率优化

### 问题

Claude Code 每次回复都要说"Sure!""Great question!"，结尾再来句"I hope this helps!"，中间还要复述一遍问题。这些"礼貌"全在消耗 token，但信息量为零。

### 解决方案

一个 8 行的 CLAUDE.md，效果惊人：

| 测试类型 | 优化前 | 优化后 | 减少 |
|---------|-------|-------|-----|
| 代码 review | 120词 | 30词 | -75% |
| 概念解释 | 180词 | 65词 | -64% |
| 纠正错误事实 | 55词 | 20词 | -64% |

**总输出 token 减少 63%，信息零损失。**

### 8行规则

```markdown
1. Think before acting. Read existing files before writing code.
2. Be concise in output but thorough in reasoning.
3. Prefer editing over rewriting whole files.
4. Do not re-read files you have already read.
5. Test your code before declaring done.
6. No sycophantic openers or closing fluff.
7. Keep solutions simple and direct.
8. User instructions always override this file.
```

### 适用场景

CLAUDE.md 本身每轮对话都要作为输入 token 加载。只有**高频场景**才有净收益：

- Agent 循环
- 自动化流水线
- 日均 100+ prompt

**项目地址**：https://github.com/drona23/claude-token-efficient

---

**标签**：#ClaudeCode #效率优化 #CLAUDE.md