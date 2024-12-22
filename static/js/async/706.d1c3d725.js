"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["706"],{94704:function(n,e,s){s.r(e),s.d(e,{default:()=>j});var r=s("85893"),i=s("50065");let l=s.p+"static/image/near_real_time_search_write.99251801.png",d=s.p+"static/image/elasticsearch_cluster_read.a8d8a413.png",c=s.p+"static/image/elasticsearch_cluster_write.74033fd6.png";function h(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",blockquote:"blockquote",p:"p",pre:"pre",code:"code",strong:"strong",h3:"h3",img:"img",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"12-elasticsearch分片控制与原理",children:["12 Elasticsearch分片控制与原理",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#12-elasticsearch分片控制与原理",children:"#"})]}),"\n",(0,r.jsxs)(e.h2,{id:"121-分片操作",children:["12.1 分片操作",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#121-分片操作",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"创建索引时，设置主分片为3，副本为3"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:'PUT /user\r\n{\r\n  "settings": {\r\n    "number_of_shards": 3,\r\n    "number_of_replicas": 3\r\n  }\r\n}\n'})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"修改副本数量"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"主分片数量不能修改，只能修改副本数量。"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:'PUT /user/_settings\r\n{\r\n  "number_of_replicas": 0\r\n}\n'})}),"\n",(0,r.jsxs)(e.h2,{id:"122-分片控制",children:["12.2 分片控制",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#122-分片控制",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"1221-写流程",children:["12.2.1 写流程",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1221-写流程",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"新建和删除都属于写流程，必须在主分片上完成写操作之后，再复制到相关的副本分片中。"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"写流程示意图"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)("img",{src:c,alt:""})}),"\n",(0,r.jsxs)(e.h3,{id:"1222-读流程",children:["12.2.2 读流程",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1222-读流程",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"读流程示意图"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)("img",{src:d,alt:""})}),"\n",(0,r.jsxs)(e.h2,{id:"123-分片原理",children:["12.3 分片原理",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#123-分片原理",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"1231-倒排索引",children:["12.3.1 倒排索引",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1231-倒排索引",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"倒排索引概念"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"倒排索引适用于快速的全文检索。"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"正排索引 VS 倒排索引"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["正排索引：搜索引擎会将待搜索的文件第一对应一个文件ID，搜索时将这个ID和搜索关键字进行对应，行程K-V对，然后对关键字进行统计计数。",(0,r.jsx)(e.strong,{children:"根据ID找词。"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["倒排索引：一个倒排索引由文档中所有不重复词的列表组成，对于每一个词，都有一个包含它的文档的列表。",(0,r.jsx)(e.strong,{children:"根据词找ID。"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"说明"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"不论是正排索引还是倒排索引，都是存在磁盘中的，在使用的时候需要先读取到内存中。"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"倒排索引步骤"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"假设有两个文档，文档内容分别如下："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"文档一：The quick brown fox jumped over the lazy dog"}),"\n",(0,r.jsx)(e.li,{children:"文档二：Quick brown foxes leap over lazy dogs in summer"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"建立倒排索引表，过程如下："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["将两个文档拆分成单独的词，这些词被称为",(0,r.jsx)(e.strong,{children:"词条"}),"或",(0,r.jsx)(e.strong,{children:"tokens"})]}),"\n",(0,r.jsx)(e.li,{children:"创建一张包含所有不重复词条的排序列表（倒排表），然后列出词条出现在哪个文档"}),"\n",(0,r.jsx)(e.li,{children:"倒排表内容如下："}),"\n"]}),"\n",(0,r.jsxs)(e.table,{children:["\n",(0,r.jsxs)(e.thead,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.th,{children:"单词"}),"\n",(0,r.jsx)(e.th,{children:"文档列表"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.tbody,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"The"}),"\n",(0,r.jsx)(e.td,{children:"1"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"quick"}),"\n",(0,r.jsx)(e.td,{children:"1,2"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"brown"}),"\n",(0,r.jsx)(e.td,{children:"1"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"fox"}),"\n",(0,r.jsx)(e.td,{children:"1"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"jumped"}),"\n",(0,r.jsx)(e.td,{children:"1"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"over"}),"\n",(0,r.jsx)(e.td,{children:"1"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"the"}),"\n",(0,r.jsx)(e.td,{children:"1"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"lazy"}),"\n",(0,r.jsx)(e.td,{children:"1"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"dog"}),"\n",(0,r.jsx)(e.td,{children:"1"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"Quick"}),"\n",(0,r.jsx)(e.td,{children:"2"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"foxes"}),"\n",(0,r.jsx)(e.td,{children:"2"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"leap"}),"\n",(0,r.jsx)(e.td,{children:"2"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"dogs"}),"\n",(0,r.jsx)(e.td,{children:"2"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"in"}),"\n",(0,r.jsx)(e.td,{children:"2"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"summer"}),"\n",(0,r.jsx)(e.td,{children:"2"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["搜索(假设搜索",(0,r.jsx)(e.code,{children:"quick brown"}),")，过程如下："]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["首先分别搜索",(0,r.jsx)(e.code,{children:"qucik"}),"、",(0,r.jsx)(e.code,{children:"brown"}),"，结果如下"]}),"\n",(0,r.jsxs)(e.table,{children:["\n",(0,r.jsxs)(e.thead,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.th,{children:"单词"}),"\n",(0,r.jsx)(e.th,{children:"文档列表"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.tbody,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"quick"}),"\n",(0,r.jsx)(e.td,{children:"1,2"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"brown"}),"\n",(0,r.jsx)(e.td,{children:"1"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"以上结果说明两个文档都匹配。如果使用仅计算匹配词条数量的简单相似性算法，那么，我们可以说文档一比文档二的匹配度更高，文档一的排名比文档二排名更靠前。"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1232-固定不变的倒排索引",children:["12.3.2 固定不变的倒排索引",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1232-固定不变的倒排索引",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"早期的"}),"全文检索会为整个文档集合建立一个很大的倒排索引并将其写入磁盘。一旦新的索引就绪，旧索引就会被替换，这样最近的变化便可以被检测到。"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"早期的倒排索引被写入磁盘后是不可变的"}),"。"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"不变性有重要的价值："}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"不需要锁。如果从来不更新索引，就不用担心多进程同时修改数据的问题。"}),"\n",(0,r.jsxs)(e.li,{children:["一旦索引被读入内核的文件系统缓存，便会留在那里。只要文件系统缓存中还有足够的空间，那么大部分读请求会直接请求内存，而不会命中磁盘。",(0,r.jsx)(e.strong,{children:"这提供了很大的性能提升。"})]}),"\n",(0,r.jsx)(e.li,{children:"其他缓存（如filter缓存），在索引的生命周期内始终有效。它们不需要再每次数据改变时被重建。"}),"\n",(0,r.jsx)(e.li,{children:"写入单个大的倒排索引允许数据被压缩，减少磁盘I/O和需要被缓存到内存的索引的使用量。"}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"不变性的缺点："}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"最主要的问题是不能修改。如果想要让一个新的文档可以被索引，则需要重建整个索引。\r\n这要么对一个索引所能包含的数据量造成了很大的限制，要么对所以呢可被更新的频率造成了很大的限制。"}),"\n",(0,r.jsxs)(e.h3,{id:"1233-动态更新索引",children:["12.3.3 动态更新索引",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1233-动态更新索引",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"现阶段使用的是动态更新索引"}),"。如微博、哔哩哔哩、各大商城，每天都会有大量新的数据产生，如果固定不变，无法满足互联网用户的需求。"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"如何在保留不变性的前提下，实现倒排索引的更新？"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"用更多的索引"}),"。通过增加新的",(0,r.jsx)(e.strong,{children:"补充索引"}),"来反应新的修改，而不是重写整个倒排索引。每一个倒排索引都会被轮流查询到，从最早的开始查询完后再对结果进行合并。"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"按段索引概念"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["Elasticsearch基于Lucene，Lucene引入了",(0,r.jsx)(e.strong,{children:"按段索引"}),"的概念。\r\n每一段本身都是一个倒排索引。\r\n索引在Lucene中除了表示所有段的集合外，还增加了",(0,r.jsx)(e.strong,{children:"提交点"}),"的概念，即一个列出了所有已知段的文件。"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"按段索引写入流程"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"1.新文档被收集到内存索引缓存"}),"\n",(0,r.jsxs)(e.li,{children:["2.不时地，缓存被提交","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["一个新的",(0,r.jsx)(e.strong,{children:"段"}),"（即一个追加的倒排索引）被写入磁盘"]}),"\n",(0,r.jsxs)(e.li,{children:["一个新的包含新段名字的",(0,r.jsx)(e.strong,{children:"提交点"}),"被写入磁盘"]}),"\n",(0,r.jsx)(e.li,{children:"磁盘进行同步（所有在文件系统缓存中等待写入的都刷新到磁盘中，以确保它们被写入物理文件）"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"3.新的段被开启，让它包含的文档可见以被搜索"}),"\n",(0,r.jsx)(e.li,{children:"4.内存缓存被清空，等待接收新的文档"}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"按段索引的搜索"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"当一个查询被触发时，所有已知的端按顺序被查询。\r\n词项统计会对所有段的结果进行聚合，以保证每个词和每个文档的关联都被准确计算，这种方式可以用相对较低的成本将新的文档添加到索引。"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"按段索引的删除与修改"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["段是不可以改变的，所以既不能把文档从段中移除，也不能修改旧的段来反应文档的更新。\r\n取而代之的是，每个提交点都会包含一个",(0,r.jsx)(e.code,{children:".del"}),"文件，文件中会列出这些被删除文档的段信息。"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"删除"})}),"\n",(0,r.jsxs)(e.p,{children:["当一个文档被“删除”时，实际上知识在",(0,r.jsx)(e.code,{children:".del"}),"文件中被标记删除。\r\n一个被标记删除的文档仍然可以被查询匹配到，但是它会在最终结果被返回前从结果集中移除。"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"更新"})}),"\n",(0,r.jsx)(e.p,{children:"当一个文档被更新时，旧版文档被标记删除，文档的新版本被所引导一个新的段中。\r\n可能两个版本的文档都会被一个查询匹配到，但被标记删除的文档在结果集返回前被移除。"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1234-近实时搜索",children:["12.3.4 近实时搜索",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1234-近实时搜索",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"数据写入流程"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)("img",{src:l,alt:""})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"分段数据先写入到es内存缓存中，同事文档操作也会记录translog日志"}),"\n",(0,r.jsx)(e.li,{children:"es内存的数据对查询不可见，默认间隔1s将内存中的数据写入到文件系统缓存中，这里边的数据对查询可见"}),"\n",(0,r.jsx)(e.li,{children:"文件系统缓存数据间隔30min再将数据刷入磁盘中"}),"\n",(0,r.jsx)(e.li,{children:"如果文件系统缓存数据在没有刷新到磁盘的时候宕机了，可以从translog中恢复数据到磁盘。数据恢复完成后，translog数据也会被清理"}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1235-段合并",children:["12.3.5 段合并",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1235-段合并",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"背景"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["由于自动刷新流程每秒都会创建一个新的段，这样会导致短时间内段的数量暴增。\r\n而段数太多会带来较大的麻烦。\r\n每一个段都会消耗文件的句柄（句柄概念详见本章最后一节）、内存和cpu运行周期。\r\n更重要的是，",(0,r.jsx)(e.strong,{children:"每个搜索请求都必须轮流检查每个段，所以段越多，搜索越慢。"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"段合并概念"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["Elasticsearch通过在后台进行",(0,r.jsx)(e.strong,{children:"段合并"}),"来解决这个问题。小的段被合并到大的段，然后这些大的段再合并到更大的段。"]}),"\n",(0,r.jsx)(e.p,{children:"段合并的时候会将旧的已标记删除的文档从文件系统中清除，被标记删除的文档不会被拷贝的新的大段中。"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"段合并流程"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"段合并不需要用户做任何事，会在进行索引和搜索时自动进行。"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"1.当索引的时候，刷新操作会创建新的段，并将段打开以供搜索使用"}),"\n",(0,r.jsx)(e.li,{children:"2.合并进程选择一小部分大小相似的段，并在后台将它们合并到更大的段中，这并不会终端索引和搜索"}),"\n",(0,r.jsxs)(e.li,{children:["3.合并一旦结束，老的段被删除。过程如下：","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"新的段被刷入磁盘，写入一个包含新段且排除旧的和较小的段的新提交点"}),"\n",(0,r.jsx)(e.li,{children:"新的段被打开，用来搜索"}),"\n",(0,r.jsx)(e.li,{children:"老的段被删除"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"合并大的段需要消耗大量的I/O和CPU资源。如果任其发展，会影响搜索性能。\r\nElasticsearch在默认情况下会对合并流程进行资源限制，所以搜索仍然有足够的资源很好地执行。"}),"\n",(0,r.jsxs)(e.h2,{id:"124-附句柄",children:["12.4 附：句柄",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#124-附句柄",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"概念"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"文件句柄（File Handle）是操作系统中用于访问文件的一种数据结构，通常是一个整数或指针。\r\n文件句柄用于表示打开的文件，每个打开的文件都有一个唯一的句柄。"}),"\n",(0,r.jsxs)(e.p,{children:["在Linux或Unix系统中，文件句柄是通过系统调用",(0,r.jsx)(e.code,{children:"open()"}),"打开文件时返回的。\r\n当打开一个文件时，操作系统会为该文件分配一个文件句柄，并将其返回给应用程序。\r\n应用程序可以使用文件句柄来读取、写入、关闭文件等操作。"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"句柄的组成"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"文件描述符（File Descriptor）：它是一个非负整数，用于表示打开的文件。在Linux和Unix系统中，标准输入、标准输出、标准错误输出的文件描述符分别是0、 1、 2"}),"\n",(0,r.jsx)(e.li,{children:"文件状态标志（File Status Flags）：描述文件的状态，如是否可读、可写、是否为阻塞模式等"}),"\n",(0,r.jsx)(e.li,{children:"文件位置指针（File Position Pointer）：标识文件中的当前位置。应用程序可以用它来读取或写入文件。"}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"句柄使用注意事项"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"避免打开过多的文件句柄，从而导致系统的文件描述符资源紧张。"})]})}function x(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}let j=x;x.__RSPRESS_PAGE_META={},x.__RSPRESS_PAGE_META["tang%2FElasticsearch%2F12_Elasticsearch%E5%88%86%E7%89%87%E6%8E%A7%E5%88%B6%E4%B8%8E%E5%8E%9F%E7%90%86.md"]={toc:[{text:"12.1 分片操作",id:"121-分片操作",depth:2},{text:"12.2 分片控制",id:"122-分片控制",depth:2},{text:"12.2.1 写流程",id:"1221-写流程",depth:3},{text:"12.2.2 读流程",id:"1222-读流程",depth:3},{text:"12.3 分片原理",id:"123-分片原理",depth:2},{text:"12.3.1 倒排索引",id:"1231-倒排索引",depth:3},{text:"12.3.2 固定不变的倒排索引",id:"1232-固定不变的倒排索引",depth:3},{text:"12.3.3 动态更新索引",id:"1233-动态更新索引",depth:3},{text:"12.3.4 近实时搜索",id:"1234-近实时搜索",depth:3},{text:"12.3.5 段合并",id:"1235-段合并",depth:3},{text:"12.4 附：句柄",id:"124-附句柄",depth:2}],title:"12 Elasticsearch分片控制与原理",frontmatter:{}}}}]);