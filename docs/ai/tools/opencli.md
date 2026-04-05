# OpenCLI - 把任何网站变成命令行工具

> **把任何网站、本地工具、Electron 应用变成能够让 AI 调用的命令行！**
> 零风控 · 复用 Chrome/Chromium 登录 · AI 自动发现接口 · 全能 CLI 枢纽

## 简介

OpenCLI 将任何网站、本地 CLI 或 Electron 应用变成命令行工具，79+ 预置适配器支持 B站、知乎、小红书、Twitter/X、Reddit、YouTube 等多种站点。

**专为 AI Agent 打造**：加载 `opencli-operate` skill，赋予 AI Agent（Claude Code、Cursor 等）直接操控浏览器的能力。

**核心亮点**：
- **CLI All Electron** — 支持把所有 Electron 应用 CLI 化，让 AI 控制自己
- **浏览器自动化** — 赋予 AI Agent 直接操控浏览器的能力
- **零风控** — 复用 Chrome/Chromium 登录态，无需存储任何凭证
- **零 LLM 成本** — 运行时不消耗任何 token

## 前置要求

- **Node.js**: >= 20.0.0
- **Chrome 或 Chromium** 浏览器正在运行，且已登录目标网站

## 安装

### npm 全局安装（推荐）

```bash
npm install -g @jackwener/opencli

# 安装 AI Skills
npx skills add jackwener/opencli
```

### 从源码安装

```bash
git clone git@github.com:jackwener/opencli.git
cd opencli
npm install
npm run build
npm link
```

## 快速开始

```bash
opencli list                              # 查看所有命令
opencli list -f yaml                      # 以 YAML 列出所有命令
opencli hackernews top --limit 5          # 公共 API，无需浏览器
opencli bilibili hot --limit 5            # 浏览器命令
opencli zhihu hot -f json                 # JSON 输出
opencli zhihu hot -f yaml                 # YAML 输出
```

## 支持平台一览

| 类别 | 平台 |
|------|------|
| **社交媒体** | Twitter/X、Reddit、小红书、微博、抖音、知乎 |
| **视频站** | B站、YouTube、TikTok |
| **技术社区** | HackerNews、StackOverflow、GitHub Trending |
| **AI 工具** | ChatGPT、Claude、Cursor、Codex、Gemini、豆包 |
| **生活服务** | 微信、钉钉、企业微信、飞书 |
| **电商** | 京东、淘宝、拼多多、闲鱼 |
| **工具** | Notion、Obsidian、Weread、豆瓣 |

## 桌面应用适配器

| 应用 | 功能 |
|------|------|
| **Cursor** | 控制 Cursor IDE — Composer、对话、代码提取 |
| **Codex** | 驱动 OpenAI Codex CLI Agent |
| **Antigravity** | 控制 Antigravity Ultra |
| **ChatGPT** | 自动化操作 ChatGPT macOS 桌面客户端 |
| **Notion** | 搜索、读取、写入 Notion 页面 |

## 浏览器自动化

让 AI Agent 直接控制浏览器，命令包括：`open`、`state`、`click`、`type`、`select`、`keys`、`wait`、`get`、`screenshot`、`scroll`、`back`、`eval`、`network`。

## 下载功能

```bash
# 下载小红书笔记
opencli xiaohongshu download abc123 --output ./xhs

# 下载 B站视频
opencli bilibili download BV1xxx --output ./bilibili

# 导出微信公众号文章
opencli weixin download --url "https://mp.weixin.qq.com/s/xxx" --output ./weixin
```

## 输出格式

所有命令支持 `-f` 参数：`table`（默认）、`json`、`yaml`、`md`、`csv`

```bash
opencli bilibili hot -f json    # JSON 输出
opencli bilibili hot -f yaml   # YAML 输出
opencli bilibili hot -v        # 详细模式
```

## 扩展 Chrome

1. 下载 [Releases](https://github.com/jackwener/opencli/releases) 中的 `opencli-extension.zip`
2. 解压后在 Chrome 中打开 `chrome://extensions`
3. 启用右上角 **开发者模式**
4. 点击 **加载已解压的扩展程序**，选择解压后的文件夹

## 相关资源

- [GitHub 仓库](https://github.com/jackwener/opencli)
- [官方文档](https://github.com/jackwener/opencli/blob/main/README.zh-CN.md)
- [npm 包](https://www.npmjs.com/package/@jackwener/opencli)
