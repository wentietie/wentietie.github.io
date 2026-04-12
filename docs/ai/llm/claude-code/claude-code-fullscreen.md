# Claude Code 全屏渲染来了：长对话不再闪烁

> 来源：微信公众号「老罗话知本」

## 背景

用 Claude Code 的朋友应该都有过这个体验：聊着聊着，屏幕开始闪，终端疯狂刷新，越聊越卡，最后不得不开个新对话续命。

好消息来了——Claude Code 刚发布了一个新功能，叫 **Fullscreen rendering（全屏渲染）**，一次性解决了闪烁、卡顿、内存暴涨三个问题，还顺带加了鼠标支持。

## 全屏渲染解决了什么

三个字：**不闪了**。

具体来说，它干了这么几件事：

- 输入框固定在屏幕底部，不再跟着输出内容一起上蹿下跳
- 内存恒定不变，聊 100 条和聊 1 条占用一样多
- 只渲染可见消息，不再每次更新都重绘整个终端

原理很简单：就像 vim 和 htop 一样，用终端的 alternate screen buffer 来画界面，只画你能看到的那部分。

效果最明显的环境：Ghostty、VS Code 内置终端、tmux、iTerm2

## 怎么开启

### 方式一：命令行直接开

```bash
CLAUDE_CODE_NO_FLICKER=1 claude
```

想每次都自动开启？加到 shell 配置里：

```bash
# ~/.zshrc 或 ~/.bashrc
export CLAUDE_CODE_NO_FLICKER=1
```

### 方式二：用 CC Switch 配置

如果你用 CC Switch 管理 Claude Code 配置，直接在环境变量里加上 `CLAUDE_CODE_NO_FLICKER=1` 就行。

## 鼠标操作

开启全屏渲染后，Claude Code 支持鼠标操作了：

- **点击定位光标** — 点哪里光标就在哪里
- **点击展开工具输出** — 折叠的内容点一下就能看全
- **点击打开链接和文件** — 直接点 URL 跳浏览器，点文件路径打开文件
- **拖拽选中自动复制** — 选中文字松开鼠标就复制了
- **滚轮翻页** — 鼠标滚轮上下滚动浏览对话

注意：tmux 下用鼠标需要开启 mouse mode，在 `~/.tmux.conf` 里加一行：

```
set -g mouse on
```

如果你觉得鼠标干扰了你原来的工作流，可以单独关掉鼠标但保留无闪烁：

```bash
CLAUDE_CODE_NO_FLICKER=1 CLAUDE_CODE_DISABLE_MOUSE=1 claude
```

## 对话搜索

以前想翻之前的对话怎么办？只能用终端自带的 Cmd+F 搜索。

现在按 **Ctrl+o** 进入 transcript 模式，支持 less 风格的操作：

- `/` — 搜索关键词
- `n` / `N` — 下一个/上一个匹配
- `j` / `k` — 逐行滚动
- `g` / `G` — 跳到顶部/底部

隐藏技巧：按 Ctrl+o 进入后，再按 `[` 可以把完整对话写入终端的原生 scrollback。按 `v` 可以把对话导出到编辑器里查看。

## 总结

全屏渲染让 Claude Code 的终端体验从"能用"变成了"好用"：

- 闪烁没了 → 眼睛舒服了
- 内存恒定 → 长对话不卡了
- 鼠标支持 → 操作效率翻倍
- 搜索增强 → 找东西不再靠记忆

**一行开启：**

```bash
export CLAUDE_CODE_NO_FLICKER=1
```
