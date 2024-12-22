"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["8398"],{7068:function(e,n,r){r.r(n),r.d(n,{default:function(){return l}});var d=r(85893),s=r(50065);function h(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",blockquote:"blockquote",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"9-子查询",children:["9 子查询",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#9-子查询",children:"#"})]}),"\n",(0,d.jsxs)(n.h2,{id:"91-概述",children:["9.1 概述",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#91-概述",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"911-定义与语法",children:["9.1.1 定义与语法",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#911-定义与语法",children:"#"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"定义"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"子查询是指一个查询语句嵌套在另外一个查询语句内部"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"语法"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["子查询可以在",(0,d.jsx)(n.code,{children:"SELECT"}),"、",(0,d.jsx)(n.code,{children:"WHERE"}),"、",(0,d.jsx)(n.code,{children:"HAVING"}),"、",(0,d.jsx)(n.code,{children:"CASE"})," 语句中使用。基本语法如下"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-mysql",children:"SELECT ..., ..., ...\r\nFROM ...\r\nWHERE 表达式左侧内容 操作符 (子查询)\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"子查询的结果被主查询使用"}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"子查询要包含在一对小括号内"}),"\n",(0,d.jsx)(n.li,{children:"将子查询放在比较条件的右侧 ===> 美观"}),"\n",(0,d.jsx)(n.li,{children:"单行操作符对应单行子查询，多行操作符对应多行子查询，此外，多行子查询中也可以单行操作符和多行操作符一起使用。"}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"912-子查询分类",children:["9.1.2 子查询分类",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#912-子查询分类",children:"#"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["分类方式1：","按照子查询的返回结果是一条和多条记录分"]}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"单行子查询"}),"：子查询的返回结果是一条记录"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"多行子查询"}),"：子查询的返回结果是多条记录"]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["分类方式2：","按照子查询的执行是否依赖主查询分"]}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"相关子查询"}),"：子查询的执行依赖外部情况，通常是指",(0,d.jsx)(n.strong,{children:"子查询使用了外部的表，并进行了条件关联"}),"。每执行一次外部查询，子查询都要重新计算一次。"]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"不相关子查询"})}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"92-单行子查询",children:["9.2 单行子查询",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#92-单行子查询",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"921-单行比较操作符",children:["9.2.1 单行比较操作符",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#921-单行比较操作符",children:"#"})]}),"\n",(0,d.jsxs)(n.table,{children:["\n",(0,d.jsxs)(n.thead,{children:["\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.th,{children:"操作符"}),"\n",(0,d.jsx)(n.th,{children:"含义"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.tbody,{children:["\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:"="}),"\n",(0,d.jsx)(n.td,{children:"等于"}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:">"}),"\n",(0,d.jsx)(n.td,{children:"大于"}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:">="}),"\n",(0,d.jsx)(n.td,{children:"大于等于"}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:"<"}),"\n",(0,d.jsx)(n.td,{children:"小于"}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:"<="}),"\n",(0,d.jsx)(n.td,{children:"小于等于"}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:"<>"}),"\n",(0,d.jsx)(n.td,{children:"不等于"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"922-示例",children:["9.2.2 示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#922-示例",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-mysql",children:"# 查询工资比公司平均工资高的员工的员工号，姓名和工资。\r\nSELECT employee_id, last_name, salary\r\nFROM employees\r\nWHERE salary > (\r\n                    SELECT AVG(salary)\r\n                    FROM employees\r\n                )\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"923-其他说明",children:["9.2.3 其他说明",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#923-其他说明",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"如果子查询的结果为空，主查询也不会报错"}),"\n",(0,d.jsx)(n.li,{children:"当子查询返回多行记录时，如果只使用单行比较操作符，会报错"}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"92-多行子查询",children:["9.2 多行子查询",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#92-多行子查询",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"921-多行比较操作符",children:["9.2.1 多行比较操作符",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#921-多行比较操作符",children:"#"})]}),"\n",(0,d.jsxs)(n.table,{children:["\n",(0,d.jsxs)(n.thead,{children:["\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.th,{children:"操作符"}),"\n",(0,d.jsx)(n.th,{children:"含义"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.tbody,{children:["\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:"IN"}),"\n",(0,d.jsxs)(n.td,{children:["等于列表中的",(0,d.jsx)(n.strong,{children:"任意一个"})]}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:"ANY"}),"\n",(0,d.jsxs)(n.td,{children:["需要和单行比较操作符一起使用","，和子查询返回的",(0,d.jsx)(n.strong,{children:"某一个值"}),"比较"]}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:"ALL"}),"\n",(0,d.jsxs)(n.td,{children:["需要和单行比较操作符一起使用","，和子查询返回的",(0,d.jsx)(n.strong,{children:"所有值"}),"比较"]}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:"SOME"}),"\n",(0,d.jsx)(n.td,{children:"实际上是ANY的别名，作用相同，一般常使用ANY"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"922-示例-1",children:["9.2.2 示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#922-示例-1",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-mysql",children:"# 选择工资大于所有JOB_ID = 'SA_MAN'的员工的工资的员工的last_name, job_id, salary\r\nSELECT last_name, job_id, salary\r\nFROM employees\r\nWHERE salary > ALL (\r\n                        SELECT salary\r\n                        FROM employees\r\n                        WHERE job_id = 'SA_MAN'\r\n                    )\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"923-其他说明-1",children:["9.2.3 其他说明",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#923-其他说明-1",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"无"}),"\n",(0,d.jsxs)(n.h2,{id:"93-相关子查询",children:["9.3 相关子查询",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#93-相关子查询",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"931-概述",children:["9.3.1 概述",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#931-概述",children:"#"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"相关子查询与不相关子查询"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["相关子查询和不相关子查询的区别是，",(0,d.jsx)(n.strong,{children:"相关子查询中的子查询使用了外部的表，并进行了条件关联"}),"。"]}),"\n",(0,d.jsxs)(n.p,{children:["比如：查询员工工资高于",(0,d.jsx)(n.strong,{children:"部门平均工资"}),"的员工信息，是相关子查询；查询员工工资高于",(0,d.jsx)(n.strong,{children:"公司平均工资"}),"的员工信息，是不相关查询。"]}),"\n",(0,d.jsxs)(n.h3,{id:"932-示例",children:["9.3.2 示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#932-示例",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-mysql",children:"# 查询员工中工资大于本部门平均工资的员工的last_name,salary和其department_id\r\nSELECT last_name, salary, department_id\r\nFROM employees o\r\nWHERE department_id IS NOT NULL\r\nAND salary > (\r\n                SELECT AVG(salary)\r\n                FROM employees i\r\n                WHERE i.department_id = o.department_id\r\n            ) \r\n							\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"933-exists-与-not-exists关键字",children:["9.3.3 EXISTS 与 NOT EXISTS关键字",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#933-exists-与-not-exists关键字",children:"#"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"概述"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["相关子查询通常会和",(0,d.jsx)(n.strong,{children:"EXISTS"}),"操作符一起来使用，用来检查在子查询中是否存在满足条件的行："]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"如果当前查询不满足条件"}),"，此时返回false，并继续在子查询中查找；"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"如果找到了满足条件的行"}),"，此时返回true，结束查找"]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"示例"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-mysql",children:"# 查询departments表中，不存在于employees表中的部门的department_id和department_name\r\nSELECT d.department_id, d.department_name\r\nFROM departments d\r\nWHERE NOT EXISTS (\r\n                    SELECT e.department_id \r\n                    FROM employees e\r\n                    WHERE e.department_id = d.department_id\r\n                ) \n"})}),"\n",(0,d.jsxs)(n.p,{children:["如上",(0,d.jsx)(n.strong,{children:"子查询"}),"的",(0,d.jsx)(n.code,{children:" SELECT e.department_id "}),"，也可以写成",(0,d.jsx)(n.code,{children:" SELECT * "})," 、 ",(0,d.jsx)(n.code,{children:" SELECT 'x' "}),"等。",(0,d.jsx)(n.strong,{children:"只要满足子查询条件就会返回true，不会返回SELECT中的列"}),"。"]}),"\n",(0,d.jsxs)(n.h2,{id:"94-相关更新",children:["9.4 相关更新",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#94-相关更新",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"941-基本语法",children:["9.4.1 基本语法",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#941-基本语法",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-mysql",children:"UPDATE 数据库表1 表别名1\r\nSET column = (SELECT 字段名\r\nFROM 数据库表2 表别名2\r\nWHERE 表别名1.列名 = 表别名2.列名);\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"942-示例",children:["9.4.2 示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#942-示例",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-mysql",children:"# 在employees中增加一个department_name字段，数据为员工对应的部门名称\r\n# 1）\r\nALTER TABLE employees ADD(department_name VARCHAR2(14));\r\n# 2）\r\nUPDATE employees e\r\nSET department_name = (\r\n    SELECT department_name\r\n	FROM departments d\r\n	WHERE e.department_id = d.department_id\r\n);\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"95-相关删除",children:["9.5 相关删除",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#95-相关删除",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"951-基本语法",children:["9.5.1 基本语法",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#951-基本语法",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-mysql",children:"DELETE FROM 数据库表1 表别名1\r\nWHERE 列名 操作符 (\r\n    SELECT expression\r\n	FROM 数据库表2 表别名2\r\n	WHERE 表别名1.列名 = 表别名2.列名\r\n);\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"952-示例",children:["9.5.2 示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#952-示例",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-mysql",children:"# 删除表employees中，其与emp_history表皆有的数据\r\nDELETE FROM employees e\r\nWHERE employee_id in (\r\n    SELECT employee_id\r\n	FROM emp_history\r\n	WHERE employee_id = e.employee_id\r\n);\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}let l=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["tang%2Fmysql%2F09_%E5%AD%90%E6%9F%A5%E8%AF%A2.md"]={toc:[{text:"9.1 概述",id:"91-概述",depth:2},{text:"9.1.1 定义与语法",id:"911-定义与语法",depth:3},{text:"9.1.2 子查询分类",id:"912-子查询分类",depth:3},{text:"9.2 单行子查询",id:"92-单行子查询",depth:2},{text:"9.2.1 单行比较操作符",id:"921-单行比较操作符",depth:3},{text:"9.2.2 示例",id:"922-示例",depth:3},{text:"9.2.3 其他说明",id:"923-其他说明",depth:3},{text:"9.2 多行子查询",id:"92-多行子查询",depth:2},{text:"9.2.1 多行比较操作符",id:"921-多行比较操作符",depth:3},{text:"9.2.2 示例",id:"922-示例-1",depth:3},{text:"9.2.3 其他说明",id:"923-其他说明-1",depth:3},{text:"9.3 相关子查询",id:"93-相关子查询",depth:2},{text:"9.3.1 概述",id:"931-概述",depth:3},{text:"9.3.2 示例",id:"932-示例",depth:3},{text:"9.3.3 EXISTS 与 NOT EXISTS关键字",id:"933-exists-与-not-exists关键字",depth:3},{text:"9.4 相关更新",id:"94-相关更新",depth:2},{text:"9.4.1 基本语法",id:"941-基本语法",depth:3},{text:"9.4.2 示例",id:"942-示例",depth:3},{text:"9.5 相关删除",id:"95-相关删除",depth:2},{text:"9.5.1 基本语法",id:"951-基本语法",depth:3},{text:"9.5.2 示例",id:"952-示例",depth:3}],title:"9 子查询",frontmatter:{}}}}]);