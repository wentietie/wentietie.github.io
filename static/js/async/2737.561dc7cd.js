"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["2737"],{84976:function(e,E,N){N.r(E),N.d(E,{default:function(){return r}});var L=N(85893),S=N(50065);function T(e){let E=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code"},(0,S.ah)(),e.components);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(E.h1,{id:"19-附表及其数据",children:[(0,L.jsx)(E.a,{className:"header-anchor","aria-hidden":"true",href:"#19-附表及其数据",children:"#"}),"19 附：表及其数据"]}),"\n",(0,L.jsx)(E.p,{children:"以上笔记中用到的表及其数据："}),"\n",(0,L.jsx)(E.pre,{children:(0,L.jsx)(E.code,{className:"language-mysql",meta:"",children:"-- ----------------------------\r\n-- Table structure for departments\r\n-- ----------------------------\r\nDROP TABLE IF EXISTS `departments`;\r\nCREATE TABLE `departments`  (\r\n  `department_id` int(0) NOT NULL DEFAULT 0,\r\n  `department_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,\r\n  `manager_id` int(0) NULL DEFAULT NULL,\r\n  `location_id` int(0) NULL DEFAULT NULL,\r\n  PRIMARY KEY (`department_id`) USING BTREE,\r\n  UNIQUE INDEX `dept_id_pk`(`department_id`) USING BTREE,\r\n  INDEX `dept_loc_fk`(`location_id`) USING BTREE,\r\n  INDEX `dept_mgr_fk`(`manager_id`) USING BTREE,\r\n  CONSTRAINT `dept_loc_fk` FOREIGN KEY (`location_id`) REFERENCES `locations` (`location_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,\r\n  CONSTRAINT `dept_mgr_fk` FOREIGN KEY (`manager_id`) REFERENCES `employees` (`employee_id`) ON DELETE RESTRICT ON UPDATE RESTRICT\r\n) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;\r\n-- ----------------------------\r\n-- Records of departments\r\n-- ----------------------------\r\nINSERT INTO `departments` VALUES (10, 'Administration', 200, 1700);\r\nINSERT INTO `departments` VALUES (20, 'Marketing', 201, 1800);\r\nINSERT INTO `departments` VALUES (30, 'Purchasing', 114, 1700);\r\nINSERT INTO `departments` VALUES (40, 'Human Resources', 203, 2400);\r\nINSERT INTO `departments` VALUES (50, 'Shipping', 121, 1500);\r\nINSERT INTO `departments` VALUES (60, 'IT', 103, 1400);\r\nINSERT INTO `departments` VALUES (70, 'Public Relations', 204, 2700);\r\nINSERT INTO `departments` VALUES (80, 'Sales', 145, 2500);\r\nINSERT INTO `departments` VALUES (90, 'Executive', 100, 1700);\r\nINSERT INTO `departments` VALUES (100, 'Finance', 108, 1700);\r\nINSERT INTO `departments` VALUES (110, 'Accounting', 205, 1700);\r\nINSERT INTO `departments` VALUES (120, 'Treasury', NULL, 1700);\r\nINSERT INTO `departments` VALUES (130, 'Corporate Tax', NULL, 1700);\r\nINSERT INTO `departments` VALUES (140, 'Control And Credit', NULL, 1700);\r\nINSERT INTO `departments` VALUES (150, 'Shareholder Services', NULL, 1700);\r\nINSERT INTO `departments` VALUES (160, 'Benefits', NULL, 1700);\r\nINSERT INTO `departments` VALUES (170, 'Manufacturing', NULL, 1700);\r\nINSERT INTO `departments` VALUES (180, 'Construction', NULL, 1700);\r\nINSERT INTO `departments` VALUES (190, 'Contracting', NULL, 1700);\r\nINSERT INTO `departments` VALUES (200, 'Operations', NULL, 1700);\r\nINSERT INTO `departments` VALUES (210, 'IT Support', NULL, 1700);\r\nINSERT INTO `departments` VALUES (220, 'NOC', NULL, 1700);\r\nINSERT INTO `departments` VALUES (230, 'IT Helpdesk', NULL, 1700);\r\nINSERT INTO `departments` VALUES (240, 'Government Sales', NULL, 1700);\r\nINSERT INTO `departments` VALUES (250, 'Retail Sales', NULL, 1700);\r\nINSERT INTO `departments` VALUES (260, 'Recruiting', NULL, 1700);\r\nINSERT INTO `departments` VALUES (270, 'Payroll', NULL, 1700);\r\n-- ----------------------------\r\n-- Table structure for employees\r\n-- ----------------------------\r\nDROP TABLE IF EXISTS `employees`;\r\nCREATE TABLE `employees`  (\r\n  `employee_id` int(0) NOT NULL DEFAULT 0,\r\n  `first_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `last_name` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,\r\n  `email` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,\r\n  `phone_number` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\r\n  `hire_date` date NOT NULL,\r\n  `job_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,\r\n  `salary` double(8, 2) NULL DEFAULT NULL,\r\n  `commission_pct` double(2, 2) NULL DEFAULT NULL,\r\n  `manager_id` int(0) NULL DEFAULT NULL,\r\n  `department_id` int(0) NULL DEFAULT NULL,\r\n  PRIMARY KEY (`employee_id`) USING BTREE,\r\n  UNIQUE INDEX `emp_email_uk`(`email`) USING BTREE,\r\n  UNIQUE INDEX `emp_emp_id_pk`(`employee_id`) USING BTREE,\r\n  INDEX `emp_job_fk`(`job_id`) USING BTREE,\r\n  INDEX `emp_manager_fk`(`manager_id`) USING BTREE,\r\n  INDEX `emp_dept_fk`(`department_id`) USING BTREE,\r\n  CONSTRAINT `emp_dept_fk` FOREIGN KEY (`department_id`) REFERENCES `departments` (`department_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,\r\n  CONSTRAINT `emp_job_fk` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`job_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,\r\n  CONSTRAINT `emp_manager_fk` FOREIGN KEY (`manager_id`) REFERENCES `employees` (`employee_id`) ON DELETE RESTRICT ON UPDATE RESTRICT\r\n) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;\r\n\r\n-- ----------------------------\r\n-- Records of employees\r\n-- ----------------------------\r\nINSERT INTO `employees` VALUES (100, 'Steven', 'King', 'SKING', '515.123.4567', '1987-06-17', 'AD_PRES', 24000.00, NULL, NULL, 90);\r\nINSERT INTO `employees` VALUES (101, 'Neena', 'Kochhar', 'NKOCHHAR', '515.123.4568', '1989-09-21', 'AD_VP', 17000.00, NULL, 100, 90);\r\nINSERT INTO `employees` VALUES (102, 'Lex', 'De Haan', 'LDEHAAN', '515.123.4569', '1993-01-13', 'AD_VP', 17000.00, NULL, 100, 90);\r\nINSERT INTO `employees` VALUES (103, 'Alexander', 'Hunold', 'AHUNOLD', '590.423.4567', '1990-01-03', 'IT_PROG', 9000.00, NULL, 102, 60);\r\nINSERT INTO `employees` VALUES (104, 'Bruce', 'Ernst', 'BERNST', '590.423.4568', '1991-05-21', 'IT_PROG', 6000.00, NULL, 103, 60);\r\nINSERT INTO `employees` VALUES (105, 'David', 'Austin', 'DAUSTIN', '590.423.4569', '1997-06-25', 'IT_PROG', 4800.00, NULL, 103, 60);\r\nINSERT INTO `employees` VALUES (106, 'Valli', 'Pataballa', 'VPATABAL', '590.423.4560', '1998-02-05', 'IT_PROG', 4800.00, NULL, 103, 60);\r\nINSERT INTO `employees` VALUES (107, 'Diana', 'Lorentz', 'DLORENTZ', '590.423.5567', '1999-02-07', 'IT_PROG', 4200.00, NULL, 103, 60);\r\nINSERT INTO `employees` VALUES (108, 'Nancy', 'Greenberg', 'NGREENBE', '515.124.4569', '1994-08-17', 'FI_MGR', 12000.00, NULL, 101, 100);\r\nINSERT INTO `employees` VALUES (109, 'Daniel', 'Faviet', 'DFAVIET', '515.124.4169', '1994-08-16', 'FI_ACCOUNT', 9000.00, NULL, 108, 100);\r\nINSERT INTO `employees` VALUES (110, 'John', 'Chen', 'JCHEN', '515.124.4269', '1997-09-28', 'FI_ACCOUNT', 8200.00, NULL, 108, 100);\r\nINSERT INTO `employees` VALUES (111, 'Ismael', 'Sciarra', 'ISCIARRA', '515.124.4369', '1997-09-30', 'FI_ACCOUNT', 7700.00, NULL, 108, 100);\r\nINSERT INTO `employees` VALUES (112, 'Jose Manuel', 'Urman', 'JMURMAN', '515.124.4469', '1998-03-07', 'FI_ACCOUNT', 7800.00, NULL, 108, 100);\r\nINSERT INTO `employees` VALUES (113, 'Luis', 'Popp', 'LPOPP', '515.124.4567', '1999-12-07', 'FI_ACCOUNT', 6900.00, NULL, 108, 100);\r\nINSERT INTO `employees` VALUES (114, 'Den', 'Raphaely', 'DRAPHEAL', '515.127.4561', '1994-12-07', 'PU_MAN', 11000.00, NULL, 100, 30);\r\nINSERT INTO `employees` VALUES (115, 'Alexander', 'Khoo', 'AKHOO', '515.127.4562', '1995-05-18', 'PU_CLERK', 3100.00, NULL, 114, 30);\r\nINSERT INTO `employees` VALUES (116, 'Shelli', 'Baida', 'SBAIDA', '515.127.4563', '1997-12-24', 'PU_CLERK', 2900.00, NULL, 114, 30);\r\nINSERT INTO `employees` VALUES (117, 'Sigal', 'Tobias', 'STOBIAS', '515.127.4564', '1997-07-24', 'PU_CLERK', 2800.00, NULL, 114, 30);\r\nINSERT INTO `employees` VALUES (118, 'Guy', 'Himuro', 'GHIMURO', '515.127.4565', '1998-11-15', 'PU_CLERK', 2600.00, NULL, 114, 30);\r\nINSERT INTO `employees` VALUES (119, 'Karen', 'Colmenares', 'KCOLMENA', '515.127.4566', '1999-08-10', 'PU_CLERK', 2500.00, NULL, 114, 30);\r\nINSERT INTO `employees` VALUES (120, 'Matthew', 'Weiss', 'MWEISS', '650.123.1234', '1996-07-18', 'ST_MAN', 8000.00, NULL, 100, 50);\r\nINSERT INTO `employees` VALUES (121, 'Adam', 'Fripp', 'AFRIPP', '650.123.2234', '1997-04-10', 'ST_MAN', 8200.00, NULL, 100, 50);\r\nINSERT INTO `employees` VALUES (122, 'Payam', 'Kaufling', 'PKAUFLIN', '650.123.3234', '1995-05-01', 'ST_MAN', 7900.00, NULL, 100, 50);\r\nINSERT INTO `employees` VALUES (123, 'Shanta', 'Vollman', 'SVOLLMAN', '650.123.4234', '1997-10-10', 'ST_MAN', 6500.00, NULL, 100, 50);\r\nINSERT INTO `employees` VALUES (124, 'Kevin', 'Mourgos', 'KMOURGOS', '650.123.5234', '1999-11-16', 'ST_MAN', 5800.00, NULL, 100, 50);\r\nINSERT INTO `employees` VALUES (125, 'Julia', 'Nayer', 'JNAYER', '650.124.1214', '1997-07-16', 'ST_CLERK', 3200.00, NULL, 120, 50);\r\nINSERT INTO `employees` VALUES (126, 'Irene', 'Mikkilineni', 'IMIKKILI', '650.124.1224', '1998-09-28', 'ST_CLERK', 2700.00, NULL, 120, 50);\r\nINSERT INTO `employees` VALUES (127, 'James', 'Landry', 'JLANDRY', '650.124.1334', '1999-01-14', 'ST_CLERK', 2400.00, NULL, 120, 50);\r\nINSERT INTO `employees` VALUES (128, 'Steven', 'Markle', 'SMARKLE', '650.124.1434', '2000-03-08', 'ST_CLERK', 2200.00, NULL, 120, 50);\r\nINSERT INTO `employees` VALUES (129, 'Laura', 'Bissot', 'LBISSOT', '650.124.5234', '1997-08-20', 'ST_CLERK', 3300.00, NULL, 121, 50);\r\nINSERT INTO `employees` VALUES (130, 'Mozhe', 'Atkinson', 'MATKINSO', '650.124.6234', '1997-10-30', 'ST_CLERK', 2800.00, NULL, 121, 50);\r\nINSERT INTO `employees` VALUES (131, 'James', 'Marlow', 'JAMRLOW', '650.124.7234', '1997-02-16', 'ST_CLERK', 2500.00, NULL, 121, 50);\r\nINSERT INTO `employees` VALUES (132, 'TJ', 'Olson', 'TJOLSON', '650.124.8234', '1999-04-10', 'ST_CLERK', 2100.00, NULL, 121, 50);\r\nINSERT INTO `employees` VALUES (133, 'Jason', 'Mallin', 'JMALLIN', '650.127.1934', '1996-06-14', 'ST_CLERK', 3300.00, NULL, 122, 50);\r\nINSERT INTO `employees` VALUES (134, 'Michael', 'Rogers', 'MROGERS', '650.127.1834', '1998-08-26', 'ST_CLERK', 2900.00, NULL, 122, 50);\r\nINSERT INTO `employees` VALUES (135, 'Ki', 'Gee', 'KGEE', '650.127.1734', '1999-12-12', 'ST_CLERK', 2400.00, NULL, 122, 50);\r\nINSERT INTO `employees` VALUES (136, 'Hazel', 'Philtanker', 'HPHILTAN', '650.127.1634', '2000-02-06', 'ST_CLERK', 2200.00, NULL, 122, 50);\r\nINSERT INTO `employees` VALUES (137, 'Renske', 'Ladwig', 'RLADWIG', '650.121.1234', '1995-07-14', 'ST_CLERK', 3600.00, NULL, 123, 50);\r\nINSERT INTO `employees` VALUES (138, 'Stephen', 'Stiles', 'SSTILES', '650.121.2034', '1997-10-26', 'ST_CLERK', 3200.00, NULL, 123, 50);\r\nINSERT INTO `employees` VALUES (139, 'John', 'Seo', 'JSEO', '650.121.2019', '1998-02-12', 'ST_CLERK', 2700.00, NULL, 123, 50);\r\nINSERT INTO `employees` VALUES (140, 'Joshua', 'Patel', 'JPATEL', '650.121.1834', '1998-04-06', 'ST_CLERK', 2500.00, NULL, 123, 50);\r\nINSERT INTO `employees` VALUES (141, 'Trenna', 'Rajs', 'TRAJS', '650.121.8009', '1995-10-17', 'ST_CLERK', 3500.00, NULL, 124, 50);\r\nINSERT INTO `employees` VALUES (142, 'Curtis', 'Davies', 'CDAVIES', '650.121.2994', '1997-01-29', 'ST_CLERK', 3100.00, NULL, 124, 50);\r\nINSERT INTO `employees` VALUES (143, 'Randall', 'Matos', 'RMATOS', '650.121.2874', '1998-03-15', 'ST_CLERK', 2600.00, NULL, 124, 50);\r\nINSERT INTO `employees` VALUES (144, 'Peter', 'Vargas', 'PVARGAS', '650.121.2004', '1998-07-09', 'ST_CLERK', 2500.00, NULL, 124, 50);\r\nINSERT INTO `employees` VALUES (145, 'John', 'Russell', 'JRUSSEL', '011.44.1344.429268', '1996-10-01', 'SA_MAN', 14000.00, 0.40, 100, 80);\r\nINSERT INTO `employees` VALUES (146, 'Karen', 'Partners', 'KPARTNER', '011.44.1344.467268', '1997-01-05', 'SA_MAN', 13500.00, 0.30, 100, 80);\r\nINSERT INTO `employees` VALUES (147, 'Alberto', 'Errazuriz', 'AERRAZUR', '011.44.1344.429278', '1997-03-10', 'SA_MAN', 12000.00, 0.30, 100, 80);\r\nINSERT INTO `employees` VALUES (148, 'Gerald', 'Cambrault', 'GCAMBRAU', '011.44.1344.619268', '1999-10-15', 'SA_MAN', 11000.00, 0.30, 100, 80);\r\nINSERT INTO `employees` VALUES (149, 'Eleni', 'Zlotkey', 'EZLOTKEY', '011.44.1344.429018', '2000-01-29', 'SA_MAN', 10500.00, 0.20, 100, 80);\r\nINSERT INTO `employees` VALUES (150, 'Peter', 'Tucker', 'PTUCKER', '011.44.1344.129268', '1997-01-30', 'SA_REP', 10000.00, 0.30, 145, 80);\r\nINSERT INTO `employees` VALUES (151, 'David', 'Bernstein', 'DBERNSTE', '011.44.1344.345268', '1997-03-24', 'SA_REP', 9500.00, 0.25, 145, 80);\r\nINSERT INTO `employees` VALUES (152, 'Peter', 'Hall', 'PHALL', '011.44.1344.478968', '1997-08-20', 'SA_REP', 9000.00, 0.25, 145, 80);\r\nINSERT INTO `employees` VALUES (153, 'Christopher', 'Olsen', 'COLSEN', '011.44.1344.498718', '1998-03-30', 'SA_REP', 8000.00, 0.20, 145, 80);\r\nINSERT INTO `employees` VALUES (154, 'Nanette', 'Cambrault', 'NCAMBRAU', '011.44.1344.987668', '1998-12-09', 'SA_REP', 7500.00, 0.20, 145, 80);\r\nINSERT INTO `employees` VALUES (155, 'Oliver', 'Tuvault', 'OTUVAULT', '011.44.1344.486508', '1999-11-23', 'SA_REP', 7000.00, 0.15, 145, 80);\r\nINSERT INTO `employees` VALUES (156, 'Janette', 'King', 'JKING', '011.44.1345.429268', '1996-01-30', 'SA_REP', 10000.00, 0.35, 146, 80);\r\nINSERT INTO `employees` VALUES (157, 'Patrick', 'Sully', 'PSULLY', '011.44.1345.929268', '1996-03-04', 'SA_REP', 9500.00, 0.35, 146, 80);\r\nINSERT INTO `employees` VALUES (158, 'Allan', 'McEwen', 'AMCEWEN', '011.44.1345.829268', '1996-08-01', 'SA_REP', 9000.00, 0.35, 146, 80);\r\nINSERT INTO `employees` VALUES (159, 'Lindsey', 'Smith', 'LSMITH', '011.44.1345.729268', '1997-03-10', 'SA_REP', 8000.00, 0.30, 146, 80);\r\nINSERT INTO `employees` VALUES (160, 'Louise', 'Doran', 'LDORAN', '011.44.1345.629268', '1997-12-15', 'SA_REP', 7500.00, 0.30, 146, 80);\r\nINSERT INTO `employees` VALUES (161, 'Sarath', 'Sewall', 'SSEWALL', '011.44.1345.529268', '1998-11-03', 'SA_REP', 7000.00, 0.25, 146, 80);\r\nINSERT INTO `employees` VALUES (162, 'Clara', 'Vishney', 'CVISHNEY', '011.44.1346.129268', '1997-11-11', 'SA_REP', 10500.00, 0.25, 147, 80);\r\nINSERT INTO `employees` VALUES (163, 'Danielle', 'Greene', 'DGREENE', '011.44.1346.229268', '1999-03-19', 'SA_REP', 9500.00, 0.15, 147, 80);\r\nINSERT INTO `employees` VALUES (164, 'Mattea', 'Marvins', 'MMARVINS', '011.44.1346.329268', '2000-01-24', 'SA_REP', 7200.00, 0.10, 147, 80);\r\nINSERT INTO `employees` VALUES (165, 'David', 'Lee', 'DLEE', '011.44.1346.529268', '2000-02-23', 'SA_REP', 6800.00, 0.10, 147, 80);\r\nINSERT INTO `employees` VALUES (166, 'Sundar', 'Ande', 'SANDE', '011.44.1346.629268', '2000-03-24', 'SA_REP', 6400.00, 0.10, 147, 80);\r\nINSERT INTO `employees` VALUES (167, 'Amit', 'Banda', 'ABANDA', '011.44.1346.729268', '2000-04-21', 'SA_REP', 6200.00, 0.10, 147, 80);\r\nINSERT INTO `employees` VALUES (168, 'Lisa', 'Ozer', 'LOZER', '011.44.1343.929268', '1997-03-11', 'SA_REP', 11500.00, 0.25, 148, 80);\r\nINSERT INTO `employees` VALUES (169, 'Harrison', 'Bloom', 'HBLOOM', '011.44.1343.829268', '1998-03-23', 'SA_REP', 10000.00, 0.20, 148, 80);\r\nINSERT INTO `employees` VALUES (170, 'Tayler', 'Fox', 'TFOX', '011.44.1343.729268', '1998-01-24', 'SA_REP', 9600.00, 0.20, 148, 80);\r\nINSERT INTO `employees` VALUES (171, 'William', 'Smith', 'WSMITH', '011.44.1343.629268', '1999-02-23', 'SA_REP', 7400.00, 0.15, 148, 80);\r\nINSERT INTO `employees` VALUES (172, 'Elizabeth', 'Bates', 'EBATES', '011.44.1343.529268', '1999-03-24', 'SA_REP', 7300.00, 0.15, 148, 80);\r\nINSERT INTO `employees` VALUES (173, 'Sundita', 'Kumar', 'SKUMAR', '011.44.1343.329268', '2000-04-21', 'SA_REP', 6100.00, 0.10, 148, 80);\r\nINSERT INTO `employees` VALUES (174, 'Ellen', 'Abel', 'EABEL', '011.44.1644.429267', '1996-05-11', 'SA_REP', 11000.00, 0.30, 149, 80);\r\nINSERT INTO `employees` VALUES (175, 'Alyssa', 'Hutton', 'AHUTTON', '011.44.1644.429266', '1997-03-19', 'SA_REP', 8800.00, 0.25, 149, 80);\r\nINSERT INTO `employees` VALUES (176, 'Jonathon', 'Taylor', 'JTAYLOR', '011.44.1644.429265', '1998-03-24', 'SA_REP', 8600.00, 0.20, 149, 80);\r\nINSERT INTO `employees` VALUES (177, 'Jack', 'Livingston', 'JLIVINGS', '011.44.1644.429264', '1998-04-23', 'SA_REP', 8400.00, 0.20, 149, 80);\r\nINSERT INTO `employees` VALUES (178, 'Kimberely', 'Grant', 'KGRANT', '011.44.1644.429263', '1999-05-24', 'SA_REP', 7000.00, 0.15, 149, NULL);\r\nINSERT INTO `employees` VALUES (179, 'Charles', 'Johnson', 'CJOHNSON', '011.44.1644.429262', '2000-01-04', 'SA_REP', 6200.00, 0.10, 149, 80);\r\nINSERT INTO `employees` VALUES (180, 'Winston', 'Taylor', 'WTAYLOR', '650.507.9876', '1998-01-24', 'SH_CLERK', 3200.00, NULL, 120, 50);\r\nINSERT INTO `employees` VALUES (181, 'Jean', 'Fleaur', 'JFLEAUR', '650.507.9877', '1998-02-23', 'SH_CLERK', 3100.00, NULL, 120, 50);\r\nINSERT INTO `employees` VALUES (182, 'Martha', 'Sullivan', 'MSULLIVA', '650.507.9878', '1999-06-21', 'SH_CLERK', 2500.00, NULL, 120, 50);\r\nINSERT INTO `employees` VALUES (183, 'Girard', 'Geoni', 'GGEONI', '650.507.9879', '2000-02-03', 'SH_CLERK', 2800.00, NULL, 120, 50);\r\nINSERT INTO `employees` VALUES (184, 'Nandita', 'Sarchand', 'NSARCHAN', '650.509.1876', '1996-01-27', 'SH_CLERK', 4200.00, NULL, 121, 50);\r\nINSERT INTO `employees` VALUES (185, 'Alexis', 'Bull', 'ABULL', '650.509.2876', '1997-02-20', 'SH_CLERK', 4100.00, NULL, 121, 50);\r\nINSERT INTO `employees` VALUES (186, 'Julia', 'Dellinger', 'JDELLING', '650.509.3876', '1998-06-24', 'SH_CLERK', 3400.00, NULL, 121, 50);\r\nINSERT INTO `employees` VALUES (187, 'Anthony', 'Cabrio', 'ACABRIO', '650.509.4876', '1999-02-07', 'SH_CLERK', 3000.00, NULL, 121, 50);\r\nINSERT INTO `employees` VALUES (188, 'Kelly', 'Chung', 'KCHUNG', '650.505.1876', '1997-06-14', 'SH_CLERK', 3800.00, NULL, 122, 50);\r\nINSERT INTO `employees` VALUES (189, 'Jennifer', 'Dilly', 'JDILLY', '650.505.2876', '1997-08-13', 'SH_CLERK', 3600.00, NULL, 122, 50);\r\nINSERT INTO `employees` VALUES (190, 'Timothy', 'Gates', 'TGATES', '650.505.3876', '1998-07-11', 'SH_CLERK', 2900.00, NULL, 122, 50);\r\nINSERT INTO `employees` VALUES (191, 'Randall', 'Perkins', 'RPERKINS', '650.505.4876', '1999-12-19', 'SH_CLERK', 2500.00, NULL, 122, 50);\r\nINSERT INTO `employees` VALUES (192, 'Sarah', 'Bell', 'SBELL', '650.501.1876', '1996-02-04', 'SH_CLERK', 4000.00, NULL, 123, 50);\r\nINSERT INTO `employees` VALUES (193, 'Britney', 'Everett', 'BEVERETT', '650.501.2876', '1997-03-03', 'SH_CLERK', 3900.00, NULL, 123, 50);\r\nINSERT INTO `employees` VALUES (194, 'Samuel', 'McCain', 'SMCCAIN', '650.501.3876', '1998-07-01', 'SH_CLERK', 3200.00, NULL, 123, 50);\r\nINSERT INTO `employees` VALUES (195, 'Vance', 'Jones', 'VJONES', '650.501.4876', '1999-03-17', 'SH_CLERK', 2800.00, NULL, 123, 50);\r\nINSERT INTO `employees` VALUES (196, 'Alana', 'Walsh', 'AWALSH', '650.507.9811', '1998-04-24', 'SH_CLERK', 3100.00, NULL, 124, 50);\r\nINSERT INTO `employees` VALUES (197, 'Kevin', 'Feeney', 'KFEENEY', '650.507.9822', '1998-05-23', 'SH_CLERK', 3000.00, NULL, 124, 50);\r\nINSERT INTO `employees` VALUES (198, 'Donald', 'OConnell', 'DOCONNEL', '650.507.9833', '1999-06-21', 'SH_CLERK', 2600.00, NULL, 124, 50);\r\nINSERT INTO `employees` VALUES (199, 'Douglas', 'Grant', 'DGRANT', '650.507.9844', '2000-01-13', 'SH_CLERK', 2600.00, NULL, 124, 50);\r\nINSERT INTO `employees` VALUES (200, 'Jennifer', 'Whalen', 'JWHALEN', '515.123.4444', '1987-09-17', 'AD_ASST', 4400.00, NULL, 101, 10);\r\nINSERT INTO `employees` VALUES (201, 'Michael', 'Hartstein', 'MHARTSTE', '515.123.5555', '1996-02-17', 'MK_MAN', 13000.00, NULL, 100, 20);\r\nINSERT INTO `employees` VALUES (202, 'Pat', 'Fay', 'PFAY', '603.123.6666', '1997-08-17', 'MK_REP', 6000.00, NULL, 201, 20);\r\nINSERT INTO `employees` VALUES (203, 'Susan', 'Mavris', 'SMAVRIS', '515.123.7777', '1994-06-07', 'HR_REP', 6500.00, NULL, 101, 40);\r\nINSERT INTO `employees` VALUES (204, 'Hermann', 'Baer', 'HBAER', '515.123.8888', '1994-06-07', 'PR_REP', 10000.00, NULL, 101, 70);\r\nINSERT INTO `employees` VALUES (205, 'Shelley', 'Higgins', 'SHIGGINS', '515.123.8080', '1994-06-07', 'AC_MGR', 12000.00, NULL, 101, 110);\r\nINSERT INTO `employees` VALUES (206, 'William', 'Gietz', 'WGIETZ', '515.123.8181', '1994-06-07', 'AC_ACCOUNT', 8300.00, NULL, 205, 110);\n"})})]})}function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:E}=Object.assign({},(0,S.ah)(),e.components);return E?(0,L.jsx)(E,Object.assign({},e,{children:(0,L.jsx)(T,e)})):T(e)}let r=n;n.__RSPRESS_PAGE_META={},n.__RSPRESS_PAGE_META["tang%2Fmysql%2F19_%E8%A1%A8%E5%8F%8A%E5%85%B6%E6%95%B0%E6%8D%AE.md"]={toc:[],title:"19 附：表及其数据",headingTitle:"19 附：表及其数据",frontmatter:{}}}}]);