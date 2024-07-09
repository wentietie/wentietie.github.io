import{_ as t,o as l,c as e,b as s}from"./app-DRxAhH5h.js";const i="/assets/elasticsearch_cluster_write-CghAp9ND.png",a="/assets/elasticsearch_cluster_read-CihwUB1d.png",n="/assets/near_real_time_search_write-B5IrGSI0.png",r={},o=s(`<h1 id="_12-elasticsearch分片控制与原理" tabindex="-1"><a class="header-anchor" href="#_12-elasticsearch分片控制与原理"><span>12 Elasticsearch分片控制与原理</span></a></h1><h2 id="_12-1-分片操作" tabindex="-1"><a class="header-anchor" href="#_12-1-分片操作"><span>12.1 分片操作</span></a></h2><blockquote><p>创建索引时，设置主分片为3，副本为3</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">PUT /user</span>
<span class="line">{</span>
<span class="line">  &quot;settings&quot;: {</span>
<span class="line">    &quot;number_of_shards&quot;: 3,</span>
<span class="line">    &quot;number_of_replicas&quot;: 3</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>修改副本数量</p></blockquote><p><strong>主分片数量不能修改，只能修改副本数量。</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">PUT /user/_settings</span>
<span class="line">{</span>
<span class="line">  &quot;number_of_replicas&quot;: 0</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-2-分片控制" tabindex="-1"><a class="header-anchor" href="#_12-2-分片控制"><span>12.2 分片控制</span></a></h2><h3 id="_12-2-1-写流程" tabindex="-1"><a class="header-anchor" href="#_12-2-1-写流程"><span>12.2.1 写流程</span></a></h3><p><strong>新建和删除都属于写流程，必须在主分片上完成写操作之后，再复制到相关的副本分片中。</strong></p><blockquote><p>写流程示意图</p></blockquote><p><img src="`+i+'" alt=""></p><h3 id="_12-2-2-读流程" tabindex="-1"><a class="header-anchor" href="#_12-2-2-读流程"><span>12.2.2 读流程</span></a></h3><blockquote><p>读流程示意图</p></blockquote><p><img src="'+a+'" alt=""></p><h2 id="_12-3-分片原理" tabindex="-1"><a class="header-anchor" href="#_12-3-分片原理"><span>12.3 分片原理</span></a></h2><h3 id="_12-3-1-倒排索引" tabindex="-1"><a class="header-anchor" href="#_12-3-1-倒排索引"><span>12.3.1 倒排索引</span></a></h3><blockquote><p>倒排索引概念</p></blockquote><p>倒排索引适用于快速的全文检索。</p><blockquote><p>正排索引 VS 倒排索引</p></blockquote><ul><li><p>正排索引：搜索引擎会将待搜索的文件第一对应一个文件ID，搜索时将这个ID和搜索关键字进行对应，行程K-V对，然后对关键字进行统计计数。<strong>根据ID找词。</strong></p></li><li><p>倒排索引：一个倒排索引由文档中所有不重复词的列表组成，对于每一个词，都有一个包含它的文档的列表。<strong>根据词找ID。</strong></p></li></ul><blockquote><p>说明</p></blockquote><p>不论是正排索引还是倒排索引，都是存在磁盘中的，在使用的时候需要先读取到内存中。</p><blockquote><p>倒排索引步骤</p></blockquote><ul><li><p>假设有两个文档，文档内容分别如下：</p><ul><li>文档一：The quick brown fox jumped over the lazy dog</li><li>文档二：Quick brown foxes leap over lazy dogs in summer</li></ul></li><li><p>建立倒排索引表，过程如下：</p><ul><li>将两个文档拆分成单独的词，这些词被称为<strong>词条</strong>或<strong>tokens</strong></li><li>创建一张包含所有不重复词条的排序列表（倒排表），然后列出词条出现在哪个文档</li><li>倒排表内容如下：</li></ul><table><thead><tr><th>单词</th><th>文档列表</th></tr></thead><tbody><tr><td>The</td><td>1</td></tr><tr><td>quick</td><td>1,2</td></tr><tr><td>brown</td><td>1</td></tr><tr><td>fox</td><td>1</td></tr><tr><td>jumped</td><td>1</td></tr><tr><td>over</td><td>1</td></tr><tr><td>the</td><td>1</td></tr><tr><td>lazy</td><td>1</td></tr><tr><td>dog</td><td>1</td></tr><tr><td>Quick</td><td>2</td></tr><tr><td>foxes</td><td>2</td></tr><tr><td>leap</td><td>2</td></tr><tr><td>dogs</td><td>2</td></tr><tr><td>in</td><td>2</td></tr><tr><td>summer</td><td>2</td></tr></tbody></table></li><li><p>搜索(假设搜索<code>quick brown</code>)，过程如下：</p><ul><li><p>首先分别搜索<code>qucik</code>、<code>brown</code>，结果如下</p><table><thead><tr><th>单词</th><th>文档列表</th></tr></thead><tbody><tr><td>quick</td><td>1,2</td></tr><tr><td>brown</td><td>1</td></tr></tbody></table></li><li><p>以上结果说明两个文档都匹配。如果使用仅计算匹配词条数量的简单相似性算法，那么，我们可以说文档一比文档二的匹配度更高，文档一的排名比文档二排名更靠前。</p></li></ul></li></ul><h3 id="_12-3-2-固定不变的倒排索引" tabindex="-1"><a class="header-anchor" href="#_12-3-2-固定不变的倒排索引"><span>12.3.2 固定不变的倒排索引</span></a></h3><p><strong>早期的</strong>全文检索会为整个文档集合建立一个很大的倒排索引并将其写入磁盘。一旦新的索引就绪，旧索引就会被替换，这样最近的变化便可以被检测到。</p><p><strong>早期的倒排索引被写入磁盘后是不可变的</strong>。</p><blockquote><p>不变性有重要的价值：</p></blockquote><ul><li>不需要锁。如果从来不更新索引，就不用担心多进程同时修改数据的问题。</li><li>一旦索引被读入内核的文件系统缓存，便会留在那里。只要文件系统缓存中还有足够的空间，那么大部分读请求会直接请求内存，而不会命中磁盘。<strong>这提供了很大的性能提升。</strong></li><li>其他缓存（如filter缓存），在索引的生命周期内始终有效。它们不需要再每次数据改变时被重建。</li><li>写入单个大的倒排索引允许数据被压缩，减少磁盘I/O和需要被缓存到内存的索引的使用量。</li></ul><blockquote><p>不变性的缺点：</p></blockquote><p>最主要的问题是不能修改。如果想要让一个新的文档可以被索引，则需要重建整个索引。 这要么对一个索引所能包含的数据量造成了很大的限制，要么对所以呢可被更新的频率造成了很大的限制。</p><h3 id="_12-3-3-动态更新索引" tabindex="-1"><a class="header-anchor" href="#_12-3-3-动态更新索引"><span>12.3.3 动态更新索引</span></a></h3><p><strong>现阶段使用的是动态更新索引</strong>。如微博、哔哩哔哩、各大商城，每天都会有大量新的数据产生，如果固定不变，无法满足互联网用户的需求。</p><blockquote><p>如何在保留不变性的前提下，实现倒排索引的更新？</p></blockquote><p><strong>用更多的索引</strong>。通过增加新的<strong>补充索引</strong>来反应新的修改，而不是重写整个倒排索引。每一个倒排索引都会被轮流查询到，从最早的开始查询完后再对结果进行合并。</p><blockquote><p>按段索引概念</p></blockquote><p>Elasticsearch基于Lucene，Lucene引入了<strong>按段索引</strong>的概念。 每一段本身都是一个倒排索引。 索引在Lucene中除了表示所有段的集合外，还增加了<strong>提交点</strong>的概念，即一个列出了所有已知段的文件。</p><blockquote><p>按段索引写入流程</p></blockquote><ul><li>1.新文档被收集到内存索引缓存</li><li>2.不时地，缓存被提交 <ul><li>一个新的<strong>段</strong>（即一个追加的倒排索引）被写入磁盘</li><li>一个新的包含新段名字的<strong>提交点</strong>被写入磁盘</li><li>磁盘进行同步（所有在文件系统缓存中等待写入的都刷新到磁盘中，以确保它们被写入物理文件）</li></ul></li><li>3.新的段被开启，让它包含的文档可见以被搜索</li><li>4.内存缓存被清空，等待接收新的文档</li></ul><blockquote><p>按段索引的搜索</p></blockquote><p>当一个查询被触发时，所有已知的端按顺序被查询。 词项统计会对所有段的结果进行聚合，以保证每个词和每个文档的关联都被准确计算，这种方式可以用相对较低的成本将新的文档添加到索引。</p><blockquote><p>按段索引的删除与修改</p></blockquote><p>段是不可以改变的，所以既不能把文档从段中移除，也不能修改旧的段来反应文档的更新。 取而代之的是，每个提交点都会包含一个<code>.del</code>文件，文件中会列出这些被删除文档的段信息。</p><ul><li><p><strong>删除</strong></p><p>当一个文档被“删除”时，实际上知识在<code>.del</code>文件中被标记删除。 一个被标记删除的文档仍然可以被查询匹配到，但是它会在最终结果被返回前从结果集中移除。</p></li><li><p><strong>更新</strong></p><p>当一个文档被更新时，旧版文档被标记删除，文档的新版本被所引导一个新的段中。 可能两个版本的文档都会被一个查询匹配到，但被标记删除的文档在结果集返回前被移除。</p></li></ul><h3 id="_12-3-4-近实时搜索" tabindex="-1"><a class="header-anchor" href="#_12-3-4-近实时搜索"><span>12.3.4 近实时搜索</span></a></h3><blockquote><p>数据写入流程</p></blockquote><p><img src="'+n+'" alt=""></p><ul><li>分段数据先写入到es内存缓存中，同事文档操作也会记录translog日志</li><li>es内存的数据对查询不可见，默认间隔1s将内存中的数据写入到文件系统缓存中，这里边的数据对查询可见</li><li>文件系统缓存数据间隔30min再将数据刷入磁盘中</li><li>如果文件系统缓存数据在没有刷新到磁盘的时候宕机了，可以从translog中恢复数据到磁盘。数据恢复完成后，translog数据也会被清理</li></ul><h3 id="_12-3-5-段合并" tabindex="-1"><a class="header-anchor" href="#_12-3-5-段合并"><span>12.3.5 段合并</span></a></h3><blockquote><p>背景</p></blockquote><p>由于自动刷新流程每秒都会创建一个新的段，这样会导致短时间内段的数量暴增。 而段数太多会带来较大的麻烦。 每一个段都会消耗文件的句柄（句柄概念详见本章最后一节）、内存和cpu运行周期。 更重要的是，<strong>每个搜索请求都必须轮流检查每个段，所以段越多，搜索越慢。</strong></p><blockquote><p>段合并概念</p></blockquote><p>Elasticsearch通过在后台进行<strong>段合并</strong>来解决这个问题。小的段被合并到大的段，然后这些大的段再合并到更大的段。</p><p>段合并的时候会将旧的已标记删除的文档从文件系统中清除，被标记删除的文档不会被拷贝的新的大段中。</p><blockquote><p>段合并流程</p></blockquote><p>段合并不需要用户做任何事，会在进行索引和搜索时自动进行。</p><ul><li>1.当索引的时候，刷新操作会创建新的段，并将段打开以供搜索使用</li><li>2.合并进程选择一小部分大小相似的段，并在后台将它们合并到更大的段中，这并不会终端索引和搜索</li><li>3.合并一旦结束，老的段被删除。过程如下： <ul><li>新的段被刷入磁盘，写入一个包含新段且排除旧的和较小的段的新提交点</li><li>新的段被打开，用来搜索</li><li>老的段被删除</li></ul></li></ul><p>合并大的段需要消耗大量的I/O和CPU资源。如果任其发展，会影响搜索性能。 Elasticsearch在默认情况下会对合并流程进行资源限制，所以搜索仍然有足够的资源很好地执行。</p><h2 id="_12-4-附-句柄" tabindex="-1"><a class="header-anchor" href="#_12-4-附-句柄"><span>12.4 附：句柄</span></a></h2><blockquote><p>概念</p></blockquote><p>文件句柄（File Handle）是操作系统中用于访问文件的一种数据结构，通常是一个整数或指针。 文件句柄用于表示打开的文件，每个打开的文件都有一个唯一的句柄。</p><p>在Linux或Unix系统中，文件句柄是通过系统调用<code>open()</code>打开文件时返回的。 当打开一个文件时，操作系统会为该文件分配一个文件句柄，并将其返回给应用程序。 应用程序可以使用文件句柄来读取、写入、关闭文件等操作。</p><blockquote><p>句柄的组成</p></blockquote><ul><li>文件描述符（File Descriptor）：它是一个非负整数，用于表示打开的文件。在Linux和Unix系统中，标准输入、标准输出、标准错误输出的文件描述符分别是0、 1、 2</li><li>文件状态标志（File Status Flags）：描述文件的状态，如是否可读、可写、是否为阻塞模式等</li><li>文件位置指针（File Position Pointer）：标识文件中的当前位置。应用程序可以用它来读取或写入文件。</li></ul><blockquote><p>句柄使用注意事项</p></blockquote><p>避免打开过多的文件句柄，从而导致系统的文件描述符资源紧张。</p>',67),d=[o];function c(p,u){return l(),e("div",null,d)}const _=t(r,[["render",c],["__file","12_Elasticsearch分片控制与原理.html.vue"]]),b=JSON.parse('{"path":"/static/tang/Elasticsearch/12_Elasticsearch%E5%88%86%E7%89%87%E6%8E%A7%E5%88%B6%E4%B8%8E%E5%8E%9F%E7%90%86.html","title":"12 Elasticsearch分片控制与原理","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"12.1 分片操作","slug":"_12-1-分片操作","link":"#_12-1-分片操作","children":[]},{"level":2,"title":"12.2 分片控制","slug":"_12-2-分片控制","link":"#_12-2-分片控制","children":[{"level":3,"title":"12.2.1 写流程","slug":"_12-2-1-写流程","link":"#_12-2-1-写流程","children":[]},{"level":3,"title":"12.2.2 读流程","slug":"_12-2-2-读流程","link":"#_12-2-2-读流程","children":[]}]},{"level":2,"title":"12.3 分片原理","slug":"_12-3-分片原理","link":"#_12-3-分片原理","children":[{"level":3,"title":"12.3.1 倒排索引","slug":"_12-3-1-倒排索引","link":"#_12-3-1-倒排索引","children":[]},{"level":3,"title":"12.3.2 固定不变的倒排索引","slug":"_12-3-2-固定不变的倒排索引","link":"#_12-3-2-固定不变的倒排索引","children":[]},{"level":3,"title":"12.3.3 动态更新索引","slug":"_12-3-3-动态更新索引","link":"#_12-3-3-动态更新索引","children":[]},{"level":3,"title":"12.3.4 近实时搜索","slug":"_12-3-4-近实时搜索","link":"#_12-3-4-近实时搜索","children":[]},{"level":3,"title":"12.3.5 段合并","slug":"_12-3-5-段合并","link":"#_12-3-5-段合并","children":[]}]},{"level":2,"title":"12.4 附：句柄","slug":"_12-4-附-句柄","link":"#_12-4-附-句柄","children":[]}],"git":{},"filePathRelative":"static/tang/Elasticsearch/12_Elasticsearch分片控制与原理.md"}');export{_ as comp,b as data};
