import{_ as s,o as n,c as l,b as e}from"./app-DRxAhH5h.js";const a="/assets/sort-DoxrSHSH.png",i="/assets/from_size-CAH7GhHo.png",t="/assets/scroll_first-C7ld-Joa.png",c="/assets/scroll_second-CCtJAhwY.png",p="/assets/highlight-Et1T5ekt.png",d="/assets/fuzzy-CtzgJBEk.png",o={},r=e(`<h1 id="_6-进阶查询" tabindex="-1"><a class="header-anchor" href="#_6-进阶查询"><span>6 进阶查询</span></a></h1><h2 id="_6-1-排序" tabindex="-1"><a class="header-anchor" href="#_6-1-排序"><span>6.1 排序</span></a></h2><blockquote><p>关键字</p></blockquote><p>sort</p><blockquote><p>语法</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {...},</span>
<span class="line">  &quot;sort&quot;: [ // 排序关键字，与query同级</span>
<span class="line">    {</span>
<span class="line">      &quot;字段1&quot;: {</span>
<span class="line">        &quot;order&quot;: &quot;asc或desc&quot;</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      &quot;字段2&quot;: {</span>
<span class="line">        &quot;order&quot;: &quot;asc或desc&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">    ...</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>举例</p></blockquote><p><img src="`+a+`" alt=""></p><h2 id="_6-2-分页" tabindex="-1"><a class="header-anchor" href="#_6-2-分页"><span>6.2 分页</span></a></h2><h3 id="_6-2-1-from、size分页" tabindex="-1"><a class="header-anchor" href="#_6-2-1-from、size分页"><span>6.2.1 from、size分页</span></a></h3><blockquote><p>关键字</p></blockquote><ul><li>from：起始索引值，默认从0开始。from = (pageNum - 1) * size</li><li>size：每页显示多少条</li></ul><blockquote><p>语法</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {...},</span>
<span class="line">  &quot;from&quot;: 0, // 起始索引值</span>
<span class="line">  &quot;size&quot;: 2 // 每页显示多少条</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>举例</p></blockquote><p><img src="`+i+`" alt=""></p><h3 id="_6-2-2-scoll分页" tabindex="-1"><a class="header-anchor" href="#_6-2-2-scoll分页"><span>6.2.2 scoll分页</span></a></h3><blockquote><p>概念</p></blockquote><p>滚动查询的意思是指如果获取的数据特别多，那我们可以分批获取数据。 给服务器一个处理请求的时间，在该时间内，一次性查询出来所有满足条件的数据，保存到内存中，分批次进行获取。所以每次进行查询的时候都要传递一个系统的处理时间。类似于关系型数据库中的游标 。</p><p>第一次查询：返回相关数据的同时，还是返回一个_scroll_id，该时间内，数据有变动不受影响。</p><p>第n次查询（n&gt;1）：在相关时间内，body体只传_scroll_id即可实现翻页效果</p><blockquote><p>关键字</p></blockquote><ul><li>scroll：指明服务器处理时间</li><li>size：每页显示多少条</li></ul><blockquote><p>语法</p></blockquote><p>注意：两次查询接口不一样</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line"># 第一次查询</span>
<span class="line">POST /索引名/_search?scroll=1m</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {...}, </span>
<span class="line">  &quot;size&quot;: 1 // 每页多少条数据</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"># 第n次查询（n&gt;1）：</span>
<span class="line">GET /_search/scroll?scroll=1m</span>
<span class="line">{</span>
<span class="line">  &quot;scroll_id&quot;: &quot;第一次查询时返回的_scroll_id&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>举例</p></blockquote><p><img src="`+t+'" alt=""><img src="'+c+`" alt=""></p><h2 id="_6-3-高亮" tabindex="-1"><a class="header-anchor" href="#_6-3-高亮"><span>6.3 高亮</span></a></h2><blockquote><p>关键字</p></blockquote><ul><li>highlight</li><li>highlight.pre_tags：高亮前缀。</li><li>highlight.post_tags：高亮后缀。</li><li>highlight.fields：配置需要高亮的属性</li></ul><blockquote><p>语法</p></blockquote><p>注意：highlight.fields中的字段必须是query中被检索的字段</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {...},</span>
<span class="line">  &quot;highlight&quot;: {</span>
<span class="line">    &quot;pre_tags&quot;: &quot;高亮前缀&quot;,</span>
<span class="line">    &quot;post_tags&quot;: &quot;高亮后缀&quot;,</span>
<span class="line">    &quot;fields&quot;: {</span>
<span class="line">      &quot;字段名1&quot;: {},</span>
<span class="line">      &quot;字段名2&quot;: {},</span>
<span class="line">      ...</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>举例</p></blockquote><p><img src="`+p+`" alt=""></p><h2 id="_6-4-近似查询" tabindex="-1"><a class="header-anchor" href="#_6-4-近似查询"><span>6.4 近似查询</span></a></h2><p>简单了解，中文用不上。</p><blockquote><p>概念</p></blockquote><p>近似查询指的是返回包含与搜索字词相似的字词的文档。如百度搜索中，某个单词拼写错误，但是会返回正确单词对应的记录。</p><p>对中文不适用，只适用于英文。</p><p><strong>编辑距离</strong>是将一个术语转换为另一个术语所需的一个字符更改的次数。这些更改可以包括：</p><ul><li>更改字符，如box改为fox</li><li>删除字符，如black改为lack</li><li>插入字符，如sic改为sick</li><li>转置两个相邻字符，如act改为cat</li></ul><p>为了找到相似的术语，fuzzy会在指定的编辑距离内创建一组搜索词的所有可能的变体或扩展。然后查询返回每个扩展的完全匹配。 通过fuzziness修改编辑距离，一般使用默认值AUTO，根据术语的长度生成编辑距离。</p><blockquote><p>关键字</p></blockquote><ul><li>fuzzy</li></ul><blockquote><p>语法</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">GET /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;fuzzy&quot;: {</span>
<span class="line">      &quot;字段名&quot;: {</span>
<span class="line">        &quot;value&quot;: &quot;字段值&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>举例</p></blockquote><p><img src="`+d+'" alt=""></p>',50),u=[r];function v(b,m){return n(),l("div",null,u)}const q=s(o,[["render",v],["__file","06_Elasticsearch进阶查询.html.vue"]]),_=JSON.parse('{"path":"/static/tang/Elasticsearch/06_Elasticsearch%E8%BF%9B%E9%98%B6%E6%9F%A5%E8%AF%A2.html","title":"6 进阶查询","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"6.1 排序","slug":"_6-1-排序","link":"#_6-1-排序","children":[]},{"level":2,"title":"6.2 分页","slug":"_6-2-分页","link":"#_6-2-分页","children":[{"level":3,"title":"6.2.1 from、size分页","slug":"_6-2-1-from、size分页","link":"#_6-2-1-from、size分页","children":[]},{"level":3,"title":"6.2.2 scoll分页","slug":"_6-2-2-scoll分页","link":"#_6-2-2-scoll分页","children":[]}]},{"level":2,"title":"6.3 高亮","slug":"_6-3-高亮","link":"#_6-3-高亮","children":[]},{"level":2,"title":"6.4 近似查询","slug":"_6-4-近似查询","link":"#_6-4-近似查询","children":[]}],"git":{},"filePathRelative":"static/tang/Elasticsearch/06_Elasticsearch进阶查询.md"}');export{q as comp,_ as data};
