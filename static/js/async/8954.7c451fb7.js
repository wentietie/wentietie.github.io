"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["8954"],{44901:function(n,e,l){l.r(e),l.d(e,{default:function(){return d}});var r=l(85893),s=l(50065);function c(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",blockquote:"blockquote",p:"p",pre:"pre",code:"code",strong:"strong"},(0,s.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"11-数据处理之增删改",children:["11 数据处理之增删改",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#11-数据处理之增删改",children:"#"})]}),"\n",(0,r.jsxs)(e.h2,{id:"111-插入数据",children:["11.1 插入数据",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#111-插入数据",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"为表的所有字段插入数据"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"INSERT INTO 表名\r\nVALUES (value1, value2, value3, ...);  \n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"值列表中值的顺序必须和表中字段定义的顺序保持一致"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"为表中指定的字段插入数据"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"INSERT INTO 表名(column1 [, column2, column3, ...])\r\nVALUES (value1 [, value2, value3, ...]);  \n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"INSERT字句中的列名顺序可以随意，但值列表中值的顺序必须和其保持一致"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"同时插入多条数据"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"INSERT INTO 表名\r\nVALUES \r\n	(value1, value2, value3, ...),\r\n	(value1, value2, value3, ...),\r\n	(value1, value2, value3, ...),\r\n	...\r\n	;  \n"})}),"\n",(0,r.jsx)(e.p,{children:"或"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"INSERT INTO 表名(column1 [, column2, column3, ...])\r\nVALUES \r\n	(value1 [, value2, value3, ...]),\r\n	(value1 [, value2, value3, ...]),\r\n	(value1 [, value2, value3, ...]),\r\n	...\r\n	;  \n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"将查询结果插入到表中"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"不必写VALUES字句"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"INSERT INTO 表1(column1 [, column2, column3, ...])\r\nSELECT column1 [, column2, column3, ...] # 查询的字段一定要与添加到的表的字段一一对应\r\nFROM 表2\r\nWHERE ...\n"})}),"\n",(0,r.jsx)(e.p,{children:"说明：表1中要添加数据的字段的长度不能低于表2中查询的字段的长度。否则，就有添加不成功的风险。"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"小结：插入多条数据 VS 多个单行插入"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["同时插入多条数据比多个单行插入",(0,r.jsx)(e.strong,{children:"效率更高"}),"。因为MySQL在执行单条插入语句时比使用多条插入语句快，所以",(0,r.jsx)(e.strong,{children:"在插入多条记录时，最好选择使用一个INSERT语句同时插入多条数据"}),"。"]}),"\n",(0,r.jsxs)(e.h2,{id:"112-更新数据",children:["11.2 更新数据",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#112-更新数据",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["如果需要回滚数据，需要保证在DML之前，进行设置：",(0,r.jsx)(e.strong,{children:"SET AUTOCOMMIT = FALSE;"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"UPDATE 表名\r\nSET 列名1 = 新值1 [, 列名2 = 新值2, ...]\r\n[WHERE 查询条件];\n"})}),"\n",(0,r.jsx)(e.p,{children:"修改数据时，是可能存在不成功的情况的。（可能是由于约束的影响造成的）"}),"\n",(0,r.jsxs)(e.h2,{id:"113-删除数据",children:["11.3 删除数据",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#113-删除数据",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["如果需要回滚数据，需要保证在DML之前，进行设置：",(0,r.jsx)(e.strong,{children:"SET AUTOCOMMIT = FALSE;"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"DELETE \r\nFROM 表名\r\n[WHERE 查询条件];\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"如果省略查询条件，表示将表中的数据全部删除。"})}),"\n",(0,r.jsx)(e.p,{children:"在删除数据时，也有可能因为约束的影响，导致删除失败。"}),"\n",(0,r.jsxs)(e.h2,{id:"114-mysql8新特性计算列",children:["11.4 MySQL8新特性：计算列",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#114-mysql8新特性计算列",children:"#"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"定义"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"计算列，就是指某一列的值是通过别的列计算得来的。是在创建表的时候来定义计算列"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"举例"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"CREATE TABLE tb1(\r\nid INT,\r\na INT,\r\nb INT,\r\nc INT GENERATED ALWAYS AS (a + b) VIRTUAL # 字段c即为计算列\r\n);\n"})})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}let d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["tang%2Fmysql%2F11_%E6%95%B0%E6%8D%AE%E7%9A%84%E5%A2%9E%E5%88%A0%E6%94%B9.md"]={toc:[{text:"11.1 插入数据",id:"111-插入数据",depth:2},{text:"11.2 更新数据",id:"112-更新数据",depth:2},{text:"11.3 删除数据",id:"113-删除数据",depth:2},{text:"11.4 MySQL8新特性：计算列",id:"114-mysql8新特性计算列",depth:2}],title:"11 数据处理之增删改",frontmatter:{}}}}]);