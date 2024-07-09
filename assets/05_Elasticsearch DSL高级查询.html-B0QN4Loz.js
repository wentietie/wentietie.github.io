import{_ as n,o as e,c as a,b as l}from"./app-DRxAhH5h.js";const i="/assets/keywords_sum-CBEY4T74.png",t="/assets/match_search-DnUyQLNq.png",s="/assets/multi_match_search-v5Mmjpqe.png",d="/assets/term_search-DtHCl5xG.png",c="/assets/terms_searcj-DcLn7vrq.png",u="/assets/range_search-K58CtIXQ.png",p="/assets/with_source_search-ZnCZpOf1.png",r="/assets/must_search-eHRgQ8Ve.png",o="/assets/should_search-DCIrIe0s.png",v="/assets/must_not_search-BuFC0oBN.png",m="/assets/filter_search-CKPEPHAJ.png",q="/assets/aggs_max_search-DAABAc9w.png",b="/assets/aggs_stats_search-ClbLo-jg.png",h="/assets/aggs_terms_search-pbmwvfWn.png",g="/assets/aggs_terms_deep_search-CuGRLDvw.png",_={},x=l('<h1 id="_5-dsl高级查询" tabindex="-1"><a class="header-anchor" href="#_5-dsl高级查询"><span>5 DSL高级查询</span></a></h1><h2 id="_5-1-dsl-概述" tabindex="-1"><a class="header-anchor" href="#_5-1-dsl-概述"><span>5.1 DSL 概述</span></a></h2><blockquote><p>定义</p></blockquote><p>Query DSL概述：领域专用语言，es提供了基于JSON的DSL来定义查询。即ES专用查询语句。</p><blockquote><p>关键字概览</p></blockquote><p><img src="'+i+`" alt=""></p><blockquote><p>准备数据</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line"># 创建索引</span>
<span class="line">PUT /my_index</span>
<span class="line">{</span>
<span class="line">  &quot;mappings&quot;: {</span>
<span class="line">    &quot;properties&quot;: {</span>
<span class="line">      &quot;title&quot;: {</span>
<span class="line">        &quot;type&quot;: &quot;text&quot;,</span>
<span class="line">        &quot;index&quot;: true,</span>
<span class="line">        &quot;store&quot;: true,</span>
<span class="line">        &quot;analyzer&quot;: &quot;ik_max_word&quot;, </span>
<span class="line">        &quot;search_analyzer&quot;: &quot;ik_smart&quot;</span>
<span class="line">      },</span>
<span class="line">      &quot;category&quot;: {</span>
<span class="line">        &quot;type&quot;: &quot;keyword&quot;,</span>
<span class="line">        &quot;index&quot;: true,</span>
<span class="line">        &quot;store&quot;: true</span>
<span class="line">      },</span>
<span class="line">      &quot;images&quot;: {</span>
<span class="line">        &quot;type&quot;: &quot;keyword&quot;,</span>
<span class="line">        &quot;index&quot;: true,</span>
<span class="line">        &quot;store&quot;: true</span>
<span class="line">      },</span>
<span class="line">      &quot;price&quot;: {</span>
<span class="line">        &quot;type&quot;: &quot;integer&quot;,</span>
<span class="line">        &quot;index&quot;: true,</span>
<span class="line">        &quot;store&quot;: true</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"># 批量插入</span>
<span class="line">POST _bulk</span>
<span class="line">{&quot;create&quot;: {&quot;_index&quot;: &quot;my_index&quot;, &quot;_id&quot;: &quot;1&quot;}}</span>
<span class="line">{&quot;id&quot;: 1, &quot;title&quot;: &quot;华为笔记本电脑&quot;, &quot;category&quot;: &quot;华为&quot;, &quot;image&quot;: &quot;https://res.vmallres.com/pimages//uomcdn/CN/pms/202207/gbom/6941487272235/800_800_87118CF3AD83118D78E55054E46F7B6Bmp_tds.png&quot;, &quot;price&quot;: 9999}</span>
<span class="line">{&quot;create&quot;: {&quot;_index&quot;: &quot;my_index&quot;, &quot;_id&quot;: &quot;2&quot;}}</span>
<span class="line">{&quot;id&quot;: 2, &quot;title&quot;: &quot;华为手机&quot;, &quot;category&quot;: &quot;华为&quot;, &quot;image&quot;: &quot;https://res.vmallres.com/pimages//uomcdn/CN/pms/202303/gbom/6941487294084/800_800_0DF324603CC084E9EB48C50FBB9CF94Amp.png&quot;, &quot;price&quot;: 12999}</span>
<span class="line">{&quot;create&quot;: {&quot;_index&quot;: &quot;my_index&quot;, &quot;_id&quot;: &quot;3&quot;}}</span>
<span class="line">{&quot;id&quot;: 3, &quot;title&quot;: &quot;VIVO手机&quot;, &quot;category&quot;: &quot;vivo&quot;, &quot;image&quot;: &quot;https://shopstatic.vivo.com.cn/vivoshop/commodity/43/10008043_1671156911639_750x750.png&quot;, &quot;price&quot;: 12999}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2-dsl使用-单条件查询" tabindex="-1"><a class="header-anchor" href="#_5-2-dsl使用-单条件查询"><span>5.2 DSL使用-单条件查询</span></a></h2><h3 id="_5-2-1-查询所有-match-all" tabindex="-1"><a class="header-anchor" href="#_5-2-1-查询所有-match-all"><span>5.2.1 查询所有（match_all）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">GET /索引名/_search</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">GET /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;match_all&quot;: {}</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-2-匹配查询-match" tabindex="-1"><a class="header-anchor" href="#_5-2-2-匹配查询-match"><span>5.2.2 匹配查询（match）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">GET /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;match&quot;: {</span>
<span class="line">      &quot;字段名&quot;: &quot;字段值&quot;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt=""></p><h3 id="_5-2-3-补充-条件删除" tabindex="-1"><a class="header-anchor" href="#_5-2-3-补充-条件删除"><span>5.2.3 补充：条件删除</span></a></h3><p>将查询到的记录删除</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_delete_by_query</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;match&quot;: {</span>
<span class="line">      &quot;字段名&quot;: &quot;要查询的信息&quot;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-4-多字段匹配" tabindex="-1"><a class="header-anchor" href="#_5-2-4-多字段匹配"><span>5.2.4 多字段匹配</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;multi_match&quot;: {</span>
<span class="line">      &quot;query&quot;: &quot;要查询的信息&quot;,</span>
<span class="line">      &quot;fields&quot;: [&quot;字段1&quot;, &quot;字段2&quot;, ...]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+s+`" alt=""></p><h3 id="_5-2-5-前缀匹配" tabindex="-1"><a class="header-anchor" href="#_5-2-5-前缀匹配"><span>5.2.5 前缀匹配</span></a></h3><blockquote><p>概念</p></blockquote><p>前缀匹配是说，在分词结果中，如果某个分词的前缀和要查询的信息一样，就会将该记录返回。</p><p>比如，“华为手机”的分词结果是[“华为”、“手机”]。当使用前缀查询输入的查询信息是“手机”或者“手”等时，会将该记录返回；当输入的查询信息是“机”时，该记录无法返回。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;prefix&quot;: {</span>
<span class="line">      &quot;字段名&quot;: {</span>
<span class="line">        &quot;value&quot;: &quot;要查询的信息&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+s+`" alt=""></p><h2 id="_5-2-6-关键字精确查询-term" tabindex="-1"><a class="header-anchor" href="#_5-2-6-关键字精确查询-term"><span>5.2.6 关键字精确查询（term）</span></a></h2><blockquote><p>term</p></blockquote><p>查询信息不会进行分词</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line"></span>
<span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;term&quot;: {</span>
<span class="line">      &quot;字段名&quot;: {</span>
<span class="line">        &quot;value&quot;: &quot;查询信息&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt=""></p><h3 id="_5-2-7-多关键字精确查询-terms" tabindex="-1"><a class="header-anchor" href="#_5-2-7-多关键字精确查询-terms"><span>5.2.7 多关键字精确查询（terms）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;terms&quot;: {</span>
<span class="line">      &quot;字段名&quot;: [</span>
<span class="line">        &quot;查询关键字1&quot;,</span>
<span class="line">        &quot;查询关键字2&quot;</span>
<span class="line">      ]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt=""></p><h3 id="_5-2-8-范围查询-range" tabindex="-1"><a class="header-anchor" href="#_5-2-8-范围查询-range"><span>5.2.8 范围查询（range）</span></a></h3><blockquote><p>range</p></blockquote><ul><li>gte：大于等于</li><li>lte：小于等于</li><li>gt：大于</li><li>lt：小于</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;range&quot;: {</span>
<span class="line">      &quot;字段名&quot;: {</span>
<span class="line">        &quot;gte&quot;: 值1,</span>
<span class="line">        &quot;lte&quot;: 值2</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt=""></p><h3 id="_5-2-9-指定返回字段" tabindex="-1"><a class="header-anchor" href="#_5-2-9-指定返回字段"><span>5.2.9 指定返回字段</span></a></h3><p><strong>query同级增加_source进行过滤。</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;range&quot;: {</span>
<span class="line">      &quot;字段名&quot;: {</span>
<span class="line">        &quot;gte&quot;: 值1,</span>
<span class="line">        &quot;lte&quot;: 值2</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  &quot;_source&quot;: [&quot;字段名1&quot;, &quot;字段名2&quot;,...]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt=""></p><h2 id="_5-3-dsl使用-组合条件查询" tabindex="-1"><a class="header-anchor" href="#_5-3-dsl使用-组合条件查询"><span>5.3 DSL使用-组合条件查询</span></a></h2><blockquote><p>语法</p></blockquote><p>bool各条件之间都有and、or或no的关系。</p><ul><li>must：各个条件都必须满足，即所有条件是and关系</li><li>should：各个条件有一个满足即可，即各条件是or关系</li><li>must_not：不满足所有条件，即各条件是no关系</li><li>filter：与must效果等同，但不计算得分，效率更高点</li><li>如果must和should同时存在，会对must结果和should结果取交集</li></ul><h3 id="_5-3-1-must" tabindex="-1"><a class="header-anchor" href="#_5-3-1-must"><span>5.3.1 must</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /my_index/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;bool&quot;: {</span>
<span class="line">      &quot;must&quot;: [</span>
<span class="line">        {条件1},</span>
<span class="line">        {条件2},</span>
<span class="line">        ...</span>
<span class="line">      ]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt=""></p><h3 id="_5-3-2-should" tabindex="-1"><a class="header-anchor" href="#_5-3-2-should"><span>5.3.2 should</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /my_index/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;bool&quot;: {</span>
<span class="line">      &quot;should&quot;: [</span>
<span class="line">        {条件1},</span>
<span class="line">        {条件2},</span>
<span class="line">        ...</span>
<span class="line">      ]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt=""></p><h3 id="_5-3-3-must-not" tabindex="-1"><a class="header-anchor" href="#_5-3-3-must-not"><span>5.3.3 must_not</span></a></h3><p>很少用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;bool&quot;: {</span>
<span class="line">      &quot;must_not&quot;: [</span>
<span class="line">        {条件1},</span>
<span class="line">        {条件2},</span>
<span class="line">        ...</span>
<span class="line">      ]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt=""></p><h3 id="_5-3-4-filter" tabindex="-1"><a class="header-anchor" href="#_5-3-4-filter"><span>5.3.4 filter</span></a></h3><p>不会计算分数。在不需要排名的时候才使用，效率比must快一些。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;bool&quot;: {</span>
<span class="line">      &quot;filter&quot;: [</span>
<span class="line">        {条件1},</span>
<span class="line">        {条件2},</span>
<span class="line">        ...</span>
<span class="line">      ]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt=""></p><h2 id="_5-4-dsl使用-聚合查询-指标聚合" tabindex="-1"><a class="header-anchor" href="#_5-4-dsl使用-聚合查询-指标聚合"><span>5.4 DSL使用-聚合查询（指标聚合）</span></a></h2><blockquote><p>概念</p></blockquote><p>允许使用者对es文档进行统计分析，类似于关系型数据库中的group by。此外还有许多其他聚合查询，如取最大值、平均值等。</p><p>es的聚合查询和MySQL的group by效率差不多，但是es的优点是它是分布式的。真正做数据分析的时候，还需要考虑具体情况：</p><ul><li>如果是非结构化的数据，如日志分析、用户行为分析，则考虑使用es的聚合查询</li><li>如果是结构化数据，考虑使用关系型数据库</li></ul><blockquote><p>指标聚合关键字</p></blockquote><ul><li>max 最大值</li><li>min 最小值</li><li>avg 平均值</li><li>sum 求和</li><li>stats 统计</li></ul><blockquote><p>语法</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {...}, // 查询语法</span>
<span class="line">  &quot;size&quot;: 0, // 表示不显示命中记录的明细信息。如果想显示，将该参数去掉即可</span>
<span class="line">  &quot;aggs&quot;: { // 聚合查询配置</span>
<span class="line">    &quot;字段名&quot;: { // 自定义字段名，来存储聚合结果</span>
<span class="line">      &quot;聚合函数&quot;: { // 聚合函数</span>
<span class="line">        &quot;field&quot;: &quot;字段名&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>举例：max</p></blockquote><p><img src="`+q+'" alt=""></p><blockquote><p>举例：stats</p></blockquote><p><img src="'+b+`" alt=""></p><h2 id="_5-5-dsl使用-聚合查询-桶聚合" tabindex="-1"><a class="header-anchor" href="#_5-5-dsl使用-聚合查询-桶聚合"><span>5.5 DSL使用-聚合查询（桶聚合）</span></a></h2><blockquote><p>概念</p></blockquote><p>桶聚合相当于mysql的group by</p><blockquote><p>桶聚合关键字</p></blockquote><ul><li>terms</li></ul><h3 id="_5-5-1-桶聚合的基本使用" tabindex="-1"><a class="header-anchor" href="#_5-5-1-桶聚合的基本使用"><span>5.5.1 桶聚合的基本使用</span></a></h3><blockquote><p>语法</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {...},</span>
<span class="line">  &quot;size&quot;: 0,</span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;字段名&quot;: { // 自定义字段名，存储聚合结果</span>
<span class="line">      &quot;terms&quot;: { // 桶聚合关键字</span>
<span class="line">        &quot;field&quot;: &quot;字段名&quot;,</span>
<span class="line">        &quot;size&quot;: 10 // 当前查询记录数量</span>
<span class="line">      },</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>举例：terms基本使用</p></blockquote><p><img src="`+h+`" alt=""></p><h3 id="_5-5-2-桶聚合的下钻" tabindex="-1"><a class="header-anchor" href="#_5-5-2-桶聚合的下钻"><span>5.5.2 桶聚合的下钻</span></a></h3><p>对桶聚合还可以继续下钻，即桶聚合和指标聚合的组合使用</p><blockquote><p>语法</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">POST /索引名/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {...},</span>
<span class="line">  &quot;size&quot;: 0,</span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;字段名&quot;: { // 自定义字段名，存储聚合结果</span>
<span class="line">      &quot;terms&quot;: { // 桶聚合关键字</span>
<span class="line">        &quot;field&quot;: &quot;字段名&quot;,</span>
<span class="line">        &quot;size&quot;: 10 // 当前查询记录数量</span>
<span class="line">      },</span>
<span class="line">      &quot;aggs&quot;: {</span>
<span class="line">       &quot;字段名2&quot;: { // 自定义字段名，存储聚合结果</span>
<span class="line">         &quot;指标聚合关键字&quot;: {</span>
<span class="line">           &quot;field&quot;: &quot;字段名&quot;</span>
<span class="line">         }</span>
<span class="line">       }</span>
<span class="line">     }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+'" alt=""></p>',91),y=[x];function k(f,S){return e(),a("div",null,y)}const L=n(_,[["render",k],["__file","05_Elasticsearch DSL高级查询.html.vue"]]),j=JSON.parse('{"path":"/static/tang/Elasticsearch/05_Elasticsearch%20DSL%E9%AB%98%E7%BA%A7%E6%9F%A5%E8%AF%A2.html","title":"5 DSL高级查询","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"5.1 DSL 概述","slug":"_5-1-dsl-概述","link":"#_5-1-dsl-概述","children":[]},{"level":2,"title":"5.2 DSL使用-单条件查询","slug":"_5-2-dsl使用-单条件查询","link":"#_5-2-dsl使用-单条件查询","children":[{"level":3,"title":"5.2.1 查询所有（match_all）","slug":"_5-2-1-查询所有-match-all","link":"#_5-2-1-查询所有-match-all","children":[]},{"level":3,"title":"5.2.2 匹配查询（match）","slug":"_5-2-2-匹配查询-match","link":"#_5-2-2-匹配查询-match","children":[]},{"level":3,"title":"5.2.3 补充：条件删除","slug":"_5-2-3-补充-条件删除","link":"#_5-2-3-补充-条件删除","children":[]},{"level":3,"title":"5.2.4 多字段匹配","slug":"_5-2-4-多字段匹配","link":"#_5-2-4-多字段匹配","children":[]},{"level":3,"title":"5.2.5 前缀匹配","slug":"_5-2-5-前缀匹配","link":"#_5-2-5-前缀匹配","children":[]}]},{"level":2,"title":"5.2.6 关键字精确查询（term）","slug":"_5-2-6-关键字精确查询-term","link":"#_5-2-6-关键字精确查询-term","children":[{"level":3,"title":"5.2.7 多关键字精确查询（terms）","slug":"_5-2-7-多关键字精确查询-terms","link":"#_5-2-7-多关键字精确查询-terms","children":[]},{"level":3,"title":"5.2.8 范围查询（range）","slug":"_5-2-8-范围查询-range","link":"#_5-2-8-范围查询-range","children":[]},{"level":3,"title":"5.2.9 指定返回字段","slug":"_5-2-9-指定返回字段","link":"#_5-2-9-指定返回字段","children":[]}]},{"level":2,"title":"5.3 DSL使用-组合条件查询","slug":"_5-3-dsl使用-组合条件查询","link":"#_5-3-dsl使用-组合条件查询","children":[{"level":3,"title":"5.3.1 must","slug":"_5-3-1-must","link":"#_5-3-1-must","children":[]},{"level":3,"title":"5.3.2 should","slug":"_5-3-2-should","link":"#_5-3-2-should","children":[]},{"level":3,"title":"5.3.3 must_not","slug":"_5-3-3-must-not","link":"#_5-3-3-must-not","children":[]},{"level":3,"title":"5.3.4 filter","slug":"_5-3-4-filter","link":"#_5-3-4-filter","children":[]}]},{"level":2,"title":"5.4 DSL使用-聚合查询（指标聚合）","slug":"_5-4-dsl使用-聚合查询-指标聚合","link":"#_5-4-dsl使用-聚合查询-指标聚合","children":[]},{"level":2,"title":"5.5 DSL使用-聚合查询（桶聚合）","slug":"_5-5-dsl使用-聚合查询-桶聚合","link":"#_5-5-dsl使用-聚合查询-桶聚合","children":[{"level":3,"title":"5.5.1 桶聚合的基本使用","slug":"_5-5-1-桶聚合的基本使用","link":"#_5-5-1-桶聚合的基本使用","children":[]},{"level":3,"title":"5.5.2 桶聚合的下钻","slug":"_5-5-2-桶聚合的下钻","link":"#_5-5-2-桶聚合的下钻","children":[]}]}],"git":{},"filePathRelative":"static/tang/Elasticsearch/05_Elasticsearch DSL高级查询.md"}');export{L as comp,j as data};
