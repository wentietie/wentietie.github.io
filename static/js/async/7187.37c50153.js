"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["7187"],{92286:function(n,e,s){s.r(e),s.d(e,{default:function(){return c}});var r=s(85893),d=s(50065);function l(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",blockquote:"blockquote",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre"},(0,d.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"15-存储过程与存储函数",children:["15 存储过程与存储函数",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#15-存储过程与存储函数",children:"#"})]}),"\n",(0,r.jsxs)(e.h2,{id:"151-概述",children:["15.1 概述",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#151-概述",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"1511-存储过程",children:["15.1.1 存储过程",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1511-存储过程",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"理解"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["存储过程(Stored Procedure)，就是一组经过",(0,r.jsx)(e.code,{children:"预先编译"}),"的SQL语句的封装。它是预先存储在MySQL服务器上的，需要执行的时候，客户端只需要向服务器端发出调用存储过程的命令，服务器端就可以把预先存储好的一系列SQL语句全部执行。"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"优点"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"简化操作，提高了sql语句的重用性，减少了开发程序员的压力"}),"\n",(0,r.jsx)(e.li,{children:"减少操作过程中的失误，提高效率"}),"\n",(0,r.jsx)(e.li,{children:"减少网络传输量（客户端不需要把所有的sql通过网络发送个MySQL服务器）"}),"\n",(0,r.jsx)(e.li,{children:"减少了SQL语句暴露在网上的风险，也提高了数据查询的安全性"}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"和视图的对比"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["相同点：存储过程和视图有着同样的优点，",(0,r.jsx)(e.strong,{children:"清晰、安全，还可以减少网络传输量"}),"。"]}),"\n",(0,r.jsxs)(e.li,{children:["不同点：","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"视图是虚拟表，通常用来对基表的查询操作，不用于增删改操作；"}),"\n",(0,r.jsx)(e.li,{children:"存储过程可以直接操作底层数据，能够实现一些复杂的数据处理。"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"存储过程的参数"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"存储过程的参数类型可以："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"IN"}),"：",(0,r.jsx)(e.strong,{children:"默认值"}),"。表示该参数是传入的参数。存储过程知识读取这个参数的值。"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"OUT"}),"：表示该参数是传出的参数。当存储过程执行完毕后，存储过程的客户端或应用程序可以读取该参数的返回值"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"INOUT"}),"：表示该参数既是传入的参数，又是传出的参数。"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"以上参数类型都可以在一个存储过程中带0个、1个或者多个。"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"分类"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"存储过程可以按照参数类型进行分类："})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"没有参数"}),"\n",(0,r.jsx)(e.li,{children:"仅带IN类型"}),"\n",(0,r.jsx)(e.li,{children:"仅带OUT类型"}),"\n",(0,r.jsx)(e.li,{children:"既带IN类型又带OUT类型"}),"\n",(0,r.jsx)(e.li,{children:"带OUT类型"}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1512-存储函数",children:["15.1.2 存储函数",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1512-存储函数",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"MySQL支持自定义函数，定义好之后，调用方式与调用MySQL预定义的系统函数一样"}),"\n",(0,r.jsxs)(e.h3,{id:"1513-存储过程-vs-存储函数",children:["15.1.3 存储过程 VS 存储函数",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1513-存储过程-vs-存储函数",children:"#"})]}),"\n",(0,r.jsxs)(e.table,{children:["\n",(0,r.jsxs)(e.thead,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.th,{}),"\n",(0,r.jsx)(e.th,{children:"关键字"}),"\n",(0,r.jsx)(e.th,{children:"调用语法"}),"\n",(0,r.jsx)(e.th,{children:"返回值"}),"\n",(0,r.jsx)(e.th,{children:"应用场景"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.tbody,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"存储过程"}),"\n",(0,r.jsx)(e.td,{children:"PROCEDURE"}),"\n",(0,r.jsx)(e.td,{children:"CALL 存储过程名(参数列表)"}),"\n",(0,r.jsx)(e.td,{children:"无"}),"\n",(0,r.jsx)(e.td,{children:"一般用于更新"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:"存储函数"}),"\n",(0,r.jsx)(e.td,{children:"FUNCTION"}),"\n",(0,r.jsx)(e.td,{children:"SELECT 存储函数名(参数列表)"}),"\n",(0,r.jsx)(e.td,{children:"只有1个"}),"\n",(0,r.jsx)(e.td,{children:"一般用于查询结果为一个值，并需要返回的场景"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"此外："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"存储函数可以在查询语句中使用，存储过程不行"}),"。"]}),"\n",(0,r.jsx)(e.li,{children:"存储过程的功能比存储函数更强大，能执行对表的操作（如创建表、删除表）和事务操作，这些功能存储函数不具备。"}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"152-创建存储过程",children:["15.2 创建存储过程",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#152-创建存储过程",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"语法"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"DELIMITER 新的结束标记（存储过程的结束标记）\r\nCREATE PROCEDURE 存储过程名(IN|OUT|INOUT 参数名 参数类型,...)\r\n[characteristics ...]\r\nBEGIN \r\n	# 定义变量\r\n	DECLARE 变量名 变量类型;\r\n	...\r\n	\r\n	# 处理逻辑\r\n	...\r\nEND 存储过程的结束标记\r\nDELIMITER ;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"DELIMITER"}),'：用来设置新的结束标记。MySQL中默认的语句结束符号是";"。为了避免与存储过程中的SQL语句的结束符冲突，需要使用DELIMITER改变存储过程的结束符。']}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"第一个DELIMITER：用来表明存储的结束标记。"}),"\n",(0,r.jsx)(e.li,{children:"第二个DELIMITER：将结束标记改为MySQL默认的存储标记。"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"常用的新的结束标记："}),(0,r.jsx)(e.code,{children:"$"}),"、",(0,r.jsx)(e.code,{children:"//"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"characteristics"}),"：表示创建存储过程时指定的对存储过程的约束条件。"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"characteristics取值信息如下："})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"LANGUAGE SQL\r\n| [NOT] DETERMINISTIC\r\n| { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }\r\n| SQL SECURITY { DEFINER | INVOKER }\r\n| COMMENT 'string'\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"LANGUAGE SQL"}),"：说明存储过程体是由SQL语句组成的，当前系统支持的语言是SQL。"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"[NOT] DETERMINISTIC"}),"：默认是",(0,r.jsx)(e.code,{children:"NOT DETERMINISTIC"}),"。指明存储过程执行的结果是否是确定的，即同一输入是否能得到相同的输出。"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"{ CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }"}),"：指明子程序使用SQL语句的限制。","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"CONTAINS SQL"}),"：",(0,r.jsx)(e.strong,{children:"默认"}),"。表示包含SQL语句，但是并不包含读写数据的SQL语句；"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"NO SQL"}),"：表示不包含任何SQL；"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"READS SQL DATA"}),"：包含读数据的SQL；"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"MODIFIES SQL DATA"}),"：包含写数据的SQL。"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"SQL SECURITY { DEFINER | INVOKER }"}),"：指明哪些用户可以执行当前存储过程。","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"DEFINER "}),"：表示只有创建者才能执行"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"INVOKER "}),"：表示有当前存储过程访问权限的用户都可以执行"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"COMMENT 'string'"}),"：string处可以写明该存储过程的一些注释信息"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"BEGIN ... END 存储过程体结束符"}),"：存储过程的过程体要写在BEGIN ... END 之间。"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"存储过程体编写注意事项"}),"："]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"存储过程体如果只有一条SQL语句，BEGIN ... END可省。"}),"\n",(0,r.jsxs)(e.li,{children:["存储过程体中的",(0,r.jsx)(e.strong,{children:'每个语句都要以";"作为结束符'}),"。"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"DECLARE"}),"用来声明变量，且",(0,r.jsx)(e.strong,{children:"变量的声明必须在其他语句使用之前进行"}),"。"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"SET 变量名 = 值"}),"用来对变量赋值。"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"SELECT ... INTO 变量名 [FROM ... WHERE ...]"}),"也可以对变量进行赋值"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"举例："}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"DELIMITER $\r\nCREATE PROCEDURE test_proc1(IN emp_id INT)\r\nBEGIN \r\n	# 定义变量\r\n	DECLARE emp_year DOUBLE;\r\n	DECLARE emp_sal DOUBLE;\r\n	\r\n	# 赋值\r\n	SELECT DATEDIFF(CURRENT_DATE(), hire_date)/365, salary INTO emp_year, emp_sal\r\n	FROM emps\r\n	WHERE employee_id = emp_id;\r\n	\r\n	# 使用\r\n	SELECT emp_year, emp_sal;\r\n\r\nEND $\r\nDELIMITER ;\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"153-调用存储过程",children:["15.3 调用存储过程",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#153-调用存储过程",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"语法"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CALL 存储过程名(参数列表)\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"例子"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["参数为",(0,r.jsx)(e.code,{children:"IN"}),"类型："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CALL sp1(值);\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["调用",(0,r.jsx)(e.code,{children:"OUT"}),"模式的参数："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"# 方法一\r\nSET @num = 0; # = 也可替换为 :=\r\nCALL sp1(@num);\r\nSELECT @num;\r\n\r\n# 方法二\r\nCALL sp1(@num);\r\nSELECT @num;\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["调用",(0,r.jsx)(e.code,{children:"INOUT"}),"模式的参数："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"SET @num = 0; # = 也可替换为 :=\r\nCALL sp1(@num);\r\nSELECT @num;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"154-创建存储函数",children:["15.4 创建存储函数",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#154-创建存储函数",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"语法"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"DELIMITER 新的结束标记（存储过程的结束标记）\r\nCREATE FUNCTION 函数名(参数名 参数类型,...)\r\nRETURNS 返回值类型\r\n[characteristics ...]\r\nBEGIN\r\n函数体 #函数体中肯定有 RETURN 语句\r\nEND 新的结束标记\r\nDELIMITER ;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["存储函数的参数列表，总是默认为",(0,r.jsx)(e.code,{children:"IN"}),"类型"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"RETURNS 返回值类型"}),"存储函数必须指明返回值类型，函数体中必须包含一个",(0,r.jsx)(e.code,{children:"RETURN 返回值;"}),"语句。"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"characteristic"}),"指明对函数的约定，与创建存储过程的约束一致。"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"BEGIN ... END 新的结束标记"}),"：函数体要写在BEGIN ... END之间。如果函数体只有一条语句，BEGIN ... END可省。"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"举例"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"# 创建存储函数count_by_id()，参数传入dept_id，该函数查询dept_id部门的员工人数，并返回，数据类型为整型\r\nDELIMITER $\r\nCREATE FUNCTION count_by_id(dept_id INT)\r\nRETURNS INT\r\n	DETERMINISTIC\r\n	READS SQL DATA\r\nBEGIN\r\n	DECLARE emps_num INT DEFAULT 0;\r\n	SELECT COUNT(*) INTO emps_num FROM emps WHERE department_id = dept_id;\r\n	RETURN emps_num;\r\nEND $\r\nDELIMITER ;\n"})}),"\n",(0,r.jsxs)(e.p,{children:["对于创建函数时报错",(0,r.jsx)(e.code,{children:"This function has none of DETERMINISTIC, NO SQL, or READS SQL DATA in its declaration and binary logging is enabled (you *might* want to use the less safe log_bin_trust_function_creators variable)"}),"的处理办法："]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"方式一："}),"\n",(0,r.jsxs)(e.p,{children:["在创建函数时加上必要的函数约束",(0,r.jsx)(e.code,{children:"[NOT] DETERMINISTIC"}),"和",(0,r.jsx)(e.code,{children:"{CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA}"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"方式二："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"# 修改全局参数\r\nSET GLOBAL log_bin_trust_function_creators = 1;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"155-调用存储函数",children:["15.5 调用存储函数",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#155-调用存储函数",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"语法"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"SELECT 函数名(参数列表);\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"156-查看存储过程和存储函数",children:["15.6 查看存储过程和存储函数",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#156-查看存储过程和存储函数",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["使用",(0,r.jsx)(e.code,{children:"SHOW CREATE"}),"语句查看存储过程和函数的创建信息"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"SHOW CREATE {PROCEDURE | FUNCTION} 存储过程名或函数名\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["使用",(0,r.jsx)(e.code,{children:"SHOW STATUS"}),"语句查看存储过程和函数的状态信息"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"SHOW {PROCEDURE | FUNCTION} STATUS [LIKE '模糊查询条件']\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["从",(0,r.jsx)(e.code,{children:"information_schema.Routines"}),"表中查看存储过程和函数的信息"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"SELECT * \r\nFROM information_schema.Routines\r\nWHERE ROUTINE_NAME='存储过程或函数的名' [AND ROUTINE_TYPE = {'PROCEDURE|FUNCTION'}];\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"157-修改存储过程和存储函数",children:["15.7 修改存储过程和存储函数",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#157-修改存储过程和存储函数",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["修改存储过程和存储函数，",(0,r.jsx)(e.strong,{children:"不能修改其存储过程体或者函数体，只能修改相关特性"}),"。语法如下："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER {PROCEDURE | FUNCTION} 存储过程或函数的名 [characteristic ...]\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"{ CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }\r\n| SQL SECURITY { DEFINER | INVOKER }\r\n| COMMENT 'string'\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"158-删除存储过程和存储函数",children:["15.8 删除存储过程和存储函数",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#158-删除存储过程和存储函数",children:"#"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"DROP {PROCEDURE | FUNCTION} [IF EXISTS] 存储过程或函数的名\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"159-存储过程的优缺点",children:["15.9 存储过程的优缺点",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#159-存储过程的优缺点",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"尽管存储过程有诸多优点，但是对于存储过程的使用，**一直都存在着很多争议，**比如有些公司对于大型 项目要求使用存储过程，而有些公司在手册中明确禁止使用存储过程。"}),"\n",(0,r.jsxs)(e.h3,{id:"1591-存储过程的优点",children:["15.9.1 存储过程的优点",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1591-存储过程的优点",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"一次编译多次使用，提高了SQL的执行效率"}),"：存储过程只在创建时进行编译，之后的使用都不需要重新编译"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"减少开发工作量，保证代码结构清晰"}),"：将代码封装成",(0,r.jsx)(e.code,{children:"模块"}),"，模块间可以",(0,r.jsx)(e.code,{children:"重复使用"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"存储过程的安全性强"}),"：在创建存储过程时",(0,r.jsx)(e.code,{children:"设置用户的使用权限"}),"，这样就和视图一样具有较强的安全性"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"减少网络传输量"}),"：存储过程是保存在MySQL服务器端的，每次只需要调用存储过程即可，减少了SQL语句的网络传输"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"良好的封装性"}),"：在进行相对复杂的数据库操作时，原本需要使用一条一条的SQL语句，可能需要多次连接数据库。如果使用存储过程，只需要连接一次"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1592-存储过程的缺点",children:["15.9.2 存储过程的缺点",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1592-存储过程的缺点",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"可移植性差"}),"：存储过程不能跨数据库移植。如在 MySQL、Oracle 和 SQL Server 里编写的存储过 程，在换成其他数据库时都需要重新编写。"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"调试困难"}),"：对于复杂的存储过程，开发和维护都不容易，没有好用、免费的调试工具"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"存储过程的版本管理很困难"}),"：比如数据表索引发生变化了，可能会导致存储过程失效。我们在开发 软件的时候往往需要进行版本管理，但是存储过程本身没有版本控制，版本迭代更新的时候很麻烦"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"不适合高并发场景"}),"：高并发的场景需要减少数据库的压力，有时数据库会采用",(0,r.jsx)(e.code,{children:"分库分表"}),"的方 式，而且对可扩展性要求很高，在这种情况下，存储过程会变得难以维护， 增加数据库的压力 ，显然就 不适用了"]}),"\n"]})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,d.ah)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}let c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["tang%2Fmysql%2F15_%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B%E4%B8%8E%E5%AD%98%E5%82%A8%E5%87%BD%E6%95%B0.md"]={toc:[{text:"15.1 概述",id:"151-概述",depth:2},{text:"15.1.1 存储过程",id:"1511-存储过程",depth:3},{text:"15.1.2 存储函数",id:"1512-存储函数",depth:3},{text:"15.1.3 存储过程 VS 存储函数",id:"1513-存储过程-vs-存储函数",depth:3},{text:"15.2 创建存储过程",id:"152-创建存储过程",depth:2},{text:"15.3 调用存储过程",id:"153-调用存储过程",depth:2},{text:"15.4 创建存储函数",id:"154-创建存储函数",depth:2},{text:"15.5 调用存储函数",id:"155-调用存储函数",depth:2},{text:"15.6 查看存储过程和存储函数",id:"156-查看存储过程和存储函数",depth:2},{text:"15.7 修改存储过程和存储函数",id:"157-修改存储过程和存储函数",depth:2},{text:"15.8 删除存储过程和存储函数",id:"158-删除存储过程和存储函数",depth:2},{text:"15.9 存储过程的优缺点",id:"159-存储过程的优缺点",depth:2},{text:"15.9.1 存储过程的优点",id:"1591-存储过程的优点",depth:3},{text:"15.9.2 存储过程的缺点",id:"1592-存储过程的缺点",depth:3}],title:"15 存储过程与存储函数",frontmatter:{}}}}]);