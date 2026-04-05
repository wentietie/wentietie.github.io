# 15 Java反射机制

## 15.1 Java反射机制概述

> Reflection--反射

- Reflection（反射）是被视为<front style="background: yellow">动态语言</front>的关键，反射机制允许程序在执行期间借助于Reflection API获取任何类的内部信息，并能直接操作任意对象的内部属性及方法
- 加载完类之后，在堆内存的方法区就产生了一个Class类型的对象（一个类只能有一个Class对象），这个对象就包含了完整的类的结构信息。我们可以通过这个对象看到类的结构。<front style="background: yellow">这个对象就像一面镜子，透过这个镜子看到类的结构，所以，我们形象的称之为：反射</front>
- 类加载的方式

  - 正常方式：`引入需要的“包类”名称` ---> `通过new实例化` ---> `取得实例化对象`
  - 反射方式：`实例化对象` ---> `getClass()方法` ---> `得到完整的“包类”名称`

> 反射的特征

动态性

> 静态语言 VS 动态语言

- <front color=red>动态语言</front>：
  - 定义：是一类在运行时可以改变其结构的语言，例如新的函数、对象、甚至代码可以被引进，已有的函数可以被删除或者是其他结构上的变化。通俗来说就是<front style="background: yellow">在运行时代码可以根据某些条件改变自身结构</front>。
  - 举例：Object-C、C#、JavaScript、PHP、Python、Erlang
- <front color=red>静态语言</front>：
  - 定义：<front style="background: yellow">运行时结构不可变的语言</front>
  - 举例：Java、C、C++

<front color=red>Java不是动态语言，但是Java可以称为准动态语</front>。即Java有一定的动态性，我们**可以利用反射机制、字节码操作获得类似动态语言的特性**。

> Java反射机制提供的功能

- 在运行时判断任意一个对象所属的类
- 在运行时构造任意一个类的对象
- 在运行时判断任意一个类所具有的成员变量和方法
- 在运行时获取泛型信息
- 在运行时调用任意一个对象的成员变量和方法
- 在运行时处理注解
- 生成动态代理

> 反射相关的主要API

- `java.lang.Class`：代表一个类。用来表示一个通用的类，是一个用来描述类的类
- `java.lang.reflect.Method`：代表类的方法
- `java.lang.reflect.Field`：代表类的成员变量
- `java.lang.reflect.Constructor`：代表类的构造器
- ...

> 疑问1：通过直接new的方式或反射的方式都可以调用公共结构，开发中到底使用哪个？

- 建议使用new的方式，但是不排除使用反射的方式
- 反射方式使用场景：当编译时不确定new哪个类的对象时

> 疑问2：反射机制与面向对象中的封装性是不是矛盾？如何看待这两个技术？

（封装性是私有的外部不能访问，反射是可以访问私有的属性和方法）

<p><front color=red>不矛盾</front>。</p>

封装性中私有的属性和方法等，外部不能访问，是指的没必要去访问，但是如果一定要访问的话，也是可以访问的。如果非要访问的话，就得使用反射技术了。

## 15.2 java.lang.Class

>java.lang.Class类的理解与获取

- 类的加载过程：

  程序经过javac.exe命令后，会生成一个或多个字节码文件（.class结尾），接着我们使用java.exe命令对某个字节码文件进行解释运行。相当于将某个字节码文件加载到内存中。
  将字节码文件加载到内存中（或者说使用java.exe命令对字节码文件进行解释运行）的过程就称为<front color=red>类的加载</front>。**加载到内存中的类，就称为<front style="background: yellow">运行时类</front>，此运行时类，就作为Class的一个实例。**

- 换句话说：

  Class的实例就对应着一个运行时类

- 加载到内存中的运行时类，会缓存一定的时间。在此时间内，可以通过不同的方式来获取此运行时类

- 获取Class实例的方式

  - 通过运行时类的属性：类.class
  - 通过运行时类的对象，调用getClass()
  - 调用Class的静态方法：forName(String className)。其中className是类的完整的“包类”名
  - 使用类的加载器：ClassLoader

