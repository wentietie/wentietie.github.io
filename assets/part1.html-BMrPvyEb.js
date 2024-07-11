import{_ as n,o as a,c as s,b as e}from"./app-CW2dCZSC.js";const l={},i=e(`<h1 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式"><span>单例模式</span></a></h1><p><strong>核心思想</strong>：</p><p>一个类只有一个实例，并提供一个访问他的全局访问接口。</p><p><strong>注意：</strong></p><ol><li>单例类只能有一个实例。</li><li>单例类必须自己创建自己的唯一实例。</li><li>单例类必须给所有其他对象提供这一实例。</li></ol><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>单例模式（Singleton Pattern）是 最简单的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。单例模式是一种创建型设计模式，它确保一个类只有一个实例，并提供了一个全局访问点来访问该实例。</p><h3 id="意图" tabindex="-1"><a class="header-anchor" href="#意图"><span>意图：</span></a></h3><p>保证一个类仅有一个实例，并提供一个访问它的全局访问点。</p><h3 id="主要解决" tabindex="-1"><a class="header-anchor" href="#主要解决"><span>主要解决：</span></a></h3><p>一个全局使用的类频繁地创建与销毁。</p><h3 id="何时使用" tabindex="-1"><a class="header-anchor" href="#何时使用"><span>何时使用：</span></a></h3><p>当您想控制实例数目，节省系统资源的时候。</p><h3 id="如何解决" tabindex="-1"><a class="header-anchor" href="#如何解决"><span>如何解决：</span></a></h3><p>判断系统是否已经有这个单例，如果有则返回，如果没有则创建。</p><h3 id="关键代码" tabindex="-1"><a class="header-anchor" href="#关键代码"><span>关键代码：</span></a></h3><p>构造函数是私有的。</p><h3 id="应用实例" tabindex="-1"><a class="header-anchor" href="#应用实例"><span>应用实例：</span></a></h3><ol><li>一个班级只有一个班主任。</li><li>Windows 是多进程多线程的，在操作一个文件的时候，就不可避免地出现多个进程或线程同时操作一个文件的现象，所以所有文件的处理必须通过唯一的实例来进行。</li><li>一些设备管理器常常设计为单例模式，比如一个电脑有两台打印机，在输出的时候就要处理不能两台打印机打印同一个文件。</li></ol><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点：</span></a></h3><ol><li>在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如管理学院首页页面缓存）。</li><li>避免对资源的多重占用（比如写文件操作）。</li></ol><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点：</span></a></h3><p>没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。</p><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景：</span></a></h3><ol><li>要求生产唯一序列号。</li><li>WEB 中的计数器，不用每次刷新都在数据库里加一次，用单例先缓存起来。</li><li>创建的一个对象需要消耗的资源过多，比如 I/O 与数据库的连接等。</li></ol><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项：</span></a></h3><p>getInstance() 方法中需要使用同步锁 synchronized (Singleton.class) 防止多线程同时进入造成 instance 被多次实例化。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_instance<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_instance</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),t=[i];function p(c,o){return a(),s("div",null,t)}const d=n(l,[["render",p],["__file","part1.html.vue"]]),h=JSON.parse('{"path":"/static/JavaScript/design/part1.html","title":"单例模式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[{"level":3,"title":"意图：","slug":"意图","link":"#意图","children":[]},{"level":3,"title":"主要解决：","slug":"主要解决","link":"#主要解决","children":[]},{"level":3,"title":"何时使用：","slug":"何时使用","link":"#何时使用","children":[]},{"level":3,"title":"如何解决：","slug":"如何解决","link":"#如何解决","children":[]},{"level":3,"title":"关键代码：","slug":"关键代码","link":"#关键代码","children":[]},{"level":3,"title":"应用实例：","slug":"应用实例","link":"#应用实例","children":[]},{"level":3,"title":"优点：","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点：","slug":"缺点","link":"#缺点","children":[]},{"level":3,"title":"使用场景：","slug":"使用场景","link":"#使用场景","children":[]},{"level":3,"title":"注意事项：","slug":"注意事项","link":"#注意事项","children":[]}]}],"git":{"updatedTime":1720499771000,"contributors":[{"name":"文铁铁~","email":"1179131421@qq.com","commits":1}]},"filePathRelative":"static/JavaScript/design/part1.md"}');export{d as comp,h as data};