import{_ as s,o as a,c as n,b as e}from"./app-DRxAhH5h.js";const t="/assets/1-BavFyPBU.png",p={},l=e(`<h1 id="typescript-概览" tabindex="-1"><a class="header-anchor" href="#typescript-概览"><span>TypeScript 概览</span></a></h1><div class="custom-container tip"><p class="custom-container-title">来自</p><p>前端瓶子君 <a href="https://mp.weixin.qq.com/s/WwaqNMVnI_uxXrJptYX1LA" target="_blank" rel="noopener noreferrer">来吧，一起对 TypeScript 扫盲吧！</a></p></div><h2 id="typescript-是什么" tabindex="-1"><a class="header-anchor" href="#typescript-是什么"><span>TypeScript 是什么？</span></a></h2><p>简单理解就是 TypeScript 是增加了类型约束的 JavaScript，并且可以被编译成原生 JavaScript。</p><ul><li>为什么需要 TypeScript？ <ul><li>a. 与弱类型的 JS 结合，在编译期间增强类型检查，提前发现可能的缺陷</li><li>b. 通过强类型约束可以放心地进行多人协作开发，保证项目的可维护性</li><li>c. 与代码编辑器集成，提供自动补全、引用跳转等实用功能，提升开发效率</li></ul></li></ul><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2><p>下面来看看 TypeScript 的基本用法</p><h3 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型"><span>基本类型</span></a></h3><h4 id="简单类型介绍" tabindex="-1"><a class="header-anchor" href="#简单类型介绍"><span>简单类型介绍</span></a></h4><p>对于简单类型呢，就是 string、number、boolean、symbol、undefined 和 null，比较基础:</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> isAfternoon<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> variable<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自动推断类型" tabindex="-1"><a class="header-anchor" href="#自动推断类型"><span>自动推断类型</span></a></h4><p>在某些场景，ts 是可以自己推断出类型的，比如:</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// 初始化赋值的时候</span></span>
<span class="line"><span class="token keyword">let</span> myName <span class="token operator">=</span> <span class="token string">&#39;Daniel Yang&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">myName <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// 让我们看看将数字类型赋值给 myName 会发生什么？</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>duang~ ts 发出了报错:👇</p><p><img src="`+t+'" alt="1"></p><p>对函数的返回值</p>',17),i=[l];function c(r,o){return a(),n("div",null,i)}const u=s(p,[["render",c],["__file","ts-basic.html.vue"]]),k=JSON.parse('{"path":"/static/JavaScript/typescript/ts-basic.html","title":"TypeScript 概览","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"TypeScript 是什么？","slug":"typescript-是什么","link":"#typescript-是什么","children":[]},{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[{"level":3,"title":"基本类型","slug":"基本类型","link":"#基本类型","children":[]}]}],"git":{},"filePathRelative":"static/JavaScript/typescript/ts-basic.md"}');export{u as comp,k as data};
