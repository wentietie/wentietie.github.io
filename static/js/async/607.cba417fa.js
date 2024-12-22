"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["607"],{15445:function(n,e,r){r.r(e),r.d(e,{default:()=>c});var i=r("85893"),l=r("50065");let s=r.p+"static/image/09_StringBuffer.e36401a4.png";function t(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",p:"p",blockquote:"blockquote",pre:"pre",code:"code",img:"img",strong:"strong"},(0,l.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"9-java常用类",children:["9 Java常用类",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#9-java常用类",children:"#"})]}),"\n",(0,i.jsxs)(e.h2,{id:"91-string",children:["9.1 String",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#91-string",children:"#"})]}),"\n",(0,i.jsxs)(e.h3,{id:"911-特性",children:["9.1.1 特性",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#911-特性",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"String类声明为final的，不可被继承"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"实现了Serializable接口，表示支持序列化"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"实现了Comparable接口，表示可以比较大小"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"内部定义了final char[] value，用来存储字符串数据"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["String代表了","不可变的字符串序列","，简称不可变性，体现如下："]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"当对字符串重新赋值时，需要重新指定内存区域进行赋值，不能对内存中原有的字符串内容进行修改"}),"\n",(0,i.jsx)(e.li,{children:"当对字符串进行连接操作时，也需要重新指定内存区域进行赋值"}),"\n",(0,i.jsx)(e.li,{children:"当对字符串调用replace()修改字符串时，也需要重新指定内存区域进行赋值"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'通过字面量的方式（区别与new，使用String a="abc";）给一个字符串赋值，此时的字符串的值存在方法区中的字符串常量池中'}),"\n",(0,i.jsx)(e.p,{children:"字符串常量池不会存相同内容的字符串"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"912-string的初始化方式",children:["9.1.2 String的初始化方式",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#912-string的初始化方式",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'通过字面量的方式：String s = "abc";'}),"\n",(0,i.jsx)(e.p,{children:"初始化过程："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"在字符串常量池中创建abc常量"}),"\n",(0,i.jsx)(e.li,{children:"s指向abc常量的地址"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'通过new+构造器的方式：String s = new String("abc");'}),"\n",(0,i.jsx)(e.p,{children:"初始化过程："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"在字符串常量池中创建abc常量"}),"\n",(0,i.jsx)(e.li,{children:"在堆空间中创建String对象，其value属性值为abc常量的地址"}),"\n",(0,i.jsx)(e.li,{children:"s指向堆中创建的String对象"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["面试题",'：String s = new String("abc")创建了几个对象？']}),"\n",(0,i.jsx)(e.p,{children:"答：两个。一个是在堆空间中new了一个String类型的对象，另一个是在常量池中创建了一个char[]"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"引申"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'常量与常量的拼接结果在常量池中（如String s = "abc"+"def";s指向常量池中的"abcdef"），且常量池中不会存在相同内容的常量。'}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'常量与变量的拼接、变量与变量的拼接结果在堆空间中（如String s = "abc"; String s2 = s1+"def";s2指向堆空间，相当于new了一个变量）'}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["特别的，如果拼接结果调用了","intern()","，返回结果在常量池中。"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"例子如下："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public static void main(String[] args) {\r\n        String s1 = "javaEE";\r\n        String s2 = "hadoop";\r\n\r\n        String s3 = "javaEEhadoop";\r\n        String s4 = "javaEE" + "hadoop";\r\n        String s5 = s1 + "hadoop";\r\n        String s6 = "javaEE" + s2;\r\n        String s7 = s1 + s2;\r\n        String s8 = s5.intern();\r\n\r\n        System.out.println(s3 == s4); //true\r\n        System.out.println(s3 == s5); // false\r\n        System.out.println(s3 == s6); // false\r\n        System.out.println(s3 == s7); // false\r\n        System.out.println(s5 == s6); // false\r\n        System.out.println(s5 == s7); // false\r\n        System.out.println(s6 == s7); // false\r\n        System.out.println(s3 == s8); // true\r\n    }\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"913-string常用方法",children:["9.1.3 String常用方法",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#913-string常用方法",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"int length()"}),"：返回字符串长度"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"char charAt(int index)"}),"：返回索引处的字符"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"boolean isEmpty()"}),"：判断是否是空字符串"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"String toLowerCase()"}),"： 将字符转为小写（）"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"String toUpperCase()"}),"： 将字符转为大写"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"String trim()"}),"：忽略字符串收尾空格"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"boolean equals(Object obj)"}),"：比较字符串的内容是否相等"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"boolean equalsIgnoreCase(Object obj)"}),"：忽略大小写，比较字符串的内容是否相等"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"String concat(String str)"}),"：将指定字符串连接到此字符串的结尾，等价于“+”"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"int compareTo(String anotherString)"}),"：比较两个字符串的大小。返回负数表示当前字符串比指定字符串小。"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"String substring(int beginIndex)"}),"：从beginIndex开始截取并返回"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"String substring(int beginIndex, int endIndex)"}),"：截取[beginIndex, endIndex)范围内的字符串并返回"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"boolean endsWith(String suffix)"}),"：判断字符串是否以指定的字符串结尾"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"boolean startsWith(String suffix)"}),"：判断字符串是否以指定的字符串开始"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"boolean startsWith(String suffix, int toffset)"}),"：判断字符串从指定的索引位置开始的子字符串是否以指定的字符串开始"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"boolean contains(CharSequence s)"}),"：判断是否包含指定字符串"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"int indexOf(String str)"}),"：返回指定字符串在当前字符串中第一次出现的索引位置"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"int indexOf(String str, int fromIndex)"}),"： 返回指定字符串在当前字符串中第一次出现的索引位置，从指定的下标开始"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"int lastIndexOf(String str)"}),"：返回指定字符串在当前字符串中最后一次出现的索引位置"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"int lastI ndexOf(String str, int fromIndex)"}),"：返回指定字符串在当前字符串中第一次出现的索引位置，从指定的索引反向搜索"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"String replace(char oldChar, char newChar)"}),"：用newChar替换oldChar"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"String replace(CharSequence target, CharSequence replacement)"}),"：用replacement替换target"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"String replaceAll(String regex, String replance)"}),"：用replacement替换符合正则表达式regex的字符串"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"String replaceFirst(String regex, String replance)"}),"：用replacement替换第一个符合正则表达式regex的字符串"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"boolean match(String regex)"}),"：判断字符串是否匹配给定的正则表达式"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"String[] split(String regex)"}),"：根据给定的正则表达式拆分此字符串"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"String[] split(String regex, int limit)"}),"：根据给定的正则表达式拆分此字符串，最多不超过limit个。如果超出，剩下的全都放在最后一个元素中"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"914-string与部分数据结构之间的转换",children:["9.1.4 String与部分数据结构之间的转换",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#914-string与部分数据结构之间的转换",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["String与char[]之间的转换","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"String --\x3e char[]：调用String的toCharArray()"}),"\n",(0,i.jsx)(e.li,{children:"char[] --\x3e String ：调用String的构造器"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["String与byte[]之间的转换","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["String --\x3e byte[]：调用String的getBytes()    ---------\x3e相当于","编码"]}),"\n",(0,i.jsxs)(e.li,{children:["byte[] --\x3e String ：调用String的构造器            ---------\x3e相当于","解码"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"915-stringbuffer和stringbuilder",children:["9.1.5 StringBuffer和StringBuilder",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#915-stringbuffer和stringbuilder",children:"#"})]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"String、StringBuffer、StringBuilder三者的区别与联系"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["String：","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"不可变的字符序列；"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["StringBuffer：","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"可变的字符序列；"}),"\n",(0,i.jsx)(e.li,{children:"线程安全的，效率低"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["StringBuilder：（","jdk5.0新增","）","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"可变的字符序列；"}),"\n",(0,i.jsx)(e.li,{children:"线程不安全的，效率高"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["三者的联系：","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"三者底层都是char[]，但是String是用final修饰的"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"源码分析"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"以StringBuffer为例"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"构造器"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"StringBuffer sb = new StringBuffer()：底层创建了一个长度是16的字符数组，即char[] value = new char[16]"}),"\n",(0,i.jsx)(e.li,{children:'StringBuffer sb = new StringBuffer("abc")：底层创建了一个长度是"abc".length+16的字符数组，即char[] value = new char["abc".length+16]'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"问题1：sb.length()是多少？"}),"\n",(0,i.jsx)(e.p,{children:'答：是字符的真实长度。如StringBuffer sb = new StringBuffer()，sb.length()=0；StringBuffer sb = new StringBuffer("abc")，sb.length()=3'}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"问题2：当sb.append(str)长度不够时，是如何扩容的？"}),"\n",(0,i.jsx)(e.p,{children:"答：默认情况下是将原来的容量变为原来的2倍+2；如果默认扩容完毕后，长度仍不够，则容量扩容为sd.length()+str.length()；..."}),"\n",(0,i.jsx)(e.p,{children:"同时将原有数组中的元素复制到新的数组中。"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)("img",{src:s,alt:""})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"StringBuffer常用方法"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"StringBuffer append(String var1)"}),"：字符串拼接"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"StringBuffer delete(int start, int end)"}),"：删除[start, end)位置的字符"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"StringBuffer replace(int start, int end, String str)"}),"：把[start, end)位置的字符替换成str"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"StringBuffer insrt(int offset, xxx)"}),"：在指定位置插入xxx"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"StringBuffer reverse()"}),"：字符串反转"]}),"\n",(0,i.jsxs)(e.p,{children:["以上方法都会将原有字符串进行修改。此外StringBuffer还可以调用String的一些方法，如",(0,i.jsx)(e.code,{children:"String substring(int beginIndex, int endIndex)"}),"，当调用String的方法时，对原有字符串不会修改"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"String、StringBuffer、StringBuilder效率对比"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"String < StringBuffer < StringBuilder"}),"\n",(0,i.jsxs)(e.h3,{id:"916-jvm中字符串常量池存放位置",children:["9.1.6 JVM中字符串常量池存放位置",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#916-jvm中字符串常量池存放位置",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"jdk 1.6：字符串常量池存储在方法区（永久区）"}),"\n",(0,i.jsx)(e.li,{children:"jdk 1.7：字符串常量池存储在堆空间"}),"\n",(0,i.jsx)(e.li,{children:"jdk 1.8：字符串常量池存储在方法区（元空间）"}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"92-日期时间的api",children:["9.2 日期时间的API",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#92-日期时间的api",children:"#"})]}),"\n",(0,i.jsxs)(e.h3,{id:"921-jdk8之前的日期时间api",children:["9.2.1 JDK8之前的日期时间API",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#921-jdk8之前的日期时间api",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"java.util.Date及其子类java.sql.Date"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"System.currentTimeMillis()：获取当前时间的时间戳"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"java.text.SimpleDateFormat：时间格式化"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Calendar：日历类。Calender是Date的升级版"}),"\n",(0,i.jsx)(e.p,{children:"说明：获取月份时，一月是0，二月是1，以此类推，十二月是11；获取星期时，周日是1，周一是2，以此类推，周六是7"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// 实例化1: 创建子类对象\r\nGregorianCalendar gregorianCalendar = new GregorianCalendar();\r\n// 实例化2（常用）：调用其静态方法getInstance()\r\nCalendar calendar = Calendar.getInstance();\r\n\r\n// 常用方法\r\n// get(int field)：获取指定参数对应的Calender对象的时间\r\nint month = calendar.get(Calendar.MONTH); //获取月份\r\nSystem.out.println(month);\r\nint days = calendar.get(Calendar.DAY_OF_YEAR); //获取当前是一年中的第几天\r\nSystem.out.println(days);\r\n\r\n// set(int field, int value)：对Calender对象的时间进行set操作\r\ncalendar.set(Calendar.DAY_OF_MONTH, 10);\r\nSystem.out.println(calendar.get(Calendar.DAY_OF_YEAR));\r\n\r\n// add(int field, int amount)：对Calender对象的时间进行“+”操作\r\ncalendar.add(Calendar.DAY_OF_YEAR, 3);\r\nSystem.out.println(calendar.get(Calendar.DAY_OF_YEAR));\r\n\r\n// getTime()：日历类 --\x3e java.util.Date\r\nDate date = calendar.getTime();\r\nSystem.out.println(date);\r\n\r\n// setTime()：java.util.Date --\x3e Calender\r\nDate date1 = new Date();\r\ncalendar.setTime(date1);\r\nSystem.out.println(calendar.get(Calendar.DAY_OF_YEAR));\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"922-jdk8中新的日期时间api",children:["9.2.2 JDK8中新的日期时间API",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#922-jdk8中新的日期时间api",children:"#"})]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"旧日期时间API存在的问题"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"可变性：日期和时间这样的类应该是不可变的"}),"\n",(0,i.jsx)(e.li,{children:"偏移性：Date中的年份是从1900开始的，月份是从0开始的"}),"\n",(0,i.jsx)(e.li,{children:"格式化：格式化只对Date有用，对Calender不行"}),"\n",(0,i.jsx)(e.li,{children:"线程安全性：Date和Calender都不是线程安全的"}),"\n",(0,i.jsx)(e.li,{children:"不能处理闰秒等"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"JDK8新增的日期时间API"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"java.time.LocalDate：获取日期"}),"\n",(0,i.jsx)(e.li,{children:"java.time.LocalTime：获取时间"}),"\n",(0,i.jsx)(e.li,{children:"java.time.LocalDateTime：获取日期+时间"}),"\n",(0,i.jsx)(e.li,{children:"java.time.Instant：瞬时，等同于Date中的getTime()"}),"\n",(0,i.jsx)(e.li,{children:"java.time.format.DateTimeFormatter：时间格式化"}),"\n",(0,i.jsxs)(e.li,{children:["其他API：","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"java.time.ZoneId：时区相关操作"}),"\n",(0,i.jsx)(e.li,{children:"java.time.ZonedDateTime：带时区的日期时间"}),"\n",(0,i.jsx)(e.li,{children:"java.time.Clock：使用时区提供对当前即时、日期、和时间的访问的时钟"}),"\n",(0,i.jsxs)(e.li,{children:["java.time.Duration：用来计算两个",(0,i.jsx)(e.strong,{children:"时间"}),"的间隔，可以获取秒级间隔，也可以获取纳秒级间隔"]}),"\n",(0,i.jsxs)(e.li,{children:["java.time.Period：用来计算两个",(0,i.jsx)(e.strong,{children:"日期"}),"的间隔"]}),"\n",(0,i.jsx)(e.li,{children:"java.time.temporal.TemporalAdjuster：时间校正器。如获取当前日期的下一个工作日等"}),"\n",(0,i.jsx)(e.li,{children:"java.time.temporal.TemporalAdjusters：该类通过静态方法提供了大量的TemporalAdjuster实现"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"LocalDate、LocalTime、LocalDateTime的使用"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"实例化"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"方法一：使用now()实例化当前时间"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// 实例化1：使用静态方法now()，获取当前日期/时间/时间+日期\r\nLocalDate localDate = LocalDate.now();\r\nLocalTime localTime = LocalTime.now();\r\nLocalDateTime localDateTime = LocalDateTime.now();\r\nSystem.out.println(localDate);\r\nSystem.out.println(localTime);\r\nSystem.out.println(localDateTime);\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"方法二：使用of()实例化指定时间"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// 实例化2：使用静态方法of()，设置指定的时间。没有偏移量\r\nLocalDate localDate1 = LocalDate.of(2022, 12, 7);\r\nLocalTime localTime1 = LocalTime.of(14, 44, 12);\r\nLocalDateTime localDateTime1 = LocalDateTime.of(2022, 12, 7, 14, 42, 33);\r\nSystem.out.println(localDate1);\r\nSystem.out.println(localTime1);\r\nSystem.out.println(localDateTime1);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"获取属性：getXxx"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"LocalDateTime localDateTime = LocalDateTime.now(); // 2022-12-7 14:47:28\r\n// getXXX()：获取相关属性\r\nSystem.out.println(localDateTime.getDayOfMonth()); // 7\r\nSystem.out.println(localDateTime.getDayOfWeek()); // WEDNESDAY\r\nSystem.out.println(localDateTime.getMonth()); // DECEMBER\r\nSystem.out.println(localDateTime.getMonthValue()); // 12\r\nSystem.out.println(localDateTime.getMinute()); // 47\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["设置属性：withXxx  ","体现了不可变性"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"LocalDateTime localDateTime = LocalDateTime.now();\r\n// withXxx()：设置相关属性 ---\x3e 体现了不可变性，原时间不变，时间修改方法中有返回值，返回的新日期是被修改过的\r\nLocalDateTime localDateTime2 = localDateTime.withDayOfMonth(22);\r\nSystem.out.println(localDateTime); // 2022-12-07T14:54:38.985\r\nSystem.out.println(localDateTime2); // 2022-12-22T14:54:38.985\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["对相关属性执行“+”操作：plusXxx()  ","体现了不可变性"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"LocalDateTime localDateTime = LocalDateTime.now();\r\n// plusXxx()：对相关属性执行“+”操作\r\nLocalDateTime localDateTime3 = localDateTime.plusMonths(3);\r\nSystem.out.println(localDateTime); // 2022-12-07T14:54:38.985\r\nSystem.out.println(localDateTime3); // 2023-03-07T14:54:38.985\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["对相关属性执行“-”操作：minusXxx()  ","体现了不可变性"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"LocalDateTime localDateTime = LocalDateTime.now();\r\n // minusXxx()：对相关属性执行“-”操作\r\nLocalDateTime localDateTime4 = localDateTime.minusDays(6);\r\nSystem.out.println(localDateTime); // 2022-12-07T14:54:38.985\r\nSystem.out.println(localDateTime4); // 2022-12-01T14:54:38.985\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Instant说明"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"时间线上的一个瞬时点。这可能被用来记录应用程序中的事件时间戳。"}),"\n",(0,i.jsx)(e.p,{children:"从概念上来讲，它知识简单的表示自1970年1月1日0时0分0秒开始的事件数，精确度可达纳秒级。"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Instant的使用"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"实例化"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["方法一：使用now()获取当前时间 ","注：获取到的是本初子午线的时间，与东八区相差8小时"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// 实例化1：now() 获取当前时间\r\nInstant instant = Instant.now();// 获取到的是本初子午线时间，与东八区时间相差8小时\r\nSystem.out.println(instant); // 2022-12-07T07:31:15.348Z（当前时间为2022-12-07T15:31:15.348Z）\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"方法二：使用of(long l)获取指定时间戳对应的时间"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"//实例化2：ofEpochMilli()，按照给定的毫秒数获取指定时间\r\nInstant instant1 = Instant.ofEpochMilli(1670398455189L);\r\nSystem.out.println(instant1);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"设置偏移量，获取当前时间 atOffset()"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// 设置偏移量，获取当前时间\r\nOffsetDateTime offsetDateTime = instant.atOffset(ZoneOffset.ofHours(8));\r\nSystem.out.println(offsetDateTime); // 2022-12-07T15:31:15.348+08:00\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"获取自1970-01-01 00:00:00开始的毫秒数"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// 获取自1970-01-01 00:00:00开始的毫秒数\r\nlong milli = instant.toEpochMilli();\r\nSystem.out.println(milli);\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"DateTimeFormatter的使用"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"实例化方法一：通过预定义的标准格式，如ISO_LOCAL_TIME、ISO_LOCAL_DATE、ISO_LOCAL_DATE_TIME"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'DateTimeFormatter dtf = DateTimeFormatter.ISO_LOCAL_DATE_TIME;\r\n// 格式化：日期 --\x3e 字符串\r\nLocalDateTime localDateTime = LocalDateTime.now();\r\nString s = dtf.format(localDateTime);\r\nSystem.out.println(localDateTime + " --\x3e " +s);\r\n// 解析： 字符串 --\x3e 日期\r\nTemporalAccessor parse = dtf.parse("2022-12-07T16:04:03.594");\r\nSystem.out.println(parse); // {},ISO resolved to 2022-12-07T16:04:03.594\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"实例化方法二：通过本地化相关的格式，如DateTimeFormatter.ofLocalizedDateTime()、DateTimeFormatter.ofLocalizedDate()"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"DateTimeFormatter.ofLocalizedDateTime()适用的参数："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"FormatStyle.SHORT"}),"\n",(0,i.jsx)(e.li,{children:"FormatStyle.MEDIUM"}),"\n",(0,i.jsx)(e.li,{children:"FormatStyle.LONG"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"DateTimeFormatter.ofLocalizedDate()适用的参数："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"FormatStyle.SHORT"}),"\n",(0,i.jsx)(e.li,{children:"FormatStyle.MEDIUM"}),"\n",(0,i.jsx)(e.li,{children:"FormatStyle.LONG"}),"\n",(0,i.jsx)(e.li,{children:"FormatStyle.FULL"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'// FormatStyle.SHORT\r\nDateTimeFormatter dtf1 = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT);\r\nString s1 = dtf1.format(localDateTime);\r\nSystem.out.println(localDateTime + " --\x3e " +s1); // 2022-12-07T16:09:18.095 --\x3e 22-12-7 下午4:09\r\n// FormatStyle.MEDIUM\r\nDateTimeFormatter dtf2 = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM);\r\nString s2 = dtf2.format(localDateTime);\r\nSystem.out.println(localDateTime + " --\x3e " +s2); // 2022-12-07T16:09:18.095 --\x3e 2022-12-7 16:09:18\r\n// FormatStyle.LONG\r\nDateTimeFormatter dtf3 = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.LONG);\r\nString s3 = dtf3.format(localDateTime);\r\nSystem.out.println(localDateTime + " --\x3e " +s3); // 2022-12-07T16:09:18.095 --\x3e 2022年12月7日 下午04时09分18秒\r\n// FormatStyle.FULL\r\nDateTimeFormatter dtf4 = DateTimeFormatter.ofLocalizedDate(FormatStyle.FULL);\r\nLocalDate localDate = LocalDate.now();\r\nString s4 = dtf4.format(localDate);\r\nSystem.out.println(localDate + " --\x3e " +s4); // 2022-12-07 --\x3e 2022年12月7日 星期三\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:['实例化方法三：通过自定义的格式，如DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss") ',"最常用"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'DateTimeFormatter dtf5 = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");\r\n// 格式化\r\nString s5 = dtf5.format(localDateTime);\r\nSystem.out.println(localDateTime + " --\x3e " +s5); // 2022-12-07T16:19:37.665 --\x3e 2022-12-07 16:19:37\r\n// 解析\r\nTemporalAccessor parse1 = dtf5.parse("2022-11-11 08:08:08");\r\nSystem.out.println(parse1); // {},ISO resolved to 2022-12-07T16:04:03.594\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"93-java比较器",children:["9.3 Java比较器",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#93-java比较器",children:"#"})]}),"\n",(0,i.jsxs)(e.h3,{id:"931-comparable自然排序",children:["9.3.1 Comparable自然排序",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#931-comparable自然排序",children:"#"})]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"重写compareTo(Object o)方法的规则"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"当前对象this > 形参对象obj，返回正数"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"当前对象this < 形参对象obj，返回负数"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"当前对象this = 形参对象obj，返回0"}),"\n",(0,i.jsx)(e.p,{children:"tips：如果形参对象不是当前对象对应的类，可以考虑抛出异常！"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"例子"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["自定义类实现",(0,i.jsx)(e.code,{children:"Comparable"}),"接口，并重写",(0,i.jsx)(e.code,{children:"compareTo(Object o)"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public class Goods implements Comparable{\r\n    private String name;\r\n    private double price;\r\n\r\n    // getter、setter、toString\r\n\r\n    // 重写compareTo，首先按照价格由低到高排序；价格相同时按照商品名由低到高排序\r\n    @Override\r\n    public int compareTo(Object o) {\r\n        if (o instanceof Goods) {\r\n            Goods goods = (Goods) o;\r\n            if (this.getPrice() - goods.getPrice() > 0) {\r\n                return 1;\r\n            } else if (this.getPrice() - goods.getPrice() < 0) {\r\n                return -1;\r\n            } else {\r\n                return this.getName().compareTo(goods.getName());\r\n            }\r\n        }\r\n\r\n        throw new RuntimeException("数据格式不一致！");\r\n    }\r\n}\r\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"排序测试"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:" @Test\r\npublic void comparableTest() {\r\n    Goods[] goods = new Goods[4];\r\n    goods[0] = new Goods(\"apple\", 5.13);\r\n    goods[1] = new Goods(\"basketball\", 130.99);\r\n    goods[2] = new Goods(\"bag\", 999);\r\n    goods[3] = new Goods(\"banana\", 5.13);\r\n    Arrays.sort(goods);\r\n\r\n    System.out.println(Arrays.toString(goods)); // [Goods{name='apple', price=5.13}, Goods{name='banana', price=5.13}, Goods{name='basketball', price=130.99}, Goods{name='bag', price=999.0}]\r\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"932-comparator定制排序",children:["9.3.2 Comparator定制排序",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#932-comparator定制排序",children:"#"})]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"使用场景"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"元素类型没有实现Comparable接口，且又不方便修改代码"}),"\n",(0,i.jsx)(e.li,{children:"虽实现了Comparable接口，但是compareTo(Object o)方法中的排序规则不适用于当前排序"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"使用方法"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["实现",(0,i.jsx)(e.code,{children:"Comparator"}),"接口，并重写",(0,i.jsx)(e.code,{children:"compare(Goods o1, Goods o2)"}),"方法"]}),"\n",(0,i.jsx)(e.p,{children:"重写compare(Goods o1, Goods o2)方法的规则与Comparable接口的compareTo(Object o)规则一致。"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"例子"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"@Test\r\npublic void comparatorTest() {\r\n    Goods[] goods = new Goods[4];\r\n    goods[0] = new Goods(\"apple\", 5.13);\r\n    goods[1] = new Goods(\"basketball\", 130.99);\r\n    goods[2] = new Goods(\"bag\", 999);\r\n    goods[3] = new Goods(\"banana\", 5.13);\r\n\r\n    // 按照价格倒序排序。如果价格相等，按照商品名称倒序排序\r\n    Arrays.sort(goods, new Comparator<Goods>() {\r\n        @Override\r\n        public int compare(Goods o1, Goods o2) {\r\n            if (o1.getPrice() > o2.getPrice()) {\r\n                return -1;\r\n            } else if (o1.getPrice() < o2.getPrice()) {\r\n                return 1;\r\n            } else {\r\n                return -o1.getName().compareTo(o2.getName());\r\n            }\r\n        }\r\n    });\r\n    System.out.println(Arrays.toString(goods)); // [Goods{name='bag', price=999.0}, Goods{name='basketball', price=130.99}, Goods{name='banana', price=5.13}, Goods{name='apple', price=5.13}]\r\n}\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"94--biginteger与bigdecimal",children:["9.4  BigInteger与BigDecimal",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#94--biginteger与bigdecimal",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"BigInteger可以表示不可变的任意精度的整数。"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"BigDecimal支持不可变的、任意精度的有符号十进制定点数。"}),"\n"]}),"\n"]})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}let c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["tang%2Fjava2%2F09_Java%E5%B8%B8%E7%94%A8%E7%B1%BB.md"]={toc:[{text:"9.1 String",id:"91-string",depth:2},{text:"9.1.1 特性",id:"911-特性",depth:3},{text:"9.1.2 String的初始化方式",id:"912-string的初始化方式",depth:3},{text:"9.1.3 String常用方法",id:"913-string常用方法",depth:3},{text:"9.1.4 String与部分数据结构之间的转换",id:"914-string与部分数据结构之间的转换",depth:3},{text:"9.1.5 StringBuffer和StringBuilder",id:"915-stringbuffer和stringbuilder",depth:3},{text:"9.1.6 JVM中字符串常量池存放位置",id:"916-jvm中字符串常量池存放位置",depth:3},{text:"9.2 日期时间的API",id:"92-日期时间的api",depth:2},{text:"9.2.1 JDK8之前的日期时间API",id:"921-jdk8之前的日期时间api",depth:3},{text:"9.2.2 JDK8中新的日期时间API",id:"922-jdk8中新的日期时间api",depth:3},{text:"9.3 Java比较器",id:"93-java比较器",depth:2},{text:"9.3.1 Comparable自然排序",id:"931-comparable自然排序",depth:3},{text:"9.3.2 Comparator定制排序",id:"932-comparator定制排序",depth:3},{text:"9.4  BigInteger与BigDecimal",id:"94--biginteger与bigdecimal",depth:2}],title:"9 Java常用类",frontmatter:{}}}}]);