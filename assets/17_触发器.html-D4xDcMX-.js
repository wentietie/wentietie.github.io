import{_ as d,r,o as t,c,e,a,w as i,b as s,d as n}from"./app-DRxAhH5h.js";const p={},u=s(`<h1 id="_17-触发器" tabindex="-1"><a class="header-anchor" href="#_17-触发器"><span>17 触发器</span></a></h1><h2 id="_17-1-定义触发器" tabindex="-1"><a class="header-anchor" href="#_17-1-定义触发器"><span>17.1 定义触发器</span></a></h2><blockquote><p>语法</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">CREATE TRIGGER 触发器名称</span>
<span class="line">{BEFORE|AFTER} {INSERT|UPDATE|DELETE} ON 表名</span>
<span class="line">FOR EACH ROW</span>
<span class="line">触发器执行的语句块;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m=s(`<ul><li><p><code>BEFORE|AFTER</code>：二选一</p><ul><li><code>BEFORE</code>：表示在事件发生之前执行当前触发器</li><li><code>AFTER</code>：表示在事件发生之后之执行触发器。<strong>不允许在触发后更新new行和old行</strong></li></ul></li><li><p><code>INSERT|UPDATE|DELETE</code>：三选一，表名事件类型</p><ul><li><code>INSERT</code>：使用<code>NEW</code>(或<code>new</code>)代表当前要插入的对象</li><li><code>DELETE</code>：使用<code>OLD</code>(或<code>old</code>)代表当前要删除的对象</li><li><code>UPDATE</code>：<code>NEW</code>(或<code>new</code>)和<code>OLD</code>(或<code>old</code>)都可以用。</li></ul></li><li><p><code>FOR EACH ROW</code>：表示每一行都要执行触发器</p></li><li><p><code>触发器执行的语句块</code>：可以是一行sql语句，也可以是复杂的<code>BEGIN ... END</code>语句</p></li><li><p><strong>同表的更新不能在触发器中使用update，而是直接使用set。相当于给new或old对象进行赋值操作</strong>。</p><p>例子：16.5--&gt;<code>代码</code>--&gt; ②和⑤</p></li></ul><h2 id="_17-2-查看触发器" tabindex="-1"><a class="header-anchor" href="#_17-2-查看触发器"><span>17.2 查看触发器</span></a></h2><ul><li><p>查看当前数据库所有的触发器</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">SHOW TRIGGERS;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>查看当前数据库指定触发器的定义</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">SHOW CREATE TRIGGER 触发器名</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>从系统库information_schema的TRIGGERS表中查询触发器的信息</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">SELECT * FROM information_schema.TRIGGERS [WHERE 字句];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h2 id="_17-3-删除触发器" tabindex="-1"><a class="header-anchor" href="#_17-3-删除触发器"><span>17.3 删除触发器</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">DROP TRIGGER IF EXISTS 触发器名称;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_17-4-中断触发器的执行" tabindex="-1"><a class="header-anchor" href="#_17-4-中断触发器的执行"><span>17.4 中断触发器的执行</span></a></h2><p>可以使用<code>SIGNAL</code>语句抛出异常，中断触发器的执行，并提供错误信息。</p><blockquote><p>语法</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">SIGNAL condition_value</span>
<span class="line">    [SET condition_information_item_name = 值 [, condition_information_item_name = 值, ...]];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=s("<ul><li><code>condition_value</code>可选值如下： <ul><li><code>SQLSTATE &#39;长度为5的字符串类型的错误代码&#39;</code>：其中&#39;错误码&#39;不能是00（表示成功）和01（表示警告）开头，因为二者不会中断执行。</li><li><code>事先用DECLARE自定义的条件名称</code></li></ul></li><li><code>condition_information_item_name</code>可选值如下： <ul><li><code>MESSAGE_TEXT</code>：对应的值为错误描述信息</li><li><code>MYSQL_ERRNO</code>：对应的值为数值型的错误代码</li><li>...</li></ul></li></ul>",1),v=s(`<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">delimiter $</span>
<span class="line">create trigger salary_check_trigger</span>
<span class="line">before insert on emps</span>
<span class="line">for each row</span>
<span class="line">begin</span>
<span class="line">	declare mgr_sal double;</span>
<span class="line">	select salary into mgr_sal from emps where employee_id = NEW.manager_id;</span>
<span class="line">	</span>
<span class="line">	if NEW.salary &gt; mgr_sal </span>
<span class="line">		then SIGNAL SQLSTATE &#39;HY000&#39; SET MESSAGE_TEXT = &#39;薪资高于领导薪资错误&#39;, MYSQL_ERRNO = 1644;</span>
<span class="line">	end if;</span>
<span class="line">end $</span>
<span class="line">delimiter ;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-5-触发器的优缺点" tabindex="-1"><a class="header-anchor" href="#_17-5-触发器的优缺点"><span>17.5 触发器的优缺点</span></a></h2><h3 id="_17-5-1-优点" tabindex="-1"><a class="header-anchor" href="#_17-5-1-优点"><span>17.5.1 优点</span></a></h3><ul><li><strong>可以确保数据的完整性</strong></li><li><strong>可以帮助我们记录日志操作</strong></li><li><strong>可以在操作数据前，对数据进行合法性检查</strong></li></ul><h3 id="_17-5-2-缺点" tabindex="-1"><a class="header-anchor" href="#_17-5-2-缺点"><span>17.5.2 缺点</span></a></h3><ul><li><p><strong>可读性差</strong>。因为触发器存储在数据库中，并且由事件驱动，这就意味着触发器有可能<code>不受应用层的控制</code>。</p><p>比如，在给t_user表中插入用户信息时，需要更新t_user_log表。当t_user_log中的remark字段过长，触发器会报错。但是t_user表中并没有remark字段。如果你不了解这个触发器， 很可能会认为是更新语句本身的问题</p></li><li><p>**相关数据的变更，可能会导致触发器出错。**特别是数据表结构的变更，都可能会导致触发器出错，进而影响数据操作的正常运行。这些都会由于触 发器本身的隐蔽性，影响到应用中错误原因排查的效率</p></li></ul><h2 id="_17-6-触发器使用例子" tabindex="-1"><a class="header-anchor" href="#_17-6-触发器使用例子"><span>17.6 触发器使用例子</span></a></h2><p><code>例</code>创建t_user表，t_user_log表。</p><ul><li>①在插入用户信息后，使用触发器，自动插入create_time、update_time字段，并且在t_user_log表中插入日志</li><li>②在更新用户信息前，使用触发器，自动更新update_time字段，并且在t_user_log表中插入日志</li><li>③在删除用户信息后，使用触发器，在t_user_log表中插入日志</li></ul><p><code>代码</code></p>`,10),_=s(`<li><p>①创建t_user表，t_user_log表</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">create table t_user(</span>
<span class="line">	id int primary key auto_increment,</span>
<span class="line">	user_name VARCHAR(25),</span>
<span class="line">	create_time datetime,</span>
<span class="line">	update_time datetime</span>
<span class="line">);</span>
<span class="line">create table t_user_log(</span>
<span class="line">	id int primary key auto_increment,</span>
<span class="line">	user_id int,</span>
<span class="line">	user_name_old varchar(25),</span>
<span class="line">	user_name_new varchar(25),</span>
<span class="line">	type enum(&#39;1&#39;, &#39;2&#39;, &#39;3&#39;) default &#39;1&#39; comment &#39;1插入2更新3删除&#39; ,</span>
<span class="line">	remark varchar(25),</span>
<span class="line">	create_time datetime</span>
<span class="line">);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),g=e("p",null,[n("②创建触发器"),e("code",null,"t_user_before_insert_trigger"),n("，在插入用户信息时，自动填充create_time和update_time")],-1),b=s(`<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 触发器作用：在插入用户信息时，自动填充create_time和update_time</span>
<span class="line"># 使用before的原因：不允许在触发后，更新new行和old行</span>
<span class="line">delimiter $</span>
<span class="line">create trigger t_user_before_insert_trigger</span>
<span class="line">before insert on t_user</span>
<span class="line">for each row</span>
<span class="line">begin </span>
<span class="line">	# 同表的更新不能用update，而是直接使用set</span>
<span class="line">	# 可以理解为：</span>
<span class="line">	# 	①在插入之前中还没有当前记录，所以无法使用update（因为update需要根据id或其他字段定位）</span>
<span class="line">	# 	②使用set给当前对象（new）进行赋值，在插入时当前对象的create_time、update_time就有值了</span>
<span class="line">	set new.create_time = now(), new.update_time = now(); </span>
<span class="line">end $</span>
<span class="line">delimiter ;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=s(`<li><p>③创建触发器<code>t_user_after_insert_trigger</code>，在插入用户信息时，使用日志表t_user_log记录操作日志</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 触发器作用：在插入用户信息后，使用日志表t_user_log记录操作日志</span>
<span class="line">delimiter $</span>
<span class="line">create trigger t_user_after_insert_trigger</span>
<span class="line">after insert on t_user</span>
<span class="line">for each row</span>
<span class="line">begin</span>
<span class="line">	insert into t_user_log(user_id, user_name_new, type, remark, create_time)</span>
<span class="line">	values (new.id, new.user_name, 1, &#39;插入用户信息&#39;, now());</span>
<span class="line">end $</span>
<span class="line">delimiter ;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>④插入数据验证</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 插入数据</span>
<span class="line">insert into t_user(user_name) values(&#39;Tom&#39;);</span>
<span class="line"># 验证</span>
<span class="line">select * from t_user;</span>
<span class="line">select * from t_user_log;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),y=e("p",null,[n("⑤创建触发器"),e("code",null,"t_user_before_update_trigger"),n("，在更新用户信息时，自动更新update_time")],-1),E=s(`<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 触发器作用：在更新用户信息时，自动更新update_time</span>
<span class="line"># 使用before的原因：不允许在触发后更新new行和old行</span>
<span class="line">delimiter $</span>
<span class="line">create trigger t_user_before_update_trigger</span>
<span class="line">before update on t_user</span>
<span class="line">for each row</span>
<span class="line">begin</span>
<span class="line">	set new.update_time = now();</span>
<span class="line">end $</span>
<span class="line">delimiter ;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),q=s(`<li><p>⑥创建触发器<code>t_user_after_update_trigger</code>，使用日志表t_user_log记录操作日志</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 触发器作用：在更新用户信息后，使用日志表t_user_log记录操作日志</span>
<span class="line">delimiter $</span>
<span class="line">create trigger t_user_after_update_trigger</span>
<span class="line">after update on t_user</span>
<span class="line">for each row</span>
<span class="line">begin</span>
<span class="line">	insert into t_user_log(user_id, user_name_old, user_name_new, type, remark, create_time)</span>
<span class="line">	values (new.id, old.user_name, new.user_name, 2, &#39;更新用户信息&#39;, now());</span>
<span class="line">end $</span>
<span class="line">delimiter ;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>⑦更新数据验证</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 更新数据</span>
<span class="line">update t_user set user_name = &#39;Tom1&#39; where id = 1;</span>
<span class="line"># 验证</span>
<span class="line">select * from t_user;</span>
<span class="line">select * from t_user_log;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>⑧创建触发器<code>t_user_after_delete_trigger</code>，在删除数据后，使用日志表t_user_log记录操作日志</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 触发器作用：在删除数据后，使用日志表t_user_log记录操作日志</span>
<span class="line">delimiter $</span>
<span class="line">create trigger t_user_after_delete_trigger</span>
<span class="line">after delete on t_user</span>
<span class="line">for each row</span>
<span class="line">begin</span>
<span class="line">	insert into t_user_log(user_id, user_name_old, type, remark, create_time)</span>
<span class="line">	values (old.id, old.user_name, 3, &#39;删除用户信息&#39;, now());</span>
<span class="line">end $</span>
<span class="line">delimiter ;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>⑨删除数据验证</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 删除数据</span>
<span class="line">delete from t_user where id = 1;</span>
<span class="line"># 验证</span>
<span class="line">select * from t_user;</span>
<span class="line">select * from t_user_log;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,4),f=s('<h2 id="_17-7-触发器使用注意事项" tabindex="-1"><a class="header-anchor" href="#_17-7-触发器使用注意事项"><span>17.7 触发器使用注意事项</span></a></h2><p>如果在子表中定义了<em>外键约束</em>，并且外键指定了<code>ON UPDATE</code>/<code>DELETE CASCADE</code>/<code>SET NULL</code>子句，此时<em>修改父表被引用的键值或删除父表被引用的记录行</em>时，也会引起子表的修改和删除操作，此时<strong>基于子表的UPDATE和DELETE语句定义的触发器并不会被激活</strong></p>',2);function T(w,R){const l=r("front");return t(),c("div",null,[u,e("p",null,[a(l,{style:{background:"yellow"}},{default:i(()=>[n("说明：")]),_:1})]),m,e("p",null,[a(l,{style:{background:"yellow"}},{default:i(()=>[n("说明：")]),_:1})]),o,e("p",null,[a(l,{style:{background:"yellow"}},{default:i(()=>[n("举例：")]),_:1})]),v,e("ul",null,[_,e("li",null,[g,e("p",null,[a(l,{style:{background:"yellow"}},{default:i(()=>[n("同表数据更新")]),_:1})]),b]),h,e("li",null,[y,e("p",null,[a(l,{style:{background:"yellow"}},{default:i(()=>[n("同表数据更新")]),_:1})]),E]),q]),f])}const S=d(p,[["render",T],["__file","17_触发器.html.vue"]]),k=JSON.parse('{"path":"/static/tang/mysql/17_%E8%A7%A6%E5%8F%91%E5%99%A8.html","title":"17 触发器","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"17.1 定义触发器","slug":"_17-1-定义触发器","link":"#_17-1-定义触发器","children":[]},{"level":2,"title":"17.2 查看触发器","slug":"_17-2-查看触发器","link":"#_17-2-查看触发器","children":[]},{"level":2,"title":"17.3 删除触发器","slug":"_17-3-删除触发器","link":"#_17-3-删除触发器","children":[]},{"level":2,"title":"17.4 中断触发器的执行","slug":"_17-4-中断触发器的执行","link":"#_17-4-中断触发器的执行","children":[]},{"level":2,"title":"17.5 触发器的优缺点","slug":"_17-5-触发器的优缺点","link":"#_17-5-触发器的优缺点","children":[{"level":3,"title":"17.5.1 优点","slug":"_17-5-1-优点","link":"#_17-5-1-优点","children":[]},{"level":3,"title":"17.5.2 缺点","slug":"_17-5-2-缺点","link":"#_17-5-2-缺点","children":[]}]},{"level":2,"title":"17.6 触发器使用例子","slug":"_17-6-触发器使用例子","link":"#_17-6-触发器使用例子","children":[]},{"level":2,"title":"17.7 触发器使用注意事项","slug":"_17-7-触发器使用注意事项","link":"#_17-7-触发器使用注意事项","children":[]}],"git":{},"filePathRelative":"static/tang/mysql/17_触发器.md"}');export{S as comp,k as data};
