"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["1589"],{27148:function(n,e,r){r.r(e),r.d(e,{default:function(){return c}});var s=r(85893),l=r(50065);function d(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",p:"p",strong:"strong",h3:"h3",blockquote:"blockquote",code:"code",em:"em",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"16-变量流程控制与游标",children:["16 变量、流程控制与游标",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#16-变量流程控制与游标",children:"#"})]}),"\n",(0,s.jsxs)(e.h2,{id:"161-变量",children:["16.1 变量",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#161-变量",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"系统变量"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"全局系统变量"}),"\n",(0,s.jsxs)(e.li,{children:["会话系统变量（",(0,s.jsx)(e.strong,{children:"默认"}),"）"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"用户自定义变量"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"会话用户变量"}),"\n",(0,s.jsx)(e.li,{children:"局部变量"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"1611-系统变量",children:["16.1.1 系统变量",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1611-系统变量",children:"#"})]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"概述"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["定义：变量由系统定义，不是用户定义，属于服务器层面。启动MySQL服务，生成MySQL服务实例期间， MySQL将为MySQL服务器内存中的系统变量赋值，这些系统变量定义了当前MySQL服务实例的属性、特 征。这些",(0,s.jsx)(e.strong,{children:"系统变量的值要么是 编译MySQL时参数的默认值，要么是 配置文件 （例如my.ini等）中的参数值"}),"。"]}),"\n",(0,s.jsxs)(e.li,{children:["系统变量分为",(0,s.jsx)(e.code,{children:"全局系统变量"}),"（需要添加",(0,s.jsx)(e.code,{children:" global"})," 关键字）以及",(0,s.jsx)(e.code,{children:"会话系统变量"}),"（需要添加",(0,s.jsx)(e.code,{children:" session "}),"关键字）。如果不写，",(0,s.jsx)(e.strong,{children:"默认会话级别"}),"。"]}),"\n",(0,s.jsxs)(e.li,{children:["有时也把全局系统变量简称为",(0,s.jsx)(e.em,{children:"全局变量"}),"，有时也把会话系统变量称为",(0,s.jsx)(e.em,{children:"local变量"}),"。"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"静态变量"}),"（在 MySQL 服务实例运行期间它们的值不能使用 set 动态修改）",(0,s.jsx)(e.strong,{children:"属于特殊的全局系统变量"}),"。"]}),"\n",(0,s.jsxs)(e.li,{children:["全局系统变量针对于所有会话有效，但是",(0,s.jsx)(e.strong,{children:"不能跨重启"})]}),"\n",(0,s.jsx)(e.li,{children:"会话系统变量，只针对当前会话有效。"}),"\n",(0,s.jsx)(e.li,{children:"会话1针对某个全局系统变量值的修改，会导致会话2中同一个全局变量的值的修改。"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"有些系统变量只能是全局的"}),"，例如 max_connections 用于限制服务器的最大连接数；",(0,s.jsx)(e.strong,{children:"有些系统变量作用域既可以是全局又可以是会话"}),"，例如 character_set_client 用于设置客户端的字符集；",(0,s.jsx)(e.strong,{children:"有些系统变量的作用域只能是当前会话"}),"，例如 pseudo_thread_id 用于标记当前会话的 MySQL 连接 ID"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"查看系统变量"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"查看所有或部分系统变量"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"#查看所有全局变量\r\nSHOW GLOBAL VARIABLES;\r\n#查看所有会话变量\r\nSHOW [SESSION] VARIABLES;\r\n\r\n#查看满足条件的部分系统变量。\r\nSHOW GLOBAL VARIABLES LIKE '模糊查询条件';\r\n#查看满足条件的部分会话变量\r\nSHOW [SESSION] VARIABLES LIKE '模糊查询条件';\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"查看指定系统变量"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"@@global"}),"开头表示全局系统变量"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"@@session"}),"开头表示会话系统变量"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"@@"}),"开头，首先会查询会话系统变量，如果会话系统不存在，再去查全局系统变量"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"#查看指定的系统变量的值\r\nSELECT @@global.变量名;\r\n\r\n#查看指定的会话变量的值\r\nSELECT @@session.变量名;\r\n\r\n#先匹配会话系统变量，不存在的话再去匹配全局系统变量\r\nSELECT @@变量名;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"修改系统变量的值"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"方法一："}),"\n",(0,s.jsxs)(e.p,{children:["修改MySQL 配置文件",(0,s.jsx)(e.code,{children:"my.ini"})," ，继而修改MySQL系统变量的值（该方法需要重启MySQL服务）"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"方法二："}),"\n",(0,s.jsxs)(e.p,{children:["在MySQL服务运行期间，使用",(0,s.jsx)(e.code,{children:"set"}),"命令重新设置系统变量的值，语法如下："]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"# 为全局系统变量赋值\r\nSET @@global.变量名=变量值;\r\n#方式2：\r\nSET GLOBAL 变量名=变量值;\r\n\r\n#为会话系统变量赋值\r\n#方式1：\r\nSET @@session.变量名=变量值;\r\n#方式2：\r\nSET SESSION 变量名=变量值;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"MySQL8.0新特性：全局变量的持久化"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"SET PERSIST GLOBAL  全局系统变量名 = 值;\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"数据库重启后，值仍有效"}),"\n",(0,s.jsxs)(e.li,{children:["MySQL会将该命令的配置保存到数据目录下的",(0,s.jsx)(e.code,{children:"mysqld-auto.cnf"}),"文件中，下次启动时会读取该文件，用其中的配置来覆盖默认配置"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"1612-用户变量",children:["16.1.2 用户变量",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1612-用户变量",children:"#"})]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"概述"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["定义：用户变量是用户自己定义的，作为 MySQL 编码规范，MySQL 中的用户变量以 ",(0,s.jsx)(e.code,{children:"@"})," 开头。"]}),"\n",(0,s.jsxs)(e.li,{children:["分类：","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"会话用户变量"}),"：作用域是当前会话，只对当前连接有效"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"局部变量"}),"：只在存储过程或者存储函数的BEGIN ... END语句中有效。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"用户变量的定义"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"会话级用户变量"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"# 定义\r\n# 方式1：使用“=”或者“:=”\r\nSET @用户变量 = 值;\r\nSET @用户变量:= 值;\r\n\r\n# 方式2：使用“:=”或者“INTO”关键字\r\nSELECT @用户变量 := 表达式 [FROM 子句];\r\nSELECT 表达式（或者字段名） INTO @用户变量 [FROM 子句];\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"局部变量"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"# 声明\r\nDECLARE 变量名 类型 [default 值]; # 如果没有DEFAULT子句，初始值为NULL\r\n\r\n# 赋值方式1：\r\nSET 变量名 = 值;\r\n# 赋值方式2：\r\nSELECT 表达式（或者字段名） INTO 变量名 [FROM 子句];\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"用户变量的查看"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"会话用户变量"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"SELECT @会话用户变量\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"局部变量"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"SELECT 局部变量名;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"会话用户变量 VS 局部变量"}),"\n"]}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{}),"\n",(0,s.jsx)(e.th,{children:"作用域"}),"\n",(0,s.jsx)(e.th,{children:"定义位置"}),"\n",(0,s.jsx)(e.th,{children:"语法"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:"会话用户变量"}),"\n",(0,s.jsx)(e.td,{children:"当前会话"}),"\n",(0,s.jsx)(e.td,{children:"会话的任意位置"}),"\n",(0,s.jsx)(e.td,{children:"使用@符号，不用指定类型"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:"局部变量"}),"\n",(0,s.jsx)(e.td,{children:"声明的BEGIN ... END 语句中"}),"\n",(0,s.jsx)(e.td,{children:"BEGIN ... END语句中的第一句代码"}),"\n",(0,s.jsx)(e.td,{children:"使用DECLARE，需要指定类型"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"162-定义条件与处理程序",children:["16.2 定义条件与处理程序",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#162-定义条件与处理程序",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"定义条件"}),"是事先定义程序执行过程中可能遇到的问题，",(0,s.jsx)(e.code,{children:"处理程序"}),"定义了在遇到问题时应当采取的处理方式，并且保证存储过程或函数在遇到警告或错误时能够继续执行。这样可以增强存储过程或者存储程序处理问题的能力，增强程序的健壮性，避免程序异常停止运行。",(0,s.jsx)(e.strong,{children:"类似于Java的异常处理机制。"})]}),"\n",(0,s.jsxs)(e.h3,{id:"1621-定义条件",children:["16.2.1 定义条件",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1621-定义条件",children:"#"})]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"定义"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"定义条件"}),"就是",(0,s.jsx)(e.strong,{children:"给MySQL中的错误命名"}),"，有助于存储的程序代码更清晰。它将一个",(0,s.jsx)(e.code,{children:"错误名字"}),"和",(0,s.jsx)(e.code,{children:"错误条件"}),"关联起来，随后可以被用在","定义处理程序","的",(0,s.jsx)(e.code,{children:"DECLARE HANDLER"}),"语句中。"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"语法"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"DECLARE 错误名字 CONDITION FOR 错误码|错误条件\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"MySQL_error_code"}),"和",(0,s.jsx)(e.code,{children:"sqlstate_value"}),"都可以表示MySQL的错误。","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"MySQL_error_code"}),"：是数值型的错误代码"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"sqlstate_value"}),"：是长度为5的字符串类型的错误代码"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"例子"}),"：在“ERROR 1418 (HY000)”中，1418是MySQL_error_code，“HY000”是sqlstate_value。"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"例子"}),"：在“ERROR 1142（42000）”中，1142是MySQL_error_code，“42000”是sqlstate_value。"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"定义条件举例"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"例"}),"定义“Field_Not_Be_NULL”错误名与MySQL中违反非空约束的错误类型是“ERROR 1048 (23000)”对应"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"#方法1：使用MySQL_error_code\r\nDECLARE Field_Not_Be_NULL CONDITION FOR 1048;\r\n\r\n#方法2：使用sqlstate_value\r\nDECLARE Field_Not_Be_NULL CONDITION FOR SQLSTATE '23000'\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"1622-定义处理程序",children:["16.2.2 定义处理程序",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1622-定义处理程序",children:"#"})]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"定义"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"可以为SQL执行过程中发生的某种类型的错误定义特殊的处理程序。"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"语法"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"DECLARE 处理方式 HANDLER FOR 错误类型 处理语句\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"处理方式"}),"：取值如下："]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"CONTINUE"}),"：表示遇到指定的错误类型不处理，继续执行"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"EXIT"}),"：表示遇到指定的错误类型马上退出"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"UNDO"}),"：表示遇到指定的错误类型后撤回之前的操作。",(0,s.jsx)(e.strong,{children:"MySQL中暂时不支持该操作"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"错误类型"}),"：取值如下："]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SQLSTATE '字符串错误码'"}),"：表示长度为5的字符串类型的错误代码"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"MySQL_error_code错误代码"}),"：匹配数值类型的错误码"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"错误名称"}),"：表示DECLARE ... CONDITION定义的错误条件名称"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SQLWARNING"}),"：匹配所有以01开头的SQLSTATE错误代码"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"NOT FOUND"}),"：匹配所有以02开头的SQLSTATE错误代码；"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SQLEXCEPTION"}),"：匹配所有没有被SQLWARNING或NOT FOUND捕获的SQLSTATE错误代码"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"处理语句"}),"：如果出现上述条件之一，则采用对应的处理方式，并执行指定的处理语句。"]}),"\n",(0,s.jsxs)(e.p,{children:["处理语句可以是",(0,s.jsx)(e.code,{children:" SET 变量 = 值 "}),"这样的简单语句，也可以是",(0,s.jsx)(e.code,{children:"BEGIN ... END"}),"编写的复杂语句"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"例子"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"#方法1：捕获sqlstate_value\r\nDECLARE CONTINUE HANDLER FOR SQLSTATE '42S02' SET @info = 'NO_SUCH_TABLE';\r\n\r\n#方法2：捕获mysql_error_value\r\nDECLARE CONTINUE HANDLER FOR 1146 SET @info = 'NO_SUCH_TABLE';\r\n\r\n#方法3：先定义条件，再调用\r\nDECLARE no_such_table CONDITION FOR 1146;\r\nDECLARE CONTINUE HANDLER FOR NO_SUCH_TABLE SET @info = 'NO_SUCH_TABLE';\r\n\r\n#方法4：使用SQLWARNING\r\nDECLARE EXIT HANDLER FOR SQLWARNING SET @info = 'ERROR';\r\n\r\n#方法5：使用NOT FOUND\r\nDECLARE EXIT HANDLER FOR NOT FOUND SET @info = 'NO_SUCH_TABLE';\r\n\r\n#方法6：使用SQLEXCEPTION\r\nDECLARE EXIT HANDLER FOR SQLEXCEPTION SET @info = 'ERROR';\n"})}),"\n",(0,s.jsxs)(e.h2,{id:"163-流程控制",children:["16.3 流程控制",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#163-流程控制",children:"#"})]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"流程的分类"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"顺序结构"}),"：程序从上往下依次执行"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"分支结构"}),"：程序按照条件进行选择执行，从两条或者多条路径中选择一条执行"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"循环结构"}),"：程序满足一定条件下，重复执行一组语句"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"流程控制语句的分类"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"条件判断语句"}),"：IF 语句或者 CASE 语句"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"循环语句"}),"：LOOP 语句、WHILE 语句或者 REPEAT语句"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"跳转语句"}),"：ITERATE 语句和 LEAVE 语句"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"1631-分支结构之-if",children:["16.3.1 分支结构之 IF",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1631-分支结构之-if",children:"#"})]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"语法"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"IF 表达式1 THEN 操作1\r\n[ELSEIF 表达式2 THEN 操作2]……\r\n[ELSE 操作N]\r\nEND IF;\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"举例"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"例"}),"声明存储过程“update_salary_by_eid2”，定义IN参数emp_id，输入员工编号。判断该员工薪资如果低于9000元并且入职时间超过5年，就涨薪500元；否则就涨薪100元。"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"# 定义存储过程\r\nDELIMITER $\r\nCREATE PROCEDURE update_salary_by_eid2(IN emp_id INT)\r\nBEGIN\r\n	DECLARE emp_salary DOUBLE;\r\n	DECLARE emp_years DOUBLE;\r\n	\r\n	SELECT salary, DATEDIFF(CURRENT_DATE(), hire_date)/365 INTO emp_salary, emp_years\r\n	FROM emps\r\n	WHERE employee_id = emp_id;\r\n	\r\n	IF emp_salary < 9000 AND emp_years >= 5 \r\n		THEN UPDATE emps SET salary = salary + 500 WHERE employee_id = emp_id;\r\n	ELSE \r\n		UPDATE emps SET salary = salary + 100 WHERE employee_id = emp_id;\r\n	END IF;\r\nEND $\r\nDELIMITER ;\r\n\r\n# 调用存储过程\r\nCALL update_salary_by_eid2(104);\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"1632-分支结构之-case",children:["16.3.2 分支结构之 CASE",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1632-分支结构之-case",children:"#"})]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"语法1：类似于Java中的switch语句"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"CASE 表达式\r\nWHEN 值1 THEN 结果1或语句1(如果是语句，需要加分号)\r\nWHEN 值2 THEN 结果2或语句2(如果是语句，需要加分号)\r\n...\r\nELSE 结果n或语句n(如果是语句，需要加分号)\r\nEND CASE;  # 注意：如果是放在begin end中需要加上case，如果放在select后面不需要\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"语法2：类似于Java中的多重if"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"CASE\r\nWHEN 条件1 THEN 结果1或语句1(如果是语句，需要加分号)\r\nWHEN 条件2 THEN 结果2或语句2(如果是语句，需要加分号)\r\n...\r\nELSE 结果n或语句n(如果是语句，需要加分号)\r\nEND CASE; # 注意：如果是放在begin end中需要加上case，如果放在select后面不需要\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"举例"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"例"}),"声明存储过程“update_salary_by_eid4”，定义IN参数emp_id，输入员工编号。判断该员工薪资如果低于9000元，就更新薪资为9000元；薪资大于等于9000元且低于10000的，但是奖金比例为NULL的，就更新奖金比例为0.01；其他的涨薪100元。"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"# 声明存储过程	\r\nDELIMITER $\r\nCREATE PROCEDURE update_salary_by_eid4(IN emp_id INT)\r\nBEGIN\r\n	DECLARE emp_sal DOUBLE;\r\n	DECLARE emp_bonus DOUBLE;\r\n	\r\n	SELECT salary, commission_pct INTO emp_sal, emp_bonus FROM emps WHERE employee_id = emp_id;\r\n	\r\n	CASE \r\n		WHEN emp_sal < 9000 \r\n			THEN UPDATE emps SET salary = 9000 WHERE employee_id = emp_id;\r\n		WHEN emp_sal >= 9000 AND emp_sal < 10000 AND emp_bonus IS NULL \r\n			THEN UPDATE emps SET commission_pct = 0.01 WHERE employee_id = emp_id;\r\n		ELSE\r\n			UPDATE emps SET salary = salary + 100 WHERE employee_id = emp_id;\r\n	END CASE;\r\nEND $\r\nDELIMITER ;\r\n\r\n# 调用 \r\nCALL update_salary_by_eid4(100)\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"1633-循环结构之-loop",children:["16.3.3 循环结构之 LOOP",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1633-循环结构之-loop",children:"#"})]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"语法"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"[loop_label]: LOOP\r\n	循环体\r\nEND LOOP [loop_label];\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"loop_label"}),"：当前LOOP循环语句的标注名称，在使用LEAVE跳出循环时会用到"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"举例"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"例"}),"当市场环境变好时，公司为了奖励大家，决定给大家涨工资。声明存储过程“update_salary_loop()”，声明OUT参数num，输出循环次数。存储过程中实现循环给大家涨薪，薪资涨为原来的1.1倍，直到全公司的平均薪资达到12000结束，并统计循环次数。"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"# 声明存储过程\r\nDELIMITER //\r\nCREATE PROCEDURE update_salary_loop(OUT num INT)\r\nBEGIN\r\n	DECLARE avg_sal DOUBLE;\r\n	SET num := 0;\r\n	\r\n	SELECT AVG(salary) INTO avg_sal FROM emps;\r\n	\r\n	add_salary:LOOP\r\n			# 循环退出条件\r\n			IF avg_sal >= 12000 THEN LEAVE add_salary; \r\n			END IF;\r\n			\r\n			# 统计循环次数\r\n			SET num := num + 1; \r\n			\r\n			# 更新薪资\r\n			UPDATE emps SET salary = salary * 1.1; \r\n			\r\n			# 查询更新后的平均薪资\r\n			SELECT AVG(salary) INTO avg_sal FROM emps; \r\n	END LOOP add_salary;\r\n\r\nEND //\r\nDELIMITER ;\r\n\r\n# 调用存储过程\r\nset @num := 0;\r\ncall update_salary_loop(@num);\r\nSELECT @num;\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"1634-循环结构之-while",children:["16.3.4 循环结构之 WHILE",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1634-循环结构之-while",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["WHILE在执行语句执行时，",(0,s.jsx)(e.strong,{children:"先对指定的表达式进行判断"}),"，如 果为真，就执行循环内的语句，否则退出循环。"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"语法"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"[while_label:] WHILE 循环条件 DO\r\n循环体\r\nEND WHILE [while_label];\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"while_label"}),"：当前WHILE循环语句的标注名称。"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"例子"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"例"}),"市场环境不好时，公司为了渡过难关，决定暂时降低大家的薪资。声明存储过程“update_salary_while()”，声明OUT参数num，输出循环次数。存储过程中实现循环给大家降薪，薪资降为原来的90%。直到全公司的平均薪资达到5000结束，并统计循环次数。"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"# 声明存储过程	\r\ndelimiter $\r\ncreate procedure update_salary_while(out num int)\r\nbegin \r\n	# 声明变量\r\n	declare avg_sal double; # 记录公司平均薪资\r\n	declare loop_num int default 0; # 记录循环次数\r\n	\r\n	# 初始化avg_sal\r\n	select avg(salary) into avg_sal from emps;\r\n	\r\n	# 循环降薪\r\n	sub_salary: while avg_sal > 5000 DO\r\n		# 降薪\r\n		update emps set salary = salary * 0.9;\r\n		# 记录循环次数\r\n		set loop_num = loop_num + 1;\r\n		# 重新计算平均工资\r\n		select avg(salary) into avg_sal from emps;\r\n	end while sub_salary;\r\n	\r\n	# 给out参数赋值\r\n	set num = loop_num;\r\nend $\r\ndelimiter ;\r\n\r\n# 调用存储过程\r\ncall update_salary_while(@num);\r\nselect @num;\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"1635-循环结构之-repeat",children:["16.3.5 循环结构之 REPEAT",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1635-循环结构之-repeat",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["REPEAT 循环",(0,s.jsx)(e.strong,{children:"首先会执行一次循 环，然后在 UNTIL 中进行表达式的判断"}),"，如果满足条件就退出，即 END REPEAT；如果条件不满足，则会 就继续执行循环，直到满足退出条件为止。"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"语法"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"[repeat_label]:REPEAT\r\n	循环体\r\n	UNTIL 循环结束条件\r\nEND REPEAT [repeat_label];\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"repeat_label"}),"：当前REPEAT循环语句的标注名称。"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"例子"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"例"}),"当市场环境变好时，公司为了奖励大家，决定给大家涨工资。声明存储过程“update_salary_repeat()”，声明OUT参数num，输出循环次数。存储过程中实现循环给大家涨薪，薪资涨为原来的1.15倍。直到全公司的平均薪资达到13000结束，并统计循环次数。"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"# 声明存储过程	\r\ndelimiter $\r\ncreate procedure update_salary_repeat(out num int)\r\nbegin\r\n	declare avg_sal DOUBLE;\r\n	declare repeat_count int default 0;\r\n	\r\n	select avg(salary) into avg_sal from emps;\r\n	\r\n	add_salary:repeat\r\n		update emps set salary = salary * 1.15;\r\n		set repeat_count = repeat_count + 1;\r\n		select avg(salary) into avg_sal from emps;\r\n		until avg_sal >= 13000\r\n	end repeat add_salary;\r\n	\r\n	set num = repeat_count;\r\nend $\r\ndelimiter ;\r\n\r\n# 调用循环\r\ncall update_salary_repeat(@num);\r\nselect @num;\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"1636-loopwhilerepeat的对比",children:["16.3.6 LOOP、WHILE、REPEAT的对比",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1636-loopwhilerepeat的对比",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"相同点"}),"："]}),"\n",(0,s.jsx)(e.p,{children:"三者都可以省略标注名称，但是如果在循环中添加了循环控制语句（LEAVE或ITERATE）则必须添加标注名称。"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"不同点"}),"："]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"LOOP"}),"：一般用于实现简单的“死”循环"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"WHILE"}),"：先判断，后执行"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"REPEAT"}),"：先执行，后判断。无条件至少执行一次"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"1637-跳转语句之-leave",children:["16.3.7 跳转语句之 LEAVE",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1637-跳转语句之-leave",children:"#"})]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"作用"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["可以用在",(0,s.jsx)(e.code,{children:"BEGIN ... END"}),"语句中，表示跳出程序体"]}),"\n",(0,s.jsx)(e.li,{children:"可以用在循环体内，表示跳出循环"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["相当于",(0,s.jsx)(e.code,{children:"break"}),"。"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"语法"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"LEAVE 标记名\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"举例"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"例"}),(0,s.jsx)(e.strong,{children:"跳出 BEGIN ... END 语句"}),"。"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"DELIMITER //\r\nCREATE PROCEDURE leave_begin(IN num INT)\r\nbegin_label:BEGIN\r\n	IF num <= 0\r\n		THEN LEAVE begin_label; # 跳出程序体\r\n	ELSEIF num = 1\r\n		THEN SELECT AVG(salary) FROM emps;\r\n	ELSEIF num = 2\r\n		THEN SELECT MIN(salary) FROM emps;\r\n	ELSE \r\n		SELECT MAX(salary) FROM emps;\r\n	END IF;\r\n	\r\n	#查询总人数\r\n	SELECT COUNT(*) FROM emps;\r\nEND //\r\nDELIMITER ;\r\n\r\n#调用\r\nCALL leave_begin(1);\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"例"}),(0,s.jsx)(e.strong,{children:"跳出while循环"})]}),"\n",(0,s.jsx)(e.p,{children:"当市场环境不好时，公司为了渡过难关，决定暂时降低大家的薪资。声明存储过程“leave_while()”，声明OUT参数num，输出循环次数，存储过程中使用WHILE循环给大家降低薪资为原来薪资的90%，直到全公司的平均薪资小于等于10000，并统计循环次数。"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"# 声明存储过程\r\ndelimiter $\r\ncreate procedure leave_while(out num int)\r\nbegin\r\n	declare avg_sal double;\r\n	set num = 0;\r\n	\r\n	select avg(salary) into avg_sal from emps;\r\n	sub_sal:while 1=1 do\r\n			if avg_sal <= 10000\r\n				then leave sub_sal;\r\n			end if;\r\n			update emps set salary = salary * 0.9;\r\n			set num = num + 1;\r\n			select avg(salary) into avg_sal from emps;\r\n	 end while sub_sal;\r\nend $\r\ndelimiter ;\r\n\r\n# 调用\r\ncall leave_while(@num);\r\nselect @num;\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"1638-跳转语句之-iterate",children:["16.3.8 跳转语句之 ITERATE",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1638-跳转语句之-iterate",children:"#"})]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"作用"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["只能用在循环语句内，",(0,s.jsx)(e.strong,{children:"表示重新开始循环，将执行顺序转到语句段的开头"}),"。"]}),"\n",(0,s.jsxs)(e.p,{children:["相当于",(0,s.jsx)(e.code,{children:"continue"}),"。"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"语法"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"ITERATE 标记名称;\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"举例"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"例"}),"定义局部变量num，初始值为0。循环结构中执行num + 1操作。如果num < 10，则继续执行循环；如果num > 15，则退出循环结构。"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"# 声明存储过程\r\ndelimiter $\r\ncreate procedure test_iterate() \r\nbegin\r\n	declare num int default 0;\r\n	loop_label:loop\r\n		set num = num + 1;\r\n		if num < 10\r\n			then iterate loop_label; # 结束当前循环，开始下一次循环\r\n		elseif num > 15\r\n			then leave loop_label;\r\n		end if;\r\n		SELECT '学如逆水行舟，不进则退';\r\n	end loop loop_label;\r\nend $\r\ndelimiter ;\r\n\r\n# 调用\r\ncall test_iterate()\n"})}),"\n",(0,s.jsxs)(e.h2,{id:"164-游标",children:["16.4 游标",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#164-游标",children:"#"})]}),"\n",(0,s.jsxs)(e.h3,{id:"1641-概述",children:["16.4.1 概述",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1641-概述",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"作用"}),"：游标，让我们能够对结果集中的",(0,s.jsx)(e.em,{children:"每一条记录"}),"进行定位，并对指向的记录中的数据进行操作的数据结构。",(0,s.jsx)(e.strong,{children:"游标让 SQL 这种面向集合的语言有了面向过 程开发的能力。"})]}),"\n",(0,s.jsxs)(e.li,{children:["游标是一种临时的数据库对象，可以指向存储在数据库表中的数据行指针。这里游标",(0,s.jsx)(e.code,{children:"充当了指针"}),"的作用。"]}),"\n",(0,s.jsxs)(e.li,{children:["游标可以在",(0,s.jsx)(e.code,{children:"存储过程"}),"和",(0,s.jsx)(e.code,{children:"存储函数"}),"中使用"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"1642-游标的使用",children:["16.4.2 游标的使用",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1642-游标的使用",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"使用游标，一般需要经历如下4个步骤："})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["声明游标：游标的声明必须",(0,s.jsx)(e.strong,{children:"在变量声明之后、处理程序之前"}),"。"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"DECLARE 游标名 CURSOR FOR 查询语句;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"开启游标"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"OPEN 游标名;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"使用游标（从游标中获取数据）："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"FETCH 游标名 INTO 变量名1 [, 变量名2, ...]\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"游标的查询结果集中的字段，必须和INTO后的变量保持一致"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"关闭游标"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"CLOSE 游标名;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"1643-举例",children:["16.4.3 举例",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1643-举例",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"例"}),"创建存储过程“get_count_by_limit_total_salary()”，声明IN参数 limit_total_salary，DOUBLE类型；声明OUT参数total_count，INT类型。函数的功能可以实现累加薪资最高的几个员工的薪资值，直到薪资总和达到limit_total_salary参数的值，返回累加的人数给total_count。"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"# 声明存储过程 \r\nDELIMITER $\r\nCREATE PROCEDURE get_count_by_limit_total_salary(IN limit_total_salary DOUBLE, OUT total_count INT)\r\nBEGIN\r\n	# 声明变量，存储薪资的和\r\n	DECLARE sal_sum DOUBLE DEFAULT 0;\r\n	# 声明变量，记录累加次数\r\n	DECLARE emp_num INT DEFAULT 0;\r\n	# 声明变量，记录游标指定行的salary信息\r\n	DECLARE sal_tmp DOUBLE DEFAULT 0;\r\n	# 声明游标\r\n	DECLARE sal_cursor CURSOR FOR SELECT salary FROM emps ORDER BY salary DESC;\r\n	# 打开游标\r\n	OPEN sal_cursor;\r\n	# 开始循环累加\r\n	add_sal: WHILE sal_sum < limit_total_salary DO \r\n		# 使用游标\r\n		FETCH sal_cursor INTO sal_tmp;\r\n		SET sal_sum := sal_sum + sal_tmp;\r\n		SET emp_num := emp_num + 1;\r\n	END WHILE add_sal;\r\n	# 关闭游标\r\n	CLOSE sal_cursor;\r\n	# 给传出参数赋值\r\n	SET total_count := emp_num;\r\nEND $\r\nDELIMITER ;\r\n\r\n# 调用\r\nCALL get_count_by_limit_total_salary(200000, @count);\r\nSELECT @count;\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"1644-游标的优缺点",children:["16.4.4 游标的优缺点",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1644-游标的优缺点",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"优点"}),"："]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["允许",(0,s.jsx)(e.code,{children:"逐条读取"}),"结果集中的数据"]}),"\n",(0,s.jsx)(e.li,{children:"跟在应用层 面实现相同的功能相比，游标可以在存储程序中使用，效率高，程序也更加简洁。"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"缺点"}),"："]}),"\n",(0,s.jsxs)(e.p,{children:["在使用游标的过程中，会对数据行进行",(0,s.jsx)(e.code,{children:"加锁"}),"。这样在",(0,s.jsx)(e.em,{children:"业务并发量大"})," 的时候，不仅会","影响业务之间的效率","，还会","消耗系统资源"," ，","造成内存不足","，这是因为游标是在内存中进 行的处理"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"165-综合例子",children:["16.5 综合例子",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#165-综合例子",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"例"}),"创建存储过程update_salary()，参数1为 IN 的INT型变量dept_id，表示部门id；参数2为 IN的INT型变量change_sal_count，表示要调整薪资的员工个数；参数3为OUT的VARCHAR(255)型变量result，记录程序是否正常结束。"]}),"\n",(0,s.jsx)(e.p,{children:"查询指定id部门的员工信息，按照salary升序排列，根据hire_date的情况，调整前change_sal_count个员工的薪资。涨薪比例如下："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"1995(含1995)年之前入职的，涨薪120%；"}),"\n",(0,s.jsx)(e.li,{children:"1995~1998（含1998）年入职的，涨薪115%；"}),"\n",(0,s.jsx)(e.li,{children:"1998~2001（含2001）年入职的涨薪110%；"}),"\n",(0,s.jsx)(e.li,{children:"其他涨薪105%"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"另外，关于参数3 result的值设计如下："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:'如果程序正常结束，result 值为 "success"；'}),"\n",(0,s.jsx)(e.li,{children:'当程序报错 “ERROR 1329 (02000)”时，result 值为 "The change_sal_count is more than the number of employees of the current department"'}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"分析："}),"用到的知识点有："]}),"\n",(0,s.jsx)(e.p,{children:"①创建存储过程；②分支结构；③循环结构；④游标；⑤定义条件与处理程序；⑥局部变量等"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"代码"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mysql",children:"# 创建存储过程\r\ndelimiter $\r\ncreate procedure update_salary(in dept_id int, in change_sal_count int, out result varchar(255))\r\nbegin\r\n	# 创建变量，记录员工的id\r\n	declare emp_id int;\r\n	# 创建变量，记录员工入职年份\r\n	declare hire_year year;\r\n	# 创建变量，记录员工涨薪幅度\r\n	declare sal_rate double;\r\n	\r\n	# 定义条件\r\n	declare index_out condition for 1329;\r\n	\r\n	# 声明游标\r\n	declare emp_cursor cursor for \r\n		select employee_id, year(hire_date)\r\n		from emps \r\n		where department_id = dept_id \r\n		order by salary asc;\r\n		\r\n	# 定义处理类型\r\n	declare exit handler for index_out set result = 'The change_sal_count is more than the number of employees of the current department';\r\n\r\n	# 开启游标\r\n	open emp_cursor;\r\n	\r\n	update_sal: while change_sal_count > 0 do\r\n		# 使用游标\r\n		fetch emp_cursor into emp_id, hire_year;\r\n		# 获取涨薪率\r\n		case\r\n			when hire_year <= 1995 then set sal_rate = 1.2;\r\n			when hire_year <= 1998 then set sal_rate = 1.15;\r\n			when hire_year <= 2001 then set sal_rate = 1.10;\r\n			else set sal_rate = 1.05;\r\n		end case;\r\n		# 涨薪\r\n		update emps set salary = salary * sal_rate where employee_id = emp_id;\r\n		# 更新迭代条件\r\n		set change_sal_count = change_sal_count - 1;\r\n	end while update_sal;\r\n	\r\n	# 关闭游标\r\n	close emp_cursor;\r\n	\r\n	# 程序正常结束\r\n	set result = 'success';\r\nend $\r\ndelimiter ;\r\n\r\nselect employee_id, year(hire_date), salary\r\n		from emps \r\n		where department_id = 90 \r\n		order by salary asc;\r\n\r\n# 调用\r\ncall update_salary(90, 2, @result);\r\nselect @result;\n"})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}let c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["tang%2Fmysql%2F16_%E5%8F%98%E9%87%8F%E3%80%81%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E4%B8%8E%E6%B8%B8%E6%A0%87.md"]={toc:[{text:"16.1 变量",id:"161-变量",depth:2},{text:"16.1.1 系统变量",id:"1611-系统变量",depth:3},{text:"16.1.2 用户变量",id:"1612-用户变量",depth:3},{text:"16.2 定义条件与处理程序",id:"162-定义条件与处理程序",depth:2},{text:"16.2.1 定义条件",id:"1621-定义条件",depth:3},{text:"16.2.2 定义处理程序",id:"1622-定义处理程序",depth:3},{text:"16.3 流程控制",id:"163-流程控制",depth:2},{text:"16.3.1 分支结构之 IF",id:"1631-分支结构之-if",depth:3},{text:"16.3.2 分支结构之 CASE",id:"1632-分支结构之-case",depth:3},{text:"16.3.3 循环结构之 LOOP",id:"1633-循环结构之-loop",depth:3},{text:"16.3.4 循环结构之 WHILE",id:"1634-循环结构之-while",depth:3},{text:"16.3.5 循环结构之 REPEAT",id:"1635-循环结构之-repeat",depth:3},{text:"16.3.6 LOOP、WHILE、REPEAT的对比",id:"1636-loopwhilerepeat的对比",depth:3},{text:"16.3.7 跳转语句之 LEAVE",id:"1637-跳转语句之-leave",depth:3},{text:"16.3.8 跳转语句之 ITERATE",id:"1638-跳转语句之-iterate",depth:3},{text:"16.4 游标",id:"164-游标",depth:2},{text:"16.4.1 概述",id:"1641-概述",depth:3},{text:"16.4.2 游标的使用",id:"1642-游标的使用",depth:3},{text:"16.4.3 举例",id:"1643-举例",depth:3},{text:"16.4.4 游标的优缺点",id:"1644-游标的优缺点",depth:3},{text:"16.5 综合例子",id:"165-综合例子",depth:2}],title:"16 变量、流程控制与游标",frontmatter:{}}}}]);