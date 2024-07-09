import{_ as d,r as t,o as r,c,e as s,a,w as i,d as l,b as n}from"./app-DRxAhH5h.js";const o={},p=n(`<h1 id="_10-数据库和数据库表的管理" tabindex="-1"><a class="header-anchor" href="#_10-数据库和数据库表的管理"><span>10 数据库和数据库表的管理</span></a></h1><h2 id="_10-1-创建和管理数据库" tabindex="-1"><a class="header-anchor" href="#_10-1-创建和管理数据库"><span>10.1 创建和管理数据库</span></a></h2><h3 id="_10-1-1-创建数据库" tabindex="-1"><a class="header-anchor" href="#_10-1-1-创建数据库"><span>10.1.1 创建数据库</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">CREATE DATABASE IF NOT EXISTS 数据库名 CHARACTER SET &#39;utf8mb4&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,4),u=n(`<ul><li><strong>IF NOT EXISTS</strong>，表示如果要创建的数据库不存在，才会创建成功。如果存在，不会创建，也不会报错。</li><li>如果不指明字符编码集CHARACTER，会使用数据库管理系统默认字符编码集</li></ul><h3 id="_10-1-2-修改数据库" tabindex="-1"><a class="header-anchor" href="#_10-1-2-修改数据库"><span>10.1.2 修改数据库</span></a></h3><p><strong>企业开发中一般不会修改。改的话，也是只能改字符集，数据库名无法修改。</strong></p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 更改数据库字符集</span>
<span class="line">ALTER DATABASE 数据库名 CHARACTER SET &#39;gbk&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-1-3-删除数据库" tabindex="-1"><a class="header-anchor" href="#_10-1-3-删除数据库"><span>10.1.3 删除数据库</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 删除数据库（IF EXISTS：如果要删除的数据库存在，则删除成功。如果不存在，也不会报错）</span>
<span class="line">DROP DATABASE IF EXISTS 数据库名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-1-4-数据库其他操作" tabindex="-1"><a class="header-anchor" href="#_10-1-4-数据库其他操作"><span>10.1.4 数据库其他操作</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 查看当前连接中的所有数据库</span>
<span class="line">SHOW DATABASES;</span>
<span class="line"></span>
<span class="line"># 查看创建数据库的语句的结构</span>
<span class="line">SHOW CREATE DATABASE 数据库名;</span>
<span class="line"></span>
<span class="line"># 切换数据库</span>
<span class="line">USE 数据库名;</span>
<span class="line"></span>
<span class="line"># 查看当前数据库中所有的表</span>
<span class="line">SHOW TABLES;</span>
<span class="line"></span>
<span class="line"># 查看指定数据库中所有的表</span>
<span class="line">SHOW TABLES FROM 数据库名;</span>
<span class="line"></span>
<span class="line"># 查看当前使用的数据库</span>
<span class="line">SELECT DATABASE();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-2-创建和管理数据库表" tabindex="-1"><a class="header-anchor" href="#_10-2-创建和管理数据库表"><span>10.2 创建和管理数据库表</span></a></h2><h3 id="_10-2-1-创建表" tabindex="-1"><a class="header-anchor" href="#_10-2-1-创建表"><span>10.2.1 创建表</span></a></h3>`,10),m=n(`<p>方式1：“白手起家”式</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">CREATE TABLE [IF NOT EXISTS] 表名(</span>
<span class="line">	字段1, 数据类型 [约束条件] [默认值],</span>
<span class="line">    字段2, 数据类型 [约束条件] [默认值],</span>
<span class="line">    字段3, 数据类型 [约束条件] [默认值],</span>
<span class="line">    ……</span>
<span class="line">    [表约束条件]</span>
<span class="line">);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=s("ul",null,[s("li",null,[s("strong",null,"IF NOT EXISTS"),l("，表示如果要创建的表不存在，才会创建成功。如果存在，不会创建，也不会报错。")]),s("li",null,"如果不指明字符编码集CHARACTER，会使用当前数据库默认的字符编码集")],-1),g=n(`<p>方式2：基于已有的表创建</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">CREATE TABLE 表名</span>
<span class="line">AS </span>
<span class="line">SELECT 列名1, 列名2, 列名3, ...</span>
<span class="line">FROM 已存在的表名</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b=s("ul",null,[s("li",null,[l("这种方式是基于已有的表创建，或者是基于已有的表经过一系列的查询出来的数据来创建。"),s("strong",null,"AS"),l("后边加上一个SELECT查询语句即可。查询语句中的列名或者列的别名就作为新表的列名。")]),s("li",null,"这种方式在创建表时，还会在新表中导入符合条件的数据。"),s("li",null,"除了非空约束，其他约束不能被赋值过来")],-1),h=n(`<h3 id="_10-2-2-修改表" tabindex="-1"><a class="header-anchor" href="#_10-2-2-修改表"><span>10.2.2 修改表</span></a></h3><p><strong>修改表指的是修改数据库中已经存在的数据表的结构</strong>，分为如下4中情况：</p><ul><li>添加新的列</li><li>修改已有的列</li><li>删除已有的列</li><li>重命名已有的列</li></ul><p>实现以上功能的关键字，<strong>ALTER TABLE</strong>。</p><blockquote><p>添加新的列</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">ALTER TABLE 表名 ADD 字段名 字段类型 [约束条件] [字段位置： FIRST 或 AFTER 字段名];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,6),E=n(`<ul><li>关键字：<strong>ALTER TABLE</strong> 和 <strong>ADD</strong></li><li>约束条件是可选的，用来对添加的字段进行约束。</li><li>字段位置，也是可选的。不同的值代表的意义如下： <ul><li><code>不写</code>：表示在表的末尾追加新的列</li><li><code>FIRST</code>：在表的开头添加新的列</li><li><code>AFTER 字段名</code>：在“字段名”<strong>之后</strong>插入新的列</li></ul></li></ul><blockquote><p>修改已有的列</p></blockquote><p><strong>修改列指的是修改列的字段类型、默认值、在表中的位置。</strong></p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">ALTER TABLE 表名 MODIFY 字段名1 字段类型 [DEFAULT 默认值][FIRST|AFTER 字段名2]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,4),_=n(`<ul><li>关键字：<strong>ALTER TABLE</strong> 和 <strong>MODIFY</strong></li><li>默认值是可选的。</li><li>字段位置，也是可选的。不同的值代表的意义如下： <ul><li><code>不写</code>：表示还在原来位置不变</li><li><code>FIRST</code>：表示将该列移到表的开头</li><li><code>AFTER 字段名</code>：表示将该列移动到“字段名2”<strong>之后</strong></li></ul></li></ul><blockquote><p>重命名已有的列</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">ALTER TABLE 表名 CHANGE 列名 新列名 新数据类型;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,3),y=n(`<ul><li>关键字：<strong>ALTER TABLE</strong> 和 <strong>CHANGE</strong></li></ul><blockquote><p>删除已有的列</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">ALTER TABLE 表名 DROP 列名</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,3),T=n(`<ul><li>关键字：<strong>ALTER TABLE</strong> 和 <strong>DROP</strong></li></ul><h3 id="_10-2-3-重命名表" tabindex="-1"><a class="header-anchor" href="#_10-2-3-重命名表"><span>10.2.3 重命名表</span></a></h3><ul><li><p>方式1：<strong>RENAME</strong></p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">RENAME TABLE 表名 TO 新表名</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>方式2：<strong>ALTER</strong></p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">ALTER TABLE 表名 RENAME [TO] 新表名</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h3 id="_10-2-4-删除表" tabindex="-1"><a class="header-anchor" href="#_10-2-4-删除表"><span>10.2.4 删除表</span></a></h3><blockquote><p>说明</p></blockquote><ul><li>当一张表<strong>没有与其他任何数据表形成关联关系</strong>时，才可删除</li><li>删除表时，所有正在运行的相关事务被提交</li><li>删除表时，所有相关索引被删除</li></ul><blockquote><p>语法</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">DROP TABLE [IF EXISTS] 数据表1 [, 数据表2, …, 数据表n];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,8),A=n(`<ul><li><strong>DROP TABLE 语句不能回滚！！！</strong> 删表前，做好备份工作。</li><li>DROP之后，删除表数据、表结构，释放表空间</li></ul><h3 id="_10-2-5-清空表" tabindex="-1"><a class="header-anchor" href="#_10-2-5-清空表"><span>10.2.5 清空表</span></a></h3><blockquote><p>语法</p></blockquote><ul><li><p>方式1：使用<strong>TRUNCATE</strong></p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">TRUNCATE 表名</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>方式2：使用不带WHERE的<strong>DELETE</strong></p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">DELETE FROM 表名</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><blockquote><p>DROP、DELETE和TRUNCATE的区别</p></blockquote><ul><li>DROP会删掉表结构，DELETE和TRUNCATE是删除表数据，保留表结构</li><li>DELETE是DML（数据库操作语言），TRUNCATE是DDL（数据库定义语言）。因此<strong>DELETE可以回滚，TRUNCATE不可以回滚</strong></li><li><strong>使用DELETE，删除数据后表空间还在</strong>（在系统重启前，还可以恢复），<strong>TRUNCATE是将数据和表空间都删除了</strong></li><li><strong>DELETE可以操作table、view，TRUNCATE只能操作table</strong></li><li>如果表中id是自增型且步长为1，使用<strong>delete</strong>后，<strong>新插入的数据的id会原数数据的id上继续累加</strong>。使用<strong>TRUNCATE</strong>后，新<strong>插入的数据的id会从1开始</strong></li></ul><h3 id="_10-2-7-dcl中的commit和rollback" tabindex="-1"><a class="header-anchor" href="#_10-2-7-dcl中的commit和rollback"><span>10.2.7 DCL中的COMMIT和ROLLBACK</span></a></h3>`,7),q=s("strong",null,"回滚到最近的一次COMMIT之后",-1),L=n(`<h3 id="_10-2-8-ddl和dml的说明" tabindex="-1"><a class="header-anchor" href="#_10-2-8-ddl和dml的说明"><span>10.2.8 DDL和DML的说明</span></a></h3><ul><li>① DDL的操作一旦执行，就不可以回滚。DDL操作执行完成后，会自动执行COMMIT操作，因此指令<code>SET autocommit= FALSE</code>对DML无效。</li><li>② DML的操作默认情况下，一旦执行，也是不可回滚。但是如果在执行DML之前，执行了<code>SET autocommit= FALSE</code>，则执行的DML操作就可以实现回滚</li></ul><h3 id="_10-2-9-表的其他操作" tabindex="-1"><a class="header-anchor" href="#_10-2-9-表的其他操作"><span>10.2.9 表的其他操作</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 查看表结构</span>
<span class="line">DESC 表名;</span>
<span class="line"></span>
<span class="line"># 查看创建表的语句结构</span>
<span class="line">SHOW CREATE TABLE 表名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-10-mysql8-0新特性-ddl的原子化" tabindex="-1"><a class="header-anchor" href="#_10-2-10-mysql8-0新特性-ddl的原子化"><span>10.2.10 MySQL8.0新特性：DDL的原子化</span></a></h3><blockquote><p>概述</p></blockquote><ul><li>在MySQL 8.0版本中，<strong>InnoDB</strong>表的DDL支持事务完整性，即 <code>DDL操作要么成功要么回滚</code> 。</li><li>DDL操作回滚日志写入到data dictionary数据字典表mysql.innodb_ddl_log（该表是隐藏的表，通过show tables无法看到）中，用于回滚操作。通过设置参数，可将DDL操作日志打印输出到MySQL错误日志中。</li><li>原子DDL操作这一特性，支持表相关操作，也支持非表相关操作。 <ul><li><strong>表相关操作：</strong> drop、create、alter(操作对象是databases, tablespaces, tables, and indexes)语法、truncate语法</li><li><strong>非表相关操作：</strong> create、drop、alter(操作对象是trigger、event、views)</li></ul></li></ul><blockquote><p>例子1：DROP表</p></blockquote><p>在数据库中创建表book1，同时保证当前数据库中没有book2表。执行<code>DROP TABLE book1, book2;</code>，观察在MySQL5.7和MySQL8.0中的结果。</p><p><code>结果：</code>MySQL5.7中book1被删除，MySQL8.0中book1仍然存在。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 创建数据库</span>
<span class="line">CREATE DATABASE mytest;</span>
<span class="line"></span>
<span class="line"># 使用数据库</span>
<span class="line">USE mytest;</span>
<span class="line"></span>
<span class="line"># 创建book1表</span>
<span class="line">CREATE TABLE book1 (</span>
<span class="line">	id INT,</span>
<span class="line">	\`name\` VARCHAR(30) </span>
<span class="line">);</span>
<span class="line"></span>
<span class="line"># 显示数据库中的表</span>
<span class="line">SHOW TABLES; # 结果为book1，表book1创建成功</span>
<span class="line"></span>
<span class="line"># 删除book1，book2。其中book2不存在，删除会报错</span>
<span class="line">DROP TABLE book1, book2; # Unknown table &#39;mytest.book2&#39;</span>
<span class="line"></span>
<span class="line"># 再次显示数据库中的表</span>
<span class="line">SHOW TABLES; # NySQL5.7中，显示为空，表book1成功删除 </span>
<span class="line">			 # NySQL8.0中，结果为book1，表book1删除失败</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>例子2：使用子查询创建表CREATE TABLE ... SELECT ...</p></blockquote><p>从<strong>MySQL8.0.21</strong>开始，在支持原子DDL的存储引擎上，当使用基于row的复制模式时，<strong>CREATE TABLE...SELECT...，该语句作为一个事务记录在二进制日志中</strong>。<strong>之前的版本中，它被记录为两个事务</strong>，一个用于create表，另一个用于insert数据。两个事务之间或插入数据时发生服务器故障<strong>可能导致复制了一张空表</strong>。通过引入原子DDL支持，CREATE TABLE ...SELECT语句现在对于基于行的复制是安全的，并且允许与基于GTID的复制一起使用。</p>`,13);function D(k,R){const e=t("front");return r(),c("div",null,[p,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[l("说明：")]),_:1})]),u,s("ul",null,[s("li",null,[m,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[l("说明：")]),_:1})]),v]),s("li",null,[g,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[l("说明：")]),_:1})]),b])]),h,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[l("说明：")]),_:1})]),E,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[l("说明：")]),_:1})]),_,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[l("说明：")]),_:1})]),y,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[l("说明：")]),_:1})]),T,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[l("说明：")]),_:1})]),A,s("ul",null,[s("li",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[l("COMMIT")]),_:1}),l("：提交数据。一旦执行COMMIT，则数据就被永久的保存在了数据库中，意为着数据不可以回滚")]),s("li",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[l("ROLLBACK")]),_:1}),l("：回滚数据。一旦ROLLBACK，则可以实现数据的回滚。"),q,l("。")])]),L])}const C=d(o,[["render",D],["__file","10_管理数据库和数据库表.html.vue"]]),B=JSON.parse('{"path":"/static/tang/mysql/10_%E7%AE%A1%E7%90%86%E6%95%B0%E6%8D%AE%E5%BA%93%E5%92%8C%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8.html","title":"10 数据库和数据库表的管理","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"10.1 创建和管理数据库","slug":"_10-1-创建和管理数据库","link":"#_10-1-创建和管理数据库","children":[{"level":3,"title":"10.1.1 创建数据库","slug":"_10-1-1-创建数据库","link":"#_10-1-1-创建数据库","children":[]},{"level":3,"title":"10.1.2 修改数据库","slug":"_10-1-2-修改数据库","link":"#_10-1-2-修改数据库","children":[]},{"level":3,"title":"10.1.3 删除数据库","slug":"_10-1-3-删除数据库","link":"#_10-1-3-删除数据库","children":[]},{"level":3,"title":"10.1.4 数据库其他操作","slug":"_10-1-4-数据库其他操作","link":"#_10-1-4-数据库其他操作","children":[]}]},{"level":2,"title":"10.2 创建和管理数据库表","slug":"_10-2-创建和管理数据库表","link":"#_10-2-创建和管理数据库表","children":[{"level":3,"title":"10.2.1 创建表","slug":"_10-2-1-创建表","link":"#_10-2-1-创建表","children":[]},{"level":3,"title":"10.2.2 修改表","slug":"_10-2-2-修改表","link":"#_10-2-2-修改表","children":[]},{"level":3,"title":"10.2.3 重命名表","slug":"_10-2-3-重命名表","link":"#_10-2-3-重命名表","children":[]},{"level":3,"title":"10.2.4 删除表","slug":"_10-2-4-删除表","link":"#_10-2-4-删除表","children":[]},{"level":3,"title":"10.2.5 清空表","slug":"_10-2-5-清空表","link":"#_10-2-5-清空表","children":[]},{"level":3,"title":"10.2.7 DCL中的COMMIT和ROLLBACK","slug":"_10-2-7-dcl中的commit和rollback","link":"#_10-2-7-dcl中的commit和rollback","children":[]},{"level":3,"title":"10.2.8 DDL和DML的说明","slug":"_10-2-8-ddl和dml的说明","link":"#_10-2-8-ddl和dml的说明","children":[]},{"level":3,"title":"10.2.9 表的其他操作","slug":"_10-2-9-表的其他操作","link":"#_10-2-9-表的其他操作","children":[]},{"level":3,"title":"10.2.10 MySQL8.0新特性：DDL的原子化","slug":"_10-2-10-mysql8-0新特性-ddl的原子化","link":"#_10-2-10-mysql8-0新特性-ddl的原子化","children":[]}]}],"git":{},"filePathRelative":"static/tang/mysql/10_管理数据库和数据库表.md"}');export{C as comp,B as data};
