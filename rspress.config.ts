import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

/**
 * Rspress 对「带下拉菜单（items）的导航项」不会渲染激活态，
 * 这里用 :has() 在下拉项命中当前页面时保持父级分组高亮。
 */
const navActiveStyle = {
  name: 'nav-active-style',
  globalStyles: path.join(__dirname, 'styles/nav-active.css'),
};

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'wenatie',
  markdown: {
    checkDeadLinks: { excludes: [] },
  },
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  plugins: [navActiveStyle],
  themeConfig: {
    outlineTitle: '本页目录',

    // 顶部导航：按内容域分组，点击标题进入分组首页，悬停展开该分组的一级菜单
    nav: [
      {
        text: 'AI',
        link: '/ai/llm/llm-study/part1',
        activeMatch: '^(?:/ai/|/ai/)',
        items: [
          { text: '大模型入门', link: '/ai/llm/llm-study/part1', activeMatch: '^(?:/ai/llm/llm-study/part1|/ai/llm/llm-study/part1)(\\.html)?$' },
          { text: 'chatGLM 实践', link: '/ai/llm/chatglm/part1', activeMatch: '^(?:/ai/llm/chatglm/part1|/ai/llm/chatglm/part1)(\\.html)?$' },
          { text: 'Harness Engineering', link: '/ai/llm/harness/harness-engineering-deep-dive', activeMatch: '^(?:/ai/llm/harness/|/ai/llm/harness/)' },
          { text: 'Claude Code', link: '/ai/llm/claude-code/01_EverythingClaudeCode', activeMatch: '^(?:/ai/llm/claude-code/|/ai/llm/claude-code/)' },
          { text: 'OpenCode', link: '/opencode/01_OpenCode使用教程', activeMatch: '^(?:/opencode/|/opencode/)' },
          { text: 'Skills 精选', link: '/ai/llm/skills/agent-browser', activeMatch: '^(?:/ai/llm/skills/|/ai/llm/skills/)' },
          { text: 'MCP 服务器', link: '/ai/llm/mcp/docker-mcp', activeMatch: '^(?:/ai/llm/mcp/|/ai/llm/mcp/)' },
          { text: 'AI 工具', link: '/ai/tools/opencli', activeMatch: '^(?:/ai/tools/opencli|/ai/tools/opencli)(\\.html)?$' }
        ]
      },
      {
        text: '前端基础',
        link: '/JavaScript/basic/part1',
        activeMatch: '^(?:/JavaScript/|/JavaScript/)',
        items: [
          { text: '重学 JS', link: '/JavaScript/basic/part1', activeMatch: '^(?:/JavaScript/basic/|/JavaScript/basic/)' },
          { text: 'JS 高级', link: '/JavaScript/gaoji/p1', activeMatch: '^(?:/JavaScript/gaoji/p1|/JavaScript/gaoji/p1)(\\.html)?$' },
          { text: 'ES6 入门', link: '/JavaScript/es6/es6-1', activeMatch: '^(?:/JavaScript/es6/|/JavaScript/es6/)' },
          { text: '你不知道的 JavaScript', link: '/JavaScript/youdontknowjs/part1', activeMatch: '^(?:/JavaScript/youdontknowjs/|/JavaScript/youdontknowjs/)' },
          { text: '设计模式', link: '/JavaScript/design/readme', activeMatch: '^(?:/JavaScript/design/|/JavaScript/design/)' },
          { text: 'TypeScript', link: '/JavaScript/typescript/ts-basic', activeMatch: '^(?:/JavaScript/typescript/ts-basic|/JavaScript/typescript/ts-basic)(\\.html)?$' }
        ]
      },
      {
        text: '框架',
        link: '/formwork/vue/vueyuanli',
        activeMatch: '^(?:/formwork/|/formwork/)',
        items: [
          { text: 'Vue2', link: '/formwork/vue/vueyuanli', activeMatch: '^(?:/formwork/vue/|/formwork/vue/)' },
          { text: 'Vue3 入门', link: '/formwork/vue3/reactive/part1', activeMatch: '^(?:/formwork/vue3/reactive/|/formwork/vue3/reactive/)' },
          { text: 'Spring5 入门', link: '/formwork/spring5/part1', activeMatch: '^(?:/formwork/spring5/|/formwork/spring5/)' },
          { text: 'Spring6 入门', link: '/formwork/spring6/spring6', activeMatch: '^(?:/formwork/spring6/|/formwork/spring6/)' }
        ]
      },
      {
        text: '工程化',
        link: '/gongjushu/webpack/wp1',
        activeMatch: '^(?:/gongjushu/|/gongjushu/)',
        items: [
          { text: 'Webpack', link: '/gongjushu/webpack/wp1', activeMatch: '^(?:/gongjushu/webpack/wp1|/gongjushu/webpack/wp1)(\\.html)?$' },
          { text: 'Git', link: '/gongjushu/git/git', activeMatch: '^(?:/gongjushu/git/git|/gongjushu/git/git)(\\.html)?$' }
        ]
      },
      {
        text: '随笔笔记',
        link: '/notes/JS/hwdj',
        activeMatch: '^(?:/notes/|/notes/)',
        items: [
          { text: 'JS 随笔', link: '/notes/JS/hwdj', activeMatch: '^(?:/notes/JS/|/notes/JS/)' },
          { text: 'CSS 随笔', link: '/notes/CSS/css-selector', activeMatch: '^(?:/notes/CSS/|/notes/CSS/)' },
          { text: '浏览器随笔', link: '/notes/browser/xmlhttprequest', activeMatch: '^(?:/notes/browser/|/notes/browser/)' },
          { text: 'Node 随笔', link: '/notes/node/node', activeMatch: '^(?:/notes/node/|/notes/node/)' }
        ]
      },
      {
        text: '后端与运维',
        link: '/tang/java2/00_前言',
        activeMatch: '^(?:/tang/|/tang/)',
        items: [
          { text: 'Java 基础查漏补缺', link: '/tang/java2/00_前言', activeMatch: '^(?:/tang/java2/|/tang/java2/)' },
          { text: 'MySQL', link: '/tang/mysql/01_MySQL概述', activeMatch: '^(?:/tang/mysql/|/tang/mysql/)' },
          { text: '微服务', link: '/tang/mservice/1', activeMatch: '^(?:/tang/mservice/|/tang/mservice/)' },
          { text: 'Elasticsearch', link: '/tang/Elasticsearch/01_Elasticsearch概述', activeMatch: '^(?:/tang/Elasticsearch/|/tang/Elasticsearch/)' },
          { text: 'Docker', link: '/tang/docker/Docker', activeMatch: '^(?:/tang/docker/|/tang/docker/)' },
          { text: 'K8s', link: '/tang/k8s/学习资料/command', activeMatch: '^(?:/tang/k8s/|/tang/k8s/)' },
          { text: 'Prometheus', link: '/tang/Prometheus/1', activeMatch: '^(?:/tang/Prometheus/|/tang/Prometheus/)' },
          { text: 'Python', link: '/tang/Python/1', activeMatch: '^(?:/tang/Python/|/tang/Python/)' },
          { text: 'Git / GitLab', link: '/tang/gitlab/gitlab-commands', activeMatch: '^(?:/tang/gitlab/|/tang/gitlab/)' },
          { text: '服务器环境安装', link: '/tang/server/CentOS7root账号免密登录', activeMatch: '^(?:/tang/server/|/tang/server/)' },
          { text: '项目上线', link: '/tang/项目上线/xiaochengxu', activeMatch: '^(?:/tang/项目上线/xiaochengxu|/tang/%E9%A1%B9%E7%9B%AE%E4%B8%8A%E7%BA%BF/xiaochengxu)(\\.html)?$' },
          { text: '物联网项目', link: '/tang/IoTPlatform/jetlinks', activeMatch: '^(?:/tang/IoTPlatform/jetlinks|/tang/IoTPlatform/jetlinks)(\\.html)?$' },
          { text: '其他', link: '/tang/typora配置/1', activeMatch: '^(?:/tang/typora配置/1|/tang/typora%E9%85%8D%E7%BD%AE/1)(\\.html)?$' }
        ]
      },
      {
        text: '鸿蒙',
        link: '/harmony/part0',
        activeMatch: '^(?:/harmony/|/harmony/)',
        items: [
          { text: '知识地图', link: '/harmony/part0', activeMatch: '^(?:/harmony/part0|/harmony/part0)(\\.html)?$' },
          { text: '快速入门', link: '/harmony/kuaisurumen/part1', activeMatch: '^(?:/harmony/kuaisurumen/|/harmony/kuaisurumen/)' }
        ]
      }
    ],

    // 左侧导航：范围 = 顶部导航下拉中选中的菜单（路径前缀最长匹配）
    sidebar: {
      '/ai/llm/llm-study/part1': [
        {
          text: '大模型入门',
          items: [
            { text: '大模型入门', link: '/ai/llm/llm-study/part1' }
          ]
        }
      ],
      '/ai/llm/chatglm/part1': [
        {
          text: 'chatGLM 实践',
          items: [
            { text: 'chatGLM 实践', link: '/ai/llm/chatglm/part1' }
          ]
        }
      ],
      '/ai/llm/harness/': [
        {
          text: 'Harness Engineering',
          items: [
            { text: '深度解析：完整指南', link: '/ai/llm/harness/harness-engineering-deep-dive' },
            { text: 'JavaGuide 深度总结', link: '/ai/llm/harness/javaguide-harness-summary' },
            { text: '从零理解到动手实践', link: '/ai/llm/harness/part1' },
            { text: 'Wow-harness', link: '/ai/llm/harness/wow-harness' },
            { text: '六大组件全解析', link: '/ai/llm/harness/harness-six-components' },
            { text: 'JK Launcher 工程化落地实战', link: '/ai/llm/harness/jk-launcher-harness-engineering' }
          ]
        }
      ],
      '/ai/llm/claude-code/': [
        {
          text: 'Claude Code',
          items: [
            { text: 'Everything Claude Code', link: '/ai/llm/claude-code/01_EverythingClaudeCode' },
            { text: '完整使用教程', link: '/ai/llm/claude-code/05_ClaudeCode完整教程' },
            { text: 'OpenCode 与 ClaudeCode 对比', link: '/ai/llm/claude-code/04_OpenCode与ClaudeCode对比' },
            { text: 'Oh-My-ClaudeCode', link: '/ai/llm/claude-code/oh-my-claude-code' },
            { text: 'OpenSpec + Superpowers', link: '/ai/llm/claude-code/openspec-superpowers' },
            { text: 'OMC + Superpowers 使用指南', link: '/ai/llm/claude-code/omc-superpowers-guide' },
            { text: '2026 热门 Skills 盘点', link: '/ai/llm/claude-code/skills-2026' },
            { text: '最佳实践', link: '/ai/llm/claude-code/openspec-superpowers' },
            { text: 'CLAUDE.md 与效率优化', link: '/ai/llm/claude-code/claude-md-tips' },
            { text: 'HUD 可视化', link: '/ai/llm/claude-code/advanced-tools' },
            { text: '真实案例与源码解析', link: '/ai/llm/claude-code/real-cases' },
            { text: '全屏渲染', link: '/ai/llm/claude-code/claude-code-fullscreen' },
            { text: 'Anthropic 官方 CLAUDE.md 最佳实践', link: '/ai/llm/claude-code/anthropic-official-claude-md' },
            { text: 'Best Practice 系统化实战指南', link: '/ai/llm/claude-code/claude-code-best-practice' }
          ]
        }
      ],
      '/opencode/': [
        {
          text: 'OpenCode',
          items: [
            { text: 'OpenCode 使用教程', link: '/opencode/01_OpenCode使用教程' },
            { text: 'OpenCode 最佳实践', link: '/opencode/02_OpenCode最佳实践' },
            { text: 'OhMyOpenCode 完全指南', link: '/opencode/03_OhMyOpenCode' }
          ]
        }
      ],
      '/ai/llm/skills/': [
        {
          text: 'Skills 精选',
          items: [
            { text: 'agent-browser', link: '/ai/llm/skills/agent-browser' },
            { text: 'find-skills', link: '/ai/llm/skills/find-skills' },
            { text: 'summarize', link: '/ai/llm/skills/summarize' },
            { text: 'skill-creator', link: '/ai/llm/skills/skill-creator' },
            { text: 'sequential-thinking', link: '/ai/llm/skills/sequential-thinking' },
            { text: 'tmux', link: '/ai/llm/skills/tmux' },
            { text: 'webapp-testing', link: '/ai/llm/skills/webapp-testing' },
            { text: 'code-refactoring', link: '/ai/llm/skills/code-refactoring' },
            { text: 'changelog-maintenance', link: '/ai/llm/skills/changelog-maintenance' },
            { text: 'research', link: '/ai/llm/skills/research' },
            { text: 'frontend-design', link: '/ai/llm/skills/frontend-design' },
            { text: 'git-automation', link: '/ai/llm/skills/git-automation' },
            { text: 'unit-test-gen', link: '/ai/llm/skills/unit-test-gen' },
            { text: 'karpathy-skills', link: '/ai/llm/skills/karpathy-skills' },
            { text: 'agent-osmani-skills', link: '/ai/llm/skills/agent-osmani-skills' },
            { text: 'fireworks-tech-graph', link: '/ai/llm/skills/fireworks-tech-graph' },
            { text: 'baoyu-slide-deck', link: '/ai/llm/skills/baoyu-slide-deck' },
            { text: 'Agent Skills 生产级代码实践', link: '/ai/llm/skills/agent-skills-production-code' }
          ]
        }
      ],
      '/ai/llm/mcp/': [
        {
          text: 'MCP 服务器',
          items: [
            { text: 'docker-mcp', link: '/ai/llm/mcp/docker-mcp' },
            { text: 'security-mcp', link: '/ai/llm/mcp/security-mcp' },
            { text: 'postgres-mcp', link: '/ai/llm/mcp/postgres-mcp' },
            { text: 'context7', link: '/ai/llm/mcp/context7' },
            { text: 'filesystem-mcp', link: '/ai/llm/mcp/filesystem-mcp' }
          ]
        }
      ],
      '/ai/tools/opencli': [
        {
          text: 'AI 工具',
          items: [
            { text: 'OpenCLI', link: '/ai/tools/opencli' }
          ]
        }
      ],
      '/ai/': [
        {
          text: '大模型入门',
          items: [
            { text: '大模型入门', link: '/ai/llm/llm-study/part1' }
          ]
        },
        {
          text: 'chatGLM 实践',
          items: [
            { text: 'chatGLM 实践', link: '/ai/llm/chatglm/part1' }
          ]
        },
        {
          text: 'Harness Engineering',
          items: [
            { text: '深度解析：完整指南', link: '/ai/llm/harness/harness-engineering-deep-dive' },
            { text: 'JavaGuide 深度总结', link: '/ai/llm/harness/javaguide-harness-summary' },
            { text: '从零理解到动手实践', link: '/ai/llm/harness/part1' },
            { text: 'Wow-harness', link: '/ai/llm/harness/wow-harness' },
            { text: '六大组件全解析', link: '/ai/llm/harness/harness-six-components' },
            { text: 'JK Launcher 工程化落地实战', link: '/ai/llm/harness/jk-launcher-harness-engineering' }
          ]
        },
        {
          text: 'Claude Code',
          items: [
            { text: 'Everything Claude Code', link: '/ai/llm/claude-code/01_EverythingClaudeCode' },
            { text: '完整使用教程', link: '/ai/llm/claude-code/05_ClaudeCode完整教程' },
            { text: 'OpenCode 与 ClaudeCode 对比', link: '/ai/llm/claude-code/04_OpenCode与ClaudeCode对比' },
            { text: 'Oh-My-ClaudeCode', link: '/ai/llm/claude-code/oh-my-claude-code' },
            { text: 'OpenSpec + Superpowers', link: '/ai/llm/claude-code/openspec-superpowers' },
            { text: 'OMC + Superpowers 使用指南', link: '/ai/llm/claude-code/omc-superpowers-guide' },
            { text: '2026 热门 Skills 盘点', link: '/ai/llm/claude-code/skills-2026' },
            { text: '最佳实践', link: '/ai/llm/claude-code/openspec-superpowers' },
            { text: 'CLAUDE.md 与效率优化', link: '/ai/llm/claude-code/claude-md-tips' },
            { text: 'HUD 可视化', link: '/ai/llm/claude-code/advanced-tools' },
            { text: '真实案例与源码解析', link: '/ai/llm/claude-code/real-cases' },
            { text: '全屏渲染', link: '/ai/llm/claude-code/claude-code-fullscreen' },
            { text: 'Anthropic 官方 CLAUDE.md 最佳实践', link: '/ai/llm/claude-code/anthropic-official-claude-md' },
            { text: 'Best Practice 系统化实战指南', link: '/ai/llm/claude-code/claude-code-best-practice' }
          ]
        },
        {
          text: 'OpenCode',
          items: [
            { text: 'OpenCode 使用教程', link: '/opencode/01_OpenCode使用教程' },
            { text: 'OpenCode 最佳实践', link: '/opencode/02_OpenCode最佳实践' },
            { text: 'OhMyOpenCode 完全指南', link: '/opencode/03_OhMyOpenCode' }
          ]
        },
        {
          text: 'Skills 精选',
          items: [
            { text: 'agent-browser', link: '/ai/llm/skills/agent-browser' },
            { text: 'find-skills', link: '/ai/llm/skills/find-skills' },
            { text: 'summarize', link: '/ai/llm/skills/summarize' },
            { text: 'skill-creator', link: '/ai/llm/skills/skill-creator' },
            { text: 'sequential-thinking', link: '/ai/llm/skills/sequential-thinking' },
            { text: 'tmux', link: '/ai/llm/skills/tmux' },
            { text: 'webapp-testing', link: '/ai/llm/skills/webapp-testing' },
            { text: 'code-refactoring', link: '/ai/llm/skills/code-refactoring' },
            { text: 'changelog-maintenance', link: '/ai/llm/skills/changelog-maintenance' },
            { text: 'research', link: '/ai/llm/skills/research' },
            { text: 'frontend-design', link: '/ai/llm/skills/frontend-design' },
            { text: 'git-automation', link: '/ai/llm/skills/git-automation' },
            { text: 'unit-test-gen', link: '/ai/llm/skills/unit-test-gen' },
            { text: 'karpathy-skills', link: '/ai/llm/skills/karpathy-skills' },
            { text: 'agent-osmani-skills', link: '/ai/llm/skills/agent-osmani-skills' },
            { text: 'fireworks-tech-graph', link: '/ai/llm/skills/fireworks-tech-graph' },
            { text: 'baoyu-slide-deck', link: '/ai/llm/skills/baoyu-slide-deck' },
            { text: 'Agent Skills 生产级代码实践', link: '/ai/llm/skills/agent-skills-production-code' }
          ]
        },
        {
          text: 'MCP 服务器',
          items: [
            { text: 'docker-mcp', link: '/ai/llm/mcp/docker-mcp' },
            { text: 'security-mcp', link: '/ai/llm/mcp/security-mcp' },
            { text: 'postgres-mcp', link: '/ai/llm/mcp/postgres-mcp' },
            { text: 'context7', link: '/ai/llm/mcp/context7' },
            { text: 'filesystem-mcp', link: '/ai/llm/mcp/filesystem-mcp' }
          ]
        },
        {
          text: 'AI 工具',
          items: [
            { text: 'OpenCLI', link: '/ai/tools/opencli' }
          ]
        }
      ],
      '/JavaScript/basic/': [
        {
          text: '重学 JS',
          items: [
            { text: '产生式（BNF）', link: '/JavaScript/basic/part1' },
            { text: '原型与原型链', link: '/JavaScript/basic/part2' },
            { text: '作用域与执行上下文', link: '/JavaScript/basic/part3' },
            { text: 'this、闭包与参数传递', link: '/JavaScript/basic/part4' },
            { text: '继承', link: '/JavaScript/basic/part5' },
            { text: '排序算法', link: '/JavaScript/basic/part6' },
            { text: '模块机制', link: '/JavaScript/basic/part7' }
          ]
        }
      ],
      '/JavaScript/gaoji/p1': [
        {
          text: 'JS 高级',
          items: [
            { text: '第一节', link: '/JavaScript/gaoji/p1' }
          ]
        }
      ],
      '/JavaScript/es6/': [
        {
          text: 'ES6 入门',
          items: [
            { text: '变量的解构赋值', link: '/JavaScript/es6/es6-1' },
            { text: '字符串的新增方法', link: '/JavaScript/es6/es6-2' },
            { text: '数值的扩展', link: '/JavaScript/es6/es6-3' },
            { text: '函数的扩展', link: '/JavaScript/es6/es6-4' },
            { text: 'let 和 const 命令', link: '/JavaScript/es6/es6-5' },
            { text: '数组的扩展', link: '/JavaScript/es6/es6-6' },
            { text: '正则的扩展', link: '/JavaScript/es6/es6-7' },
            { text: '字符串的扩展', link: '/JavaScript/es6/es6-8' },
            { text: '对象的扩展', link: '/JavaScript/es6/es6-9' },
            { text: 'Symbol', link: '/JavaScript/es6/es6-10' },
            { text: 'Set 与 Map 数据结构', link: '/JavaScript/es6/es6-11' },
            { text: 'Class 的基本语法', link: '/JavaScript/es6/es6-12' },
            { text: 'Proxy', link: '/JavaScript/es6/es6-13' },
            { text: 'Promise 对象', link: '/JavaScript/es6/es6-14' },
            { text: 'Module 的加载实现', link: '/JavaScript/es6/es6-15' },
            { text: 'Module 的语法', link: '/JavaScript/es6/es6-16' },
            { text: 'Class 的继承', link: '/JavaScript/es6/es6-17' },
            { text: 'Reflect', link: '/JavaScript/es6/es6-18' },
            { text: '重学 ES6', link: '/JavaScript/es6/es6-19' }
          ]
        }
      ],
      '/JavaScript/youdontknowjs/': [
        {
          text: '你不知道的 JavaScript',
          items: [
            { text: '第一部分 作用域和闭包', link: '/JavaScript/youdontknowjs/part1' },
            { text: '第二部分 this 和对象原型', link: '/JavaScript/youdontknowjs/part2' }
          ]
        }
      ],
      '/JavaScript/design/': [
        {
          text: '设计模式',
          items: [
            { text: '目录', link: '/JavaScript/design/readme' },
            { text: '第一节', link: '/JavaScript/design/part1' },
            { text: '第二节', link: '/JavaScript/design/part2' },
            { text: '第三节', link: '/JavaScript/design/part3' },
            { text: '第四节', link: '/JavaScript/design/part4' }
          ]
        }
      ],
      '/JavaScript/typescript/ts-basic': [
        {
          text: 'TypeScript',
          items: [
            { text: 'TS 基础', link: '/JavaScript/typescript/ts-basic' }
          ]
        }
      ],
      '/JavaScript/': [
        {
          text: '重学 JS',
          items: [
            { text: '第一节', link: '/JavaScript/basic/part1' }
          ]
        },
        {
          text: 'JS 高级',
          items: [
            { text: '第一节', link: '/JavaScript/gaoji/p1' }
          ]
        },
        {
          text: 'ES6 入门',
          items: [
            { text: '变量的解构赋值', link: '/JavaScript/es6/es6-1' },
            { text: '字符串的新增方法', link: '/JavaScript/es6/es6-2' },
            { text: '数值的扩展', link: '/JavaScript/es6/es6-3' },
            { text: '函数的扩展', link: '/JavaScript/es6/es6-4' },
            { text: 'let 和 const 命令', link: '/JavaScript/es6/es6-5' },
            { text: '数组的扩展', link: '/JavaScript/es6/es6-6' },
            { text: '正则的扩展', link: '/JavaScript/es6/es6-7' },
            { text: '字符串的扩展', link: '/JavaScript/es6/es6-8' },
            { text: '对象的扩展', link: '/JavaScript/es6/es6-9' },
            { text: 'Symbol', link: '/JavaScript/es6/es6-10' },
            { text: 'Set 与 Map 数据结构', link: '/JavaScript/es6/es6-11' },
            { text: 'Class 的基本语法', link: '/JavaScript/es6/es6-12' },
            { text: 'Proxy', link: '/JavaScript/es6/es6-13' },
            { text: 'Promise 对象', link: '/JavaScript/es6/es6-14' },
            { text: 'Module 的加载实现', link: '/JavaScript/es6/es6-15' },
            { text: 'Module 的语法', link: '/JavaScript/es6/es6-16' },
            { text: 'Class 的继承', link: '/JavaScript/es6/es6-17' },
            { text: 'Reflect', link: '/JavaScript/es6/es6-18' }
          ]
        },
        {
          text: '你不知道的 JavaScript',
          items: [
            { text: '第一部分 作用域和闭包', link: '/JavaScript/youdontknowjs/part1' },
            { text: '第二部分 this 和对象原型', link: '/JavaScript/youdontknowjs/part2' }
          ]
        },
        {
          text: '设计模式',
          items: [
            { text: '目录', link: '/JavaScript/design/readme' },
            { text: '第一节', link: '/JavaScript/design/part1' },
            { text: '第二节', link: '/JavaScript/design/part2' },
            { text: '第三节', link: '/JavaScript/design/part3' },
            { text: '第四节', link: '/JavaScript/design/part4' }
          ]
        },
        {
          text: 'TypeScript',
          items: [
            { text: 'TS 基础', link: '/JavaScript/typescript/ts-basic' }
          ]
        }
      ],
      '/formwork/vue/': [
        {
          text: 'Vue2',
          items: [
            { text: 'VUE2 原理分析', link: '/formwork/vue/vueyuanli' },
            { text: '生命周期函数', link: '/formwork/vue/smzqhs' },
            { text: '条件渲染和列表渲染', link: '/formwork/vue/vue-slsx' },
            { text: '样式绑定', link: '/formwork/vue/fzzj' },
            { text: '计算属性', link: '/formwork/vue/ysbd' }
          ]
        }
      ],
      '/formwork/vue3/reactive/': [
        {
          text: 'Vue3 入门',
          items: [
            { text: '响应式基础', link: '/formwork/vue3/reactive/part1' },
            { text: '父子组件', link: '/formwork/vue3/reactive/part2' },
            { text: '侦听器', link: '/formwork/vue3/reactive/part3' },
            { text: '组件深入', link: '/formwork/vue3/reactive/part9' },
            { text: '模板引用', link: '/formwork/vue3/reactive/part10' },
            { text: '组件基础', link: '/formwork/vue3/reactive/part11' },
            { text: '应用架构设计基础', link: '/formwork/vue3/reactive/part12' }
          ]
        }
      ],
      '/formwork/spring5/': [
        {
          text: 'Spring5 入门',
          items: [
            { text: '概述', link: '/formwork/spring5/part1' },
            { text: 'IOC 容器', link: '/formwork/spring5/part2' }
          ]
        }
      ],
      '/formwork/spring6/': [
        {
          text: 'Spring6 入门',
          items: [
            { text: '概述', link: '/formwork/spring6/spring6' },
            { text: '概念', link: '/formwork/spring6/part1' },
            { text: 'IOC 容器', link: '/formwork/spring6/part2' }
          ]
        }
      ],
      '/formwork/': [
        {
          text: 'Vue2',
          items: [
            { text: 'VUE2 原理分析', link: '/formwork/vue/vueyuanli' },
            { text: '生命周期函数', link: '/formwork/vue/smzqhs' },
            { text: '条件渲染和列表渲染', link: '/formwork/vue/vue-slsx' },
            { text: '样式绑定', link: '/formwork/vue/fzzj' },
            { text: '计算属性', link: '/formwork/vue/ysbd' }
          ]
        },
        {
          text: 'Vue3 入门',
          items: [
            { text: '响应式基础', link: '/formwork/vue3/reactive/part1' },
            { text: '父子组件', link: '/formwork/vue3/reactive/part2' },
            { text: '侦听器', link: '/formwork/vue3/reactive/part3' },
            { text: '组件深入', link: '/formwork/vue3/reactive/part9' },
            { text: '模板引用', link: '/formwork/vue3/reactive/part10' },
            { text: '组件基础', link: '/formwork/vue3/reactive/part11' },
            { text: '应用架构设计基础', link: '/formwork/vue3/reactive/part12' }
          ]
        },
        {
          text: 'Spring5 入门',
          items: [
            { text: '概述', link: '/formwork/spring5/part1' },
            { text: 'IOC 容器', link: '/formwork/spring5/part2' }
          ]
        },
        {
          text: 'Spring6 入门',
          items: [
            { text: '概述', link: '/formwork/spring6/spring6' },
            { text: '概念', link: '/formwork/spring6/part1' },
            { text: 'IOC 容器', link: '/formwork/spring6/part2' }
          ]
        }
      ],
      '/gongjushu/webpack/wp1': [
        {
          text: 'Webpack',
          items: [
            { text: '第一节', link: '/gongjushu/webpack/wp1' }
          ]
        }
      ],
      '/gongjushu/git/git': [
        {
          text: 'Git',
          items: [
            { text: 'Git', link: '/gongjushu/git/git' }
          ]
        }
      ],
      '/gongjushu/': [
        {
          text: 'Webpack',
          items: [
            { text: '第一节', link: '/gongjushu/webpack/wp1' }
          ]
        },
        {
          text: 'Git',
          items: [
            { text: 'Git', link: '/gongjushu/git/git' }
          ]
        }
      ],
      '/notes/JS/': [
        {
          text: 'JS 随笔',
          items: [
            { text: 'JS 预编译', link: '/notes/JS/hwdj' },
            { text: 'Commonjs、CMD、ESM 和 AMD', link: '/notes/JS/modules' },
            { text: 'npm 包打补丁', link: '/notes/JS/pro-compile' },
            { text: '一些常用的方法', link: '/notes/JS/buding' },
            { text: 'beforeunload 事件', link: '/notes/JS/beforeunload' },
            { text: '宏任务、微任务、队列和计划', link: '/notes/JS/usually-functions' },
            { text: 'Webpack 常用优化技巧', link: '/notes/JS/webpack-optimize' },
            { text: 'Vue 项目性能优化', link: '/notes/JS/vue-webpack-optimize' }
          ]
        }
      ],
      '/notes/CSS/': [
        {
          text: 'CSS 随笔',
          items: [
            { text: 'CSS 权重', link: '/notes/CSS/css-selector' },
            { text: '弹性盒子模型', link: '/notes/CSS/flex' },
            { text: 'Grid 布局', link: '/notes/CSS/grid' },
            { text: '一些常用 CSS', link: '/notes/CSS/CSSchangyong' },
            { text: '自动高度', link: '/notes/CSS/autoheight' },
            { text: '长列表渲染优化', link: '/notes/CSS/longlist' }
          ]
        }
      ],
      '/notes/browser/': [
        {
          text: '浏览器随笔',
          items: [
            { text: 'XMLHttpRequest、fetch 和 axios', link: '/notes/browser/xmlhttprequest' },
            { text: '跨域', link: '/notes/browser/kuayu' },
            { text: '路由', link: '/notes/browser/route' },
            { text: '回流和重绘', link: '/notes/browser/layout' },
            { text: '本地储存', link: '/notes/browser/storage' },
            { text: '浏览器刷新过程', link: '/notes/browser/refresh' }
          ]
        }
      ],
      '/notes/node/': [
        {
          text: 'Node 随笔',
          items: [
            { text: 'Node 常用命令', link: '/notes/node/node' },
            { text: '在 Linux 上安装 Node', link: '/notes/node/linuxinstallnode' }
          ]
        }
      ],
      '/notes/': [
        {
          text: 'JS 随笔',
          items: [
            { text: 'JS 预编译', link: '/notes/JS/hwdj' },
            { text: 'Commonjs、CMD、ESM 和 AMD', link: '/notes/JS/modules' },
            { text: 'npm 包打补丁', link: '/notes/JS/pro-compile' },
            { text: '一些常用的方法', link: '/notes/JS/buding' },
            { text: 'beforeunload 事件', link: '/notes/JS/beforeunload' },
            { text: '宏任务、微任务、队列和计划', link: '/notes/JS/usually-functions' },
            { text: 'Webpack 常用优化技巧', link: '/notes/JS/webpack-optimize' },
            { text: 'Vue 项目性能优化', link: '/notes/JS/vue-webpack-optimize' }
          ]
        },
        {
          text: 'CSS 随笔',
          items: [
            { text: 'CSS 权重', link: '/notes/CSS/css-selector' },
            { text: '弹性盒子模型', link: '/notes/CSS/flex' },
            { text: 'Grid 布局', link: '/notes/CSS/grid' },
            { text: '一些常用 CSS', link: '/notes/CSS/CSSchangyong' },
            { text: '自动高度', link: '/notes/CSS/autoheight' },
            { text: '长列表渲染优化', link: '/notes/CSS/longlist' }
          ]
        },
        {
          text: '浏览器随笔',
          items: [
            { text: 'XMLHttpRequest、fetch 和 axios', link: '/notes/browser/xmlhttprequest' },
            { text: '跨域', link: '/notes/browser/kuayu' },
            { text: '路由', link: '/notes/browser/route' },
            { text: '回流和重绘', link: '/notes/browser/layout' },
            { text: '本地储存', link: '/notes/browser/storage' },
            { text: '浏览器刷新过程', link: '/notes/browser/refresh' }
          ]
        },
        {
          text: 'Node 随笔',
          items: [
            { text: 'Node 常用命令', link: '/notes/node/node' },
            { text: '在 Linux 上安装 Node', link: '/notes/node/linuxinstallnode' }
          ]
        }
      ],
      '/tang/java2/': [
        {
          text: 'Java 基础查漏补缺',
          items: [
            { text: '0 前言', link: '/tang/java2/00_前言' },
            { text: '1 Java 语言概述', link: '/tang/java2/01_Java语言概述' },
            { text: '2 Java 基本语法', link: '/tang/java2/02_Java基本语法' },
            { text: '3 Java 数组', link: '/tang/java2/03_Java数组' },
            { text: '4 面向对象编程（上）', link: '/tang/java2/04_面向对象编程（上）' },
            { text: '5 面向对象编程（中）', link: '/tang/java2/05_面向对象编程（中）' },
            { text: '6 面向对象编程（下）', link: '/tang/java2/06_面向对象编程（下）' },
            { text: '7 异常处理', link: '/tang/java2/07_异常处理' },
            { text: '8 多线程', link: '/tang/java2/08_多线程' },
            { text: '9 Java 常用类', link: '/tang/java2/09_Java常用类' },
            { text: '10 枚举 & 注解', link: '/tang/java2/10_枚举&注解' },
            { text: '11 Java 集合', link: '/tang/java2/11_Java集合' },
            { text: '12 Java 泛型', link: '/tang/java2/12_Java泛型' },
            { text: '13 IO 流', link: '/tang/java2/13_IO流' },
            { text: '14 网络编程', link: '/tang/java2/14_网络编程' },
            { text: '15 Java 反射机制', link: '/tang/java2/15_Java反射机制' },
            { text: '16 Java8 新特性', link: '/tang/java2/16_Java8新特性' },
            { text: '17 Java9&10&11 新特性', link: '/tang/java2/17_Java9&10&11新特性' },
            { text: '18 JUC 并发编程', link: '/tang/java2/18_JUC并发编程' },
            { text: '19 设计模式', link: '/tang/java2/19_设计模式' },
            { text: '20 排序算法', link: '/tang/java2/20_排序算法' },
            { text: '99 面试题', link: '/tang/java2/99_面试题' }
          ]
        }
      ],
      '/tang/mysql/': [
        {
          text: 'MySQL',
          items: [
            { text: '1 MySQL 数据库概述', link: '/tang/mysql/01_MySQL概述' },
            { text: '2 关系型与非关系型数据库', link: '/tang/mysql/02_关系型数据库与非关系型数据库' },
            { text: '3 关系型数据库设计原则', link: '/tang/mysql/03_关系型数据库设计原则' },
            { text: '4 MySQL 的登录', link: '/tang/mysql/04_MySQL的登录' },
            { text: '5 MySQL 一些常用命令', link: '/tang/mysql/05_MySQL一些常用命令' },
            { text: '6 MySQL 图形化管理工具', link: '/tang/mysql/06_MySQL图形化管理工具' },
            { text: '7 运算符', link: '/tang/mysql/07_运算符' },
            { text: '8 MySQL 函数', link: '/tang/mysql/08_MySQL函数' },
            { text: '9 子查询', link: '/tang/mysql/09_子查询' },
            { text: '10 数据库和数据库表的管理', link: '/tang/mysql/10_管理数据库和数据库表' },
            { text: '11 数据的增删改', link: '/tang/mysql/11_数据的增删改' },
            { text: '12 MySQL 中的数据类型', link: '/tang/mysql/12_MySQL中的数据类型' },
            { text: '13 约束', link: '/tang/mysql/13_约束' },
            { text: '14 视图', link: '/tang/mysql/14_视图' },
            { text: '15 存储过程与存储函数', link: '/tang/mysql/15_存储过程与存储函数' },
            { text: '16 变量、流程控制与游标', link: '/tang/mysql/16_变量、流程控制与游标' },
            { text: '17 触发器', link: '/tang/mysql/17_触发器' },
            { text: '18 MySQL8.0 新特性', link: '/tang/mysql/18_MySQL8.0新特性' },
            { text: '19 附：表及其数据', link: '/tang/mysql/19_表及其数据' },
            { text: '99 常见问题的解决', link: '/tang/mysql/99_MySQL常见问题的解决' }
          ]
        }
      ],
      '/tang/mservice/': [
        {
          text: '微服务',
          items: [
            { text: '微服务学习', link: '/tang/mservice/1' },
            { text: 'Nacos 的使用', link: '/tang/mservice/2' }
          ]
        }
      ],
      '/tang/Elasticsearch/': [
        {
          text: 'Elasticsearch',
          items: [
            { text: '1 概述', link: '/tang/Elasticsearch/01_Elasticsearch概述' },
            { text: '2 ES 相关工具的安装与使用', link: '/tang/Elasticsearch/02_Elasticsearch相关工具的安装与使用' },
            { text: '3 核心概念', link: '/tang/Elasticsearch/03_Elasticsearch核心概念' },
            { text: '4 ES 基本操作', link: '/tang/Elasticsearch/04_Elasticsearch基本操作' },
            { text: '5 DSL 高级查询', link: '/tang/Elasticsearch/05_Elasticsearch DSL高级查询' },
            { text: '6 进阶查询', link: '/tang/Elasticsearch/06_Elasticsearch进阶查询' },
            { text: '7 Java API 操作 ES', link: '/tang/Elasticsearch/07_Java API 操作 Elasticsearch' },
            { text: '8 Spring Data Elasticsearch', link: '/tang/Elasticsearch/08_Spring Data Elasticsearch' },
            { text: '9 Linux 安装 ES 相关工具', link: '/tang/Elasticsearch/09_Linux 安装 Elasticsearch' },
            { text: '10 CAP 定理', link: '/tang/Elasticsearch/10_CAP定理' },
            { text: '11 Elasticsearch 集群', link: '/tang/Elasticsearch/11_Elasticsearch集群' },
            { text: '12 分片控制与原理', link: '/tang/Elasticsearch/12_Elasticsearch分片控制与原理' },
            { text: '13 优化建议', link: '/tang/Elasticsearch/13_Elasticsearch的优化建议' }
          ]
        }
      ],
      '/tang/docker/': [
        {
          text: 'Docker',
          items: [
            { text: 'Docker 进阶', link: '/tang/docker/Docker' },
            { text: 'Docker 搭建私有镜像仓库', link: '/tang/docker/docker搭建私有镜像仓库' }
          ]
        }
      ],
      '/tang/k8s/': [
        {
          text: 'K8s',
          items: [
            {
              text: '学习资料',
              items: [
                { text: '常用命令', link: '/tang/k8s/学习资料/command' },
                { text: '一些博客', link: '/tang/k8s/学习资料/blog' },
                { text: 'Docker 安装 FTP 服务端', link: '/tang/k8s/学习资料/ftp' },
                { text: '自动部署', link: '/tang/k8s/学习资料/auto' }
              ]
            },
            {
              text: '错误集锦',
              items: [
                { text: '6443 connect refused', link: '/tang/k8s/错误集锦/6443_connect-refused' },
                { text: '节点 notReady', link: '/tang/k8s/错误集锦/1' },
                { text: '无法推送镜像', link: '/tang/k8s/错误集锦/2' },
                { text: '使用容器制作基础镜像', link: '/tang/k8s/错误集锦/3' },
                { text: '下载镜像提示没有磁盘空间', link: '/tang/k8s/错误集锦/4' }
              ]
            }
          ]
        }
      ],
      '/tang/Prometheus/': [
        {
          text: 'Prometheus',
          items: [
            { text: '使用 Prometheus 监控 Kubernetes', link: '/tang/Prometheus/1' },
            { text: 'K8s 部署 Prometheus + Grafana', link: '/tang/Prometheus/2' },
            { text: '第三节', link: '/tang/Prometheus/3' }
          ]
        }
      ],
      '/tang/Python/': [
        {
          text: 'Python',
          items: [
            { text: 'Python3 基础查漏补缺', link: '/tang/Python/1' },
            { text: 'pip 使用清华源下载 package', link: '/tang/Python/2' }
          ]
        }
      ],
      '/tang/gitlab/': [
        {
          text: 'Git / GitLab',
          items: [
            { text: 'GitLab 常用命令', link: '/tang/gitlab/gitlab-commands' },
            { text: 'GitLab 报错', link: '/tang/gitlab/gitlab-error' }
          ]
        }
      ],
      '/tang/server/': [
        {
          text: '服务器环境安装',
          items: [
            { text: 'CentOS7 root 免密登录', link: '/tang/server/CentOS7root账号免密登录' },
            { text: 'CentOS7 安装 GitLab', link: '/tang/server/CentOS7安装GitLab' },
            { text: 'CentOS7 安装 jdk1.8', link: '/tang/server/CentOS7安装jdk1.8' },
            { text: 'CentOS7 安装 Jenkins', link: '/tang/server/CentOs7安装jenkins' },
            { text: 'CentOS7 安装 MySQL5.7（yum 源）', link: '/tang/server/CentOS7安装mysql5.7(使用yum源安装)' },
            { text: 'CentOS7 安装 Redis', link: '/tang/server/CentOS7安装redis' },
            { text: 'CentOS7 平滑升级 Nginx', link: '/tang/server/CentOS7平滑升级nginx' },
            { text: '借助阿里云服务器使用 frp 内网穿透', link: '/tang/server/借助阿里云服务器使用frp做内网穿透' }
          ]
        }
      ],
      '/tang/项目上线/xiaochengxu': [
        {
          text: '项目上线',
          items: [
            { text: '记一次小程序接口的发布', link: '/tang/项目上线/xiaochengxu' }
          ]
        }
      ],
      '/tang/IoTPlatform/jetlinks': [
        {
          text: '物联网项目',
          items: [
            { text: 'JetLinks 项目初体验', link: '/tang/IoTPlatform/jetlinks' }
          ]
        }
      ],
      '/tang/typora配置/1': [
        {
          text: '其他',
          items: [
            { text: 'Typora 配置', link: '/tang/typora配置/1' }
          ]
        }
      ],
      '/tang/': [
        {
          text: 'Java 基础查漏补缺',
          items: [
            { text: '0 前言', link: '/tang/java2/00_前言' },
            { text: '1 Java 语言概述', link: '/tang/java2/01_Java语言概述' },
            { text: '2 Java 基本语法', link: '/tang/java2/02_Java基本语法' },
            { text: '3 Java 数组', link: '/tang/java2/03_Java数组' },
            { text: '4 面向对象编程（上）', link: '/tang/java2/04_面向对象编程（上）' },
            { text: '5 面向对象编程（中）', link: '/tang/java2/05_面向对象编程（中）' },
            { text: '6 面向对象编程（下）', link: '/tang/java2/06_面向对象编程（下）' },
            { text: '7 异常处理', link: '/tang/java2/07_异常处理' },
            { text: '8 多线程', link: '/tang/java2/08_多线程' },
            { text: '9 Java 常用类', link: '/tang/java2/09_Java常用类' },
            { text: '10 枚举 & 注解', link: '/tang/java2/10_枚举&注解' },
            { text: '11 Java 集合', link: '/tang/java2/11_Java集合' },
            { text: '12 Java 泛型', link: '/tang/java2/12_Java泛型' },
            { text: '13 IO 流', link: '/tang/java2/13_IO流' },
            { text: '14 网络编程', link: '/tang/java2/14_网络编程' },
            { text: '15 Java 反射机制', link: '/tang/java2/15_Java反射机制' },
            { text: '16 Java8 新特性', link: '/tang/java2/16_Java8新特性' },
            { text: '17 Java9&10&11 新特性', link: '/tang/java2/17_Java9&10&11新特性' },
            { text: '18 JUC 并发编程', link: '/tang/java2/18_JUC并发编程' },
            { text: '19 设计模式', link: '/tang/java2/19_设计模式' },
            { text: '20 排序算法', link: '/tang/java2/20_排序算法' },
            { text: '99 面试题', link: '/tang/java2/99_面试题' }
          ]
        },
        {
          text: 'MySQL',
          items: [
            { text: '1 MySQL 数据库概述', link: '/tang/mysql/01_MySQL概述' },
            { text: '2 关系型与非关系型数据库', link: '/tang/mysql/02_关系型数据库与非关系型数据库' },
            { text: '3 关系型数据库设计原则', link: '/tang/mysql/03_关系型数据库设计原则' },
            { text: '4 MySQL 的登录', link: '/tang/mysql/04_MySQL的登录' },
            { text: '5 MySQL 一些常用命令', link: '/tang/mysql/05_MySQL一些常用命令' },
            { text: '6 MySQL 图形化管理工具', link: '/tang/mysql/06_MySQL图形化管理工具' },
            { text: '7 运算符', link: '/tang/mysql/07_运算符' },
            { text: '8 MySQL 函数', link: '/tang/mysql/08_MySQL函数' },
            { text: '9 子查询', link: '/tang/mysql/09_子查询' },
            { text: '10 数据库和数据库表的管理', link: '/tang/mysql/10_管理数据库和数据库表' },
            { text: '11 数据的增删改', link: '/tang/mysql/11_数据的增删改' },
            { text: '12 MySQL 中的数据类型', link: '/tang/mysql/12_MySQL中的数据类型' },
            { text: '13 约束', link: '/tang/mysql/13_约束' },
            { text: '14 视图', link: '/tang/mysql/14_视图' },
            { text: '15 存储过程与存储函数', link: '/tang/mysql/15_存储过程与存储函数' },
            { text: '16 变量、流程控制与游标', link: '/tang/mysql/16_变量、流程控制与游标' },
            { text: '17 触发器', link: '/tang/mysql/17_触发器' },
            { text: '18 MySQL8.0 新特性', link: '/tang/mysql/18_MySQL8.0新特性' },
            { text: '19 附：表及其数据', link: '/tang/mysql/19_表及其数据' },
            { text: '99 常见问题的解决', link: '/tang/mysql/99_MySQL常见问题的解决' }
          ]
        },
        {
          text: '微服务',
          items: [
            { text: '微服务学习', link: '/tang/mservice/1' },
            { text: 'Nacos 的使用', link: '/tang/mservice/2' }
          ]
        },
        {
          text: 'Elasticsearch',
          items: [
            { text: '1 概述', link: '/tang/Elasticsearch/01_Elasticsearch概述' },
            { text: '2 ES 相关工具的安装与使用', link: '/tang/Elasticsearch/02_Elasticsearch相关工具的安装与使用' },
            { text: '3 核心概念', link: '/tang/Elasticsearch/03_Elasticsearch核心概念' },
            { text: '4 ES 基本操作', link: '/tang/Elasticsearch/04_Elasticsearch基本操作' },
            { text: '5 DSL 高级查询', link: '/tang/Elasticsearch/05_Elasticsearch DSL高级查询' },
            { text: '6 进阶查询', link: '/tang/Elasticsearch/06_Elasticsearch进阶查询' },
            { text: '7 Java API 操作 ES', link: '/tang/Elasticsearch/07_Java API 操作 Elasticsearch' },
            { text: '8 Spring Data Elasticsearch', link: '/tang/Elasticsearch/08_Spring Data Elasticsearch' },
            { text: '9 Linux 安装 ES 相关工具', link: '/tang/Elasticsearch/09_Linux 安装 Elasticsearch' },
            { text: '10 CAP 定理', link: '/tang/Elasticsearch/10_CAP定理' },
            { text: '11 Elasticsearch 集群', link: '/tang/Elasticsearch/11_Elasticsearch集群' },
            { text: '12 分片控制与原理', link: '/tang/Elasticsearch/12_Elasticsearch分片控制与原理' },
            { text: '13 优化建议', link: '/tang/Elasticsearch/13_Elasticsearch的优化建议' }
          ]
        },
        {
          text: 'Docker',
          items: [
            { text: 'Docker 进阶', link: '/tang/docker/Docker' },
            { text: 'Docker 搭建私有镜像仓库', link: '/tang/docker/docker搭建私有镜像仓库' }
          ]
        },
        {
          text: 'K8s',
          items: [
            {
              text: '学习资料',
              items: [
                { text: '常用命令', link: '/tang/k8s/学习资料/command' },
                { text: '一些博客', link: '/tang/k8s/学习资料/blog' },
                { text: 'Docker 安装 FTP 服务端', link: '/tang/k8s/学习资料/ftp' },
                { text: '自动部署', link: '/tang/k8s/学习资料/auto' }
              ]
            },
            {
              text: '错误集锦',
              items: [
                { text: '6443 connect refused', link: '/tang/k8s/错误集锦/6443_connect-refused' },
                { text: '节点 notReady', link: '/tang/k8s/错误集锦/1' },
                { text: '无法推送镜像', link: '/tang/k8s/错误集锦/2' },
                { text: '使用容器制作基础镜像', link: '/tang/k8s/错误集锦/3' },
                { text: '下载镜像提示没有磁盘空间', link: '/tang/k8s/错误集锦/4' }
              ]
            }
          ]
        },
        {
          text: 'Prometheus',
          items: [
            { text: '使用 Prometheus 监控 Kubernetes', link: '/tang/Prometheus/1' },
            { text: 'K8s 部署 Prometheus + Grafana', link: '/tang/Prometheus/2' },
            { text: '第三节', link: '/tang/Prometheus/3' }
          ]
        },
        {
          text: 'Python',
          items: [
            { text: 'Python3 基础查漏补缺', link: '/tang/Python/1' },
            { text: 'pip 使用清华源下载 package', link: '/tang/Python/2' }
          ]
        },
        {
          text: 'Git / GitLab',
          items: [
            { text: 'GitLab 常用命令', link: '/tang/gitlab/gitlab-commands' },
            { text: 'GitLab 报错', link: '/tang/gitlab/gitlab-error' }
          ]
        },
        {
          text: '服务器环境安装',
          items: [
            { text: 'CentOS7 root 免密登录', link: '/tang/server/CentOS7root账号免密登录' },
            { text: 'CentOS7 安装 GitLab', link: '/tang/server/CentOS7安装GitLab' },
            { text: 'CentOS7 安装 jdk1.8', link: '/tang/server/CentOS7安装jdk1.8' },
            { text: 'CentOS7 安装 Jenkins', link: '/tang/server/CentOs7安装jenkins' },
            { text: 'CentOS7 安装 MySQL5.7（yum 源）', link: '/tang/server/CentOS7安装mysql5.7(使用yum源安装)' },
            { text: 'CentOS7 安装 Redis', link: '/tang/server/CentOS7安装redis' },
            { text: 'CentOS7 平滑升级 Nginx', link: '/tang/server/CentOS7平滑升级nginx' },
            { text: '借助阿里云服务器使用 frp 内网穿透', link: '/tang/server/借助阿里云服务器使用frp做内网穿透' }
          ]
        },
        {
          text: '项目上线',
          items: [
            { text: '记一次小程序接口的发布', link: '/tang/项目上线/xiaochengxu' }
          ]
        },
        {
          text: '物联网项目',
          items: [
            { text: 'JetLinks 项目初体验', link: '/tang/IoTPlatform/jetlinks' }
          ]
        },
        {
          text: '其他',
          items: [
            { text: 'Typora 配置', link: '/tang/typora配置/1' }
          ]
        }
      ],
      '/harmony/part0': [
        {
          text: '知识地图',
          items: [
            { text: '知识地图', link: '/harmony/part0' }
          ]
        }
      ],
      '/harmony/kuaisurumen/': [
        {
          text: '快速入门',
          items: [
            { text: '上手指南', link: '/harmony/kuaisurumen/part1' },
            { text: '项目创建', link: '/harmony/kuaisurumen/part2' },
            { text: '写一个小 demo', link: '/harmony/kuaisurumen/part3' },
            { text: '应用架构设计基础', link: '/harmony/kuaisurumen/part4' }
          ]
        }
      ],
      '/harmony/': [
        {
          text: '知识地图',
          items: [
            { text: '知识地图', link: '/harmony/part0' }
          ]
        },
        {
          text: '快速入门',
          items: [
            { text: '上手指南', link: '/harmony/kuaisurumen/part1' },
            { text: '项目创建', link: '/harmony/kuaisurumen/part2' },
            { text: '写一个小 demo', link: '/harmony/kuaisurumen/part3' },
            { text: '应用架构设计基础', link: '/harmony/kuaisurumen/part4' }
          ]
        }
      ]
    },
  },
});