- 获取Class实例方式的例子

  ```java
  /**
   * 获取Class的实例的方式
   */
  @Test
  public void test() throws ClassNotFoundException {
      // 方式1：通过运行时类的属性：类.class
      Class<Person> clazz1 = Person.class;
      System.out.println(clazz1);
  
      // 方式2：通过运行时类的对象，调用getClass()
      Person p1 = new Person();
      Class clazz2 = p1.getClass();
      System.out.println(clazz2);
  
      // 方式3：调用Class的静态方法：forName(String className)。其中className是类的完整的“包类”名
      Class<?> clazz3 = Class.forName("com.tth.learn.java.Person");
      System.out.println(clazz3);
  
      // 方式4：使用类的加载器：ClassLoader
      ClassLoader classLoader = ReflectTest.class.getClassLoader();
      Class<?> clazz4 = classLoader.loadClass("com.tth.learn.java.Person");
      System.out.println(clazz4);
  
      // 验证在一定时间内，获取的同一个类的运行时类，是同一个Class实例
      System.out.println(clazz1 == clazz2); // true
      System.out.println(clazz1 == clazz3); // true
      System.out.println(clazz1 == clazz4); // true
  }
  ```

> 哪些类型可以有Class对象？

- class：外部类、成员（成员内部类。静态内部类），局部内部类，匿名内部类

- interface：接口

- []：数组

  <p><front color=red>只要数组的类型和维度一样，就是同一个Class实例。</front></p>

  ```java
  @Test
  public void test2() {
      int[] arr1 = new int[10];
      int[] arr2 = new int[100];
      System.out.println(arr1.getClass() == arr2.getClass()); // true
  }
  ```

- enum：枚举

- annotation：注解@interface

- primitive type：基本数据类型

- void

> 类的加载过程

当程序主动使用某个类时，如果该类还未被加载到内存中，系统会经过如下三个步骤对该类进行初始化：

