"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["8752"],{92780:function(n,e,r){r.r(e),r.d(e,{default:function(){return t}});var s=r(85893),i=r(50065);function l(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",blockquote:"blockquote",ul:"ul",li:"li",strong:"strong"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"99-面试题",children:["99 面试题",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#99-面试题",children:"#"})]}),"\n",(0,s.jsxs)(e.h2,{id:"1最高效方式计算2--8",children:["1.最高效方式计算2 * 8？",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1最高效方式计算2--8",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["答：",(0,s.jsx)(e.code,{children:"2 << 3"}),"或 ",(0,s.jsx)(e.code,{children:"8 << 1"})]}),"\n",(0,s.jsxs)(e.h2,{id:"2多态是编译时行为还是运行时行为如何证明",children:["2.多态是编译时行为还是运行时行为？如何证明？",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#2多态是编译时行为还是运行时行为如何证明",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["答：","多态是运行时行为","。"]}),"\n",(0,s.jsx)(e.p,{children:"证明代码如下："}),"\n",(0,s.jsx)(e.p,{children:"随机生成index，获取不同的Animal实例。当调用eat()时，在编译期间是看不出来会调用哪一个，只有运行完成后才可以判断到底是调用的哪个类的eat()方法。"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public class Practise {\r\n    public static void main(String[] args) {\r\n        // 随机生成index，获取不同的Animal实例。当调用eat()时，在编译期间是看不出来会调用哪一个，只有运行完成后才可以判断到底是调用的哪个类的eat()方法\r\n        int index = new Random().nextInt(3);\r\n        System.out.println("index: " + index);\r\n        Animal animal = getInstance(index);\r\n        animal.eat();\r\n    }\r\n	// 根据index，返回不同的对象\r\n    private static Animal getInstance(int index) {\r\n        switch (index) {\r\n            case 0:\r\n                return new Dog();\r\n            case 1:\r\n                return new Cat();\r\n            default:\r\n                return new Sheep();\r\n        }\r\n    }\r\n\r\n}\r\n\r\n/**\r\n* 父类\r\n*/\r\nclass Animal {\r\n    public void eat() {\r\n        System.out.println("动物吃饭");\r\n    }\r\n}\r\n\r\n/**\r\n* 子类\r\n*/\r\nclass Dog extends Animal {\r\n    @Override\r\n    public void eat() {\r\n        System.out.println("狗吃骨头");\r\n    }\r\n}\r\n\r\n/**\r\n* 子类\r\n*/\r\nclass Cat extends Animal {\r\n    @Override\r\n    public void eat() {\r\n        System.out.println("猫吃鱼");\r\n    }\r\n}\r\n\r\n/**\r\n* 子类\r\n*/\r\nclass Sheep extends Animal {\r\n    @Override\r\n    public void eat() {\r\n        System.out.println("羊吃草");\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(e.h2,{id:"3方法的重载与重写",children:["3.方法的重载与重写",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#3方法的重载与重写",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"答："}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"二者的定义细节"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"重载：同一个类中，允许有一个以上的同名方法，只要它们的参数类型或者参数个数不同即可。"}),"\n",(0,s.jsxs)(e.li,{children:["重写：在子类中可以根据需要，对从父类继承来的方法进行改造，也称为方法的","覆盖、重置","。在程序执行时，子类的方法将覆盖父类的方法。"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"从编译运行的角度看"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["重载，是指允许存在多个重名方法，而这些方法的参数列表不同。编译器根据不同的参数列表，对同名方法进行修饰。对于编译器而言，这些同名方法就成了不同的方法，","他们的调用地址在编译期就确定了","。Java的重载是可以包含父类和子类的，即子类可以重载父类的同名不同餐的方法。"]}),"\n",(0,s.jsxs)(e.p,{children:["所以，对于重载而言，在方法调用之前，编译器就已经确定了所要调用的方法，这称为“","早绑定","”或“","静态绑定","”。"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["多态（重写），只有等到方法调用那一刻，解释运行器才会确定所要调用的具体方法，这称为“","晚绑定","”或“","动态绑定","”。"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"4和equals的区别",children:["4.==和equals()的区别",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#4和equals的区别",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"答："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"=="}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"是一个运算符"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"可以使用在基本数据类型和引用数据类型中"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"如果比较的是基本类型变量：比较的是两个变量保存的数据是否相等（类型不一定相同）"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public static void main(String[] args) {\r\n    int i = 10;\r\n    double d = 10.0;\r\n    char c = 10;\r\n    System.out.println(i == d); // true\r\n    System.out.println(i == c); // true\r\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"如果比较的是引用数据类型变量：比较两个对象的地址值是否相同，即两个变量是否指向同一个实体对象。"}),"\n",(0,s.jsxs)(e.p,{children:["此外，比较引用数据类型的变量的时候，必须保证==左右变量类型一致。如",(0,s.jsx)(e.code,{children:'System.out.println("hello" == new java.util.Date())'}),"，编译不通过"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"equals()"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"是一个方法，而非运算符"}),"\n",(0,s.jsx)(e.li,{children:"只能适用于引用数据类型"}),"\n",(0,s.jsx)(e.li,{children:"Object类中的equals()方法和==的作用是相同的：比较的是两个对象的地址值是否相等"}),"\n",(0,s.jsx)(e.li,{children:"像String、Date、File、包装类等都重写了Object的equals()方法。重写后，比较的是两个对象的“实体内容”是否相同"}),"\n",(0,s.jsx)(e.li,{children:"通常情况下，我们自定义的类如果使用equals()的话，也通常比较的是两个对象的“实体内容”是否相同，一般来说都需要对其重写。重写的原则就是比较两个对象的“实体内容”是否相同"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"5三元运算符与包装类",children:["5.三元运算符与包装类",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#5三元运算符与包装类",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"如下代码中，o1和o2的输出结果相同吗，分别是什么？"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"Object o1 = true ? new Integer(1) : new Double(2.0);\r\nSystem.out.println(o1);\r\n\r\nObject o2;\r\nif (true)\r\n    o2 = new Integer(1);\r\nelse\r\n    o2 = new Double(2.0);\r\nSystem.out.println(o2);\n"})}),"\n",(0,s.jsx)(e.p,{children:"答："}),"\n",(0,s.jsx)(e.p,{children:"二者结果不相同。o1输出为1.0，o2输出为1。"}),"\n",(0,s.jsx)(e.p,{children:"分析："}),"\n",(0,s.jsxs)(e.p,{children:["三元运算符",(0,s.jsx)(e.code,{children:":"}),"两侧的运算符需要能统一成一个类型","，这是在编译过程中就需要确定的（如果",(0,s.jsx)(e.code,{children:":"}),"两边分别是int和String，会编译不通过），所以Integer类型变量会提升为Double。因此最终o1输出为浮点型的1.0。"]}),"\n",(0,s.jsxs)(e.h2,{id:"6包装类",children:["6.包装类",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#6包装类",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"如下代码的输出分别是什么？"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"Integer i = new Integer(1);\r\nInteger j = new Integer(1);\r\nSystem.out.println(i == j);\r\n\r\nInteger m = 1;\r\nInteger n = 1;\r\nSystem.out.println(m == n);\r\n\r\nInteger x = 128;\r\nInteger y = 128;\r\nSystem.out.println(x == y);\n"})}),"\n",(0,s.jsx)(e.p,{children:"答："}),"\n",(0,s.jsx)(e.p,{children:"以上输出分别是false、true、false。"}),"\n",(0,s.jsx)(e.p,{children:"分析："}),"\n",(0,s.jsxs)(e.p,{children:["Integer内部定义了IntegerCache结构，IntegerCache中定义了一个Integer类型的数组，保存了从[-128,127]范围的整数。","如果使用自动装箱的方式，且给Integer赋值的范围在[-128,127]内时，可以直接使用数组中的元素，不用再去new了。",(0,s.jsx)(e.code,{children:"Integer x = 128;"}),"和",(0,s.jsx)(e.code,{children:"Integer y = 128;"}),"各自创建了一个对象，因此二者不相等。"]}),"\n",(0,s.jsxs)(e.h2,{id:"7接口-排错题",children:["7.接口-排错题",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#7接口-排错题",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"以下代码是否有问题？如无，输出的内容为多少？"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"interface A {\r\n    int x = 0;\r\n}\r\n\r\nclass B {\r\n    int x = 1;\r\n}\r\n\r\nclass C extends B implements A {\r\n    public void pX() {\r\n        System.out.println(x);\r\n    }\r\n\r\n    public static void main(String[] args) {\r\n        new C().pX();\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["答","："]}),"\n",(0,s.jsxs)(e.p,{children:["代码编译不通过。报错信息为“Reference to 'x' is ambiguous, both 'B.x' and 'A.x' match”，意为接口A和接口B中都有x属性，C中对x的引用不明确。可以使用",(0,s.jsx)(e.code,{children:"System.out.println(super.x)"}),"输出类B中的x，可以使用",(0,s.jsx)(e.code,{children:"System.out.println(A.x)"}),"输出接口A中的x。"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"以下代码是否有问题？如无，输出的内容是什么？"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'interface Playable {\r\n    void play();\r\n}\r\n\r\ninterface Bounceable {\r\n    void play();\r\n}\r\n\r\ninterface Rollable extends Playable, Bounceable {\r\n    Ball ball = new Ball("PingPang");\r\n}\r\n\r\nclass Ball implements Rollable {\r\n    private String name;\r\n\r\n    public String getName() {\r\n        return name;\r\n    }\r\n\r\n    public void setName(String name) {\r\n        this.name = name;\r\n    }\r\n\r\n    public Ball(String name) {\r\n        this.name = name;\r\n    }\r\n\r\n    @Override\r\n    public void play() {\r\n        ball = new Ball("Football");\r\n        System.out.println(ball.getName());\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["答","："]}),"\n",(0,s.jsxs)(e.p,{children:["代码编译失败。接口中定义的变量是",(0,s.jsx)(e.code,{children:"public static final"}),"修饰的全局常量，是不可以更改的。"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"8抽象类和接口的共同点和区别",children:["8.抽象类和接口的共同点和区别",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#8抽象类和接口的共同点和区别",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["相同点：","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"不能实例化"}),"\n",(0,s.jsx)(e.li,{children:"都可以定义抽象方法"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["不同点：","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"抽象类有构造器、属性"}),"\n",(0,s.jsx)(e.li,{children:"接口在JDK7及以前只能定义全局内部类和抽象方法，JDK8之后还可以定义静态方法和默认方法（接口中的方法可以写方法体了，使得接口更像抽象类了），JDK9之后可以定义私有方法"}),"\n",(0,s.jsx)(e.li,{children:"子类只能继承一个抽象类，但是可以实现多个接口，同样，接口也可以继承多个接口"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"9throw和throws的区别",children:["9.throw和throws的区别",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#9throw和throws的区别",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"throw：抛出异常，生成异常对象；用在方法体内"}),"\n",(0,s.jsx)(e.li,{children:"throws：捕获异常，是处理异常的一种手段：用在方法的声明处"}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"10finalfinallyfinalize的区别",children:["10.final、finally、finalize的区别",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#10finalfinallyfinalize的区别",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"final：修饰符，可以修饰类、变量、方法。修饰类表示类不能被继承，修饰变量表示变量的值不可以被修改，修饰方法表示不能被子类重写"}),"\n",(0,s.jsx)(e.li,{children:"finally：处理异常的一个关键字，和try-catch组合使用，finally代码块中的代码一定会被执行"}),"\n",(0,s.jsx)(e.li,{children:"finalize：垃圾回收方法。一个类的finalize()只会被系统自动调用一次，如果对象面临下一次回收，他的finalize()方法不会被再次执行"}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"引申"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Collection和Collections的区别"}),"\n",(0,s.jsx)(e.li,{children:"String、StringBuffer、StringBuilder的区别"}),"\n",(0,s.jsx)(e.li,{children:"ArrayList和LinkedList的区别"}),"\n",(0,s.jsx)(e.li,{children:"HashMap和LinkedHashMap的区别"}),"\n",(0,s.jsx)(e.li,{children:"重写和重载的区别"}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"拓展"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"抽象类和接口的区别"}),"\n",(0,s.jsx)(e.li,{children:"==和equals()的区别"}),"\n",(0,s.jsx)(e.li,{children:"sleep()和wait()的区别"}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"11synchronized和lock的异同",children:["11.synchronized和Lock的异同？",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#11synchronized和lock的异同",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"答："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"相同点：二者都可以解决线程安全问题"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"不同点："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"synchronized机制在执行完同步代码之后，自动的释放同步监视器；Lock需要手动加锁（调用lock())、手动释放锁（调用unlock())"}),"\n",(0,s.jsx)(e.li,{children:"synchronized有代码块锁和方法锁；Lock只有代码块锁"}),"\n",(0,s.jsx)(e.li,{children:"使用Lock，JVM将花费较少的时间来调度线程，性能更好，并且具有更好的扩展性"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"二者如何选择"}),"\n",(0,s.jsx)(e.p,{children:"Lock > 同步代码块 >同步方法"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"12sleep和wait的异同",children:["12.sleep()和wait()的异同？",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#12sleep和wait的异同",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"相同点：都会使当前线程进入阻塞状态"}),"\n",(0,s.jsxs)(e.li,{children:["不同点：","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"两个方法声明的位置不同：sleep()是在Thread中声明的，wait()是在Object中声明的"}),"\n",(0,s.jsx)(e.li,{children:"调用的要求不同：sleep()可以在任何需要的场景下调用；wait()必须在同步代码块或者同步方法中由同步监视器调用"}),"\n",(0,s.jsx)(e.li,{children:"关于是否释放锁：如果两个方法都是用在同步代码块或者同步方法中，sleep()不会释放锁，wait()会释放锁"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"13string拼接相关面试题",children:["13.String拼接相关面试题",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#13string拼接相关面试题",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"如下代码输出结果是什么？"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public static void main(String[] args) {\r\n    String s1 = "javaEE";\r\n    String s2 = "hadoop";\r\n\r\n    String s3 = "javaEEhadoop";\r\n    String s4 = "javaEE" + "hadoop";\r\n    String s5 = s1 + "hadoop";\r\n    String s6 = "javaEE" + s2;\r\n    String s7 = s1 + s2;\r\n    String s8 = s5.intern();\r\n    \r\n    final String s9 = "javaEE";\r\n    String s10 = s9 + "hadoop";\r\n\r\n    System.out.println(s3 == s4); \r\n    System.out.println(s3 == s5); \r\n    System.out.println(s3 == s6); \r\n    System.out.println(s3 == s7); \r\n    System.out.println(s5 == s6); \r\n    System.out.println(s5 == s7); \r\n    System.out.println(s6 == s7); \r\n    System.out.println(s3 == s8);\r\n    System.out.println(s3 == s10);\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"答："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"System.out.println(s3 == s4); //true\r\nSystem.out.println(s3 == s5); // false\r\nSystem.out.println(s3 == s6); // false\r\nSystem.out.println(s3 == s7); // false\r\nSystem.out.println(s5 == s6); // false\r\nSystem.out.println(s5 == s7); // false\r\nSystem.out.println(s6 == s7); // false\r\nSystem.out.println(s3 == s8); // true\r\nSystem.out.println(s3 == s10); // true\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"分析"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:'常量与常量的拼接结果在常量池中（如String s = "abc"+"def";s指向常量池中的"abcdef"），且常量池中不会存在相同内容的常量。'}),"\n",(0,s.jsx)(e.li,{children:'常量与变量的拼接、变量与变量的拼接结果在堆空间中（如String s = "abc"; String s2 = s1+"def";s2指向堆空间，相当于new了一个变量）'}),"\n",(0,s.jsxs)(e.li,{children:["特别的，如果拼接结果调用了","intern()","，返回结果在常量池中。"]}),"\n",(0,s.jsx)(e.li,{children:"final 声明的变量是常量，所以s3 == s10"}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"14string值传递相关面试题",children:["14.String值传递相关面试题",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#14string值传递相关面试题",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"如下代码，输出结果是什么？"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public class StringTest {\r\n    String str = new String(\"good\");\r\n    char[] ch = {'t', 'e', 's', 't'};\r\n\r\n    private void change(String str, char ch[]) {\r\n        str = \"test ok\";\r\n        ch[0] = 'b';\r\n    }\r\n\r\n    public static void main(String[] args) {\r\n        StringTest ex = new StringTest();\r\n        ex.change(ex.str, ex.ch);\r\n        System.out.println(ex.str);\r\n        System.out.println(ex.ch);\r\n    }\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"答："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"System.out.println(ex.str); //good\r\nSystem.out.println(ex.ch); //best\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"分析"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["如果参数是","引用数据类型","，实参传递给形参的是实参存储数据的","地址值"]})}),"\n",(0,s.jsx)(e.p,{children:"change(String str, char ch[])两个参数都是引用类型，所以传递过去的都是地址值"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["又因",(0,s.jsx)(e.strong,{children:"String类型的变量是不可变的"}),"，所以当对str参数执行",(0,s.jsx)(e.code,{children:'str="test ok"'}),"操作时，形参str指向新的常量池地址，但是ex.str的地址并没有发生变化，因此ex.str仍为good"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"另外，change方法中是对char[]中的一个元素进行修改，该元素是char类型，是基本数据类型，修改完成后，ch的地址值并没有变化，因此ex.ch值为改动后的值best"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"15arraylistlinkedlistvector三者的异同",children:["15.ArrayList、LinkedList、Vector三者的异同",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#15arraylistlinkedlistvector三者的异同",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["相同点","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"三个类都是实现了List接口，存储的数据都是有序的、可重复的"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["不同点","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ArrayList：作为List接口的主要实现类；线程不安全的，效率比Vector高；底层使用的是数组存储"}),"\n",(0,s.jsx)(e.li,{children:"LinkedList：底层使用的是双向链表存储；对于频繁的插入、删除操作，LinkedList的效率比ArrayList效率高"}),"\n",(0,s.jsx)(e.li,{children:"Vector：作为List接口的古老实现类，现在很少使用；线程安全的，效率比ArrayList低；底层使用的是数组存储"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"16list中remove相关面试题",children:["16.List中remove()相关面试题",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#16list中remove相关面试题",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"如下代码，输出的分别是什么？"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"@Test\r\npublic void test3() {\r\n    List list = new ArrayList();\r\n    list.add(1);\r\n    list.add(2);\r\n    list.add(3);\r\n    list.add(4);\r\n    list.add(5);\r\n    list.remove(2); \r\n    System.out.println(list);\r\n    list.remove(new Integer(5)); \r\n    System.out.println(list);\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"答："}),"\n",(0,s.jsx)(e.p,{children:"第一次输出：[1, 2, 4, 5]"}),"\n",(0,s.jsx)(e.p,{children:"第二次输出：[1, 2, 4]"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"解析："}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"list.remove(2);"}),"删除的是第二个元素"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"list.remove(new Integer(5));"}),"删除的是元素5"]}),"\n",(0,s.jsxs)(e.h2,{id:"17set相关面试题",children:["17.Set相关面试题",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#17set相关面试题",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"如下代码分别输出是什么？"}),"\n",(0,s.jsx)(e.p,{children:"Teacher类已重写equals()和hashCode()"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:' @Test\r\npublic void test1() {\r\n    HashSet set = new HashSet();\r\n    Teacher t1 = new Teacher(1001, "AA");\r\n    Teacher t2 = new Teacher(1002, "BB");\r\n\r\n    set.add(t1);\r\n    set.add(t2);\r\n    System.out.println(set);\r\n\r\n    t1.setName("CC");\r\n    set.remove(t1);\r\n    System.out.println(set);\r\n\r\n    set.add(new Teacher(1001, "CC"));\r\n    System.out.println(set);\r\n\r\n    set.add(new Teacher(1001, "AA"));\r\n    System.out.println(set);\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"答："}),"\n",(0,s.jsx)(e.p,{children:"第1次输出：[Teacher{id=1002, name='BB'}, Teacher{id=1001, name='AA'}]\r\n第2次输出：[Teacher{id=1002, name='BB'}, Teacher{id=1001, name='CC'}]\r\n第3次输出：[Teacher{id=1002, name='BB'}, Teacher{id=1001, name='CC'}, Teacher{id=1001, name='CC'}]\r\n第4次输出：[Teacher{id=1002, name='BB'}, Teacher{id=1001, name='CC'}, Teacher{id=1001, name='CC'}, Teacher{id=1001, name='AA'}]"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"解析"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"第1次输出：略"}),"\n",(0,s.jsx)(e.p,{children:"第2次输出：t1.name改为CC，其hash值变了，在remove的时候比较的是新的hash值处的对象。因为新的hash值处没有元素，所以删除失败。因此输出两个元素，且t1的name值是CC"}),"\n",(0,s.jsx)(e.p,{children:'第3次输出：新添加的new Teacher(1001, "CC")hash值处没有元素，所以添加成功。因此输出三个元素'}),"\n",(0,s.jsx)(e.p,{children:'第4次输出：新添加的new Teacher(1001, "AA")hash值处有元素t1，且t1和新元素不相等，所以添加成功。因此输出4个元素'}),"\n",(0,s.jsxs)(e.h2,{id:"18hashmap的底层实现原理",children:["18.HashMap的底层实现原理？",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#18hashmap的底层实现原理",children:"#"})]}),"\n",(0,s.jsxs)(e.h2,{id:"19hashmap和hashtable的异同",children:["19.HashMap和Hashtable的异同？",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#19hashmap和hashtable的异同",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"相同点：都是作为Map的实现类，用来存储key-value对"}),"\n",(0,s.jsxs)(e.li,{children:["不同点：","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["HashMap：","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"是Map的主要实现类；"}),"\n",(0,s.jsx)(e.li,{children:"线程不安全，效率比Hashtable高"}),"\n",(0,s.jsx)(e.li,{children:"可以存储值为null的key和value"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Hashtable：","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"是Map的古老实现类，现在很少用；"}),"\n",(0,s.jsx)(e.li,{children:"线程安全，效率比HashMap低"}),"\n",(0,s.jsx)(e.li,{children:"不可以存储值为null的key和value"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"20加载因子值的大小对hashmap有什么影响",children:["20.加载因子值的大小，对HashMap有什么影响？",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#20加载因子值的大小对hashmap有什么影响",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"加载因子的大小决定了HashMap的数据密度"}),"\n",(0,s.jsx)(e.li,{children:"加载因子越大，密度越大，发生碰撞的几率越高，数组中链表越容易长，造成查询和插入时的比较次数增多，性能会下降"}),"\n",(0,s.jsx)(e.li,{children:"加载因子越小，就越容易发生扩容，数据密度也越小，碰撞的几率也越小，数组中的链表就越短，查询和插入时比较的次数也越小，性能就会越高。但是会浪费一定的内存空间。且经常扩容也影响性能"}),"\n",(0,s.jsx)(e.li,{children:"按照其他语言的参考及研究经验，会考虑将加载因子设置为0.7-0.75，此时平均检索长度接近于常数"}),"\n"]})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}let t=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["tang%2Fjava2%2F99_%E9%9D%A2%E8%AF%95%E9%A2%98.md"]={toc:[{text:"1.最高效方式计算2 * 8？",id:"1最高效方式计算2--8",depth:2},{text:"2.多态是编译时行为还是运行时行为？如何证明？",id:"2多态是编译时行为还是运行时行为如何证明",depth:2},{text:"3.方法的重载与重写",id:"3方法的重载与重写",depth:2},{text:"4.==和equals()的区别",id:"4和equals的区别",depth:2},{text:"5.三元运算符与包装类",id:"5三元运算符与包装类",depth:2},{text:"6.包装类",id:"6包装类",depth:2},{text:"7.接口-排错题",id:"7接口-排错题",depth:2},{text:"8.抽象类和接口的共同点和区别",id:"8抽象类和接口的共同点和区别",depth:2},{text:"9.throw和throws的区别",id:"9throw和throws的区别",depth:2},{text:"10.final、finally、finalize的区别",id:"10finalfinallyfinalize的区别",depth:2},{text:"11.synchronized和Lock的异同？",id:"11synchronized和lock的异同",depth:2},{text:"12.sleep()和wait()的异同？",id:"12sleep和wait的异同",depth:2},{text:"13.String拼接相关面试题",id:"13string拼接相关面试题",depth:2},{text:"14.String值传递相关面试题",id:"14string值传递相关面试题",depth:2},{text:"15.ArrayList、LinkedList、Vector三者的异同",id:"15arraylistlinkedlistvector三者的异同",depth:2},{text:"16.List中remove()相关面试题",id:"16list中remove相关面试题",depth:2},{text:"17.Set相关面试题",id:"17set相关面试题",depth:2},{text:"18.HashMap的底层实现原理？",id:"18hashmap的底层实现原理",depth:2},{text:"19.HashMap和Hashtable的异同？",id:"19hashmap和hashtable的异同",depth:2},{text:"20.加载因子值的大小，对HashMap有什么影响？",id:"20加载因子值的大小对hashmap有什么影响",depth:2}],title:"99 面试题",frontmatter:{}}}}]);