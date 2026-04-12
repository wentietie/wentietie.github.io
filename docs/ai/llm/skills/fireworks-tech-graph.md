# fireworks-tech-graph：Claude Code 绘图神器

> 来源：微信公众号「AI开源提效指南」

## 简介

fireworks-tech-graph 真的是架构师、程序员的福音——再也不用在 Mermaid 的语法和 draw.io 的手动操作之间纠结了。只需用自然语言描述你的系统，就能获得专业级的 SVG + PNG 架构图。

## 核心优势

- 5 种精美视觉风格，从简洁白到暗黑霓虹到磨砂玻璃
- 8 种图表类型覆盖所有技术场景
- 内置 AI/Agent 领域知识，理解 RAG、Mem0、多 Agent 等模式
- 语义化的形状和箭头系统，自动编码含义
- 40+ 产品图标，品牌颜色精准匹配
- SVG + PNG 双输出，SVG 可编辑，PNG 可直接嵌入

## 5 种视觉风格

| 风格名称 | 背景 | 字体 | 适用场景 |
|----------|------|------|----------|
| Flat Icon (默认) | #ffffff | Helvetica | 博客、幻灯片、文档 |
| Dark Terminal | #0f0f1a | SF Mono / Fira Code | GitHub README、开发者文章 |
| Blueprint | #0a1628 | Courier New | 架构文档、工程图 |
| Notion Clean | #ffffff | system-ui | Notion、Confluence、Wiki |
| Glassmorphism | #0d1117 渐变 | Inter | 产品网站、演讲 |

## 8 种图表类型

| 类型 | 描述 | 关键布局规则 |
|------|------|--------------|
| 架构图 | 服务、组件、云基础设施 | 水平分层，自上而下 |
| 数据流图 | 数据在系统中的流向 | 每条箭头标注数据类型 |
| 流程图 | 决策树、流程步骤 | 菱形 = 决策，自上而下 |
| Agent 架构图 | LLM + 工具 + 记忆 | 五层模型：输入/Agent/记忆/工具/输出 |
| 记忆架构图 | Mem0、MemGPT 风格 | 读/写路径分离，记忆层级分明 |
| 序列图 | API 调用链、时序交互 | 垂直生命线，水平消息箭头 |
| 对比图 | 功能矩阵、方案比较 | 列 = 系统，行 = 属性 |
| 思维导图 | 概念地图、发散思维 | 中心节点，贝塞尔曲线分支 |

## AI/Agent 领域内置模式

- **RAG Pipeline**：Query → Embed → VectorSearch → Retrieve → LLM → Response
- **Agentic RAG**：添加 Agent 循环 + 工具使用
- **Agentic Search**：Query → Planner → [Search/Calc/Code] → Synthesizer
- **Mem0 Memory Layer**：Input → Memory Manager → [VectorDB + GraphDB] → Context
- **Multi-Agent**：Orchestrator → [SubAgent×N] → Aggregator → Output
- **Tool Call Flow**：LLM → Tool Selector → Execution → Parser → LLM (循环)

## 安装方法

### 方式一：Claude Skills 安装（推荐）

```
claude skills install fireworks-tech-graph
```

### 方式二：手动克隆

```
git clone https://github.com/yizhiyanhua-ai/fireworks-tech-graph.git ~/.claude/skills/fireworks-tech-graph
```

### 依赖安装

```bash
# macOS
brew install librsvg

# Ubuntu/Debian
sudo apt install librsvg2-bin

# 验证安装
rsvg-convert --version
```

## 使用示例

### 触发词

以下关键词会自动触发 Skill：

- 画图 / 帮我画 / 生成图 / 做个图 / 架构图 / 流程图 / 可视化一下 / 出图
- generate diagram / draw diagram / create chart / visualize

### 基本用法

```
画一张 RAG 流程图
生成一张 Agentic Search 架构图
```

### 指定风格

```
画一张微服务架构图，风格2（暗黑极客风）
生成 Multi-Agent 协作图，玻璃态风格
```

### 指定输出路径

```
生成 Mem0 架构图，输出到 ~/Desktop/
画一张 Tool Call 流程图 --output /tmp/diagrams/
```

## 语义形状词汇

形状在所有风格中保持一致的语义：

| 概念 | 形状 |
|------|------|
| 用户 / 人类 | 圆形 + 身体路径 |
| LLM / 模型 | 圆角矩形，双边框 |
| Agent / 编排器 | 六边形 |
| 短期记忆 | 虚线边框圆角矩形 |
| 长期记忆 | 实线圆柱体 |
| Vector Store | 带内环圆柱 |
| Graph DB | 三圆簇 |
| 工具 / 函数 | 带 ⚙ 的矩形 |
| API / 网关 | 六边形（单边框） |
| 消息队列 / 流 | 横向管道 |
| 文档 / 文件 | 折角矩形 |
| 决策节点 | 菱形 |

## 箭头语义

| 流类型 | 线宽 | 虚线 | 含义 |
|--------|------|------|------|
| 主数据流 | 2px 实线 | — | 主要请求/响应路径 |
| 控制 / 触发 | 1.5px 实线 | — | 系统 A 触发 B |
| 记忆读取 | 1.5px 实线 | — | 从存储检索 |
| 记忆写入 | 1.5px | 5,3 | 写入/存储操作 |
| 异步 / 事件 | 1.5px | 4,2 | 非阻塞 |
| 反馈 / 循环 | 1.5px 曲线 | — | 迭代推理 |

## 支持的产品图标

- **AI/ML**：OpenAI, Anthropic/Claude, Google Gemini, Meta LLaMA, Mistral, Cohere, Groq, Hugging Face
- **AI 框架**：Mem0, LangChain, LlamaIndex, LangGraph, CrewAI, AutoGen, DSPy, Haystack
- **向量数据库**：Pinecone, Weaviate, Qdrant, Chroma, Milvus, pgvector, Faiss
- **数据库**：PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, Neo4j, Cassandra
- **消息队列**：Kafka, RabbitMQ, NATS, Pulsar
- **云服务**：AWS, GCP, Azure, Cloudflare, Vercel, Docker, Kubernetes
- **可观测性**：Grafana, Prometheus, Datadog, LangSmith, Langfuse, Arize

## 链接

- GitHub：https://github.com/yizhiyanhua-ai/fireworks-tech-graph
- Claude Code Skills：https://claude.ai/code
