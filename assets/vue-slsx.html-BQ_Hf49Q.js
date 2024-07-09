import{_ as s,o as n,c as a,b as p}from"./app-DRxAhH5h.js";const e={},t=p(`<h1 id="vue实例属性" tabindex="-1"><a class="header-anchor" href="#vue实例属性"><span>vue实例属性</span></a></h1><h2 id="data-自定义变量" tabindex="-1"><a class="header-anchor" href="#data-自定义变量"><span>data: 自定义变量</span></a></h2><p>示例：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">example1</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">example2</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">example3</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="methods-自定义函数" tabindex="-1"><a class="header-anchor" href="#methods-自定义函数"><span>methods: 自定义函数</span></a></h2><p>示例：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">example1</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">example2</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">example3</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// es6写法</span></span>
<span class="line">    <span class="token function">functionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// es5写法</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">functionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="components-自定义组件" tabindex="-1"><a class="header-anchor" href="#components-自定义组件"><span>components: 自定义组件</span></a></h2><p>示例：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    	<span class="token operator">&lt;</span>compName<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>compName<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token keyword">import</span> compName <span class="token keyword">from</span> <span class="token string">&#39;./component.vue&#39;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        compName<span class="token punctuation">,</span> <span class="token comment">// 直接注册</span></span>
<span class="line">        <span class="token function-variable function">compName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./component.vue&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 异步注册</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computed-计算属性" tabindex="-1"><a class="header-anchor" href="#computed-计算属性"><span>computed: 计算属性</span></a></h2><p>示例：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    	<span class="token punctuation">{</span><span class="token punctuation">{</span> example <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line">   </span>
<span class="line">    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">example1</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            	<span class="token comment">// 当this.example 发生变化 此计算属性会重新进行计算</span></span>
<span class="line">                <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>example1</span>
<span class="line">            	<span class="token keyword">return</span> res</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watch-计算属性" tabindex="-1"><a class="header-anchor" href="#watch-计算属性"><span>watch: 计算属性</span></a></h2><p>示例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;script&gt;</span>
<span class="line">   </span>
<span class="line">    export default {</span>
<span class="line">        name: &quot;test&quot;,</span>
<span class="line">        data(){</span>
<span class="line">            return {</span>
<span class="line">                example: &#39;&#39;,</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        watch: {</span>
<span class="line">            example(newvalue, oldvalue){</span>
<span class="line">            	// 执行的函数</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">    }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 三种形式</span></span>
<span class="line"><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;likes&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;isPublished&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;commentIds&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">title</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">likes</span><span class="token operator">:</span> Number<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">isPublished</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">commentIds</span><span class="token operator">:</span> Array<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">author</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">callback</span><span class="token operator">:</span> Function<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">contactsPromise</span><span class="token operator">:</span> Promise <span class="token comment">// or any other constructor</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 基础的类型检查 (\`null\` 和 \`undefined\` 会通过任何类型验证)</span></span>
<span class="line">    <span class="token literal-property property">propA</span><span class="token operator">:</span> Number<span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 多个可能的类型</span></span>
<span class="line">    <span class="token literal-property property">propB</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 必填的字符串</span></span>
<span class="line">    <span class="token literal-property property">propC</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 带有默认值的数字</span></span>
<span class="line">    <span class="token literal-property property">propD</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">100</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 带有默认值的对象</span></span>
<span class="line">    <span class="token literal-property property">propE</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 对象或数组默认值必须从一个工厂函数获取</span></span>
<span class="line">      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 自定义验证函数</span></span>
<span class="line">    <span class="token literal-property property">propF</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 这个值必须匹配下列字符串中的一个</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;danger&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[t];function i(c,o){return n(),a("div",null,l)}const u=s(e,[["render",i],["__file","vue-slsx.html.vue"]]),d=JSON.parse('{"path":"/static/formwork/vue/vue-slsx.html","title":"vue实例属性","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"data: 自定义变量","slug":"data-自定义变量","link":"#data-自定义变量","children":[]},{"level":2,"title":"methods: 自定义函数","slug":"methods-自定义函数","link":"#methods-自定义函数","children":[]},{"level":2,"title":"components: 自定义组件","slug":"components-自定义组件","link":"#components-自定义组件","children":[]},{"level":2,"title":"computed: 计算属性","slug":"computed-计算属性","link":"#computed-计算属性","children":[]},{"level":2,"title":"watch: 计算属性","slug":"watch-计算属性","link":"#watch-计算属性","children":[]}],"git":{},"filePathRelative":"static/formwork/vue/vue-slsx.md"}');export{u as comp,d as data};
