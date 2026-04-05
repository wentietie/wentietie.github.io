import * as path from 'node:path';
import {defineConfig} from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'wenatie',
  markdown: {
    checkDeadLinks: {excludes: []},
  },
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    outlineTitle: '本页目录',
    // socialLinks: [
    //   {
    //     icon: 'github',
    //     mode: 'link',
    //     content: 'https://github.com/web-infra-dev/rspress',
    //   },
    // ],
    nav: [
      // {
      //   text: '前端工具',
      //   items: [
      //     {
      //       text: 'JSON工具',
      //       link: '/utils/jsonutil'
      //     },
      //     {
      //       text: 'JSON View',
      //       link: '/utils/jsonView'
      //     },
      //     {
      //       text: '文件转base64',
      //       link: '/utils/fileToBase64'
      //     },
      //     {
      //       text: '图片压缩',
      //       link: '/utils/imgZip'
      //     }
      //   ]
      // },
      {
        text: 'AI',
        items: [
          {
            text: '工具',
            link: '/ai/tools/opencli'
          },
          {
            text: '大模型入门',
            link: '/ai/llm/llm-study/part1'
          },
          {
            text: 'chatGLM大模型实践',
            link: '/ai/llm/chatglm/part1'
          },
          {
            text: 'Harness Engineering',
            link: '/ai/llm/harness/part1'
          },
          {
            text: 'Claude Code',
            link: '/ai/llm/claude-code/01_EverythingClaudeCode'
          },
          {
            text: 'OpenCode',
            link: '/opencode/01_OpenCode使用教程'
          },
          {
            text: 'Skills',
            link: '/ai/llm/skills/agent-browser'
          },
          {
            text: 'MCP',
            link: '/ai/llm/mcp/context7'
          },
        ]
      },
      {
        text: '小唐学习笔记',
        items: [
          {
            text: 'gitlab',
            link: '/tang/gitlab/gitlab-error'
          },
          {
            text: 'java',
            link: '/tang/java2/00_前言'
          },
          {
            text: 'mysql',
            link: '/tang/mysql/01_MySQL概述'
          },
          {
            text: 'docker',
            link: '/tang/docker/Docker'
          },
          {
            text: 'k8s',
            link: '/tang/k8s/学习资料/command'
          },
          {
            text: 'Elasticsearch',
            link: '/tang/Elasticsearch/01_Elasticsearch概述'
          },
          {
            text: 'Prometheus',
            link: '/tang/Prometheus/1'
          },
          {
            text: 'Python',
            link: '/tang/Python/1'
          },
          {
            text: 'Vue',
            link: '/tang/Vue/1'
          },
          {
            text: '服务器环境安装',
            link: '/tang/server/CentOS7root账号免密登录'
          },
          {
            text: '微服务',
            link: '/tang/mservice/2'
          },
          {
            text: '项目上线',
            link: '/tang/项目上线/xiaochengxu'
          },
          {
            text: '物联网项目',
            link: '/tang/IoTPlatform/jetlinks项目初体验'
          }
        ]
      },
      {
        text: '前端基础',
        items: [
          // {
          //   text: '重学 JS',
          //   link: '/JavaScript/basic/part1'
          // },
          // {
          //     text: 'JS高级程序设计',
          //     link: '/JavaScript/es6/es6-1'
          // },
          {
            text: 'ES6入门',
            link: '/JavaScript/es6/es6-1'
          },
          {
            text: '你不知道的Javascript',
            link: '/JavaScript/youdontknowjs/part1'
          },
          {
            text: '设计模式',
            link: '/JavaScript/design/'
          },
          {
            text: 'typescript',
            link: '/JavaScript/typescript/ts-basic'
          },
        ],
      },
      {
        text: '框架',
        items: [
          {
            text: 'vue2',
            link: '/formwork/vue/vueyuanli'
          },
          {
            text: 'vue3',
            link: '/formwork/vue3/reactive/part1'
          }
          // {
          //   text: 'spring5',
          //   link: '/formwork/spring5/part1'
          // },
          // {
          //   text: 'webpack5',
          //   link: '/gongjushu/webpack/wp1'
          // }
        ],
      },
      {
        text: '计算机基础',
        items: [
          // {
          //     text: 'C语言入门',
          //     link: '/end/c/c-study/part1'
          // },
          {
            text: '数据结构（严蔚敏）',
            link: '/end/c/data-contruction/part1'
          },
        ],
      },
      {
        text: '随笔笔记',
        items: [
          {
            text: 'JS相关',
            link: '/notes/JS/hwdj'
          },
          {
            text: 'CSS相关',
            link: '/notes/CSS/css-selector'
          },
          {
            text: '浏览器相关',
            link: '/notes/browser/xmlhttprequest'
          },
          {
            text: 'node相关',
            link: '/notes/node/node'
          },
        ]
      },
      {
        text: '鸿蒙',
        items: [
          {text: '知识地图', link: '/harmony/part0'},
          {text: '快速入门', link: '/harmony/kuaisurumen/part1'},
        ],
      }
    ],
    sidebar: {
      '/JavaScript/basic/': [
        {
          text: '第一节',
          link: '/JavaScript/basic/part1'
        }
      ],
      '/gongjushu/webpack': [
        {
          text: '第一节',
          link: '/gongjushu/webpack/wp1'
        }
      ],

      '/JavaScript/es6/': [
        {
          text: 'ES6入门',
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
          ],
        },
      ],
      '/JavaScript/youdontknowjs/': [
        {
          text: '你不知道的JavaScript',
          items: [
            { text: '第一部分 作用域和闭包', link: '/JavaScript/youdontknowjs/part1' },
            { text: '第二部分 this和对象原型', link: '/JavaScript/youdontknowjs/part2' },
          ],
        },
      ],
      // '/JavaScript/typescript/': [
      //     {
      //         text: 'typescript 基础',
      //         items: [
      //             '/JavaScript/typescript/ts-basic',
      //         ],
      //     },
      // ],
      // '/formwork/vue/': [
      //     {
      //         text: 'VUE2',
      //         items: [
      //             '/formwork/vue/vueyuanli',
      //             '/formwork/vue/smzqhs',
      //             '/formwork/vue/vue-slsx',
      //             '/formwork/vue/fzzj',
      //             '/formwork/vue/ysbd',
      //         ],
      //     },
      // ],
      // '/formwork/vue3/': [
      //     {
      //         text: 'VUE3 入门',
      //         items: [
      //             '/formwork/vue3/reactive/part1',
      //             '/formwork/vue3/reactive/part2',
      //             '/formwork/vue3/reactive/part3',
      //             '/formwork/vue3/reactive/part9',
      //             '/formwork/vue3/reactive/part10',
      //             '/formwork/vue3/reactive/part11',
      //             '/formwork/vue3/reactive/part12',
      //         ],
      //     },
      // ],
      // '/formwork/spring5/': [
      //     {
      //         text: 'spring5 入门',
      //         items: [
      //             '/formwork/spring5/part1',
      //             '/formwork/spring5/part2',
      //         ],
      //     },
      // ],
      // '/formwork/spring6/': [
      //     {
      //         text: 'spring6 入门',
      //         items: [
      //             '/formwork/spring6/part1',
      //             '/formwork/spring6/part2',
      //         ],
      //     },
      // ],
      '/notes/JS': [
        {
          text: 'JS随笔',
          items: [
            { text: 'JS 预编译', link: '/notes/JS/hwdj' },
            { text: 'Commonjs、CMD、ESM和AMD', link: '/notes/JS/modules' },
            { text: 'npm包打补丁', link: '/notes/JS/pro-compile' },
            { text: '一些常用的方法', link: '/notes/JS/buding' },
            { text: '宏任务、微任务、队列和计划', link: '/notes/JS/usually-functions' },
            { text: 'WEBPACK 常用优化技巧', link: '/notes/JS/webpack-optimize' },
            { text: 'vue 项目性能优化', link: '/notes/JS/vue-webpack-optimize' },
          ],
        },
      ],
      '/notes/node': [
        {
          text: 'node随笔',
          items: [
            { text: 'node 常用命令', link: '/notes/node/node' },
            { text: '在linux上安装node', link: '/notes/node/linuxinstallnode' },
          ],
        },
      ],
      '/notes/CSS': [
        {
          text: 'CSS随笔',
          items: [
            { text: 'css 权重', link: '/notes/CSS/css-selector' },
            { text: '弹性盒子模型', link: '/notes/CSS/flex' },
            { text: '一些常用CSS', link: '/notes/CSS/CSSchangyong' },
            { text: '自动高度', link: '/notes/CSS/autoheight' },
            { text: '长列表渲染优化', link: '/notes/CSS/longlist' },
          ],
        },
      ],
      '/notes/browser': [
        {
          text: '浏览器随笔',
          items: [
            { text: 'XMLHttpRequest,fetch和axios', link: '/notes/browser/xmlhttprequest' },
            { text: '跨域', link: '/notes/browser/kuayu' },
            { text: '路由', link: '/notes/browser/route' },
            { text: '回流和重绘', link: '/notes/browser/layout' },
            { text: '本地储存', link: '/notes/browser/storage' },
            { text: '浏览器刷新过程', link: '/notes/browser/refresh' },
          ],
        },
      ],
      '/tang/gitlab/': [
        {
          text: 'git',
          items: [
            { text: 'gitlab 报错', link: '/tang/gitlab/gitlab-error' },
            { text: 'gitlab 常用命令', link: '/tang/gitlab/gitlab-commands' }
          ]
        }
      ],
      '/tang/docker/': [
        {
          text: 'docker',
          items: [
            { text: 'docker搭建私有镜像仓库', link: '/tang/docker/docker搭建私有镜像仓库' },
            { text: 'Docker 进阶', link: '/tang/docker/Docker' }
          ]
        }
      ],
      '/tang/Elasticsearch/': [
        {
          text: 'Elasticsearch',
          items: [
            { text: '1 概述', link: '/tang/Elasticsearch/01_Elasticsearch概述' },
            { text: '2 ES相关工具的安装与使用', link: '/tang/Elasticsearch/02_Elasticsearch相关工具的安装与使用' },
            { text: '3 核心概念', link: '/tang/Elasticsearch/03_Elasticsearch核心概念' },
            { text: '4 es基本操作', link: '/tang/Elasticsearch/04_Elasticsearch基本操作' },
            { text: '5 DSL高级查询', link: '/tang/Elasticsearch/05_Elasticsearch DSL高级查询' },
            { text: '6 进阶查询', link: '/tang/Elasticsearch/06_Elasticsearch进阶查询' },
            { text: '7 Java API 操作 es', link: '/tang/Elasticsearch/07_Java API 操作 Elasticsearch' },
            { text: '8 Spring Data Elasticsearch', link: '/tang/Elasticsearch/08_Spring Data Elasticsearch' },
            { text: '9 Linux安装ES相关工具', link: '/tang/Elasticsearch/09_Linux 安装 Elasticsearch' },
            { text: '10 CAP定理', link: '/tang/Elasticsearch/10_CAP定理' },
            { text: '11 Elasticsearch集群', link: '/tang/Elasticsearch/11_Elasticsearch集群' },
            { text: '12 Elasticsearch分片控制与原理', link: '/tang/Elasticsearch/12_Elasticsearch分片控制与原理' },
            { text: '13 Elasticsearch的优化建议', link: '/tang/Elasticsearch/13_Elasticsearch的优化建议' },
          ]
        }
      ],
      '/tang/java2/': [
        {
          text: 'java基础查漏补缺',
          items: [
            { text: '0 前言', link: '/tang/java2/00_前言' },
            { text: '1 Java语言概述', link: '/tang/java2/01_Java语言概述' },
            { text: '2 Java基本语法', link: '/tang/java2/02_Java基本语法' },
            { text: '3 Java数组', link: '/tang/java2/03_Java数组' },
            { text: '4 面向对象编程（上）', link: '/tang/java2/04_面向对象编程（上）' },
            { text: '5 面向对象编程（中）', link: '/tang/java2/05_面向对象编程（中）' },
            { text: '6 面向对象编程（下）', link: '/tang/java2/06_面向对象编程（下）' },
            { text: '7 异常处理', link: '/tang/java2/07_异常处理' },
            { text: '8 多线程', link: '/tang/java2/08_多线程' },
            { text: '9 Java常用类', link: '/tang/java2/09_Java常用类' },
            { text: '10 枚举&注解', link: '/tang/java2/10_枚举&注解' },
            { text: '11 Java集合', link: '/tang/java2/11_Java集合' },
            { text: '12 Java泛型', link: '/tang/java2/12_Java泛型' },
            { text: '13 IO流', link: '/tang/java2/13_IO流' },
            { text: '14 网络编程', link: '/tang/java2/14_网络编程' },
            { text: '15 Java反射机制', link: '/tang/java2/15_Java反射机制' },
            { text: '16 Java8新特性', link: '/tang/java2/16_Java8新特性' },
            { text: '17 Java9&10&11新特性', link: '/tang/java2/17_Java9&10&11新特性' },
            { text: '18 JUC并发编程', link: '/tang/java2/18_JUC并发编程' },
            { text: '19 设计模式', link: '/tang/java2/19_设计模式' },
            { text: '20 排序算法', link: '/tang/java2/20_排序算法' },
            { text: '99 面试题', link: '/tang/java2/99_面试题' },
          ]
        }
      ],
      '/tang/mysql/': [
        {
          text: 'mysql基础查漏补缺',
          items: [
            { text: '1 MySQL数据库概述', link: '/tang/mysql/01_MySQL概述' },
            { text: '2 关系型数据库与非关系型数据库', link: '/tang/mysql/02_关系型数据库与非关系型数据库' },
            { text: '3 关系型数据库设计原则', link: '/tang/mysql/03_关系型数据库设计原则' },
            { text: '4 MySQL的登录', link: '/tang/mysql/04_MySQL的登录' },
            { text: '5 MySQL一些常用命令', link: '/tang/mysql/05_MySQL一些常用命令' },
            { text: '6 MySQL图形化管理工具', link: '/tang/mysql/06_MySQL图形化管理工具' },
            { text: '7 运算符', link: '/tang/mysql/07_运算符' },
            { text: '8 MySQL函数', link: '/tang/mysql/08_MySQL函数' },
            { text: '9 子查询', link: '/tang/mysql/09_子查询' },
            { text: '10 数据库和数据库表的管理', link: '/tang/mysql/10_管理数据库和数据库表' },
            { text: '11 数据处理之增删改', link: '/tang/mysql/11_数据的增删改' },
            { text: '12 MySQL中的数据类型', link: '/tang/mysql/12_MySQL中的数据类型' },
            { text: '13 约束', link: '/tang/mysql/13_约束' },
            { text: '14 视图', link: '/tang/mysql/14_视图' },
            { text: '15 存储过程与存储函数', link: '/tang/mysql/15_存储过程与存储函数' },
            { text: '16 变量、流程控制与游标', link: '/tang/mysql/16_变量、流程控制与游标' },
            { text: '17 触发器', link: '/tang/mysql/17_触发器' },
            { text: '18 MySQL8.0新特性', link: '/tang/mysql/18_MySQL8.0新特性' },
            { text: '19 附：表及其数据', link: '/tang/mysql/19_表及其数据' },
            { text: '99 MySQL常见问题的解决', link: '/tang/mysql/99_MySQL常见问题的解决' },
          ]
        }
      ],
      '/tang/Prometheus/': [
        {
          text: 'Prometheus',
          items: [
            { text: '使用Prometheus监控Kubernetes', link: '/tang/Prometheus/1' },
            { text: 'k8s部署prometheus + grafana', link: '/tang/Prometheus/2' },
          ]
        }
      ],
      '/tang/Python/': [
        {
          text: 'Python',
          items: [
            { text: 'python3基础查漏补缺', link: '/tang/Python/1' },
            { text: '1.pip使用清华园下载package', link: '/tang/Python/2' }
          ]
        }
      ],
      '/tang/mservice/': [
        {
          text: '微服务学习',
          items: [
            { text: 'Nacos的使用', link: '/tang/mservice/2' },
            { text: '微服务学习', link: '/tang/mservice/1' }
          ]
        }
      ],
      '/tang/Vue/': [
        {
          text: 'Vue',
          items: [
            { text: 'Vue基础知识', link: '/tang/Vue/1' },
            { text: 'Vue组件编程', link: '/tang/Vue/2' },
            { text: 'Vue3快速入门', link: '/tang/Vue/3' },
          ]
        }
      ],
      '/tang/server/': [
        {
          text: '服务器环境安装',
          items: [
            { text: 'CentOS7root', link: '/tang/server/CentOS7root账号免密登录' },
            { text: 'CentOS7安装GitLab', link: '/tang/server/CentOS7安装GitLab' },
            { text: 'CentOS7安装jdk1.8', link: '/tang/server/CentOS7安装jdk1.8' },
            { text: 'CentOS7InstallJenkins', link: '/tang/server/CentOs7安装jenkins' },
            { text: '使用yum源安装MySQL5.7 CentOS7安装mysql5.7', link: '/tang/server/CentOS7安装mysql5.7(使用yum源安装)' },
            { text: 'CentOS7安装redis', link: '/tang/server/CentOS7安装redis' },
            { text: 'CentOS7平滑升级nginx', link: '/tang/server/CentOS7平滑升级nginx' },
            { text: '借助阿里云服务器使用frp做内网穿透', link: '/tang/server/借助阿里云服务器使用frp做内网穿透' },
          ]
        }
      ],
      '/tang/k8s/': [
        {
          text: 'k8s',
          items: [
            {
              text: '学习资料',
              items: [
                { text: '常用命令', link: '/tang/k8s/学习资料/command' },
                { text: '一些博客', link: '/tang/k8s/学习资料/blog' },
                { text: 'docker 安装 ftp 服务端', link: '/tang/k8s/学习资料/ftp' },
                { text: '自动部署', link: '/tang/k8s/学习资料/auto' },
              ]
            },
            {
              text: '错误集锦',
              items: [
                { text: '6443_connect-refused', link: '/tang/k8s/错误集锦/6443_connect-refused' },
                { text: '节点notReady', link: '/tang/k8s/错误集锦/1' },
                { text: '无法推送镜像', link: '/tang/k8s/错误集锦/2' },
                { text: '使用容器制作基础镜像', link: '/tang/k8s/错误集锦/3' },
                { text: '下载镜像提示没有磁盘空间', link: '/tang/k8s/错误集锦/4' },
              ]
            }
          ]
        }
      ],
      '/tang/项目上线/': [
        {
          text: '项目上线',
          items: [
            { text: '记一次小程序接口的发布', link: '/tang/项目上线/xiaochengxu' },
          ]
        }
      ],
      '/tang/IoTPlatform': [
        {
          text: '物联网项目',
          items: [
            { text: 'jetlinks项目初体验', link: '/tang/IoTPlatform/jetlinks' }
          ]
        }
      ],
      '/formwork/vue/': [
        {
          text: 'VUE2',
          items: [
            { text: 'VUE2原理分析', link: '/formwork/vue/vueyuanli' },
            { text: '生命周期函数', link: '/formwork/vue/smzqhs' },
            { text: '条件渲染和列表渲染', link: '/formwork/vue/vue-slsx' },
            { text: '样式绑定', link: '/formwork/vue/fzzj' },
            { text: '计算属性', link: '/formwork/vue/ysbd' },
          ],
        },
      ],
      '/formwork/vue3/': [
        {
          text: 'VUE3 入门',
          items: [
            { text: '响应式基础', link: '/formwork/vue3/reactive/part1' },
            { text: '父子组件', link: '/formwork/vue3/reactive/part2' },
            { text: '侦听器', link: '/formwork/vue3/reactive/part3' },
            { text: '组件深入', link: '/formwork/vue3/reactive/part9' },
            { text: '模板引用', link: '/formwork/vue3/reactive/part10' },
            { text: '组件基础', link: '/formwork/vue3/reactive/part11' },
            { text: '应用架构设计基础', link: '/formwork/vue3/reactive/part12' },
          ],
        },
      ],
      '/formwork/spring5/': [
        {
          text: 'spring5 入门',
          items: [
            { text: '概述', link: '/formwork/spring5/part1' },
            { text: 'IOC容器', link: '/formwork/spring5/part2' },
          ],
        },
      ],
      '/formwork/spring6/': [
        {
          text: 'spring6 入门',
          items: [
            { text: '概念', link: '/formwork/spring6/part1' },
            { text: 'IOC容器', link: '/formwork/spring6/part2' },
          ],
        },
      ],
      '/harmony/': [
        {
          text: '知识地图',
          items: [
            { text: '知识地图', link: '/harmony/part0' },
          ],
        },
      ],
      '/harmony/kuaisurumen/': [
        {
          text: '快速入门',
          items: [
            { text: '上手指南', link: '/harmony/kuaisurumen/part1' },
            { text: '项目创建', link: '/harmony/kuaisurumen/part2' },
            { text: '写一个小demo', link: '/harmony/kuaisurumen/part3' },
            { text: '应用架构设计基础', link: '/harmony/kuaisurumen/part4' },
          ],
        },
      ],
      '/ai/llm/harness/': [
        {
          text: 'Harness Engineering',
          items: [
            { text: '从零理解到动手实践', link: '/ai/llm/harness/part1' },
          ],
        },
      ],
      '/ai/llm/claude-code/': [
        {
          text: 'Claude Code',
          items: [
            { text: 'Everything Claude Code', link: '/ai/llm/claude-code/01_EverythingClaudeCode' },
            { text: '完整使用教程', link: '/ai/llm/claude-code/05_ClaudeCode完整教程' },
            { text: 'OpenCode与ClaudeCode对比', link: '/ai/llm/claude-code/04_OpenCode与ClaudeCode对比' },
            { text: 'Oh-My-ClaudeCode', link: '/ai/llm/claude-code/oh-my-claude-code' },
            { text: 'OpenSpec+Superpowers', link: '/ai/llm/claude-code/openspec-superpowers' },
            { text: 'OMC+Superpowers使用指南', link: '/ai/llm/claude-code/omc-superpowers-guide' },
            { text: '2026热门Skills盘点', link: '/ai/llm/skills-2026' },
            { text: '最佳实践', link: '/ai/llm/claude-code/best-practices/openspec-superpowers' },
            { text: 'CLAUDE.md与效率优化', link: '/ai/llm/claude-code/claude-md-tips' },
            { text: 'HUD可视化', link: '/ai/llm/claude-code/advanced-tools' },
            { text: '真实案例与源码解析', link: '/ai/llm/claude-code/real-cases' },
          ],
        },
      ],
      '/opencode/': [
        {
          text: 'OpenCode',
          items: [
            { text: 'OpenCode使用教程', link: '/opencode/01_OpenCode使用教程' },
            { text: 'OpenCode最佳实践', link: '/opencode/02_OpenCode最佳实践' },
            { text: 'OhMyOpenCode完全指南', link: '/opencode/03_OhMyOpenCode' },
          ],
        },
      ],
      '/ai/llm/skills/': [
        {
          text: 'Skills 精选',
          items: [
            { text: 'agent-browser', link: '/ai/llm/skills/agent-browser' },
            { text: 'find-skills', link: '/ai/llm/skills/find-skills' },
            { text: 'summarize', link: '/ai/llm/skills/summarize' },
            { text: 'skill-creator', link: '/ai/llm/skills/skill-creator' },
            { text: 'tmux', link: '/ai/llm/skills/tmux' },
            { text: 'webapp-testing', link: '/ai/llm/skills/webapp-testing' },
            { text: 'code-refactoring', link: '/ai/llm/skills/code-refactoring' },
            { text: 'changelog-maintenance', link: '/ai/llm/skills/changelog-maintenance' },
            { text: 'research', link: '/ai/llm/skills/research' },
            { text: 'frontend-design', link: '/ai/llm/skills/frontend-design' },
            { text: 'git-automation', link: '/ai/llm/skills/git-automation' },
            { text: 'unit-test-gen', link: '/ai/llm/skills/unit-test-gen' },
          ],
        },
      ],
      '/ai/llm/mcp/': [
        {
          text: 'MCP 服务器',
          items: [
            { text: 'docker-mcp', link: '/ai/llm/mcp/docker-mcp' },
            { text: 'security-mcp', link: '/ai/llm/mcp/security-mcp' },
            { text: 'postgres-mcp', link: '/ai/llm/mcp/postgres-mcp' },
            { text: 'context7', link: '/ai/llm/mcp/context7' },
            { text: 'filesystem-mcp', link: '/ai/llm/mcp/filesystem-mcp' },
          ],
        },
      ],
      '/ai/tools/': [
        {
          text: 'AI 工具',
          items: [
            { text: 'OpenCLI', link: '/ai/tools/opencli' },
          ],
        },
      ],
    }
  },
});
