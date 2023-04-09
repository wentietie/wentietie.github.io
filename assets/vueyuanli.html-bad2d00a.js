import{_ as a,p as t,q as p,R as n,v as e,t as s,a1 as o}from"./framework-5866ffd3.js";const c={},i=n("h1",{id:"vue2原理分析",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue2原理分析","aria-hidden":"true"},"#"),s(" VUE2原理分析")],-1),l=n("p",null,[s("MVVM框架的三要素："),n("strong",null,"数据响应式、模板引擎、渲染")],-1),u=n("ol",null,[n("li",null,"数据响应式：监听数据的变化并在视图中更新")],-1),k=n("ul",null,[n("li",null,"Object.defineProperty() ---vue2"),n("li",null,"Proxy ---vue3")],-1),r=n("ol",{start:"2"},[n("li",null,"模板引擎")],-1),d=n("li",null,"指令： v-bind, v-on, v-model, v-for, v-if",-1),v=o(`<ol start="3"><li>渲染: 将模板转换为html</li></ol><ul><li>模板 =&gt; vdom =&gt; dom</li></ul><h2 id="数据响应式原理" tabindex="-1"><a class="header-anchor" href="#数据响应式原理" aria-hidden="true">#</a> 数据响应式原理</h2><p>简单实现</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 首先实现简单对象的访问拦截
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get:::&#39;</span> <span class="token operator">+</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!=</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set:::&#39;</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> newVal<span class="token punctuation">)</span>
                value <span class="token operator">=</span> newVal
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>foo <span class="token comment">// get:::foo</span>
obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span> <span class="token comment">// set:::foo=123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时我们可以监听到对象的更改。这样我们就需要在监听到更改的同时去更新页面上的内容。 现在我们来对上边的方法进行一些修改。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get:::&#39;</span> <span class="token operator">+</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!=</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set:::&#39;</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> newVal<span class="token punctuation">)</span>
                value <span class="token operator">=</span> newVal
                <span class="token function">reactive</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
                <span class="token comment">// 在这个地方我们监听到了对象的修改那我们就需要在更改之后调用更新页面的方法</span>
                <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 执行更新</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在响应式的雏形已经具备了。 现在我们需要实现一个响应式的入口方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 当前只讨论对象的响应式，数组是通过重写数组的原始方法实现的。</span>
<span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 首先，不是对象直接返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> target
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果是对象的话，则要遍历对象的key</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">defineReactive</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 此时需要递归遍历对象，使对象所有的值都拦截到</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">reactive</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get:::&#39;</span> <span class="token operator">+</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!=</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 修改的时候将新的值改为响应式</span>
                <span class="token function">reactive</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set:::&#39;</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> newVal<span class="token punctuation">)</span>
                value <span class="token operator">=</span> newVal
                <span class="token comment">// 在这个地方我们监听到了对象的修改那我们就需要在更改之后调用更新页面的方法</span>
                <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> reactiveData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此就实现了vue对象的简单响应式</p><h2 id="vue中的数据响应化" tabindex="-1"><a class="header-anchor" href="#vue中的数据响应化" aria-hidden="true">#</a> Vue中的数据响应化</h2><h3 id="原理分析" tabindex="-1"><a class="header-anchor" href="#原理分析" aria-hidden="true">#</a> 原理分析</h3><ol><li>new Vue()首先进行初始化，对data执行响应化处理。这个过程发生在Observer中</li><li>同时对模板进行编译，倒找其中动态绑定的数据，从data中获取并初始化视图，这个过程发生在Compile中</li><li>定义一个更新函数和watcher，将来对应数据变化时，watcher会调用更新函数</li><li>由于data的某个key在一个视图中可能出现多次，所以每个key需要一个管家dep管理多个watcher</li><li>data数据发生变化，找到对应的dep，通知所有的watcher执行更新函数。</li></ol><h4 id="框架构造函数" tabindex="-1"><a class="header-anchor" href="#框架构造函数" aria-hidden="true">#</a> 框架构造函数</h4><p>执行初始化操作。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$options <span class="token operator">=</span> options
        <span class="token keyword">this</span><span class="token punctuation">.</span>$data <span class="token operator">=</span> options<span class="token punctuation">.</span>data
        <span class="token comment">// 监听数据</span>
        <span class="token function">observe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span>
        <span class="token comment">// 将data的数据挂载到vue实例上</span>
        <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 首先，不是对象直接返回</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> target
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果是对象的话，则要遍历对象的key</span>
        Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">defineReactive</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 此时需要递归遍历对象，使对象所有的值都拦截到</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">reactive</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get:::&#39;</span> <span class="token operator">+</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!=</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 修改的时候将新的值改为响应式</span>
                <span class="token function">reactive</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set:::&#39;</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> newVal<span class="token punctuation">)</span>
                value <span class="token operator">=</span> newVal
                <span class="token comment">// 在这个地方我们监听到了对象的修改那我们就需要在更改之后调用更新页面的方法</span>
                <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h3><p>编译模板中的vue语法，初始化视图，更新视图</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Compile</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$vm <span class="token operator">=</span> vm
        <span class="token keyword">this</span><span class="token punctuation">.</span>$el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">compile</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> childNodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>el<span class="token punctuation">.</span>childNodes<span class="token punctuation">]</span>
        childNodes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isElement</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 编译元素</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compileElement</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isInterpolation</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 编译插值文本</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compileText</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>childNodes <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">isElement</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> node<span class="token punctuation">.</span>nodeType <span class="token operator">==</span> <span class="token number">1</span> <span class="token comment">// 元素节点是1， 属性节点是2，文本节点是3</span>
    <span class="token punctuation">}</span>
    <span class="token function">isInterpolation</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> node<span class="token punctuation">.</span>nodeType <span class="token operator">==</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\{\\{(.*)\\}\\}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">compileText</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vm<span class="token punctuation">[</span>RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">compileElement</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> nodeAttrs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>node<span class="token punctuation">.</span>attributes<span class="token punctuation">]</span><span class="token punctuation">;</span>
        nodeAttrs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">attr</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> attrName <span class="token operator">=</span> attr<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
            <span class="token keyword">let</span> exp <span class="token operator">=</span> attr<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
            <span class="token comment">// 判断是否有自定义指令</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isDirective</span><span class="token punctuation">(</span>attrName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> dir <span class="token operator">=</span> attrName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 执行自定义指令方法</span>
                <span class="token keyword">this</span><span class="token punctuation">[</span>dir<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">[</span>dir<span class="token punctuation">]</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> exp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">isDirective</span><span class="token punctuation">(</span><span class="token parameter">attr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> attr<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token string">&quot;v-&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 指令方法</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">node</span> 当前指定节点
     * <span class="token keyword">@param</span> <span class="token parameter">exp</span> 当前指令的值
     */</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> exp<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// v-for 的方法</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> exp<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// v-if 的方法</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="收集依赖" tabindex="-1"><a class="header-anchor" href="#收集依赖" aria-hidden="true">#</a> 收集依赖</h3><p>实现思路</p><ol><li>响应式化时为每一个key创建一个依赖Dep</li><li>初始化时读取某个key，为这个key创建一个观察者watcher</li><li>触发key的get方法时，将观察者添加到key对应的依赖中</li><li>当key的set触发时，通过对应的Dep通知其管理所有的观察者进行更新。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23);function m(b,f){return t(),p("div",null,[i,l,u,k,r,n("ul",null,[n("li",null,"插值： "+e(),1),d]),v])}const w=a(c,[["render",m],["__file","vueyuanli.html.vue"]]);export{w as default};
