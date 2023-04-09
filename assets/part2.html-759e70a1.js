import{_ as n,p as e,q as a,t,a1 as s}from"./framework-5866ffd3.js";const i="/assets/2.2-1-ab594a11.jpg",d={},l=s(`<h1 id="第二章-线性表" tabindex="-1"><a class="header-anchor" href="#第二章-线性表" aria-hidden="true">#</a> 第二章 线性表</h1><p>线性结构的特点是：在数据元素的非空有限集种，</p><ol><li>存在唯一的一个被称作第一个的数据元素。</li><li>存在唯一的一个被称作最后一个的数据元素</li><li>除第一个，每个数据元素都只有一个前驱。</li><li>除最后一个，每个元素都只有一个后继</li></ol><h2 id="_2-1-线性表的类型定义" tabindex="-1"><a class="header-anchor" href="#_2-1-线性表的类型定义" aria-hidden="true">#</a> 2.1 线性表的类型定义</h2><p>线性表：n个数据元素的有限序列。</p><p>复杂的线性表：一个元素可以由若干<strong>数据项</strong>组成，这种情况下把数据元素成为<strong>记录</strong>，含有大量记录的线性表称为<strong>文件</strong>。</p><table><thead><tr><th>姓名</th><th>学号</th><th>性别</th><th>班级</th><th>年龄</th><th>健康状况</th></tr></thead><tbody><tr><td>文铁铁</td><td>9527</td><td>男</td><td>12</td><td>23</td><td>良好</td></tr></tbody></table><p>上述例子中，每个学生都是一个记录，每个记录中由6个数据项。类比数据库中的记录和字段，或js的对象组成的数组，每个对象是一个学生，数组是学生的集合，每个学生有几个不同的字段。</p><p>不同线性表中的元素可以是不同的，但是同一线性表中的元素必定是有相同的特性的。</p><h5 id="线性表的操作" tabindex="-1"><a class="header-anchor" href="#线性表的操作" aria-hidden="true">#</a> 线性表的操作：</h5><p>访问、插入、删除等</p><h5 id="抽象数据类型线性表" tabindex="-1"><a class="header-anchor" href="#抽象数据类型线性表" aria-hidden="true">#</a> 抽象数据类型线性表</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ADT List {
	数据对象：D
	数据关系：R
	基本操作： {
		InitList： 构造一个空的线性表
		DestoryList： List已存在，销毁list
		ClearList：List已存在，将List置为空
		ListEmpty：返回线性表是否为空
		ListLength：线性表的长度
		GetElement(i)：返回第i个元素
		...
	}
}
// 还可以进行更加复杂的操作，例如将两个或以上的线性表合并等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-线性表的顺序表示和实现" tabindex="-1"><a class="header-anchor" href="#_2-2-线性表的顺序表示和实现" aria-hidden="true">#</a> 2.2 线性表的顺序表示和实现</h2><p><strong>顺序表示</strong>：用一组地址连续的存储单元依次存储线性表的数据元素。</p><p>假设每个元素占用<code>l</code>个存储单元，并以第一个单元的存储地址作为存储位置，则第<code>i</code>个和第<code>i+1</code>个元素的存储位置满足一下关系： <strong><p style="text-align:center;">LOC(a<sub>i+1</sub>)= LOC(a<sub>i</sub>) + l</p></strong></p><p><strong>线性表存储结构示意如下：</strong></p><div style="display:flex;justify-content:center;"><img src="`+i+'" alt="2.2-1" style="zoom:70%;"></div>',18),c=s(`<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LIST_INIT_SIZE</span> <span class="token expression"><span class="token number">100</span> </span><span class="token comment">//线性表存储空间初始分配量</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LISTINCREMENT</span> <span class="token expression"><span class="token number">10</span> </span><span class="token comment">// 线性表的存储空间增量</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ElemType <span class="token operator">*</span>elem<span class="token punctuation">;</span> <span class="token comment">// 空间分配地址</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span> <span class="token comment">// 当前长度</span>
    <span class="token keyword">int</span> listsize<span class="token punctuation">;</span> <span class="token comment">// 容量</span>
<span class="token punctuation">}</span>SqList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(o,p){return e(),a("div",null,[l,t(" 由于高级语言中数组类型有随机存取的特性，通常用数组描述数据结构中的顺序存储结构。 "),c])}const m=n(d,[["render",r],["__file","part2.html.vue"]]);export{m as default};
