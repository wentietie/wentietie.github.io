import{_ as d,r as c,o as p,c as t,e as s,a,w as i,d as n,b as l}from"./app-CW2dCZSC.js";const r={},u=s("h1",{id:"_16-变量、流程控制与游标",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_16-变量、流程控制与游标"},[s("span",null,"16 变量、流程控制与游标")])],-1),v=s("h2",{id:"_16-1-变量",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_16-1-变量"},[s("span",null,"16.1 变量")])],-1),m=s("p",null,"系统变量",-1),o=s("ul",null,[s("li",null,"全局系统变量"),s("li",null,[n("会话系统变量（"),s("strong",null,"默认"),n("）")])],-1),b=s("li",null,[s("p",null,"用户自定义变量"),s("ul",null,[s("li",null,"会话用户变量"),s("li",null,"局部变量")])],-1),_=l('<h3 id="_16-1-1-系统变量" tabindex="-1"><a class="header-anchor" href="#_16-1-1-系统变量"><span>16.1.1 系统变量</span></a></h3><blockquote><p>概述</p></blockquote><ul><li>定义：变量由系统定义，不是用户定义，属于服务器层面。启动MySQL服务，生成MySQL服务实例期间， MySQL将为MySQL服务器内存中的系统变量赋值，这些系统变量定义了当前MySQL服务实例的属性、特 征。这些<strong>系统变量的值要么是 编译MySQL时参数的默认值，要么是 配置文件 （例如my.ini等）中的参数值</strong>。</li><li>系统变量分为<code>全局系统变量</code>（需要添加<code> global</code> 关键字）以及<code>会话系统变量</code>（需要添加<code>session</code>关键字）。如果不写，<strong>默认会话级别</strong>。</li><li>有时也把全局系统变量简称为<em>全局变量</em>，有时也把会话系统变量称为<em>local变量</em>。</li><li><code>静态变量</code>（在 MySQL 服务实例运行期间它们的值不能使用 set 动态修改）<strong>属于特殊的全局系统变量</strong>。</li><li>全局系统变量针对于所有会话有效，但是<strong>不能跨重启</strong></li><li>会话系统变量，只针对当前会话有效。</li><li>会话1针对某个全局系统变量值的修改，会导致会话2中同一个全局变量的值的修改。</li><li><strong>有些系统变量只能是全局的</strong>，例如 max_connections 用于限制服务器的最大连接数；<strong>有些系统变量作用域既可以是全局又可以是会话</strong>，例如 character_set_client 用于设置客户端的字符集；<strong>有些系统变量的作用域只能是当前会话</strong>，例如 pseudo_thread_id 用于标记当前会话的 MySQL 连接 ID</li></ul><blockquote><p>查看系统变量</p></blockquote>',4),E=l(`<li><p>查看所有或部分系统变量</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">#查看所有全局变量</span>
<span class="line">SHOW GLOBAL VARIABLES;</span>
<span class="line">#查看所有会话变量</span>
<span class="line">SHOW [SESSION] VARIABLES;</span>
<span class="line"></span>
<span class="line">#查看满足条件的部分系统变量。</span>
<span class="line">SHOW GLOBAL VARIABLES LIKE &#39;模糊查询条件&#39;;</span>
<span class="line">#查看满足条件的部分会话变量</span>
<span class="line">SHOW [SESSION] VARIABLES LIKE &#39;模糊查询条件&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),h=s("p",null,"查看指定系统变量",-1),g=l(`<ul><li><code>@@global</code>开头表示全局系统变量</li><li><code>@@session</code>开头表示会话系统变量</li><li><code>@@</code>开头，首先会查询会话系统变量，如果会话系统不存在，再去查全局系统变量</li></ul><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">#查看指定的系统变量的值</span>
<span class="line">SELECT @@global.变量名;</span>
<span class="line"></span>
<span class="line">#查看指定的会话变量的值</span>
<span class="line">SELECT @@session.变量名;</span>
<span class="line"></span>
<span class="line">#先匹配会话系统变量，不存在的话再去匹配全局系统变量</span>
<span class="line">SELECT @@变量名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),y=l(`<blockquote><p>修改系统变量的值</p></blockquote><ul><li><p>方法一：</p><p>修改MySQL 配置文件<code>my.ini</code> ，继而修改MySQL系统变量的值（该方法需要重启MySQL服务）</p></li><li><p>方法二：</p><p>在MySQL服务运行期间，使用<code>set</code>命令重新设置系统变量的值，语法如下：</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 为全局系统变量赋值</span>
<span class="line">SET @@global.变量名=变量值;</span>
<span class="line">#方式2：</span>
<span class="line">SET GLOBAL 变量名=变量值;</span>
<span class="line"></span>
<span class="line">#为会话系统变量赋值</span>
<span class="line">#方式1：</span>
<span class="line">SET @@session.变量名=变量值;</span>
<span class="line">#方式2：</span>
<span class="line">SET SESSION 变量名=变量值;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p>MySQL8.0新特性：全局变量的持久化</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">SET PERSIST GLOBAL  全局系统变量名 = 值;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,4),q=l('<ul><li>数据库重启后，值仍有效</li><li>MySQL会将该命令的配置保存到数据目录下的<code>mysqld-auto.cnf</code>文件中，下次启动时会读取该文件，用其中的配置来覆盖默认配置</li></ul><h3 id="_16-1-2-用户变量" tabindex="-1"><a class="header-anchor" href="#_16-1-2-用户变量"><span>16.1.2 用户变量</span></a></h3><blockquote><p>概述</p></blockquote><ul><li>定义：用户变量是用户自己定义的，作为 MySQL 编码规范，MySQL 中的用户变量以 <code>@</code> 开头。</li><li>分类： <ul><li><code>会话用户变量</code>：作用域是当前会话，只对当前连接有效</li><li><code>局部变量</code>：只在存储过程或者存储函数的BEGIN ... END语句中有效。</li></ul></li></ul><blockquote><p>用户变量的定义</p></blockquote>',5),L=l(`<li><p>会话级用户变量</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 定义</span>
<span class="line"># 方式1：使用“=”或者“:=”</span>
<span class="line">SET @用户变量 = 值;</span>
<span class="line">SET @用户变量:= 值;</span>
<span class="line"></span>
<span class="line"># 方式2：使用“:=”或者“INTO”关键字</span>
<span class="line">SELECT @用户变量 := 表达式 [FROM 子句];</span>
<span class="line">SELECT 表达式（或者字段名） INTO @用户变量 [FROM 子句];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),T=s("p",null,"局部变量",-1),N=l(`<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 声明</span>
<span class="line">DECLARE 变量名 类型 [default 值]; # 如果没有DEFAULT子句，初始值为NULL</span>
<span class="line"></span>
<span class="line"># 赋值方式1：</span>
<span class="line">SET 变量名 = 值;</span>
<span class="line"># 赋值方式2：</span>
<span class="line">SELECT 表达式（或者字段名） INTO 变量名 [FROM 子句];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S=l(`<blockquote><p>用户变量的查看</p></blockquote><ul><li><p>会话用户变量</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">SELECT @会话用户变量</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>局部变量</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">SELECT 局部变量名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><blockquote><p>会话用户变量 VS 局部变量</p></blockquote><table><thead><tr><th></th><th>作用域</th><th>定义位置</th><th>语法</th></tr></thead><tbody><tr><td>会话用户变量</td><td>当前会话</td><td>会话的任意位置</td><td>使用@符号，不用指定类型</td></tr><tr><td>局部变量</td><td>声明的BEGIN ... END 语句中</td><td>BEGIN ... END语句中的第一句代码</td><td>使用DECLARE，需要指定类型</td></tr></tbody></table><h2 id="_16-2-定义条件与处理程序" tabindex="-1"><a class="header-anchor" href="#_16-2-定义条件与处理程序"><span>16.2 定义条件与处理程序</span></a></h2><p><code>定义条件</code>是事先定义程序执行过程中可能遇到的问题，<code>处理程序</code>定义了在遇到问题时应当采取的处理方式，并且保证存储过程或函数在遇到警告或错误时能够继续执行。这样可以增强存储过程或者存储程序处理问题的能力，增强程序的健壮性，避免程序异常停止运行。<strong>类似于Java的异常处理机制。</strong></p><h3 id="_16-2-1-定义条件" tabindex="-1"><a class="header-anchor" href="#_16-2-1-定义条件"><span>16.2.1 定义条件</span></a></h3><blockquote><p>定义</p></blockquote><p><code>定义条件</code>就是<strong>给MySQL中的错误命名</strong>，有助于存储的程序代码更清晰。它将一个<code>错误名字</code>和<code>错误条件</code>关联起来，随后可以被用在<u>定义处理程序</u>的<code>DECLARE HANDLER</code>语句中。</p><blockquote><p>语法</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">DECLARE 错误名字 CONDITION FOR 错误码|错误条件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,11),R=l(`<ul><li><code>MySQL_error_code</code>和<code>sqlstate_value</code>都可以表示MySQL的错误。 <ul><li><code>MySQL_error_code</code>：是数值型的错误代码</li><li><code>sqlstate_value</code>：是长度为5的字符串类型的错误代码</li></ul></li><li><code>例子</code>：在“ERROR 1418 (HY000)”中，1418是MySQL_error_code，“HY000”是sqlstate_value。</li><li><code>例子</code>：在“ERROR 1142（42000）”中，1142是MySQL_error_code，“42000”是sqlstate_value。</li></ul><blockquote><p>定义条件举例</p></blockquote><p><code>例</code>定义“Field_Not_Be_NULL”错误名与MySQL中违反非空约束的错误类型是“ERROR 1048 (23000)”对应</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">#方法1：使用MySQL_error_code</span>
<span class="line">DECLARE Field_Not_Be_NULL CONDITION FOR 1048;</span>
<span class="line"></span>
<span class="line">#方法2：使用sqlstate_value</span>
<span class="line">DECLARE Field_Not_Be_NULL CONDITION FOR SQLSTATE &#39;23000&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-2-2-定义处理程序" tabindex="-1"><a class="header-anchor" href="#_16-2-2-定义处理程序"><span>16.2.2 定义处理程序</span></a></h3><blockquote><p>定义</p></blockquote><p>可以为SQL执行过程中发生的某种类型的错误定义特殊的处理程序。</p><blockquote><p>语法</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">DECLARE 处理方式 HANDLER FOR 错误类型 处理语句</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,9),O=l(`<ul><li><p><strong>处理方式</strong>：取值如下：</p><ul><li><code>CONTINUE</code>：表示遇到指定的错误类型不处理，继续执行</li><li><code>EXIT</code>：表示遇到指定的错误类型马上退出</li><li><code>UNDO</code>：表示遇到指定的错误类型后撤回之前的操作。<strong>MySQL中暂时不支持该操作</strong></li></ul></li><li><p><strong>错误类型</strong>：取值如下：</p><ul><li><code>SQLSTATE &#39;字符串错误码&#39;</code>：表示长度为5的字符串类型的错误代码</li><li><code>MySQL_error_code错误代码</code>：匹配数值类型的错误码</li><li><code>错误名称</code>：表示DECLARE ... CONDITION定义的错误条件名称</li><li><code>SQLWARNING</code>：匹配所有以01开头的SQLSTATE错误代码</li><li><code>NOT FOUND</code>：匹配所有以02开头的SQLSTATE错误代码；</li><li><code>SQLEXCEPTION</code>：匹配所有没有被SQLWARNING或NOT FOUND捕获的SQLSTATE错误代码</li></ul></li><li><p><strong>处理语句</strong>：如果出现上述条件之一，则采用对应的处理方式，并执行指定的处理语句。</p><p>处理语句可以是<code>SET 变量 = 值</code>这样的简单语句，也可以是<code>BEGIN ... END</code>编写的复杂语句</p></li></ul><blockquote><p>例子</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">#方法1：捕获sqlstate_value</span>
<span class="line">DECLARE CONTINUE HANDLER FOR SQLSTATE &#39;42S02&#39; SET @info = &#39;NO_SUCH_TABLE&#39;;</span>
<span class="line"></span>
<span class="line">#方法2：捕获mysql_error_value</span>
<span class="line">DECLARE CONTINUE HANDLER FOR 1146 SET @info = &#39;NO_SUCH_TABLE&#39;;</span>
<span class="line"></span>
<span class="line">#方法3：先定义条件，再调用</span>
<span class="line">DECLARE no_such_table CONDITION FOR 1146;</span>
<span class="line">DECLARE CONTINUE HANDLER FOR NO_SUCH_TABLE SET @info = &#39;NO_SUCH_TABLE&#39;;</span>
<span class="line"></span>
<span class="line">#方法4：使用SQLWARNING</span>
<span class="line">DECLARE EXIT HANDLER FOR SQLWARNING SET @info = &#39;ERROR&#39;;</span>
<span class="line"></span>
<span class="line">#方法5：使用NOT FOUND</span>
<span class="line">DECLARE EXIT HANDLER FOR NOT FOUND SET @info = &#39;NO_SUCH_TABLE&#39;;</span>
<span class="line"></span>
<span class="line">#方法6：使用SQLEXCEPTION</span>
<span class="line">DECLARE EXIT HANDLER FOR SQLEXCEPTION SET @info = &#39;ERROR&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-3-流程控制" tabindex="-1"><a class="header-anchor" href="#_16-3-流程控制"><span>16.3 流程控制</span></a></h2><blockquote><p>流程的分类</p></blockquote><ul><li><strong>顺序结构</strong>：程序从上往下依次执行</li><li><strong>分支结构</strong>：程序按照条件进行选择执行，从两条或者多条路径中选择一条执行</li><li><strong>循环结构</strong>：程序满足一定条件下，重复执行一组语句</li></ul><blockquote><p>流程控制语句的分类</p></blockquote>`,7),I=l(`<ul><li><strong>条件判断语句</strong>：IF 语句或者 CASE 语句</li><li><strong>循环语句</strong>：LOOP 语句、WHILE 语句或者 REPEAT语句</li><li><strong>跳转语句</strong>：ITERATE 语句和 LEAVE 语句</li></ul><h3 id="_16-3-1-分支结构之-if" tabindex="-1"><a class="header-anchor" href="#_16-3-1-分支结构之-if"><span>16.3.1 分支结构之 IF</span></a></h3><blockquote><p>语法</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">IF 表达式1 THEN 操作1</span>
<span class="line">[ELSEIF 表达式2 THEN 操作2]……</span>
<span class="line">[ELSE 操作N]</span>
<span class="line">END IF;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>举例</p></blockquote><p><code>例</code>声明存储过程“update_salary_by_eid2”，定义IN参数emp_id，输入员工编号。判断该员工薪资如果低于9000元并且入职时间超过5年，就涨薪500元；否则就涨薪100元。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 定义存储过程</span>
<span class="line">DELIMITER $</span>
<span class="line">CREATE PROCEDURE update_salary_by_eid2(IN emp_id INT)</span>
<span class="line">BEGIN</span>
<span class="line">	DECLARE emp_salary DOUBLE;</span>
<span class="line">	DECLARE emp_years DOUBLE;</span>
<span class="line">	</span>
<span class="line">	SELECT salary, DATEDIFF(CURRENT_DATE(), hire_date)/365 INTO emp_salary, emp_years</span>
<span class="line">	FROM emps</span>
<span class="line">	WHERE employee_id = emp_id;</span>
<span class="line">	</span>
<span class="line">	IF emp_salary &lt; 9000 AND emp_years &gt;= 5 </span>
<span class="line">		THEN UPDATE emps SET salary = salary + 500 WHERE employee_id = emp_id;</span>
<span class="line">	ELSE </span>
<span class="line">		UPDATE emps SET salary = salary + 100 WHERE employee_id = emp_id;</span>
<span class="line">	END IF;</span>
<span class="line">END $</span>
<span class="line">DELIMITER ;</span>
<span class="line"></span>
<span class="line"># 调用存储过程</span>
<span class="line">CALL update_salary_by_eid2(104);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-3-2-分支结构之-case" tabindex="-1"><a class="header-anchor" href="#_16-3-2-分支结构之-case"><span>16.3.2 分支结构之 CASE</span></a></h3><blockquote><p>语法1：类似于Java中的switch语句</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">CASE 表达式</span>
<span class="line">WHEN 值1 THEN 结果1或语句1(如果是语句，需要加分号)</span>
<span class="line">WHEN 值2 THEN 结果2或语句2(如果是语句，需要加分号)</span>
<span class="line">...</span>
<span class="line">ELSE 结果n或语句n(如果是语句，需要加分号)</span>
<span class="line">END CASE;  # 注意：如果是放在begin end中需要加上case，如果放在select后面不需要</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>语法2：类似于Java中的多重if</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">CASE</span>
<span class="line">WHEN 条件1 THEN 结果1或语句1(如果是语句，需要加分号)</span>
<span class="line">WHEN 条件2 THEN 结果2或语句2(如果是语句，需要加分号)</span>
<span class="line">...</span>
<span class="line">ELSE 结果n或语句n(如果是语句，需要加分号)</span>
<span class="line">END CASE; # 注意：如果是放在begin end中需要加上case，如果放在select后面不需要</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>举例</p></blockquote><p><code>例</code>声明存储过程“update_salary_by_eid4”，定义IN参数emp_id，输入员工编号。判断该员工薪资如果低于9000元，就更新薪资为9000元；薪资大于等于9000元且低于10000的，但是奖金比例为NULL的，就更新奖金比例为0.01；其他的涨薪100元。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 声明存储过程	</span>
<span class="line">DELIMITER $</span>
<span class="line">CREATE PROCEDURE update_salary_by_eid4(IN emp_id INT)</span>
<span class="line">BEGIN</span>
<span class="line">	DECLARE emp_sal DOUBLE;</span>
<span class="line">	DECLARE emp_bonus DOUBLE;</span>
<span class="line">	</span>
<span class="line">	SELECT salary, commission_pct INTO emp_sal, emp_bonus FROM emps WHERE employee_id = emp_id;</span>
<span class="line">	</span>
<span class="line">	CASE </span>
<span class="line">		WHEN emp_sal &lt; 9000 </span>
<span class="line">			THEN UPDATE emps SET salary = 9000 WHERE employee_id = emp_id;</span>
<span class="line">		WHEN emp_sal &gt;= 9000 AND emp_sal &lt; 10000 AND emp_bonus IS NULL </span>
<span class="line">			THEN UPDATE emps SET commission_pct = 0.01 WHERE employee_id = emp_id;</span>
<span class="line">		ELSE</span>
<span class="line">			UPDATE emps SET salary = salary + 100 WHERE employee_id = emp_id;</span>
<span class="line">	END CASE;</span>
<span class="line">END $</span>
<span class="line">DELIMITER ;</span>
<span class="line"></span>
<span class="line"># 调用 </span>
<span class="line">CALL update_salary_by_eid4(100)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-3-3-循环结构之-loop" tabindex="-1"><a class="header-anchor" href="#_16-3-3-循环结构之-loop"><span>16.3.3 循环结构之 LOOP</span></a></h3>`,16),A=l(`<blockquote><p>语法</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">[loop_label]: LOOP</span>
<span class="line">	循环体</span>
<span class="line">END LOOP [loop_label];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),D=l(`<ul><li><code>loop_label</code>：当前LOOP循环语句的标注名称，在使用LEAVE跳出循环时会用到</li></ul><blockquote><p>举例</p></blockquote><p><code>例</code>当市场环境变好时，公司为了奖励大家，决定给大家涨工资。声明存储过程“update_salary_loop()”，声明OUT参数num，输出循环次数。存储过程中实现循环给大家涨薪，薪资涨为原来的1.1倍，直到全公司的平均薪资达到12000结束，并统计循环次数。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 声明存储过程</span>
<span class="line">DELIMITER //</span>
<span class="line">CREATE PROCEDURE update_salary_loop(OUT num INT)</span>
<span class="line">BEGIN</span>
<span class="line">	DECLARE avg_sal DOUBLE;</span>
<span class="line">	SET num := 0;</span>
<span class="line">	</span>
<span class="line">	SELECT AVG(salary) INTO avg_sal FROM emps;</span>
<span class="line">	</span>
<span class="line">	add_salary:LOOP</span>
<span class="line">			# 循环退出条件</span>
<span class="line">			IF avg_sal &gt;= 12000 THEN LEAVE add_salary; </span>
<span class="line">			END IF;</span>
<span class="line">			</span>
<span class="line">			# 统计循环次数</span>
<span class="line">			SET num := num + 1; </span>
<span class="line">			</span>
<span class="line">			# 更新薪资</span>
<span class="line">			UPDATE emps SET salary = salary * 1.1; </span>
<span class="line">			</span>
<span class="line">			# 查询更新后的平均薪资</span>
<span class="line">			SELECT AVG(salary) INTO avg_sal FROM emps; </span>
<span class="line">	END LOOP add_salary;</span>
<span class="line"></span>
<span class="line">END //</span>
<span class="line">DELIMITER ;</span>
<span class="line"></span>
<span class="line"># 调用存储过程</span>
<span class="line">set @num := 0;</span>
<span class="line">call update_salary_loop(@num);</span>
<span class="line">SELECT @num;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-3-4-循环结构之-while" tabindex="-1"><a class="header-anchor" href="#_16-3-4-循环结构之-while"><span>16.3.4 循环结构之 WHILE</span></a></h3><p>WHILE在执行语句执行时，<strong>先对指定的表达式进行判断</strong>，如 果为真，就执行循环内的语句，否则退出循环。</p><blockquote><p>语法</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">[while_label:] WHILE 循环条件 DO</span>
<span class="line">循环体</span>
<span class="line">END WHILE [while_label];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),k=l(`<ul><li><code>while_label</code>：当前WHILE循环语句的标注名称。</li></ul><blockquote><p>例子</p></blockquote><p><code>例</code>市场环境不好时，公司为了渡过难关，决定暂时降低大家的薪资。声明存储过程“update_salary_while()”，声明OUT参数num，输出循环次数。存储过程中实现循环给大家降薪，薪资降为原来的90%。直到全公司的平均薪资达到5000结束，并统计循环次数。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 声明存储过程	</span>
<span class="line">delimiter $</span>
<span class="line">create procedure update_salary_while(out num int)</span>
<span class="line">begin </span>
<span class="line">	# 声明变量</span>
<span class="line">	declare avg_sal double; # 记录公司平均薪资</span>
<span class="line">	declare loop_num int default 0; # 记录循环次数</span>
<span class="line">	</span>
<span class="line">	# 初始化avg_sal</span>
<span class="line">	select avg(salary) into avg_sal from emps;</span>
<span class="line">	</span>
<span class="line">	# 循环降薪</span>
<span class="line">	sub_salary: while avg_sal &gt; 5000 DO</span>
<span class="line">		# 降薪</span>
<span class="line">		update emps set salary = salary * 0.9;</span>
<span class="line">		# 记录循环次数</span>
<span class="line">		set loop_num = loop_num + 1;</span>
<span class="line">		# 重新计算平均工资</span>
<span class="line">		select avg(salary) into avg_sal from emps;</span>
<span class="line">	end while sub_salary;</span>
<span class="line">	</span>
<span class="line">	# 给out参数赋值</span>
<span class="line">	set num = loop_num;</span>
<span class="line">end $</span>
<span class="line">delimiter ;</span>
<span class="line"></span>
<span class="line"># 调用存储过程</span>
<span class="line">call update_salary_while(@num);</span>
<span class="line">select @num;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-3-5-循环结构之-repeat" tabindex="-1"><a class="header-anchor" href="#_16-3-5-循环结构之-repeat"><span>16.3.5 循环结构之 REPEAT</span></a></h3><p>REPEAT 循环<strong>首先会执行一次循 环，然后在 UNTIL 中进行表达式的判断</strong>，如果满足条件就退出，即 END REPEAT；如果条件不满足，则会 就继续执行循环，直到满足退出条件为止。</p><blockquote><p>语法</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">[repeat_label]:REPEAT</span>
<span class="line">	循环体</span>
<span class="line">	UNTIL 循环结束条件</span>
<span class="line">END REPEAT [repeat_label];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),C=l(`<ul><li><code>repeat_label</code>：当前REPEAT循环语句的标注名称。</li></ul><blockquote><p>例子</p></blockquote><p><code>例</code>当市场环境变好时，公司为了奖励大家，决定给大家涨工资。声明存储过程“update_salary_repeat()”，声明OUT参数num，输出循环次数。存储过程中实现循环给大家涨薪，薪资涨为原来的1.15倍。直到全公司的平均薪资达到13000结束，并统计循环次数。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 声明存储过程	</span>
<span class="line">delimiter $</span>
<span class="line">create procedure update_salary_repeat(out num int)</span>
<span class="line">begin</span>
<span class="line">	declare avg_sal DOUBLE;</span>
<span class="line">	declare repeat_count int default 0;</span>
<span class="line">	</span>
<span class="line">	select avg(salary) into avg_sal from emps;</span>
<span class="line">	</span>
<span class="line">	add_salary:repeat</span>
<span class="line">		update emps set salary = salary * 1.15;</span>
<span class="line">		set repeat_count = repeat_count + 1;</span>
<span class="line">		select avg(salary) into avg_sal from emps;</span>
<span class="line">		until avg_sal &gt;= 13000</span>
<span class="line">	end repeat add_salary;</span>
<span class="line">	</span>
<span class="line">	set num = repeat_count;</span>
<span class="line">end $</span>
<span class="line">delimiter ;</span>
<span class="line"></span>
<span class="line"># 调用循环</span>
<span class="line">call update_salary_repeat(@num);</span>
<span class="line">select @num;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-3-6-loop、while、repeat的对比" tabindex="-1"><a class="header-anchor" href="#_16-3-6-loop、while、repeat的对比"><span>16.3.6 LOOP、WHILE、REPEAT的对比</span></a></h3><ul><li><p><strong>相同点</strong>：</p><p>三者都可以省略标注名称，但是如果在循环中添加了循环控制语句（LEAVE或ITERATE）则必须添加标注名称。</p></li><li><p><strong>不同点</strong>：</p><ul><li><code>LOOP</code>：一般用于实现简单的“死”循环</li><li><code>WHILE</code>：先判断，后执行</li><li><code>REPEAT</code>：先执行，后判断。无条件至少执行一次</li></ul></li></ul><h3 id="_16-3-7-跳转语句之-leave" tabindex="-1"><a class="header-anchor" href="#_16-3-7-跳转语句之-leave"><span>16.3.7 跳转语句之 LEAVE</span></a></h3><blockquote><p>作用</p></blockquote><ul><li>可以用在<code>BEGIN ... END</code>语句中，表示跳出程序体</li><li>可以用在循环体内，表示跳出循环</li></ul><p>相当于<code>break</code>。</p><blockquote><p>语法</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">LEAVE 标记名</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>举例</p></blockquote><p><code>例</code><strong>跳出 BEGIN ... END 语句</strong>。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">DELIMITER //</span>
<span class="line">CREATE PROCEDURE leave_begin(IN num INT)</span>
<span class="line">begin_label:BEGIN</span>
<span class="line">	IF num &lt;= 0</span>
<span class="line">		THEN LEAVE begin_label; # 跳出程序体</span>
<span class="line">	ELSEIF num = 1</span>
<span class="line">		THEN SELECT AVG(salary) FROM emps;</span>
<span class="line">	ELSEIF num = 2</span>
<span class="line">		THEN SELECT MIN(salary) FROM emps;</span>
<span class="line">	ELSE </span>
<span class="line">		SELECT MAX(salary) FROM emps;</span>
<span class="line">	END IF;</span>
<span class="line">	</span>
<span class="line">	#查询总人数</span>
<span class="line">	SELECT COUNT(*) FROM emps;</span>
<span class="line">END //</span>
<span class="line">DELIMITER ;</span>
<span class="line"></span>
<span class="line">#调用</span>
<span class="line">CALL leave_begin(1);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>例</code><strong>跳出while循环</strong></p><p>当市场环境不好时，公司为了渡过难关，决定暂时降低大家的薪资。声明存储过程“leave_while()”，声明OUT参数num，输出循环次数，存储过程中使用WHILE循环给大家降低薪资为原来薪资的90%，直到全公司的平均薪资小于等于10000，并统计循环次数。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 声明存储过程</span>
<span class="line">delimiter $</span>
<span class="line">create procedure leave_while(out num int)</span>
<span class="line">begin</span>
<span class="line">	declare avg_sal double;</span>
<span class="line">	set num = 0;</span>
<span class="line">	</span>
<span class="line">	select avg(salary) into avg_sal from emps;</span>
<span class="line">	sub_sal:while 1=1 do</span>
<span class="line">			if avg_sal &lt;= 10000</span>
<span class="line">				then leave sub_sal;</span>
<span class="line">			end if;</span>
<span class="line">			update emps set salary = salary * 0.9;</span>
<span class="line">			set num = num + 1;</span>
<span class="line">			select avg(salary) into avg_sal from emps;</span>
<span class="line">	 end while sub_sal;</span>
<span class="line">end $</span>
<span class="line">delimiter ;</span>
<span class="line"></span>
<span class="line"># 调用</span>
<span class="line">call leave_while(@num);</span>
<span class="line">select @num;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-3-8-跳转语句之-iterate" tabindex="-1"><a class="header-anchor" href="#_16-3-8-跳转语句之-iterate"><span>16.3.8 跳转语句之 ITERATE</span></a></h3><blockquote><p>作用</p></blockquote><p>只能用在循环语句内，<strong>表示重新开始循环，将执行顺序转到语句段的开头</strong>。</p><p>相当于<code>continue</code>。</p><blockquote><p>语法</p></blockquote><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">ITERATE 标记名称;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>举例</p></blockquote><p><code>例</code>定义局部变量num，初始值为0。循环结构中执行num + 1操作。如果num &lt; 10，则继续执行循环；如果num &gt; 15，则退出循环结构。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 声明存储过程</span>
<span class="line">delimiter $</span>
<span class="line">create procedure test_iterate() </span>
<span class="line">begin</span>
<span class="line">	declare num int default 0;</span>
<span class="line">	loop_label:loop</span>
<span class="line">		set num = num + 1;</span>
<span class="line">		if num &lt; 10</span>
<span class="line">			then iterate loop_label; # 结束当前循环，开始下一次循环</span>
<span class="line">		elseif num &gt; 15</span>
<span class="line">			then leave loop_label;</span>
<span class="line">		end if;</span>
<span class="line">		SELECT &#39;学如逆水行舟，不进则退&#39;;</span>
<span class="line">	end loop loop_label;</span>
<span class="line">end $</span>
<span class="line">delimiter ;</span>
<span class="line"></span>
<span class="line"># 调用</span>
<span class="line">call test_iterate()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-4-游标" tabindex="-1"><a class="header-anchor" href="#_16-4-游标"><span>16.4 游标</span></a></h2><h3 id="_16-4-1-概述" tabindex="-1"><a class="header-anchor" href="#_16-4-1-概述"><span>16.4.1 概述</span></a></h3><ul><li><strong>作用</strong>：游标，让我们能够对结果集中的<em>每一条记录</em>进行定位，并对指向的记录中的数据进行操作的数据结构。<strong>游标让 SQL 这种面向集合的语言有了面向过 程开发的能力。</strong></li><li>游标是一种临时的数据库对象，可以指向存储在数据库表中的数据行指针。这里游标<code>充当了指针</code>的作用。</li><li>游标可以在<code>存储过程</code>和<code>存储函数</code>中使用</li></ul><h3 id="_16-4-2-游标的使用" tabindex="-1"><a class="header-anchor" href="#_16-4-2-游标的使用"><span>16.4.2 游标的使用</span></a></h3><p><strong>使用游标，一般需要经历如下4个步骤：</strong></p>`,32),f=l(`<li><p>声明游标：游标的声明必须<strong>在变量声明之后、处理程序之前</strong>。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">DECLARE 游标名 CURSOR FOR 查询语句;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>开启游标</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">OPEN 游标名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li>`,2),x=l(`<p>使用游标（从游标中获取数据）：</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">FETCH 游标名 INTO 变量名1 [, 变量名2, ...]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,2),H=s("p",null,[s("strong",null,"游标的查询结果集中的字段，必须和INTO后的变量保持一致")],-1),U=l(`<li><p>关闭游标</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line">CLOSE 游标名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li>`,1),F=l(`<h3 id="_16-4-3-举例" tabindex="-1"><a class="header-anchor" href="#_16-4-3-举例"><span>16.4.3 举例</span></a></h3><p><code>例</code>创建存储过程“get_count_by_limit_total_salary()”，声明IN参数 limit_total_salary，DOUBLE类型；声明OUT参数total_count，INT类型。函数的功能可以实现累加薪资最高的几个员工的薪资值，直到薪资总和达到limit_total_salary参数的值，返回累加的人数给total_count。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 声明存储过程 </span>
<span class="line">DELIMITER $</span>
<span class="line">CREATE PROCEDURE get_count_by_limit_total_salary(IN limit_total_salary DOUBLE, OUT total_count INT)</span>
<span class="line">BEGIN</span>
<span class="line">	# 声明变量，存储薪资的和</span>
<span class="line">	DECLARE sal_sum DOUBLE DEFAULT 0;</span>
<span class="line">	# 声明变量，记录累加次数</span>
<span class="line">	DECLARE emp_num INT DEFAULT 0;</span>
<span class="line">	# 声明变量，记录游标指定行的salary信息</span>
<span class="line">	DECLARE sal_tmp DOUBLE DEFAULT 0;</span>
<span class="line">	# 声明游标</span>
<span class="line">	DECLARE sal_cursor CURSOR FOR SELECT salary FROM emps ORDER BY salary DESC;</span>
<span class="line">	# 打开游标</span>
<span class="line">	OPEN sal_cursor;</span>
<span class="line">	# 开始循环累加</span>
<span class="line">	add_sal: WHILE sal_sum &lt; limit_total_salary DO </span>
<span class="line">		# 使用游标</span>
<span class="line">		FETCH sal_cursor INTO sal_tmp;</span>
<span class="line">		SET sal_sum := sal_sum + sal_tmp;</span>
<span class="line">		SET emp_num := emp_num + 1;</span>
<span class="line">	END WHILE add_sal;</span>
<span class="line">	# 关闭游标</span>
<span class="line">	CLOSE sal_cursor;</span>
<span class="line">	# 给传出参数赋值</span>
<span class="line">	SET total_count := emp_num;</span>
<span class="line">END $</span>
<span class="line">DELIMITER ;</span>
<span class="line"></span>
<span class="line"># 调用</span>
<span class="line">CALL get_count_by_limit_total_salary(200000, @count);</span>
<span class="line">SELECT @count;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-4-4-游标的优缺点" tabindex="-1"><a class="header-anchor" href="#_16-4-4-游标的优缺点"><span>16.4.4 游标的优缺点</span></a></h3><ul><li><p><strong>优点</strong>：</p><ul><li>允许<code>逐条读取</code>结果集中的数据</li><li>跟在应用层 面实现相同的功能相比，游标可以在存储程序中使用，效率高，程序也更加简洁。</li></ul></li><li><p><strong>缺点</strong>：</p><p>在使用游标的过程中，会对数据行进行<code>加锁</code>。这样在<em>业务并发量大</em> 的时候，不仅会<u>影响业务之间的效率</u>，还会<u>消耗系统资源</u> ，<u>造成内存不足</u>，这是因为游标是在内存中进 行的处理</p></li></ul>`,5),M=l(`<h2 id="_16-5-综合例子" tabindex="-1"><a class="header-anchor" href="#_16-5-综合例子"><span>16.5 综合例子</span></a></h2><p><code>例</code>创建存储过程update_salary()，参数1为 IN 的INT型变量dept_id，表示部门id；参数2为 IN的INT型变量change_sal_count，表示要调整薪资的员工个数；参数3为OUT的VARCHAR(255)型变量result，记录程序是否正常结束。</p><p>查询指定id部门的员工信息，按照salary升序排列，根据hire_date的情况，调整前change_sal_count个员工的薪资。涨薪比例如下：</p><ul><li>1995(含1995)年之前入职的，涨薪120%；</li><li>1995~1998（含1998）年入职的，涨薪115%；</li><li>1998~2001（含2001）年入职的涨薪110%；</li><li>其他涨薪105%</li></ul><p>另外，关于参数3 result的值设计如下：</p><ul><li>如果程序正常结束，result 值为 &quot;success&quot;；</li><li>当程序报错 “ERROR 1329 (02000)”时，result 值为 &quot;The change_sal_count is more than the number of employees of the current department&quot;</li></ul><p><code>分析：</code>用到的知识点有：</p><p>①创建存储过程；②分支结构；③循环结构；④游标；⑤定义条件与处理程序；⑥局部变量等</p><p><code>代码</code></p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 创建存储过程</span>
<span class="line">delimiter $</span>
<span class="line">create procedure update_salary(in dept_id int, in change_sal_count int, out result varchar(255))</span>
<span class="line">begin</span>
<span class="line">	# 创建变量，记录员工的id</span>
<span class="line">	declare emp_id int;</span>
<span class="line">	# 创建变量，记录员工入职年份</span>
<span class="line">	declare hire_year year;</span>
<span class="line">	# 创建变量，记录员工涨薪幅度</span>
<span class="line">	declare sal_rate double;</span>
<span class="line">	</span>
<span class="line">	# 定义条件</span>
<span class="line">	declare index_out condition for 1329;</span>
<span class="line">	</span>
<span class="line">	# 声明游标</span>
<span class="line">	declare emp_cursor cursor for </span>
<span class="line">		select employee_id, year(hire_date)</span>
<span class="line">		from emps </span>
<span class="line">		where department_id = dept_id </span>
<span class="line">		order by salary asc;</span>
<span class="line">		</span>
<span class="line">	# 定义处理类型</span>
<span class="line">	declare exit handler for index_out set result = &#39;The change_sal_count is more than the number of employees of the current department&#39;;</span>
<span class="line"></span>
<span class="line">	# 开启游标</span>
<span class="line">	open emp_cursor;</span>
<span class="line">	</span>
<span class="line">	update_sal: while change_sal_count &gt; 0 do</span>
<span class="line">		# 使用游标</span>
<span class="line">		fetch emp_cursor into emp_id, hire_year;</span>
<span class="line">		# 获取涨薪率</span>
<span class="line">		case</span>
<span class="line">			when hire_year &lt;= 1995 then set sal_rate = 1.2;</span>
<span class="line">			when hire_year &lt;= 1998 then set sal_rate = 1.15;</span>
<span class="line">			when hire_year &lt;= 2001 then set sal_rate = 1.10;</span>
<span class="line">			else set sal_rate = 1.05;</span>
<span class="line">		end case;</span>
<span class="line">		# 涨薪</span>
<span class="line">		update emps set salary = salary * sal_rate where employee_id = emp_id;</span>
<span class="line">		# 更新迭代条件</span>
<span class="line">		set change_sal_count = change_sal_count - 1;</span>
<span class="line">	end while update_sal;</span>
<span class="line">	</span>
<span class="line">	# 关闭游标</span>
<span class="line">	close emp_cursor;</span>
<span class="line">	</span>
<span class="line">	# 程序正常结束</span>
<span class="line">	set result = &#39;success&#39;;</span>
<span class="line">end $</span>
<span class="line">delimiter ;</span>
<span class="line"></span>
<span class="line">select employee_id, year(hire_date), salary</span>
<span class="line">		from emps </span>
<span class="line">		where department_id = 90 </span>
<span class="line">		order by salary asc;</span>
<span class="line"></span>
<span class="line"># 调用</span>
<span class="line">call update_salary(90, 2, @result);</span>
<span class="line">select @result;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function B(w,P){const e=c("front");return p(),t("div",null,[u,v,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("变量的分类：")]),_:1})]),s("ul",null,[s("li",null,[m,o,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("说明：")]),_:1}),n("有的变量，既是全局系统变量，又是会话系统变量")])]),b]),_,s("ul",null,[E,s("li",null,[h,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("系统变量以`@@`开头")]),_:1}),n("，其中：")]),g])]),y,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("说明：")]),_:1})]),q,s("ul",null,[L,s("li",null,[T,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("只能用在存储过程或者存储函数的BEGIN ... END语句中。")]),_:1}),n("**局部变量的声明必须放在其他语句前面**。")]),N])]),S,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("错误码的说明：")]),_:1})]),R,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("说明：")]),_:1})]),O,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("只能用于存储过程和存储函数中")]),_:1})]),I,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("使用LEAVE跳出LOOP循环")]),_:1})]),A,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("说明：")]),_:1})]),D,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("说明：")]),_:1})]),k,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("说明：")]),_:1})]),C,s("ul",null,[f,s("li",null,[x,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("说明：")]),_:1})]),H]),U]),F,s("p",null,[a(e,{style:{background:"yellow"}},{default:i(()=>[n("建议：")]),_:1}),n("养成**用完就关闭**的习惯，这样才能提高系统的整体效率。")]),M])}const j=d(r,[["render",B],["__file","16_变量、流程控制与游标.html.vue"]]),W=JSON.parse('{"path":"/static/tang/mysql/16_%E5%8F%98%E9%87%8F%E3%80%81%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E4%B8%8E%E6%B8%B8%E6%A0%87.html","title":"16 变量、流程控制与游标","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"16.1 变量","slug":"_16-1-变量","link":"#_16-1-变量","children":[{"level":3,"title":"16.1.1 系统变量","slug":"_16-1-1-系统变量","link":"#_16-1-1-系统变量","children":[]},{"level":3,"title":"16.1.2 用户变量","slug":"_16-1-2-用户变量","link":"#_16-1-2-用户变量","children":[]}]},{"level":2,"title":"16.2 定义条件与处理程序","slug":"_16-2-定义条件与处理程序","link":"#_16-2-定义条件与处理程序","children":[{"level":3,"title":"16.2.1 定义条件","slug":"_16-2-1-定义条件","link":"#_16-2-1-定义条件","children":[]},{"level":3,"title":"16.2.2 定义处理程序","slug":"_16-2-2-定义处理程序","link":"#_16-2-2-定义处理程序","children":[]}]},{"level":2,"title":"16.3 流程控制","slug":"_16-3-流程控制","link":"#_16-3-流程控制","children":[{"level":3,"title":"16.3.1 分支结构之 IF","slug":"_16-3-1-分支结构之-if","link":"#_16-3-1-分支结构之-if","children":[]},{"level":3,"title":"16.3.2 分支结构之 CASE","slug":"_16-3-2-分支结构之-case","link":"#_16-3-2-分支结构之-case","children":[]},{"level":3,"title":"16.3.3 循环结构之 LOOP","slug":"_16-3-3-循环结构之-loop","link":"#_16-3-3-循环结构之-loop","children":[]},{"level":3,"title":"16.3.4 循环结构之 WHILE","slug":"_16-3-4-循环结构之-while","link":"#_16-3-4-循环结构之-while","children":[]},{"level":3,"title":"16.3.5 循环结构之 REPEAT","slug":"_16-3-5-循环结构之-repeat","link":"#_16-3-5-循环结构之-repeat","children":[]},{"level":3,"title":"16.3.6 LOOP、WHILE、REPEAT的对比","slug":"_16-3-6-loop、while、repeat的对比","link":"#_16-3-6-loop、while、repeat的对比","children":[]},{"level":3,"title":"16.3.7 跳转语句之 LEAVE","slug":"_16-3-7-跳转语句之-leave","link":"#_16-3-7-跳转语句之-leave","children":[]},{"level":3,"title":"16.3.8 跳转语句之 ITERATE","slug":"_16-3-8-跳转语句之-iterate","link":"#_16-3-8-跳转语句之-iterate","children":[]}]},{"level":2,"title":"16.4 游标","slug":"_16-4-游标","link":"#_16-4-游标","children":[{"level":3,"title":"16.4.1 概述","slug":"_16-4-1-概述","link":"#_16-4-1-概述","children":[]},{"level":3,"title":"16.4.2 游标的使用","slug":"_16-4-2-游标的使用","link":"#_16-4-2-游标的使用","children":[]},{"level":3,"title":"16.4.3 举例","slug":"_16-4-3-举例","link":"#_16-4-3-举例","children":[]},{"level":3,"title":"16.4.4 游标的优缺点","slug":"_16-4-4-游标的优缺点","link":"#_16-4-4-游标的优缺点","children":[]}]},{"level":2,"title":"16.5 综合例子","slug":"_16-5-综合例子","link":"#_16-5-综合例子","children":[]}],"git":{"updatedTime":1720499771000,"contributors":[{"name":"文铁铁~","email":"1179131421@qq.com","commits":1}]},"filePathRelative":"static/tang/mysql/16_变量、流程控制与游标.md"}');export{j as comp,W as data};
