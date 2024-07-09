import{_ as a,r as o,o as r,c as i,e as l,a as t,w as n,d as e,b as c}from"./app-DRxAhH5h.js";const _={},d=l("h1",{id:"_1-mysql数据库概述",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_1-mysql数据库概述"},[l("span",null,"1 MySQL数据库概述")])],-1),h=l("h2",{id:"_1-1-为什么要使用数据库",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_1-1-为什么要使用数据库"},[l("span",null,"1.1 为什么要使用数据库")])],-1),g=l("ul",null,[l("li",null,"持久化(persistence)：把数据保存到可掉电式存储设备中以供之后使用。大多数情况下，特别是企 业级应用，数据持久化意味着将内存中的数据保存到硬盘上加以”固化”，而持久化的实现过程大多 通过各种关系数据库来完成。"),l("li",null,"持久化的主要作用是将内存中的数据存储在关系型数据库中，当然也可以存储在磁盘文件、XML数 据文件中。")],-1),u=l("h2",{id:"_1-2-数据库相关概念",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_1-2-数据库相关概念"},[l("span",null,"1.2 数据库相关概念")])],-1),y=l("code",null,"数据库",-1),p=c('<h2 id="_1-3-sql分类" tabindex="-1"><a class="header-anchor" href="#_1-3-sql分类"><span>1.3 SQL分类</span></a></h2><p>SQL语言在<strong>功能</strong>上主要分为如下3大类：</p><ul><li><p><code>DDL</code>：数据定义语言。这些语句定义了不同的数据库、表、视图、索 引等数据库对象，还可以用来创建、删除、修改数据库和数据表的结构。</p><p>主要的语句关键字包括 <strong>CREATE</strong> 、 <strong>DROP</strong> 、 <strong>ALTER</strong>、<strong>TURNCATE</strong> 等。</p></li><li><p><code>DML</code>：数据操作语言。用于添加、删除、更新和查询数据库记 录，并检查数据完整性。</p><p>主要的语句关键字包括 <strong>INSERT</strong> 、 <strong>DELETE</strong> 、 <strong>UPDATE</strong> 、 <strong>SELECT</strong> 等。 SELECT是SQL语言的基础，最为重要。</p></li><li><p><code>DCL</code>：数据控制语言。用于定义数据库、表、字段、用户的访问权限和 安全级别。</p><p>主要的语句关键字包括 <strong>GRANT</strong> （赋予权限）、 <strong>REVOKE</strong>（回收权限）、 <strong>COMMIT</strong> 、 <strong>ROLLBACK</strong> 、 <strong>SAVEPOINT</strong> 等。</p></li></ul><h2 id="_1-4-mysql特点" tabindex="-1"><a class="header-anchor" href="#_1-4-mysql特点"><span>1.4 MySQL特点</span></a></h2><ul><li>开放源代码，使用成本低。</li><li>性能卓越，服务稳定。</li><li>软件体积小，使用简单，并且易于维护。</li><li>历史悠久，社区用户非常活跃，遇到问题可以寻求帮助。</li><li>许多互联网公司在用，经过了时间的验证。</li></ul><h2 id="_1-5-oracle-vs-mysql" tabindex="-1"><a class="header-anchor" href="#_1-5-oracle-vs-mysql"><span>1.5 Oracle vs MySQL</span></a></h2><ul><li>Oracle 更适合大型跨国企业的使用，因为他们对费用不敏感，但是对性能要求以及安全性有更高的要 求。</li><li>MySQL 由于其体积小、速度快、总体拥有成本低，可处理上千万条记录的大型数据库，尤其是开放源码 这一特点，使得很多互联网公司、中小型网站选择了MySQL作为网站数据库</li></ul>',7);function L(S,m){const s=o("front");return r(),i("div",null,[d,l("p",null,[t(s,{style:{background:"yellow"}},{default:n(()=>[e("MySQL是一个开源的、关系型数据库")]),_:1})]),h,g,u,l("ul",null,[l("li",null,[t(s,{style:{background:"yellow"}},{default:n(()=>[e("DB")]),_:1}),e("："),y,e("（Database） 即存储数据的“仓库”，其本质是一个文件系统。它保存了一系列有组织的数据。")]),l("li",null,[t(s,{style:{background:"yellow"}},{default:n(()=>[e("DBMS")]),_:1}),e("：数据库管理系统（Database Management System） 是一种操纵和管理数据库的大型软件，用于建立、使用和维护数据库，对数据库进行统一管理和控 制。用户通过数据库管理系统访问数据库中表内的数据。")]),l("li",null,[t(s,{style:{background:"yellow"}},{default:n(()=>[e("SQL")]),_:1}),e("：结构化查询语言（Structured Query Language） 专门用来与数据库通信的语言。")])]),p])}const E=a(_,[["render",L],["__file","01_MySQL概述.html.vue"]]),M=JSON.parse('{"path":"/static/tang/mysql/01_MySQL%E6%A6%82%E8%BF%B0.html","title":"1 MySQL数据库概述","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.1 为什么要使用数据库","slug":"_1-1-为什么要使用数据库","link":"#_1-1-为什么要使用数据库","children":[]},{"level":2,"title":"1.2 数据库相关概念","slug":"_1-2-数据库相关概念","link":"#_1-2-数据库相关概念","children":[]},{"level":2,"title":"1.3 SQL分类","slug":"_1-3-sql分类","link":"#_1-3-sql分类","children":[]},{"level":2,"title":"1.4 MySQL特点","slug":"_1-4-mysql特点","link":"#_1-4-mysql特点","children":[]},{"level":2,"title":"1.5 Oracle vs MySQL","slug":"_1-5-oracle-vs-mysql","link":"#_1-5-oracle-vs-mysql","children":[]}],"git":{},"filePathRelative":"static/tang/mysql/01_MySQL概述.md"}');export{E as comp,M as data};
