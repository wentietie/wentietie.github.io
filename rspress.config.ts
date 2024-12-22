import * as path from 'node:path';
import {defineConfig} from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'wenatie',
  icon: '/rspress-icon.png',
  logoText: 'wenatie',
  themeConfig: {
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
      // {
      //   text: 'AI',
      //   items: [
      //     {
      //       text: '大模型入门',
      //       link: '/ai/llm/llm-study/part1'
      //     },
      //     {
      //       text: 'chatGLM大模型实践',
      //       link: '/ai/llm/chatglm/part1'
      //     },
      //   ]
      // },
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
          },
          {
            text: '鸿蒙',
            link: '/formwork/harmony/part1'
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
            '/JavaScript/es6/es6-1',
            '/JavaScript/es6/es6-2',
            '/JavaScript/es6/es6-3',
            '/JavaScript/es6/es6-4',
            '/JavaScript/es6/es6-5',
            '/JavaScript/es6/es6-6',
            '/JavaScript/es6/es6-7',
            '/JavaScript/es6/es6-8',
            '/JavaScript/es6/es6-9',
            '/JavaScript/es6/es6-10',
            '/JavaScript/es6/es6-11',
            '/JavaScript/es6/es6-12',
            '/JavaScript/es6/es6-13',
            '/JavaScript/es6/es6-14',
            '/JavaScript/es6/es6-15',
            '/JavaScript/es6/es6-16',
            '/JavaScript/es6/es6-17',
            '/JavaScript/es6/es6-18',
          ],
        },

      ],
      '/JavaScript/youdontknowjs/': [
        {
          text: '你不知道的JavaScript',
          items: [
            '/JavaScript/youdontknowjs/part1',
            '/JavaScript/youdontknowjs/part2',
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
            '/notes/JS/hwdj',
            '/notes/JS/modules',
            '/notes/JS/pro-compile',
            '/notes/JS/buding',
            '/notes/JS/usually-functions',
            '/notes/JS/webpack-optimize',
            '/notes/JS/vue-webpack-optimize',
          ],
        },
      ],
      '/notes/node': [
        {
          text: 'node随笔',
          items: [
            '/notes/node/node',
            '/notes/node/linuxinstallnode',
          ],
        },
      ],
      '/notes/CSS': [
        {
          text: 'CSS随笔',
          items: [
            '/notes/CSS/css-selector',
            '/notes/CSS/flex',
            '/notes/CSS/CSSchangyong',
            '/notes/CSS/autoheight',
            '/notes/CSS/longlist',
          ],
        },
      ],
      '/notes/browser': [
        {
          text: '浏览器随笔',
          items: [
            '/notes/browser/xmlhttprequest',
            '/notes/browser/kuayu',
            '/notes/browser/route',
            '/notes/browser/layout',
            '/notes/browser/storage',
            '/notes/browser/refresh',
          ],
        },
      ],
      '/tang/gitlab/': [
        {
          text: 'git',
          items: [
            '/tang/gitlab/gitlab-error',
            '/tang/gitlab/gitlab-commands'
          ]
        }
      ],
      '/tang/docker/': [
        {
          text: 'docker',
          items: [
            '/tang/docker/docker搭建私有镜像仓库',
            '/tang/docker/Docker'
          ]
        }
      ],
      '/tang/Elasticsearch/': [
        {
          text: 'Elasticsearch',
          items: [
            '/tang/Elasticsearch/01_Elasticsearch概述',
            '/tang/Elasticsearch/02_Elasticsearch相关工具的安装与使用',
            '/tang/Elasticsearch/03_Elasticsearch核心概念',
            '/tang/Elasticsearch/04_Elasticsearch基本操作',
            '/tang/Elasticsearch/05_Elasticsearch DSL高级查询',
            '/tang/Elasticsearch/06_Elasticsearch进阶查询',
            '/tang/Elasticsearch/07_Java API 操作 Elasticsearch',
            '/tang/Elasticsearch/08_Spring Data Elasticsearch',
            '/tang/Elasticsearch/09_Linux 安装 Elasticsearch',
            '/tang/Elasticsearch/10_CAP定理',
            '/tang/Elasticsearch/11_Elasticsearch集群',
            '/tang/Elasticsearch/12_Elasticsearch分片控制与原理',
            '/tang/Elasticsearch/13_Elasticsearch的优化建议',
          ]
        }
      ],
      '/tang/java2/': [
        {
          text: 'java基础查漏补缺',
          items: [
            '/tang/java2/00_前言',
            '/tang/java2/01_Java语言概述',
            '/tang/java2/02_Java基本语法',
            '/tang/java2/03_Java数组',
            '/tang/java2/04_面向对象编程（上）',
            '/tang/java2/05_面向对象编程（中）',
            '/tang/java2/06_面向对象编程（下）',
            '/tang/java2/07_异常处理',
            '/tang/java2/08_多线程',
            '/tang/java2/09_Java常用类',
            '/tang/java2/10_枚举&注解',
            '/tang/java2/11_Java集合',
            '/tang/java2/12_Java泛型',
            '/tang/java2/13_IO流',
            '/tang/java2/14_网络编程',
            '/tang/java2/15_Java反射机制',
            '/tang/java2/16_Java8新特性',
            '/tang/java2/17_Java9&10&11新特性',
            '/tang/java2/18_JUC并发编程',
            '/tang/java2/19_设计模式',
            '/tang/java2/20_排序算法',
            '/tang/java2/99_面试题',
          ]
        }
      ],
      '/tang/mysql/': [
        {
          text: 'mysql基础查漏补缺',
          items: [
            '/tang/mysql/01_MySQL概述',
            '/tang/mysql/02_关系型数据库与非关系型数据库',
            '/tang/mysql/03_关系型数据库设计原则',
            '/tang/mysql/04_MySQL的登录',
            '/tang/mysql/05_MySQL一些常用命令',
            '/tang/mysql/06_MySQL图形化管理工具',
            '/tang/mysql/07_运算符',
            '/tang/mysql/08_MySQL函数',
            '/tang/mysql/09_子查询',
            '/tang/mysql/10_管理数据库和数据库表',
            '/tang/mysql/11_数据的增删改',
            '/tang/mysql/12_MySQL中的数据类型',
            '/tang/mysql/13_约束',
            '/tang/mysql/14_视图',
            '/tang/mysql/15_存储过程与存储函数',
            '/tang/mysql/16_变量、流程控制与游标',
            '/tang/mysql/17_触发器',
            '/tang/mysql/18_MySQL8.0新特性',
            '/tang/mysql/19_表及其数据',
            '/tang/mysql/99_MySQL常见问题的解决',
          ]
        }
      ],
      '/tang/Prometheus/': [
        {
          text: 'Prometheus',
          items: [
            '/tang/Prometheus/1',
            '/tang/Prometheus/2',
          ]
        }
      ],
      '/tang/Python/': [
        {
          text: 'Python',
          items: [
            '/tang/Python/1',
            '/tang/Python/2'
          ]
        }
      ],
      '/tang/mservice/': [
        {
          text: '微服务学习',
          items: [
            '/tang/mservice/2',
            '/tang/mservice/1'
          ]
        }
      ],
      '/tang/Vue/': [
        {
          text: 'Vue',
          items: [
            '/tang/Vue/1',
            '/tang/Vue/2',
            '/tang/Vue/3',
          ]
        }
      ],
      '/tang/server/': [
        {
          text: '服务器环境安装',
          items: [
            '/tang/server/CentOS7root账号免密登录',
            '/tang/server/CentOS7安装GitLab',
            '/tang/server/CentOS7安装jdk1.8',
            '/tang/server/CentOs7安装jenkins',
            '/tang/server/CentOS7安装mysql5.7(使用yum源安装)',
            '/tang/server/CentOS7安装redis',
            '/tang/server/CentOS7平滑升级nginx',
            '/tang/server/借助阿里云服务器使用frp做内网穿透',
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
                '/tang/k8s/学习资料/command',
                '/tang/k8s/学习资料/blog',
                '/tang/k8s/学习资料/ftp',
                '/tang/k8s/学习资料/auto',
              ]
            },
            {
              text: '错误集锦',
              items: [
                '/tang/k8s/错误集锦/6443_connect-refused',
                '/tang/k8s/错误集锦/1',
                '/tang/k8s/错误集锦/2',
                '/tang/k8s/错误集锦/3',
                '/tang/k8s/错误集锦/4',
              ]
            }
          ]
        }
      ],
      '/tang/项目上线/': [
        {
          text: '项目上线',
          items: [
            '/tang/项目上线/xiaochengxu',
          ]
        }
      ],
      '/tang/IoTPlatform': [
        {
          text: '物联网项目',
          items: [
            '/tang/IoTPlatform/jetlinks'
          ]
        }
      ],
      '/formwork/vue/': [
        {
          text: 'VUE2',
          items: [
            '/formwork/vue/vueyuanli',
            '/formwork/vue/smzqhs',
            '/formwork/vue/vue-slsx',
            '/formwork/vue/fzzj',
            '/formwork/vue/ysbd',
          ],
        },
      ],
      '/formwork/vue3/': [
        {
          text: 'VUE3 入门',
          items: [
            '/formwork/vue3/reactive/part1',
            '/formwork/vue3/reactive/part2',
            '/formwork/vue3/reactive/part3',
            '/formwork/vue3/reactive/part9',
            '/formwork/vue3/reactive/part10',
            '/formwork/vue3/reactive/part11',
            '/formwork/vue3/reactive/part12',
          ],
        },
      ],
      '/formwork/spring5/': [
        {
          text: 'spring5 入门',
          items: [
            '/formwork/spring5/part1',
            '/formwork/spring5/part2',
          ],
        },
      ],
      '/formwork/spring6/': [
        {
          text: 'spring6 入门',
          items: [
            '/formwork/spring6/part1',
            '/formwork/spring6/part2',
          ],
        },
      ],
      '/formwork/harymony/': [
        {
          text: '鸿蒙开发',
          items: [
            '/formwork/harmony/part1',
            '/formwork/harmony/part2',
          ],
        },
      ],
    }
  },
});