- <front color=red>类的加载</front>：将class文件字节码内容加载到内存中，并将这些静态数据转成方法区的运行时数据结构，然后生成一个代表这个类的java.lang.Class对象，作为方法区中类数据的访问入口（即引用地址）。所有需要访问和使用类数据只能通过这个Class对象。这个加载的过程需要类加载器的参与。
- <front color=red>{类的链接</front>：将java类的二进制字节码合并到JVM的运行过程中的过程。
  - 验证：确保加载的类信息符合JVM规范。如：以cafe开头，没有安全方面的内容
  - 准备：正式为类的static变量分配内存并<front color=magenta>设置类变量默认初始值</front>，这些内存都将在方法区中进行分配
  - 解析：虚拟机常量池内的符号引用（常量名）替换为直接引用（地址）
- <front color=red>类的初始化</front>
  - 执行<front color=magenta>类构造器`<clinit>()`</front>方法的过程。执行<front color=magenta>类构造器`<clinit>`()是由编译期自动收集类中所有类变量的复制动作和静态代码块中的语句合并产生的</front>。（类构造器是构造类信息的，不是构造该类对象的构造器）
  - 当初始化一个类的时候，如果返现其父类还没初始化，则需要先触发其父类的初始化
  - 虚拟机会保证一个类的`<clinit>()`在多线程环境中被正确加锁和同步

> 类加载器的作用

- 类加载器的作用：将class文件字节码内容加载到内存中，并将这些静态数据执行<front color=magenta>转换成方法区的运行时数据结构</front>，然后在堆中生成一个代表这个类的java.lang.Class对象，作为方法区中类数据的访问入口

- 类缓存：标准的JavaSE类加载器可以按要求查找类，但一旦某个类被加载到类加载器中，它将维持加载（缓存）一段时间。不过JVM垃圾回收机制可以回收这些Class对象

- JVM规范中定义了如下类型的类的加载器：

  以下几个类加载器的加载原则：执行<front color=magenta>自底向上检查是否已装载，自顶向下尝试加载类</front>。

  - `Bootstrap Classloader`：执行<front color=magenta>引导类加载器</front>。C++编写的，是JVM自带的类加载器，执行<front color=red>负责Java平台的核心库</front>，用来装载核心类库。该加载器无法直接获取，自然也无法让Bootstrap Classloader加载自己定义的类。
  - `Extension Classloader`：执行<front color=magenta>扩展类加载器</front>。负责执行<front color=red>jre/lib/ext目录下的jar包或者-D java.ext.dirs 指定目录下的jar包</front>装入工作库
  - `System Classloader`：执行<front color=magenta>系统类加载器</front>。负责执行<front color=red>java -classpath或者-D java.class.path 指定目录下的类与jar包</front>装入工作库，自定义的类也是通过System Classloader加载的
  - `自定义类加载器`

- 获取类的加载器

  ```java
  @Test
  public void test1() {
      // 获取当前类的类加载器：对于自定义类，使用系统类加载器进行加载。
      ClassLoader classLoader = ClassloaderTest.class.getClassLoader();
      System.out.println(classLoader); // sun.misc.Launcher$AppClassLoader@18b4aac2（AppClassLoader是一个系统类加载器）
  
      // 调用系统类加载器的getParent()：获取到的是扩展类加载器
      ClassLoader classLoaderParent = classLoader.getParent();
      System.out.println(classLoaderParent); // sun.misc.Launcher$ExtClassLoader@54bedef2
  
      // 调用扩展类加载器的getParent()：无法获取引导类加载器
      // 引导类加载器主要负责加载java核心类库，无法加载自定义类
      ClassLoader classLoaderParentParent = classLoaderParent.getParent();
      System.out.println(classLoaderParentParent); // null
  
      // String是java的一个核心类库，是由引导类加载器加载的
      ClassLoader classLoader1 = String.class.getClassLoader();
      System.out.println(classLoader1); // null
  }
  ```

- 使用FileInputStream和类加载器读取配置文件

  ```java
  @Test
  public void test2() throws IOException {
      Properties pros = new Properties();
      // 读取配置文件方式1：创建输入流，读取jdbc.properties。该文件是在当前module下
      //        FileInputStream fis = new FileInputStream("jdbc.properties");
      //        pros.load(fis);
  
      // 读取配置文件方式2：使用Classloader。配置文件jdbc1.properties在当前module的src下
      ClassLoader classLoader = ClassloaderTest.class.getClassLoader();
      InputStream is = classLoader.getResourceAsStream("jdbc1.properties");
      System.out.println(null == is);
      pros.load(is);
  
      String user = pros.getProperty("user");
      String password = pros.getProperty("password");
      System.out.println("user="+user+", password="+password);
  }
  ```

## 15.3 创建运行时类的对象

### 15.3.1 Class newInstance()的使用

- 作用：创建对应的运行时类。内部调用了运行时类的空参构造器

- 使用newInstance()的要求：

  - 运行时类必须有空参构造器，否则会报InstantiationException异常
  - 空参构造器的访问权限得够。可以为缺省、protected、public，通常设置为public。

- 扩展：在JavaBean中要求提供一个public的空参构造器，原因：

  - 便于通过反射，创建运行时类的对象
  - 便于子类继承此运行时类，默认调用super()时，保证父类有此构造器

- 举例：

  ```java
  @Test
  public void test1() throws IllegalAccessException, InstantiationException {
      Class<Person> clazz = Person.class;
      Person person = clazz.newInstance();
      System.out.println(person);
  }
  ```

### 15.3.2 体会反射的动态性

Reflection（反射）是被视为<front style="background: yellow">动态语言</front>的关键，动态语言就是在<front style="background: yellow">运行时</front>代码可以根据某些条件改变自身结构

如下代码中，在编译阶段是无法确定创建哪个对象的。只有在运行时获取到num的数值之后，才能确定创建的到底是哪个对象。这就提现了反射的动态性。

```java
/**
 * 体会反射的动态性
 */
@Test
public void test2() {
    for (int i = 0; i < 100; i++) {
        int num = new Random().nextInt(3);// 随机生成0、1、2
        String classpath = "";
        switch (num) {
            case 0:
                classpath = "java.util.Date";
                break;
            case 1:
                classpath = "java.lang.Object";
                break;
            case 2:
                classpath = "com.tth.learn.java.Person";
                break;
        }

        try {
            Object obj = getInstance(classpath);
            System.out.println(obj);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

/**
 * 获取类对象
 * @param classpath 类的完整类名
 * @return
 * @throws Exception
 */
private Object getInstance(String classpath) throws Exception{
    Class<?> clazz = Class.forName(classpath);
    return clazz.newInstance();
}
```

## 15.4 获取运行时类的完整结构

### 15.4.1 获取运行时类的属性结构

> 相关方法

- `Field[] getFields()`：获取当前运行时类及其父类中public修饰的属性
- `Field[] getDeclaredFields()`：获取当前运行时类中声明的所有属性，不包含父类中声明的属性

```java
@Test
public void test1() {
    Class<Person> clazz = Person.class;

    // 获取属性结构
    // getFields()：获取当前运行时类及其父类中public修饰的属性
    Field[] fields = clazz.getFields();
    for (Field f: fields) {
        System.out.println(f);
    }

    System.out.println("*****************");
    // getDeclaredFields()：获取当前运行时类中声明的所有属性，不包含父类中声明的属性
    Field[] declaredFields = clazz.getDeclaredFields();
    for (Field f: declaredFields) {
        System.out.println(f);
    }
}
```

> 扩展：获取属性的权限修饰符、数据类型、属性名称

```java
@Test
public void test2() {
    Class<Person> clazz = Person.class;
    Field[] declaredFields = clazz.getDeclaredFields();
    for (Field f: declaredFields) {
        // 获取属性的权限修饰符
        int modifiers = f.getModifiers();
        System.out.print(Modifier.toString(modifiers) + "\t");

        // 获取属性的数据类型
        Class<?> type = f.getType();
        System.out.print(type.getName() + "\t");

        // 获取属性名
        String name = f.getName();
        System.out.println(name);
    }
}
```

### 15.4.2 获取运行时类的方法结构

> 相关方法

- `getMethods()`：获取当前运行时类及其父类中public修饰的方法
- `getDeclaredMethods()`：获取当前运行时类中声明的所有方法，不包含父类中的方法

```java
@Test
public void test1() {
    Class<Person> clazz = Person.class;
    // getMethods()：获取当前运行时类及其父类中public修饰的方法
    Method[] methods = clazz.getMethods();
    for (Method m: methods) {
        System.out.println(m);
    }

    System.out.println("********************");

    // getDeclaredMethods()：获取当前运行时类中声明的所有方法，不包含父类中的方法
    Method[] declaredMethods = clazz.getDeclaredMethods();
    for (Method m: declaredMethods) {
        System.out.println(m);
    }
}
```

> 扩展：获取方法声明的注解、权限修饰符、返回值类型、形参列表、抛出的异常

```java
@Test
public void test2() {
    Class<Person> clazz = Person.class;
    Method[] declaredMethods = clazz.getDeclaredMethods();

    for (Method m: declaredMethods) {
        // 获取方法声明的注解
        Annotation[] annotations = m.getAnnotations();
        for (Annotation a: annotations) {
            System.out.print(a + "\t");
        }

        // 获取方法的权限修饰符
        int modifiers = m.getModifiers();
        System.out.print(Modifier.toString(modifiers)+ "\t");

        // 获取方法的返回值类型
        Class<?> returnType = m.getReturnType();
        System.out.print(returnType + "\t");

        // 获取方法名
        String name = m.getName();
        System.out.print(name);
        System.out.print("(");

        // 获取形参列表
        Class<?>[] parameterTypes = m.getParameterTypes();
        if (parameterTypes != null && parameterTypes.length != 0) {
            for (int i = 0; i < parameterTypes.length; i++) {
                if (i == parameterTypes.length - 1) {
                    System.out.print(parameterTypes[i].getName() + "args_" + i);
                }else {
                    System.out.print(parameterTypes[i].getName() + "args_" + i + ",");
                }
            }
        }
        System.out.print(")");

        // 获取方法抛出的异常
        Class<?>[] exceptionTypes = m.getExceptionTypes();
        if (exceptionTypes != null && exceptionTypes.length != 0) {
            System.out.print(" throws ");
            for (int i = 0; i < exceptionTypes.length; i++) {
                if (i == exceptionTypes.length - 1) {
                    System.out.print(exceptionTypes[i].getName());
                }else {
                    System.out.print(exceptionTypes[i].getName() + ", ");
                }
            }
        }
        System.out.println();
    }
}
```

### 15.4.3 获取当前运行时类的构造器

> 相关方法

- `getConstructors()`：获取当前运行时类中声明为public的构造器，不包含父类构造器
- `getDeclaredConstructors()`：获取当前运行时类中的所有构造器，不包含父类构造器

```java
@Test
public void test1() {
    Class<Person> clazz = Person.class;
    // getConstructors()：获取当前运行时类中声明为public的构造器，不包含父类构造器
    Constructor<?>[] constructors = clazz.getConstructors();
    for (Constructor c: constructors) {
        System.out.println(c);
    }

    System.out.println("**************");

    // getDeclaredConstructors()：获取当前运行时类中的所有构造器，不包含父类构造器
    Constructor<?>[] declaredConstructors = clazz.getDeclaredConstructors();
    for (Constructor c: declaredConstructors) {
        System.out.println(c);
    }
}
```

### 15.4.4 获取当前运行时类的父类

> 相关方法

- `getSuperclass()`：获取当前运行时类的父类
- `getGenericSuperclass()`：获取当前运行时类带泛型的父类

```java
@Test
public void test2() {
    Class<Person> clazz = Person.class;
    // getSuperclass()：获取当前运行时类的父类
    Class<? super Person> superclass = clazz.getSuperclass();
    System.out.println(superclass);

    // getGenericSuperclass()：获取当前运行时类带泛型的父类
    Type genericSuperclass = clazz.getGenericSuperclass();
    System.out.println(genericSuperclass);
    ParameterizedType paramType = (ParameterizedType) genericSuperclass;
    // 获取泛型类型
    Type[] actualTypeArguments = paramType.getActualTypeArguments();
    for (int i = 0; i < actualTypeArguments.length; i++) {
        if (i == actualTypeArguments.length - 1) {
            System.out.println(actualTypeArguments[i]);
        }else {
            System.out.println(actualTypeArguments[i].getTypeName() + ", ");
        }
    }
}
```

### 15.4.5 获取当前运行时类实现的接口

<p><front style="background: yellow">动态代理中可能会用到</front></p>

> 相关方法

- `getInterfaces()`：获取当前运行时类的接口

```java
/**
 * 获取当前运行时类实现的接口
 */
@Test
public void test3() {
    Class<Person> clazz = Person.class;
    // getInterfaces()：获取当前运行时类的接口
    Class[] interfaces = clazz.getInterfaces();
    for (Class c: interfaces) {
        System.out.println(c);
    }
}
```

### 15.4.6 获取当前运行时类所在的包

> 相关方法

- `getPackage()`：获取当前运行时类所在的包

```java
/**
 * 获取当前运行时类所在的包
 */
@Test
public void test4() {
    Class<Person> clazz = Person.class;
    // getPackage()：获取当前运行时类所在的包
    Package pack = clazz.getPackage();
    System.out.println(pack);
}
```

### 15.4.7 获取当前运行时类声明的注解

> 相关方法

- `getAnnotations()`：获取当前运行时类声明的注解

```java
/**
 * 获取当前运行时类声明的注解
 */
@Test
public void test5() {
    Class<Person> clazz = Person.class;
    // getAnnotations()：获取当前运行时类声明的注解
    Annotation[] annotations = clazz.getAnnotations();
    for (Annotation anno: annotations) {
        System.out.println(anno);
    }
}
```

## 15.5 调用运行时类的指定结构

### 15.5.1 调用运行时类的指定属性

> 相关方法

- `getField(String name)`：获取指定属性。要求运行时类中属性声明为public。通常不采用此方法
- `getDeclaredField(String name)`：获取运行时类中的指定属性
- `setAccessible(boolean flag)`：保证当前属性是可访问的
- `set(Object obj, Object value)`：设置当前属性的值
  - obj：指明设置哪个对象的属性
  - value：此属性的值设置为多少
- `get(Object obj)`：获取当前属性的值
  - obj 指明获取哪个对象

```java
@Test
public void testField() throws Exception{
    Class<Person> clazz = Person.class;

    // 获取运行时类的对象
    Person person = clazz.newInstance();
	//  1.getDeclaredField(String name)：获取运行时类中的指定属性
    Field name = clazz.getDeclaredField("name");
    // 2.保证当前属性是可访问的
    name.setAccessible(true);
    // 3.设置指定对象此属性的值
    name.set(person, "小米");
    // 4.获取指定对象此属性的值
    String str = (String) name.get(person);
    System.out.println(str);
    
    System.out.println(person);
}
```

### 15.5.2 调用运行时类中指定的方法

> 相关方法

- `getDeclaredMethod(String name, Class<?>... parameterTypes)`：获取运行时类的指定方法
  - name：方法名称
  - parameterTypes：方法的形参列表
- `setAccessible(boolean flag)`：保证方法是可以访问的
- `Object invoke(Object obj, Object... args)`：执行方法，并获取返回值
  - obj：指明是哪个对象。当方法是静态方法时，Obj可以为` null`，也可以为 `运行时类.class`
  - args ：给方法的形参赋值
  - 返回值： invoke()的返回值即为运行时类中指定方法的返回值。如果运行时类中的方法没有返回值，invoke()的返回值为null

```java
@Test
public void testMethod() throws Exception{
    Class<Person> clazz = Person.class;

    // 获取运行时类的对象
    Person person = clazz.newInstance();

    // 1.获取指定方法
    /**
     * getDeclaredMethod(String name, Class<?>... parameterTypes)：获取运行时类的指定方法
     * @param name 方法名称
     * @param parameterTypes 方法的形参列表
     */
    Method showNation = clazz.getDeclaredMethod("showNation", String.class);

    // 2.保证当前方法是可访问的
    showNation.setAccessible(true);

    // 3.调用方法，并获取方法返回值
    /**
     * Object invoke(Object obj, Object... args)：执行方法，并获取返回值
     * @param obj 指明是哪个对象。当方法是静态方法时，Obj可以为 null，也可以为 运行时类.class
     * @param args 给方法的形参赋值
     * @return invoke()的返回值即为运行时类中指定方法的返回值。如果运行时类中的方法没有返回值，invoke()的返回值为null
     */
    String nation = (String) showNation.invoke(person, "China");
    System.out.println(nation);

    System.out.println("***********************调用静态方法**********************************");
    Method showDesc = clazz.getDeclaredMethod("showDesc");
    showDesc.setAccessible(true);
    showDesc.invoke(Person.class);
    showDesc.invoke(null);
}
```

### 15.5.3 调用运行时类指定的构造器

> 相关方法

- `getDeclaredConstructor(Class<?>... parameterTypes)`：获取指定构造器
- `setAccessible(boolean flag)`：保证构造器是可以访问的
- `newInstance(Object ... initargs)`：调用构造器，创建运行时类对象
  - initargs：构造器形参列表

```java
@Test
public void testConstructor() throws Exception{
    Class<Person> clazz = Person.class;

    // 1.获取指定构造器
    /**
     * getDeclaredConstructor(Class<?>... parameterTypes)：获取指定构造器
     * @param parameterTypes：指明构造器的形参列表
     */
    Constructor<Person> constructor = clazz.getDeclaredConstructor(String.class);

    // 2.保证构造器是可访问的
    constructor.setAccessible(true);

    // 3.调用构造器创建运行时类对象
    Person person1 = constructor.newInstance("Tom");
    System.out.println(person1);
}
```

## 15.6 反射的应用：动态代理

> 代理模式的原理

使用一个代理将对象包装起来，然后用该代理对象取代原始对象。任何对原始对象的调用都要通过代理。代理对象决定是否以及何时讲方法调用转到原始对象上。

> 静态代理的缺陷

6.8小节中的代理机制的操作，属于静态代理，<front style="background: yellow">特征</front>是代理类和被代理类都是在编译期间确定下来的，不利于程序的扩展。同时，每一个代理类只能为一个（或者一套）接口服务，这样一来程序开发中必然产生过多的代理。执行<front color=red>最好是可以通过一个代理类完成全部的代理功能。</front>

> 动态代理

- 定义

  动态代理是指客户通过代理类来调用其它对象的方法，并且是在程序运行时根据需要动态创建目标类的代理对象。

- 使用场景

  - 调试
  - 远程方法调用

- <front style="background: yellow">相较于静态代理的优点</front>

  抽象角色中（接口）声明的所有方法都被转移到调用处理器一个集中的方法中处理，这样，我们可以更加灵活和统一的处理众多的方法

> 静态代理的使用举例

```java
/**
 * 静态代理类
 * @Author tth
 * @Date 2022/12/30 14:29
 */
public class StaticProxyTest {

    @Test
    public void test() {
        // 创建被代理类对象
        NikeClothFactory nike = new NikeClothFactory();
        // 创建代理类对象
        ProxyClothFactory proxyClothFactory = new ProxyClothFactory(nike);
        // 开始生产服装
        proxyClothFactory.produceCloth();
    }
}

/**
 * 服装工厂接口：定义生产衣服的接口
 */
interface ClothFactory {

    void produceCloth();
}

/**
 * 代理类：服装代理加工厂
 */
class ProxyClothFactory implements ClothFactory {

    private ClothFactory clothFactory;

    public ProxyClothFactory(ClothFactory clothFactory) {
        this.clothFactory = clothFactory;
    }

    @Override
    public void produceCloth() {
        System.out.println("服装代理加工厂开始进行一些准备工作");
        clothFactory.produceCloth();
        System.out.println("服装代理加工厂开始进行收尾工作");
    }
}

/**
 * 被代理类
 */
class NikeClothFactory implements ClothFactory {
    @Override
    public void produceCloth() {
        System.out.println("Nike服装加工厂生产一批运动服");
    }
}
```

> 动态代理的使用举例

```java
/**
 * 动态代理举例
 * @Author tth
 * @Date 2022/12/30 14:42
 */
public class DynamicProxyTest {
    @Test
    public void test() {
        // 创建被代理类
        NikeClothFactory1 nike = new NikeClothFactory1();

        // 创建代理类
        ClothFactory1 clothFactory = (ClothFactory1) ProxyFactory.getProxyInstance(nike);

        // 调用服装生产方法
        clothFactory.produceCloth();
    }
}

/**
 * 服装工厂接口：定义生产衣服的接口
 */
interface ClothFactory1 {

    void produceCloth();
}

/**
 * 被代理类
 */
class NikeClothFactory1 implements ClothFactory1 {
    @Override
    public void produceCloth() {
        System.out.println("Nike服装加工厂生产一批运动服");
    }
}

/**
 * 要想实现动态代理，需要解决如下两个问题：
 *  1.如何根据被代理类创建一个代理类？
 *  2.如何在调用代理类a的方法时自动调用被代理类的a方法？
 */

/**
 * 代理工厂类
 *  用来解决“根据被代理类创建代理类”的问题
 */
class ProxyFactory {

    /**
     * 根据被代理类对象创建代理对象
     * @param obj 被代理类对象
     * @return 代理类对象
     */
    public static Object getProxyInstance(Object obj) {
        MyInvocationHandler handler = new MyInvocationHandler();
        handler.bind(obj);
        return Proxy.newProxyInstance(obj.getClass().getClassLoader(),
                obj.getClass().getInterfaces(),
                handler);
    }
}

/**
 * 创建MyInvocationHandler实现InvocationHandler，并实现InvocationHandler的invoke()
 * 用来解决“在调用代理类a方法时动态的去调用被代理类的a方法”问题
 */
class MyInvocationHandler implements InvocationHandler {

    // 被代理类对象
    private Object obj;

    /**
     * 被绑定代理类对象（该功能也可以使用构造方法实现）
     * @param obj
     */
    public void bind(Object obj) {
        this.obj = obj;
    }

    /**
     * 当通过代理类对象，调用方法a时，会自动的调用如下方法invoke()
     * @param proxy 代理类对象
     * @param method 代理类要调用的方法
     * @param args 代理类要调用方法的参数
     * @return
     * @throws Throwable
     */
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println(proxy.getClass().getName());
        // method：代理类要调用的方法，同时，此方法也就作为了被代理类要调用的方法
        // method.invoke()的返回值就作为当前类invoke()方法的返回值
        return method.invoke(obj, args);
    }
}
```

