"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["7610"],{21134:function(e,n,r){r.r(n),r.d(n,{default:function(){return c}});var s=r(85893),a=r(50065);function i(e){let n=Object.assign({h1:"h1",a:"a",ol:"ol",li:"li",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",ul:"ul",h4:"h4",div:"div",h5:"h5"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"ioc容器",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ioc容器",children:"#"}),"IOC容器"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"控制反转，把对象的创建和对象间的调用过程交给spring管理"}),"\n",(0,s.jsx)(n.li,{children:"目的：降低代码耦合"}),"\n"]}),"\n",(0,s.jsxs)(n.h1,{id:"ioc-底层原理",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ioc-底层原理",children:"#"}),"IOC 底层原理"]}),"\n",(0,s.jsxs)(n.h2,{id:"过程",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#过程",children:"#"}),"过程"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"xml配置文件，配置已经创建的对象"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"创建工厂类"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",meta:"",children:"class Factory {\r\n    public static Test getTest(){\r\n        String classPath = bean.class; // xml 解析\r\n        Class wantClass = Class.forName(classPath); // 通过反射获取创建的对象  \r\n        return (Test)wantClass.newInstance();\r\n    }\r\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"IOC 接口（BeanFactory）"}),"\n",(0,s.jsx)(n.p,{children:"spring 提供IOC容器实现的两种方式："}),"\n",(0,s.jsxs)(n.h3,{id:"beanfactory",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beanfactory",children:"#"}),"BeanFactory"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"IOC容器的基本实现，是Spring的内部接口，不提供开发人员进行使用"}),"\n",(0,s.jsx)(n.li,{children:"在加载配置文件时不会创建对象，在获取对象时才会创建"}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"applicationcontext",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#applicationcontext",children:"#"}),"ApplicationContext"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"BeanFactory的子接口，提供更多更强大的功能，提供给开发人员使用。"}),"\n",(0,s.jsx)(n.li,{children:"加载配置文件时就会把配置文件中的对象创建。"}),"\n"]}),"\n",(0,s.jsxs)(n.h1,{id:"ioc操作bean管理",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ioc操作bean管理",children:"#"}),"IOC操作Bean管理"]}),"\n",(0,s.jsx)(n.p,{children:"Bean管理"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"spring 创建对象，利用xml及反射获取普通对象"}),"\n",(0,s.jsx)(n.li,{children:"spring 注入属性，利用spring注入JavaBean"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"基于xml",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基于xml",children:"#"}),"基于xml"]}),"\n",(0,s.jsxs)(n.h3,{id:"创建对象",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建对象",children:"#"}),"创建对象"]}),"\n",(0,s.jsx)(n.p,{children:"过程同概述中的创建过程。"}),"\n",(0,s.jsxs)(n.h4,{id:"bean标签中的常用属性",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bean标签中的常用属性",children:"#"}),"bean标签中的常用属性"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"id: 获取对象的唯一标识。"}),"\n",(0,s.jsx)(n.li,{children:"class: 类的全路径"}),"\n",(0,s.jsx)(n.li,{children:"name: 类似id，用的较少"}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"spring 创建对象时，默认执行无参数构造方法进行对象的创建"}),(0,s.jsx)(n.div,{className:"rspress-directive-content"})]}),"\n",(0,s.jsxs)(n.h3,{id:"注入属性",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注入属性",children:"#"}),"注入属性"]}),"\n",(0,s.jsxs)(n.h4,{id:"di依赖注入",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#di依赖注入",children:"#"}),"DI：依赖注入"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"使用set方法"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"正常创建属性和set方法"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"在配置文件中的bean标签中写property标签"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",meta:"",children:'<bean id="user" class="com.spring5.study.User">\r\n        \x3c!--\r\n        name: 属性名称\r\n        value: 属性值\r\n        --\x3e\r\n        <property name="userName" value=""></property>\r\n    </bean>\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"使用有参构造"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"创建类，定义属性及构造方法"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",meta:"",children:"public class Order {\r\n  private String orderName;\r\n\r\n  public Order(String name) {\r\n    this.orderName = name;\r\n  }\r\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"在配置文件中进行配置"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",meta:"",children:'<bean id="order" class="com.spring5.study.Order">\r\n    <constructor-arg name="name" value="电脑"></constructor-arg>\r\n</bean>\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"注入其他属性",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注入其他属性",children:"#"}),"注入其他属性"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"字面量"}),"\n",(0,s.jsxs)(n.h5,{id:"注入空值",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注入空值",children:"#"}),"注入空值"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",meta:"",children:'<property name="orderCreateDate">\r\n    <null />\r\n</property>\n'})}),"\n",(0,s.jsxs)(n.h5,{id:"注入特殊符号",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注入特殊符号",children:"#"}),"注入特殊符号"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",meta:"",children:'<property name="orderAddress">\r\n    <value><![CDATA[<<南京>>]]></value>\r\n</property>\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"外部bean"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"创建普通类和对象"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",meta:"",children:"package com.spring5.study.dao;\r\npublic interface UserDaoInterface {\r\n  public void update();\r\n}\r\n\r\npackage com.spring5.study.dao;\r\npublic class UserDao implements UserDaoInterface {\r\n\r\n  @Override\r\n  public void update(){\r\n\r\n  }\r\n}\r\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"在调用类中声明被调用类的变量和set方法"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",meta:"",children:'package com.spring5.study.service;\r\n\r\nimport com.spring5.study.dao.UserDao;\r\n\r\npublic class UserService {\r\n  private UserDao userDao;\r\n  public void setUserDao(UserDao dao){\r\n    this.userDao = dao;\r\n  }\r\n\r\n  public void add() {\r\n    System.out.println("add...");\r\n  }\r\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"在配置文件中进行配置"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",meta:"",children:'<bean id="userService" class="com.spring5.study.service.UserService">\r\n    \x3c!--        注入userDao --\x3e\r\n    <property name="userDao" ref="userDao"></property>\r\n</bean>\r\n<bean id="userDao" class="com.spring5.study.dao.UserDao"></bean>\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"内部bean"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"一对多关系"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"在实体类之间表示"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"配置"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",meta:"",children:'<bean id="emp" class="com.spring5.study.innerBean.Emp">\r\n    <property name="employeeName" value="文阿铁"></property>\r\n    <property name="gender" value="男"></property>\r\n    <property name="dept">\r\n        <bean id="dept" class="com.spring5.study.innerBean.Dept"></bean>\r\n    </property>\r\n</bean>\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"内部和外部bean区别"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"配置文件中是使用bean给属性赋值还是用ref给属性赋值"}),"\n",(0,s.jsx)(n.li,{children:"内部bean只能被当前bean使用，外部bean可以被多个bean使用"}),"\n"]})})]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"级联赋值"}),"\n",(0,s.jsxs)(n.h5,{id:"第一种写法外部bean",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#第一种写法外部bean",children:"#"}),"第一种写法：外部bean"]}),"\n",(0,s.jsxs)(n.h5,{id:"第二种写法",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#第二种写法",children:"#"}),"第二种写法："]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"创建get方法"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"写配置文件"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",meta:"",children:'\x3c!--级联赋值写法--\x3e\r\n<bean id="emp" class="com.spring5.study.innerBean.Emp">\r\n    <property name="employeeName" value="文阿铁"></property>\r\n    <property name="gender" value="男"></property>\r\n    \x3c!--        <property name="dept" ref="dept"></property>--\x3e\r\n    <property name="dept.deptName" value="技术部"></property>\r\n</bean>\r\n<bean id="dept" class="com.spring5.study.innerBean.Dept">\r\n    <property name="deptName" value="财务部"></property>\r\n</bean>\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"注入集合属性",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注入集合属性",children:"#"}),"注入集合属性"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"创建类及array，list等集合属性，并创建set方法"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"配置文件"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",meta:"",children:'<bean id="student" class="com.spring5.study.collectionType.student">\r\n    <property name="courses">\r\n        <array>\r\n            <value>java</value>\r\n            <value>javaScript</value>\r\n        </array>\r\n    </property>\r\n    <property name="list">\r\n        <list>\r\n            <value>张三</value>\r\n            <value>小三</value>\r\n        </list>\r\n    </property>\r\n    <property name="maps">\r\n        <map>\r\n            <entry key="course1" value="java"/>\r\n            <entry key="course2" value="js"/>\r\n        </map>\r\n    </property>\r\n\r\n      \x3c!--对象集合属性注入--\x3e\r\n     <property name="courseList">\r\n         <list>\r\n             <ref bean="course1"/>\r\n             <ref bean="course2"/>\r\n         </list>\r\n     </property>\r\n</bean>\r\n\r\n<bean id="course1" class="com.spring5.study.collectionType.Course">\r\n     <property name="cname" value="课程1"/>\r\n </bean>\r\n <bean id="course2" class="com.spring5.study.collectionType.Course">\r\n     <property name="cname" value="课程2"/>\r\n </bean>\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"提取集合属性注入",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#提取集合属性注入",children:"#"}),"提取集合属性注入"]}),"\n",(0,s.jsx)(n.p,{children:"util使用步骤"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:['xmlns:util="',(0,s.jsx)(n.a,{href:"http://www.springframework.org/schema/util",rel:"noopener noreferrer",target:"_blank",children:"http://www.springframework.org/schema/util"}),'"']}),"\n",(0,s.jsxs)(n.li,{children:['xsi:\r\nschemaLocation="',(0,s.jsx)(n.a,{href:"http://www.springframework.org/schema/beans",rel:"noopener noreferrer",target:"_blank",children:"http://www.springframework.org/schema/beans"})," ",(0,s.jsx)(n.a,{href:"http://www.springframework.org/schema/beans/spring-beans.xsd",rel:"noopener noreferrer",target:"_blank",children:"http://www.springframework.org/schema/beans/spring-beans.xsd"}),"\r\n",(0,s.jsx)(n.a,{href:"http://www.springframework.org/schema/util",rel:"noopener noreferrer",target:"_blank",children:"http://www.springframework.org/schema/util"}),"  ",(0,s.jsx)(n.a,{href:"http://www.springframework.org/schema/util/spring-util.xsd",rel:"noopener noreferrer",target:"_blank",children:"http://www.springframework.org/schema/util/spring-util.xsd"}),'"']}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"<util:list></util:list>"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",meta:"",children:'<?xml version="1.0" encoding="UTF-8"?>\r\n<beans xmlns="http://www.springframework.org/schema/beans"\r\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r\n       xmlns:util="http://www.springframework.org/schema/util"\r\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd\r\n                           http://www.springframework.org/schema/util  http://www.springframework.org/schema/util/spring-util.xsd">\r\n    <util:list id="courses">\r\n        <ref bean="course1"></ref>\r\n        <ref bean="course2"></ref>\r\n    </util:list>\r\n\r\n    <bean id="course1" class="com.spring5.study.collectionType.Course">\r\n        <property name="cname" value="课程1"/>\r\n    </bean>\r\n    <bean id="course2" class="com.spring5.study.collectionType.Course">\r\n        <property name="cname" value="课程2"/>\r\n    </bean>\r\n\r\n    <bean id="course" class="com.spring5.study.collectionType.student">\r\n        <property name="courseList" ref="courses"/>\r\n    </bean>\r\n</beans>\n'})}),"\n",(0,s.jsxs)(n.h4,{id:"factorybean",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#factorybean",children:"#"}),"FactoryBean"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"普通bean： 在配置文件中定义的bean类型就是返回类型"}),"\n",(0,s.jsx)(n.li,{children:"工厂bean：在配置文件中定义的bean和返回的额类型可能不一样"}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"bean的作用域",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bean的作用域",children:"#"}),"bean的作用域"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"设置创建的bean实例是单例还是多个实例"}),"\n",(0,s.jsx)(n.li,{children:"默认是单例"}),"\n",(0,s.jsx)(n.li,{children:"设置方式 bean标签的scope属性 singleton | prototype | request | session"}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"bean生命周期",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bean生命周期",children:"#"}),"bean生命周期"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"通过构造器 创建bean实例（实例化）"}),"\n",(0,s.jsx)(n.li,{children:"为bean的属性设置值或者对其他bean的引用（属性赋值）"}),"\n",(0,s.jsx)(n.li,{children:"调用bean的初始化方法（初始化）"}),"\n",(0,s.jsx)(n.li,{children:"当容器关闭时，调用bean的销毁的方法（销毁）"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",meta:"",children:'public class Lifecycle {\r\n  public Lifecycle() {\r\n    System.out.println("1. 执行构造方法");\r\n  }\r\n\r\n  private String cycle;\r\n\r\n  public void setCycle(String cycle) {\r\n    this.cycle = cycle;\r\n    System.out.println("2. 执行了set方法");\r\n  }\r\n\r\n  // 创建初始化方法\r\n  public void init() {\r\n    System.out.println("3. 执行了初始化");\r\n  }\r\n\r\n  // 创建销毁方法\r\n  public void destroy() {\r\n    System.out.println("4. 执行了销毁");\r\n  }\r\n}\r\n\r\npublic class Test {\r\n  @org.junit.Test\r\n  public void test() {\r\n    ClassPathXmlApplicationContext context =\r\n        new ClassPathXmlApplicationContext("com/spring5/study/bean/lifecycle/bean1.xml");\r\n    Lifecycle lifecycle = context.getBean("lifecycle", Lifecycle.class);\r\n    System.out.println(lifecycle);\r\n    context.close();\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",meta:"",children:'<?xml version="1.0" encoding="UTF-8"?>\r\n<beans xmlns="http://www.springframework.org/schema/beans"\r\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\r\n    <bean id="lifecycle" class="com.spring5.study.bean.lifecycle.Lifecycle" init-method="init" destroy-method="destroy">\r\n        <property name="cycle" value="生命周期"></property>\r\n    </bean>\r\n</beans>\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"xml-自动装配",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#xml-自动装配",children:"#"}),"xml 自动装配"]}),"\n",(0,s.jsx)(n.p,{children:"使用bean标签的autowire属性实现自动装配。\r\nautowire常用值："}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"byName 变量名要和使用的bean id相同"}),"\n",(0,s.jsx)(n.li,{children:"byType 不能定义多个相同类型的bean"}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"外部配置文件",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#外部配置文件",children:"#"}),"外部配置文件"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"新建.properties文件"}),"\n",(0,s.jsx)(n.li,{children:"在bean.xml文件中引入 context，使用context引入properties文件"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",meta:"",children:'<?xml version="1.0" encoding="UTF-8"?>\r\n<beans xmlns="http://www.springframework.org/schema/beans"\r\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r\n       xmlns:context="http://www.springframework.org/schema/context"\r\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd\r\n                           http://www.springframework.org/schema/context  http://www.springframework.org/schema/context/spring-context.xsd">\r\n    \x3c!--引入文件--\x3e\r\n    <context:property-placeholder location="classpath:com/spring5/study/autowire/jdbc.properties"/>\r\n    \x3c!--配置数据库链接--\x3e\r\n    <bean id="dataSource" class="com.spring5.study.autowire.Emp">\r\n        <property name="driverClassName" value="${prop.driverClass}"/>\r\n        <property name="url" value="${prop.url}"/>\r\n        <property name="username" value="${prop.username}"/>\r\n        <property name="password" value="${prop.password}"/>\r\n    </bean>\r\n</beans>\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"基于注解",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基于注解",children:"#"}),"基于注解"]}),"\n",(0,s.jsx)(n.p,{children:"Spring提供的注解"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"@Component"}),"\n",(0,s.jsx)(n.li,{children:"@Service"}),"\n",(0,s.jsx)(n.li,{children:"@Controller"}),"\n",(0,s.jsx)(n.li,{children:"@Repository"}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"上述注解功能相同，都可以用来创建bean实例"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{})})]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}let c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["formwork%2Fspring5%2Fpart2.md"]={toc:[{id:"过程",text:"过程",depth:2},{id:"beanfactory",text:"BeanFactory",depth:3},{id:"applicationcontext",text:"ApplicationContext",depth:3},{id:"基于xml",text:"基于xml",depth:2},{id:"创建对象",text:"创建对象",depth:3},{id:"bean标签中的常用属性",text:"bean标签中的常用属性",depth:4},{id:"注入属性",text:"注入属性",depth:3},{id:"di依赖注入",text:"DI：依赖注入",depth:4},{id:"注入其他属性",text:"注入其他属性",depth:3},{id:"注入集合属性",text:"注入集合属性",depth:3},{id:"提取集合属性注入",text:"提取集合属性注入",depth:4},{id:"factorybean",text:"FactoryBean",depth:4},{id:"bean的作用域",text:"bean的作用域",depth:3},{id:"bean生命周期",text:"bean生命周期",depth:3},{id:"xml-自动装配",text:"xml 自动装配",depth:3},{id:"外部配置文件",text:"外部配置文件",depth:3},{id:"基于注解",text:"基于注解",depth:2}],title:"IOC容器",headingTitle:"IOC容器",frontmatter:{}}}}]);