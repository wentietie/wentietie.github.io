import{_ as l,o as t,c as i,b as o}from"./app-DRxAhH5h.js";const s={},n=o('<h1 id="_2-关系型数据库与非关系型数据库" tabindex="-1"><a class="header-anchor" href="#_2-关系型数据库与非关系型数据库"><span>2 关系型数据库与非关系型数据库</span></a></h1><h2 id="_2-1-关系型数据库rdbms" tabindex="-1"><a class="header-anchor" href="#_2-1-关系型数据库rdbms"><span>2.1 关系型数据库RDBMS</span></a></h2><blockquote><p>定义</p></blockquote><p>关系型数据库模型是把复杂的数据结构归结为简单的 二元关系 （即二维表格形式）。</p><ul><li>关系型数据库以 <strong>行(row)</strong> 和 <strong>列(column)</strong> 的形式存储数据，以便于用户理解。这一系列的行和列被称为 <strong>表(table)</strong> ，一组表组成了一个<strong>库(database)</strong>。</li><li>表与表之间的数据记录有<strong>关系(relationship)</strong>。现实世界中的各种实体以及实体之间的各种联系均用 <strong>关系模型</strong> 来表示。<strong>关系型数据库</strong>，就是建立在关系模型基础上的数据库</li></ul><blockquote><p>优势</p></blockquote><ul><li><strong>复杂查询</strong>： 可以用SQL语句方便的在一个表以及多个表之间做非常复杂的数据查询。</li><li><strong>事务支持</strong>： 使得对于安全性能很高的数据访问要求得以实现。</li></ul><h2 id="_2-2-非关系型数据库nosql" tabindex="-1"><a class="header-anchor" href="#_2-2-非关系型数据库nosql"><span>2.2 非关系型数据库NoSQL</span></a></h2><blockquote><p>定义</p></blockquote><p><strong>非关系型数据库</strong>，可看成传统关系型数据库的功能 <strong>阉割版本</strong> ，基于键值对存储数据，不需要经过SQL层 的解析， <strong>性能非常高</strong> 。同时，通过减少不常用的功能，进一步提高性能。</p><blockquote><p>分类</p></blockquote><ul><li><strong>键值型数据库</strong><ul><li>定义：键值型数据库通过 Key-Value 键值的方式来存储数据，其中 Key 和 Value 可以是简单的对象，也可以是复杂的对象。Key 作为唯一的标识符</li><li>优点：查找速度快</li><li>缺点：无法 像关系型数据库一样使用条件过滤（比如 WHERE），如果你不知道去哪里找数据，就要遍历所有的键， 这就会消耗大量的计算</li><li>使用场景：内存缓存</li><li>举例：Redis</li></ul></li><li><strong>文档型数据库</strong><ul><li>定义：在数据库中文档作为处理信息的基本单位， 一个文档就相当于一条记录。文档数据库所存放的文档，就相当于键值数据库所存放的“值”。</li><li>使用场景：存放并获取文档，可以是XML、JSON等格式</li><li>举例：MongoDB</li></ul></li><li><strong>搜索引擎数据库</strong><ul><li>定义：搜索引擎数据库是应用在搜索引擎领域的数据存储形式，由于搜索引擎会爬取大量的数据，并以特定的格式进行存储，这样在检 索的时候才能保证性能最优</li><li>使用场景：搜索引擎领域</li><li>举例：Solr、Elasticsearch、Splunk</li></ul></li><li><strong>列式数据库</strong><ul><li>定义：列式数据库是将数据按照列存储到数据库中</li><li>优点：可以大量降低系统的 I/O</li><li>缺点：功能相对行式数据库有限</li><li>使用场景：分布式文件系统</li><li>举例：HBase</li></ul></li><li><strong>图形数据库</strong>： <ul><li>定义：是一种存储图形关系的数据库。它利用了图这种数据结构存储了实体（对象） 之间的关系</li><li>优点：能高效地解决复杂的关系问题</li><li>使用场景：存储复杂的实体关系，如社交网络中人与人的关系</li><li>举例：Neo4J、InfoGrid</li></ul></li></ul>',12),r=[n];function e(a,_){return t(),i("div",null,r)}const c=l(s,[["render",e],["__file","02_关系型数据库与非关系型数据库.html.vue"]]),u=JSON.parse('{"path":"/static/tang/mysql/02_%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%8E%E9%9D%9E%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93.html","title":"2 关系型数据库与非关系型数据库","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"2.1 关系型数据库RDBMS","slug":"_2-1-关系型数据库rdbms","link":"#_2-1-关系型数据库rdbms","children":[]},{"level":2,"title":"2.2 非关系型数据库NoSQL","slug":"_2-2-非关系型数据库nosql","link":"#_2-2-非关系型数据库nosql","children":[]}],"git":{},"filePathRelative":"static/tang/mysql/02_关系型数据库与非关系型数据库.md"}');export{c as comp,u as data};
