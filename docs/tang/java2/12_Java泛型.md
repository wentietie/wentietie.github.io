# 12 Java泛型

<p><front style="background: yellow">JDK5.0新增特性</front></p>

## 12.1 概述

> 定义

所谓泛型，就是允许在定义类、接口时通过一个标识表明类中某个属性的类型、某个方法的返回值、参数类型。这个类型参数将在使用时（如：继承或者实现这个接口，用这个类型声明变量、创建对象时）确定（即传入实际的类型参数，也称为类型实参）。

## 12.2 自定义泛型结构

> 自定义泛型类、泛型接口

- 泛型类、泛型接口可能有多个参数，此时应该将多个参数放到一对尖括号中，并用逗号隔开。如<E1, E2, E3>

- 泛型如果不指定，将被擦除，单行对应的类型均按照Object处理，但不等价于Object

- JDK7中，实例化泛型类时可以简化为：`ArrayList<String> list = new ArrayList<>()`

- 泛型不能是基本数据类型，可以使用包装类替换

- 泛型类或者泛型接口中，不能在静态方法中使用类的泛型

  泛型的具体类型需要在类实例化的时候指定，静态方法在类实例化之前就可以被调用

- 异常类不能有泛型

- 创建泛型数组：`T[] arr = (T[]) new Object[10]`

  不可以使用 T[] arr = new T[10]

- 父类有泛型，子类可以选择保留泛型，也可以选择指定泛型类型

  ```java
  class Father<T1, T2>{}
  ```

  - 子类不保留父类的泛型：按需实现

    - 没有类型（泛型会被擦除）

      ```java
      class Son1 extends Father{}
      // 等价于 class Son1 extends Father<Object, Object>
      ```

    - 具体类型

      ```java
      class Son2 extends Father<Integer, String> {}
      ```

  - 子类保留父类泛型：泛型子类

    - 全部保留

      ```java
      class Son3<T1, T2> extends Father<T1, T2>{}
      ```

    - 部分保留

      ```java
      class Son4<T2> extends Father<Integer, T2>{}
      ```

> 自定义泛型方法

- 泛型方法，是在方法中出现了泛型的结构。该泛型结构与所在类的泛型参数没有任何关系

  换句话说，泛型方法所在的类是不是泛型类都没有关系

- 泛型方法可以声明为静态的。

  因为泛型参数是在调用方法的时候确定的，并非实例化类的时候才确定

```java
class GenericTest<T> {
    /**
    * 定义泛型方法
    * 第一个<E> 表明泛型的类类型。如果不写，后边的E会被识别为某一个类
    */
    public <E> List<E> copyFromArray(E[] arr) {
        ArrayList<E> list = new ArrayList<>();
        for(E e: arr) {
            list.add(e)
        }
        return list;
    }
}
```

## 12.3 泛型在继承方面的体现

- 类A是类B的父类，`G<A>`和`G<B>`不具备子父类关系，二者是并列关系。即：

  ```java
  public void test() {
      Object o = null;
      String s = null;
      o = s; // 代码正确
      
      List<Object> oList = null;
      List<String> sList = null;
      oList = sList; // 编译不通过
  }
  ```

  <front style="background: yellow">补充</front>：类A是类B的父类(接口)，那么`A<G>`是`B<G>`的父类

  ```java
  public void test() {
      List<Object> list = null;
      ArrayList<Object> aList = null;
      list = aList; // 代码正确
  }
  ```

- 类A是类B的父类，`G<A>`和`G<B>`二者共同的父类是`G<?>`

## 12.4 通配符的使用

<p><front style="background: yellow">通配符：?</front></p>

> 类A是类B的父类，`G<A>`和`G<B>`二者共同的父类是`G<?>`

```java
public void test() {
    List<Object> oList = null;
    List<String> sList = null;
    
    List<?> list = null;
    list = oList; // 代码正确
    list = sList; // 代码正确
    
    print(oList); // 代码正确
    print(sList); // 代码正确
}

private void print(List<?> list) {
    Iterator<?> iterator = list.iterator();
    while (iterator.hasNext()) {
        System.out.println(iterator.next());
    }
}
```

> 通配符的写入与读取

```java
public void test() {
    List<String> sList = new ArrayList<>();
    sList.add("AA");
    sList.add("BB");
    sList.add("CC");
    
    List<?> list = null;
    list = sList; // 代码正确
    // 写入（添加）元素：对于List<?>除了null不能add其他数据
    list.add("DD");//编译不通过
    // 读取元素：允许读取数据，读取到的数据是Object类型
    Object o = list.get(0);
}
```

> 有限制条件的通配符

- 通配符指定上限

  上限extends：使用时指定的类型必须是继承某个类，或者实现某个接口。即<=

- 通配符指定下线

  下限super：使用时指定的类型不能小于操作的类，即>=

- 举例

  - `? extends A`

    ?可以是类A，也可以是类A的子类

  - `? super A`

    `?`可以是类A，也可以是类A的父类

  ```java
  public class Test {
      public void test() {
          List<Student> sList = null;
          List<Person> pList = null;
          List<Object> oList = null;
          
          List<? extends Person> list1 = null;
          list1 = sList;
          list1 = pList;
          list1 = oList;//编译不通过
          // 添加数据：除了null，别的不允许
          list1.add(new Student());//编译不通过
          
          List<? super Person> list2 = null;
          list2 = sList;//编译不通过
          list2 = pList;
          list2 = oList;
          // 添加数据：允许添加
          list2.add(new Person());
          list2.add(new Student());
          
      }
  }
  class Person{}
  class Student extends Person{}
  ```