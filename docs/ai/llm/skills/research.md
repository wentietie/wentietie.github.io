# research：深度研究助理

> 别把 Claude Code 只当 coder，它也是研究助理

## 核心功能

Claude Code 常被看作 coding agent，但实际上它在调研型任务上也很强。

## 解决什么问题

当你给它配上 research / web-search / extract 这类 skill，它就不只是"写代码"，而是开始承担：

- 查资料
- 读网页
- 提取信息
- 比较方案
- 形成结构化判断

## 对开发者的价值

- 做技术选型的时候，要比较框架
- 接新库的时候，要读文档
- 判断方案时，要看 issue、看经验贴、看不同实践

Claude Code 如果只会写，它的价值只发挥了一半；一旦它会搜、会读、会摘、会比，它才真正变成一个研究助理。

## 安装

```bash
npx skills add tavily-ai/skills@research -g -y
```

## 备选

- https://skills.sh/199-biotechnologies/claude-deep-research-skill/deep-research

## 官方入口

- 页面：https://skills.sh/tavily-ai/skills/research

---

**标签**：#Skills #Research #WebSearch