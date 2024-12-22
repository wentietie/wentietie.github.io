"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["6368"],{88807:function(n,e,s){s.r(e),s.d(e,{default:function(){return h}});var r=s(85893),d=s(50065);function l(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",code:"code",strong:"strong",ul:"ul",li:"li",pre:"pre",blockquote:"blockquote",em:"em"},(0,d.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"13-约束",children:["13 约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#13-约束",children:"#"})]}),"\n",(0,r.jsxs)(e.h2,{id:"131-概述",children:["13.1 概述",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#131-概述",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"1311-为什么需要约束",children:["13.1.1 为什么需要约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1311-为什么需要约束",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"数据完整性（Data Integrity）"}),"是指数据的精确性（Accuracy）和可靠性（Reliability）。它是防止数据库中存在不符合语义规定的数据和防止因错误信息的输入输出造成无效操作或错误信息而提出的。"]}),"\n",(0,r.jsxs)(e.p,{children:["为了保证数据的完整性，SQL规范以约束的方式对",(0,r.jsx)(e.strong,{children:"表数据进行额外的条件限制"}),"，从以下4个方面考虑："]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"实体完整性（Entity Integrity）"}),"：例如，同一个表中不能存在两条完全相同无法区分的数据"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"域完整性（Domain Integrity）"}),"：例如，年龄范围0~120；再如，性别范围“男/女”"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"引用完整性（Referential Integrity）"}),"：例如，员工所在部门，要在部门表中能找到这个部门"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"用户自定义完整性（User-defined Integrity）"}),"：例如，用户名唯一、密码不能为空等；再如，本部门经历的工资不得高于本部门职工的平均工资的5倍"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1312-什么是约束",children:["13.1.2 什么是约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1312-什么是约束",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"约束是对表中字段的限制，是表级的强制规定。"}),"\n",(0,r.jsxs)(e.p,{children:["可以在",(0,r.jsx)(e.strong,{children:"创建表时规定约束（通过CREATE TABLE语句）"}),"，或者",(0,r.jsx)(e.strong,{children:"在表创建之后通过ALTER TABLE语句规定约束"}),"。"]}),"\n",(0,r.jsxs)(e.h3,{id:"1313-约束的分类",children:["13.1.3 约束的分类",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1313-约束的分类",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["按照",(0,r.jsx)(e.code,{children:"约束数据列的限制"}),"分：","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"单列约束"}),"：每个约束只约束一列"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"多列约束"}),"：每个约束可约束多列"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["按照",(0,r.jsx)(e.code,{children:"约束的作用范围"}),"分：","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"列级约束"}),"：只能作用在一个列上。在列的定义后面指明约束"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"表级约束"}),"：可以作用在多个列上。不与列的定义在一起，而是单独定义"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["按照",(0,r.jsx)(e.code,{children:"约束的作用"}),"分：","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"NOT NULL"}),"：非空约束。规定字段值不能为空"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"UNIQUE"}),"：唯一约束。规定字段值在整个表中是唯一的"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"PRIMARY KEY"}),"：主键约束。是非空和唯一约束的组合"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"FOREIGN KEY"}),"：外键约束"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"CHECK"}),"：检查约束"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"DEFAULT"}),"：默认值约束"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1314-查看指定表已有的约束",children:["13.1.4 查看指定表已有的约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1314-查看指定表已有的约束",children:"#"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"#information_schema数据库名（系统库）\r\n#table_constraints表名称（专门存储各个表的约束）\r\nSELECT * \r\nFROM information_schema.table_constraints\r\nWHERE table_name = '表名称';\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"132非空约束",children:["13.2非空约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#132非空约束",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"1321-作用",children:["13.2.1 作用",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1321-作用",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"限定某个字段的值不允许为空"})}),"\n",(0,r.jsxs)(e.h3,{id:"1322-关键字",children:["13.2.2 关键字",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1322-关键字",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"NOT NUL"})}),"\n",(0,r.jsxs)(e.h3,{id:"1323-特点",children:["13.2.3 特点",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1323-特点",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"默认情况下，所有的类型都是可以为NULL的。包括INT、FLOAT等"}),"\n",(0,r.jsx)(e.li,{children:"非空约束只能是列级约束，不能组合非空"}),"\n",(0,r.jsx)(e.li,{children:"一个表可以有多个字段分别限制非空"}),"\n",(0,r.jsx)(e.li,{children:"空字符、0都不等于NULL"}),"\n",(0,r.jsxs)(e.li,{children:["如果某字段原有",(0,r.jsx)(e.strong,{children:"默认值约束"}),"，并且想在添加非空约束后还想",(0,r.jsx)(e.strong,{children:"保留默认值约束"}),"，则需要在MODIFY语句中保留默认值约束"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1324-添加非空约束",children:["13.2.4 添加非空约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1324-添加非空约束",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式一：在创建表时添加非空约束"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE 表名称(\r\n字段名 数据类型,\r\n字段名 数据类型 NOT NULL, # 非空约束，列级\r\n字段名 数据类型 NOT NULL, # 非空约束，列级\r\n    ...\r\n);\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式二：在建表后添加非空约束"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 MODIFY 字段名 数据类型 NOT NULL;\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"1325-删除非空约束",children:["13.2.5 删除非空约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1325-删除非空约束",children:"#"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 MODIFY 字段名 数据类型 NULL; # 将该字段的NOT NULL改为NULL，允许为空\n"})}),"\n",(0,r.jsx)(e.p,{children:"或"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 MODIFY 字段名 数据类型; # 去掉该字段的 NOT NULL，默认该字段允许为空\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"1326-面试题",children:["13.2.6 面试题",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1326-面试题",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"为什么建表时，加 not null default '' 或 default 0"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"答："}),"不想让表中出现null值。"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"为什么不想要 null 的值"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"答："})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"① 不好比较。null是一种特殊值，比较时只能用专门的is null 和 is not null来比较。碰到运算符，通常返回null。"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"② 效率不高。影响提高索引效果。因此，我们往往在建表时 not null default '' 或 default 0"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"133-唯一性约束",children:["13.3 唯一性约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#133-唯一性约束",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"1331-作用",children:["13.3.1 作用",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1331-作用",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"用来限制某个字段的值不能重复。"})}),"\n",(0,r.jsxs)(e.h3,{id:"1332-关键字",children:["13.3.2 关键字",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1332-关键字",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"UNIQUE"})}),"\n",(0,r.jsxs)(e.h3,{id:"1333-特点",children:["13.3.3 特点",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1333-特点",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"同一个表可以有多个唯一约束"}),"\n",(0,r.jsx)(e.li,{children:"唯一性约束可以是一个列的值唯一，也可以是多个列组合的值唯一"}),"\n",(0,r.jsx)(e.li,{children:"唯一性约束允许列值为空，且允许多列为空值"}),"\n",(0,r.jsx)(e.li,{children:"在创建唯一约束的时候，如果不给唯一性约束命名，就默认和列名相同"}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"MySQL会给唯一性约束的列上默认创建一个唯一索引"})}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1334-添加唯一性约束",children:["13.3.4 添加唯一性约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1334-添加唯一性约束",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式一：在创建表是添加唯一性约束"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"create table 表名称(\r\n	字段名 数据类型,\r\n	字段名 数据类型 UNIQUE, # 列级约束\r\n	字段名 数据类型 UNIQUE KEY,\r\n	字段名 数据类型,\r\n    ...\r\n    [CONSTRAINT 约束名] UNIQUE KEY(字段名[, 字段名2, 字段名3, ...]) # 表级约束\r\n);\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式二：建表后添加唯一性约束"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"ALTER ... ADD方式"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 ADD [CONSTRAINT 约束名] UNIQUE KEY (字段名列表)\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"ALTER ... MODIFY方式"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 MODIFY 字段名 字段类型 UNIQUE;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1335-删除唯一性约束",children:["13.3.5 删除唯一性约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1335-删除唯一性约束",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"说明"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["添加唯一性约束的列也会",(0,r.jsx)(e.strong,{children:"自动创建唯一索引"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["删除唯一性约束",(0,r.jsx)(e.strong,{children:"只能通过删除唯一索引的方式删除"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"删除时需要指定唯一索引名"}),"，唯一索引名和唯一约束名一样"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"如果创建唯一约束时未指明名称，如果是单列，就默认和列名相同；如果是组合列，默认为第一个列名。此外也可以自定义唯一性约束名"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"查看指定表中都有哪些索引"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"SHOW INDEX FROM 表名;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"删除唯一性约束"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 DROP INDEX 唯一索引名;\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"134-主键约束",children:["13.4 主键约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#134-主键约束",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"1341-作用",children:["13.4.1 作用",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1341-作用",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"非空且唯一，用来唯一标识表中的一行记录"})}),"\n",(0,r.jsxs)(e.h3,{id:"1342-关键字",children:["13.4.2 关键字",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1342-关键字",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"PRIMARY KEY"})}),"\n",(0,r.jsxs)(e.h3,{id:"1343-特点",children:["13.4.3 特点",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1343-特点",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["主键约束",(0,r.jsx)(e.strong,{children:"相当于唯一约束+非空约束的组合"}),"。主键约束列不允许重复，也不允许出现空值"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"一个表最多只能有一个主键约束"})}),"\n",(0,r.jsx)(e.li,{children:"建立主键约束，既可以在列级创建，也可以在表级创建"}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"主键约束对应着表中的一列或者多列（复合主键）"})}),"\n",(0,r.jsxs)(e.li,{children:["如果是多列组合的",(0,r.jsx)(e.strong,{children:"复合主键约束"}),"，那么",(0,r.jsxs)(e.strong,{children:["这些列都不允许为空，且",(0,r.jsx)(e.code,{children:"组合的值"}),"不允许重复"]})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"MySQL的主键约束名总是PRIMARY"}),"，自己命名的无效"]}),"\n",(0,r.jsxs)(e.li,{children:["当创建主键约束时，会默认创建",(0,r.jsx)(e.strong,{children:"主键索引"}),"。如果删除主键约束了，那么其对应的主键索引也自动删除了"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"不要修改主键字段的值"}),"。因为主键是数据记录的唯一标识，如果修改了主键的值，就有可能破坏数据的完整性"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1344-添加主键约束",children:["13.4.4 添加主键约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1344-添加主键约束",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式一：在创建表时添加主键约束"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"列级约束"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE 表名 (\r\n	字段名 字段类型 PRIMARY KEY, # 列级约束\r\n	字段名 字段类型,\r\n	字段名 字段类型\r\n    ...\r\n);\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"表级约束"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE 表名 (\r\n	字段名 字段类型,\r\n	字段名 字段类型,\r\n	字段名 字段类型\r\n    ...\r\n    PRIMARY KEY (字段名列表) # 表级约束\r\n);\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式二：在创建表后添加主键约束"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"ALTER ... ADD方式"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 ADD PRIMARY KEY (字段名列表)\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"ALTER ... MODIFY方式"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 MODIFY 字段名 字段类型 PRIMARY KEY;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1345-删除主键约束",children:["13.4.5 删除主键约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1345-删除主键约束",children:"#"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 DROP PRIMARY KEY;\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"主键约束被删除后，该列的非空属性仍保留"})}),"\n",(0,r.jsxs)(e.h2,{id:"135-自增约束",children:["13.5 自增约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#135-自增约束",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"1351-作用",children:["13.5.1 作用",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1351-作用",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"使得指定字段的值进行自增"})}),"\n",(0,r.jsxs)(e.h3,{id:"1352-关键字",children:["13.5.2 关键字",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1352-关键字",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"AUTO_INCREMENT"})}),"\n",(0,r.jsxs)(e.h3,{id:"1353-特点和要求",children:["13.5.3 特点和要求",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1353-特点和要求",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["一个表",(0,r.jsx)(e.strong,{children:"最多只能有一个自增长的列"})]}),"\n",(0,r.jsx)(e.li,{children:"当需要产生唯一标识或者顺序值时，可以设置自增长"}),"\n",(0,r.jsxs)(e.li,{children:["设置为自增长的列",(0,r.jsx)(e.strong,{children:"必须是主键约束列或者唯一性约束列"})]}),"\n",(0,r.jsxs)(e.li,{children:["自增约束的列的数据类型",(0,r.jsx)(e.strong,{children:"必须是整数类型"})]}),"\n",(0,r.jsx)(e.li,{children:"在插入数据时，如果自增长列设置为0或者null，会在当前列最大值的基础上递增；如果手动指定了非0、非null的值，则直接赋值为该值"}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1354-添加自增约束",children:["13.5.4 添加自增约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1354-添加自增约束",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式一：在创建表的时候添加自增约束"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE 表名(\r\n	字段名 字段类型 PRIMARY KEY AUTO_INCREMENT, # 被AUTO_INCREMENT修饰的列必须是PRIMARY KEY列或者UNIQUE列\r\n	字段名 字段类型,\r\n    ...\r\n)\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式二：在建表后添加自增约束"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"只能使用ALTER...MODIFY方式"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 MODIFY 字段名 字段类型  AUTO_INCREMENT;\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"1355-删除自增约束",children:["13.5.5 删除自增约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1355-删除自增约束",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"去掉auto_increment相当于删除"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 MODIFY 字段名 字段类型; \n"})}),"\n",(0,r.jsxs)(e.h3,{id:"1356-mysql80新特性",children:["13.5.6 MySQL8.0新特性",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1356-mysql80新特性",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"在MySQL5.7和MySQL8.0中分别执行以下操作："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"# ①创建表，主键自增\r\nCREATE TABLE test(\r\nid INT PRIMARY KEY AUTO_INCREMENT\r\n);\r\n\r\n# ② 插入4个空值\r\nINSERT INTO test9 VALUES(0),(0),(0),(0);\r\n\r\n# ③ 查询，此时id的值为1,2,3,4\r\nSELECT * FROM test9;\r\n\r\n# ④ 删除id为4的记录，此时id的值为1,2,3\r\nDELETE FROM test9 WHERE id = 4;\r\n\r\n# ⑤ 再次插入一条记录，此时id的值为1,2,3,5\r\nINSERT INTO test9 VALUES(0);\r\n\r\n# ⑥ 删除id为5的记录，此时id的值为1,2,3\r\nDELETE FROM test9 WHERE id = 5;\r\n\r\n# ⑦ 重启MySQL服务器\r\n\r\n# ⑧ 查询，此时id的值为1,2,3\r\nSELECT * FROM test9;\r\n\r\n# ⑨ 再次插入一条记录。在这里MySQL5.7和MySQL8.0插入后的结果不一样了。\r\nINSERT INTO test9 VALUES(0);\n"})}),"\n",(0,r.jsxs)(e.p,{children:["执行为步骤⑨后，再次查询，",(0,r.jsx)(e.strong,{children:"MySQL5.7查询到的id值为1,2,3,4，MySQL8.0查询到的id值为1,2,3,6"}),"。"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"原因："})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["在",(0,r.jsx)(e.strong,{children:"MySQL 5.7"}),"系统中，对于自增主键的分配规则，是由InnoDB数据字典内部一个",(0,r.jsx)(e.strong,{children:"计数器"}),"来决定的，而该计数器",(0,r.jsx)(e.strong,{children:"只在内存中维护"})," ，并不会持久化到磁盘中。",(0,r.jsx)(e.strong,{children:"当数据库重启时，该计数器会被初始化"}),"；"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsxs)(e.strong,{children:["MySQL 8.0将自增主键的计数器持久化到 ",(0,r.jsx)(e.code,{children:"重做日志"})," 中"]}),"。每次计数器发生改变，都会将其写入重做日志 中。",(0,r.jsx)(e.strong,{children:"如果数据库重启，InnoDB会根据重做日志中的信息来初始化计数器的内存值"}),"。"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1357-面试题",children:["13.5.7 面试题",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1357-面试题",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"带AUTO_INCREMENT约束的字段值是从1开始的吗？"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"答："}),"在MySQL中，",(0,r.jsx)(e.strong,{children:"默认AUTO_INCREMENT的初始值是1"}),"，每新增一条记录，字段值自动加1。此外，还可以通过如下两种方法设置自增属性的起始值："]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"① 在建表时指定AUTO_INCREMENT的值："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE 表名(\r\n	字段名 字段类型 PRIMARY KEY AUTO_INCREMENT,\r\n	字段名 字段类型,\r\n    ...\r\n)AUTO_INCREMENT = 自定义默认值;\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"② 在使用ALTER TABLE ... 时修改指定表的AUTO_INCREMENT的默认值："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"# 首先，需要给指定字段设置为自增列\r\nCREATE TABLE 表名(\r\n	字段名 字段类型 PRIMARY KEY AUTO_INCREMENT,\r\n	字段名 字段类型,\r\n    ...\r\n);\r\n\r\n# 然后，修改指定表的AUTO_INCREMENT的默认值\r\nALTER TABLE 表名 AUTO_INCREMENT = 默认值;\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"② 指定第 一条插入记录的自增字段的值。这样新插入的记录的自增字段值从初始值开始递增。"}),"\n",(0,r.jsx)(e.p,{children:"如在表中插入第一 条记录，同时指定id值为5，则以后插入的记录的id值就会从6开始往上增加"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"136-外键约束",children:["13.6 外键约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#136-外键约束",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"1361-作用",children:["13.6.1 作用",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1361-作用",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"限定某个表的某个字段的引用完整性"}),"。 比如：员工表的员工所在部门的选择，必须在部门表能找到对应的部分。"]}),"\n",(0,r.jsxs)(e.h3,{id:"1362-关键字",children:["13.6.2 关键字",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1362-关键字",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"FOREIGN KEY"})}),"\n",(0,r.jsxs)(e.h3,{id:"1363-主表和从表",children:["13.6.3 主表和从表",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1363-主表和从表",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"主表（父表）：被引用的表，被参考的表"}),"\n",(0,r.jsx)(e.li,{children:"从表（子表）：引用别人的表，参考别人的表"}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1364-特点",children:["13.6.4 特点",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1364-特点",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"从表的外键列，必须引用/参考主表的主键或唯一约束的列"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"原因："}),"因为被引用/参考的值必须是唯一的"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["在创建外键约束时，如果不给外键约束命名，",(0,r.jsx)(e.strong,{children:"默认名不是列名，而是自动产生一个外键名"}),"（如student_ibfk_1）"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["如果在创建表时就指定外键，需要",(0,r.jsx)(e.strong,{children:"先创建主表，再创建子表"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"删除表时，先删子表，再删主表"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"当主表的记录被参考时，主表记录将不允许删除"}),"。如果要删除数据，需要先删除从表中依赖该记录的数据，然后才可删除主表数据"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"从表中，一个表可以建立多个外键约束"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["从表的外键列与主表被参照列",(0,r.jsx)(e.strong,{children:"名字可以不同，但是数据类型必须一样，逻辑意义一致"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["删除外键约束时，必须",(0,r.jsx)(e.code,{children:"手动"}),"删除对应的索引"]})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"外键约束不可以跨引擎使用"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1364-添加外键约束",children:["13.6.4 添加外键约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1364-添加外键约束",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式一：建表时添加外键约束"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE 从表名(\r\n	字段名 字段类型,\r\n	字段名 字段类型,\r\n	...\r\n	[CONSTRAINT 约束名] FOREIGN KEY (从表字段名) REFERENCES 主表(主表字段列表)\r\n);\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式二：建表后添加外键约束"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"只能通过ALTER TABLE ... ADD方式添加"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 从表名 ADD [CONSTRAINT 约束名 ]FOREIGN KEY (从表字段名) REFERENCES 主表名(主表字段列表)\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"1365-删除外键约束",children:["13.6.5 删除外键约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1365-删除外键约束",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"① 查看表中约束，以确定外键约束名（如果已知外键约束名，此步骤可省）"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"CONSTRAINT_NAME列对应的是约束名"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:'SELECT *\r\nFROM information_schema.table_constraints\r\nWHERE table_name = "表名"\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"② 删除外键约束"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 DROP FOREIGN KEY 约束名;\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"③ 查看外键约束对应的普通索引名"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"SHOW INDEX FROM 表名;\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["④ 删除索引（",(0,r.jsx)(e.strong,{children:"外键约束对应的索引，只能手动删除"}),"）"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 DROP INDEX 索引名;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1366-约束等级",children:["13.6.6 约束等级",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1366-约束等级",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Cascade方式"}),"：在父表中update或delete记录时，同步update或delete子表的匹配记录"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Set null方式"}),"：在父表中update或delete记录时，将子表上匹配记录的列设为null，此时需要注意子表的外键列不能是not null"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"No action方式"}),"：如果子表中有匹配的记录，不允许对父表对应候选键进行update或delete操作"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Restrict方式"}),"：同no action方式，都是立即检查外键约束"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Set default方式"}),"：父表有变更时，子表将外键列设置成一个默认值，但InnoDB不能识别"]}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"如果没有指定等级，相当于Restrict方式。"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["对于外键约束，最好是采用",(0,r.jsx)(e.code,{children:"ON UPDATE CASCADE ON DELETE RESTRICt"}),"的方式："]})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE 从表名(\r\n	字段名 字段类型,\r\n	字段名 字段类型,\r\n	...\r\n	[CONSTRAINT 约束名] FOREIGN KEY (从表字段名) REFERENCES 主表(主表字段列表) ON UPDATE CASCADE ON DELETE RESTRICT \r\n);\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1367-开发中的常见问题",children:["13.6.7 开发中的常见问题",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1367-开发中的常见问题",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"问题1"}),"：如果两个表之间有关联关系，如员工表和部门表，是否一定要建外键约束？"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"答："}),"不一定"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"问题2"}),"：建和不建外键约束有什么区别？"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"答："}),"①创建外键约束，创建表、删除表、添加记录、修改记录、删除记录会在",(0,r.jsx)(e.strong,{children:"语法"}),"方面受到限制。比如，在员工表中添加员工时，该员工所在的部门不允许在部门表中找不到；②不创建外键约束，创建表、删除表、添加记录、修改记录、删除记录不会受到限制。但是要保证数据的",(0,r.jsx)(e.strong,{children:"引用完整性"}),"，只能依靠",(0,r.jsx)(e.strong,{children:"程序员的自觉"}),"（但自觉一般都没用），或者",(0,r.jsx)(e.strong,{children:"在Java程序中进行限定"}),"。"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"问题3"}),"：建和不建外键约束和查询有没有关系？"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"答："}),"没有"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"小结："}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["在 MySQL 里，",(0,r.jsx)(e.strong,{children:"外键约束"}),"是有成本的，需要消耗系统资源**。对于大并发的 SQL 操作，有可能会不适 合**。比如大型网站的中央数据库，可能会 因为外键约束的系统开销而变得非常慢 。所以， ",(0,r.jsx)(e.strong,{children:"MySQL 允许不使用系统自带的外键约束，在 应用层面完成检查数据一致性的逻辑"}),"。也就是说，即使你不 用外键约束，也要想办法通过应用层面的附加逻辑，来实现外键约束的功能，确保数据的一致性。"]}),"\n",(0,r.jsxs)(e.h3,{id:"1368-阿里开发规范",children:["13.6.8 阿里开发规范",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1368-阿里开发规范",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["【",(0,r.jsx)(e.strong,{children:"强制"}),"】不得使用外键与级联，一切外键概念必须在应用层解决。"]}),"\n",(0,r.jsxs)(e.p,{children:["说明：（概念解释）学生表中的 student_id 是主键，那么成绩表中的 student_id 则为外键。如果更新学生表中的 student_id，同时触发成绩表中的 student_id 更新，即为",(0,r.jsx)(e.strong,{children:"级联更新"}),"。外键与级联更新适用于",(0,r.jsx)(e.strong,{children:"单机低并发"})," ，不适合",(0,r.jsx)(e.strong,{children:"分布式"}),"、 ",(0,r.jsx)(e.strong,{children:"并发集群"}),"；",(0,r.jsx)(e.em,{children:"级联"}),"更新是",(0,r.jsx)(e.strong,{children:"强阻塞"}),"，存在数据库",(0,r.jsx)(e.strong,{children:"更新风暴"})," 的风险；",(0,r.jsx)(e.em,{children:"外键"}),"影响数据库的",(0,r.jsx)(e.strong,{children:"插入速度"})," 。"]}),"\n",(0,r.jsxs)(e.h2,{id:"137-检查约束",children:["13.7 检查约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#137-检查约束",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"1371-作用",children:["13.7.1 作用",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1371-作用",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"检查某个字段的值是否符合指定要求"}),"。一般指的是值的范围"]}),"\n",(0,r.jsx)(e.p,{children:"检查约束在MySQL8.0中才开始有作用（MySQL5.7中已存在，但是没有起作用）。"}),"\n",(0,r.jsxs)(e.h3,{id:"1372-关键字",children:["13.7.2 关键字",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1372-关键字",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"CHECK"})}),"\n",(0,r.jsxs)(e.h3,{id:"1373-添加检查约束",children:["13.7.3 添加检查约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1373-添加检查约束",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式一：在建表时添加约束"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"列级约束"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE 表名(\r\n	字段名 字段类型,\r\n	字段名 字段类型,\r\n	字段名 字段类型 CHECK(字段值需要满足的条件)\r\n    ...\r\n);\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"表级约束"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE 表名(\r\n	字段名 字段类型,\r\n	字段名 字段类型,\r\n	字段名 字段类型,\r\n	...\r\n	CONSTRAINT 约束名 CHECK(字段值需要满足的条件)\r\n);\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式2：建表后添加约束"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 ADD CONSTRAINT 约束名 CHECK(字段值需要满足的条件);\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"例1"}),"：salary不得小于2000"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE test_check1(\r\n	id INT,\r\n	`name` VARCHAR(15),\r\n	salary DECIMAL(10, 2) CHECK(salary > 2000)\r\n);\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"例2"}),"：sex只能是男或女"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE test_check3(\r\n	id INT,\r\n	`name` VARCHAR(15),\r\n	sex CHAR,\r\n    CONSTRAINT ck_tc3_sex CHECK(sex in('男','女'))\r\n);\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"1374-删除检查约束",children:["13.7.4 删除检查约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1374-删除检查约束",children:"#"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"# ① 查询约束名\r\nSELECT * FROM information_schema.TABLE_CONSTRAINTS WHERE table_name = '表名'\r\n# ② 删除检查约束\r\nALTER TABLE 表名 DROP CONSTRAINT 约束名;\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"138-默认值约束",children:["13.8 默认值约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#138-默认值约束",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"1381-作用",children:["13.8.1 作用",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1381-作用",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"为给定字段指定默认值"}),"。插入数据时，如果该字段没有显示赋值，则赋值为默认值"]}),"\n",(0,r.jsxs)(e.h3,{id:"1382-关键字",children:["13.8.2 关键字",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1382-关键字",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"DEFAULT"})}),"\n",(0,r.jsxs)(e.h3,{id:"1383-特点",children:["13.8.3 特点",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1383-特点",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["在建表后给字段",(0,r.jsx)(e.strong,{children:"添加"}),"默认值约束时，",(0,r.jsx)(e.strong,{children:"如果该字段原有NOT NULL约束，并且仍旧想保留NOT NULL，那么需要在MODIFY语句中保留非空约束"})]}),"\n",(0,r.jsxs)(e.li,{children:["在建表后将字段的默认值约束",(0,r.jsx)(e.strong,{children:"删除"}),"时，",(0,r.jsx)(e.strong,{children:"如果该字段原有NOT NULL约束，并且仍旧想保留NOT NULL，那么需要在MODIFY语句中保留非空约束"})]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1384-添加默认值约束",children:["13.8.4 添加默认值约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1384-添加默认值约束",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式1：建表时添加默认值约束"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE 表名(\r\n	字段名 字段类型,\r\n	字段名 字段类型 DEFAULT 默认值\r\n    ...\r\n);\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"方式2：建表后添加默认值约束"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 MODIFY 字段名 字段类型 DEFAULT 默认值 [NOT NULL];\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["如果该字段原来有",(0,r.jsx)(e.strong,{children:"非空约束"}),"，并且在添加默认值约束后还想",(0,r.jsx)(e.strong,{children:"保留非空约束"}),"，则需要在MODIFY语句中保留非空约束"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["同理，如果某字段原有",(0,r.jsx)(e.strong,{children:"默认值约束"}),"，并且想在添加非空约束后还想",(0,r.jsx)(e.strong,{children:"保留默认值约束"}),"，则需要在MODIFY语句中保留默认值约束。"]}),"\n",(0,r.jsx)(e.p,{children:"这就是以如下代码报错的原因。"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE test_default2(\r\n	id INT,\r\n	`name` VARCHAR(15),\r\n	sex CHAR NOT NULL\r\n);\r\nDESC test_default2;\r\n# 插入报错：Field 'sex' doesn't have a default value\r\nINSERT INTO test_default2(id, `name`) VALUES(1, 'Tom');\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"1385-删除默认值约束",children:["13.8.5 删除默认值约束",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1385-删除默认值约束",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"如果该字段原有非空约束，只需删除默认值约束时，需要保留原有非空约束："}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 MODIFY 字段值 字段类型 NOT NULL;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"删除字段值的默认约束的同时，也删除其非空约束："}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"ALTER TABLE 表名 MODIFY 字段值 字段类型;\n"})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,d.ah)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}let h=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["tang%2Fmysql%2F13_%E7%BA%A6%E6%9D%9F.md"]={toc:[{text:"13.1 概述",id:"131-概述",depth:2},{text:"13.1.1 为什么需要约束",id:"1311-为什么需要约束",depth:3},{text:"13.1.2 什么是约束",id:"1312-什么是约束",depth:3},{text:"13.1.3 约束的分类",id:"1313-约束的分类",depth:3},{text:"13.1.4 查看指定表已有的约束",id:"1314-查看指定表已有的约束",depth:3},{text:"13.2非空约束",id:"132非空约束",depth:2},{text:"13.2.1 作用",id:"1321-作用",depth:3},{text:"13.2.2 关键字",id:"1322-关键字",depth:3},{text:"13.2.3 特点",id:"1323-特点",depth:3},{text:"13.2.4 添加非空约束",id:"1324-添加非空约束",depth:3},{text:"13.2.5 删除非空约束",id:"1325-删除非空约束",depth:3},{text:"13.2.6 面试题",id:"1326-面试题",depth:3},{text:"13.3 唯一性约束",id:"133-唯一性约束",depth:2},{text:"13.3.1 作用",id:"1331-作用",depth:3},{text:"13.3.2 关键字",id:"1332-关键字",depth:3},{text:"13.3.3 特点",id:"1333-特点",depth:3},{text:"13.3.4 添加唯一性约束",id:"1334-添加唯一性约束",depth:3},{text:"13.3.5 删除唯一性约束",id:"1335-删除唯一性约束",depth:3},{text:"13.4 主键约束",id:"134-主键约束",depth:2},{text:"13.4.1 作用",id:"1341-作用",depth:3},{text:"13.4.2 关键字",id:"1342-关键字",depth:3},{text:"13.4.3 特点",id:"1343-特点",depth:3},{text:"13.4.4 添加主键约束",id:"1344-添加主键约束",depth:3},{text:"13.4.5 删除主键约束",id:"1345-删除主键约束",depth:3},{text:"13.5 自增约束",id:"135-自增约束",depth:2},{text:"13.5.1 作用",id:"1351-作用",depth:3},{text:"13.5.2 关键字",id:"1352-关键字",depth:3},{text:"13.5.3 特点和要求",id:"1353-特点和要求",depth:3},{text:"13.5.4 添加自增约束",id:"1354-添加自增约束",depth:3},{text:"13.5.5 删除自增约束",id:"1355-删除自增约束",depth:3},{text:"13.5.6 MySQL8.0新特性",id:"1356-mysql80新特性",depth:3},{text:"13.5.7 面试题",id:"1357-面试题",depth:3},{text:"13.6 外键约束",id:"136-外键约束",depth:2},{text:"13.6.1 作用",id:"1361-作用",depth:3},{text:"13.6.2 关键字",id:"1362-关键字",depth:3},{text:"13.6.3 主表和从表",id:"1363-主表和从表",depth:3},{text:"13.6.4 特点",id:"1364-特点",depth:3},{text:"13.6.4 添加外键约束",id:"1364-添加外键约束",depth:3},{text:"13.6.5 删除外键约束",id:"1365-删除外键约束",depth:3},{text:"13.6.6 约束等级",id:"1366-约束等级",depth:3},{text:"13.6.7 开发中的常见问题",id:"1367-开发中的常见问题",depth:3},{text:"13.6.8 阿里开发规范",id:"1368-阿里开发规范",depth:3},{text:"13.7 检查约束",id:"137-检查约束",depth:2},{text:"13.7.1 作用",id:"1371-作用",depth:3},{text:"13.7.2 关键字",id:"1372-关键字",depth:3},{text:"13.7.3 添加检查约束",id:"1373-添加检查约束",depth:3},{text:"13.7.4 删除检查约束",id:"1374-删除检查约束",depth:3},{text:"13.8 默认值约束",id:"138-默认值约束",depth:2},{text:"13.8.1 作用",id:"1381-作用",depth:3},{text:"13.8.2 关键字",id:"1382-关键字",depth:3},{text:"13.8.3 特点",id:"1383-特点",depth:3},{text:"13.8.4 添加默认值约束",id:"1384-添加默认值约束",depth:3},{text:"13.8.5 删除默认值约束",id:"1385-删除默认值约束",depth:3}],title:"13 约束",frontmatter:{}}}}]);