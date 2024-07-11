import{_ as s,o as n,c as a,b as p}from"./app-CW2dCZSC.js";const t="/assets/img1-DAVlBUoc.jpg",e={},l=p('<h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h1><ol><li>轻量级 JavaEE框架</li><li>解决企业应用的复杂性</li><li>核心部分： IOC AOP <ol><li>IOC：控制反转，把创建对象交给spring 进行管理</li><li>AOP： 面向切面，不修改源代码进行功能增强</li></ol></li><li>特点 <ol><li>方便解耦，简化开发</li><li>Aop编程支持</li><li>方便程序测试</li><li>方便和其他框架进行整合</li><li>方便进行事务操作</li><li>降低API开发难度</li></ol></li></ol><p>下载地址：<a href="https://repo.spring.io/ui/native/release/org/springframework/spring/5.2.6.RELEASE/" target="_blank" rel="noopener noreferrer">repo.spring.io</a></p><h2 id="创建spring5-工程" tabindex="-1"><a class="header-anchor" href="#创建spring5-工程"><span>创建spring5 工程</span></a></h2><ol><li><p>创建java工程</p></li><li><p>导入jar包，基本功能至少包括 beans、context、core、expression、日志</p><p><img src="'+t+`" alt="img1"></p></li><li><p>实现普通代码</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;add...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建spring配置文件，配置文件中配置创建的对象</p><ol><li><p>创建项xml文件</p></li><li><p>配置对象创建（我认为是对象的代理）</p><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="line"><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span></span>
<span class="line">       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span></span>
<span class="line">       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!--配置user对象--&gt;</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.spring5.study.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>进行测试代码编写</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>spring5<span class="token punctuation">.</span>study<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>spring5<span class="token punctuation">.</span>study<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContext</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">ClassPathXmlApplicationContext</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestSpring5</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token annotation punctuation">@Test</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 1. 加载配置文件</span></span>
<span class="line">    <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;bean1.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 2. 获取配置创建的对象</span></span>
<span class="line">    <span class="token class-name">User</span> user <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    user<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,5),c=[l];function o(i,u){return n(),a("div",null,c)}const k=s(e,[["render",o],["__file","part1.html.vue"]]),d=JSON.parse('{"path":"/static/formwork/spring5/part1.html","title":"概述","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"创建spring5 工程","slug":"创建spring5-工程","link":"#创建spring5-工程","children":[]}],"git":{"updatedTime":1720499771000,"contributors":[{"name":"文铁铁~","email":"1179131421@qq.com","commits":1}]},"filePathRelative":"static/formwork/spring5/part1.md"}');export{k as comp,d as data};