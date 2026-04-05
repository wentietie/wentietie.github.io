# 11 Java集合

## 11.1 概述

> 数组在存储多个数据方面的特点

- 数组一旦初始化，长度就确定了
- 数组一旦定义好，其元素的类型也就确定了

> 数组在存储多个数据方面的缺点

- 数组一旦初始化，长度就不可修改了，无法实现扩容
- 数组中提供的方法非常有限，对于添加、删除、插入数据等操作，非常不便
- 获取数组中实际元素的个数的需求，数组中没有线程的属性或方法可用
- 数组存储数据的特点：有序、可重复。对于无序、不可重复的需求，不能满足

## 11.2 Java集合框架

> Java集合可以分为Collection和Map两种体系：

- Collection接口：单列集合，用来存储一个一个的对象
  - List接口：存储的是元素有序、可重复的集合
    - 实现类：ArrayList、LinkedList、Vector
  - Set接口：存储的是元素无序、不可重复的集合
    - 实现类：HashSet、LinkedHashSet、TreeSet
- Map接口：双列集合，保存具有映射关系“key-value对”的集合
  - 实现类：HashMap、LinkedHashMap、TreeMap、HashTable、Properties

> 注意事项

- 集合Collection中存储的如果是自定义类的对象，需要自定义类重写的方法：
  - 如果Collection的实现类是List的子类，需要重写equals()
  - 如果Collection的实现类是Set的子类HashSet、LinkedHashSet，需要重写equals()和hashCode()
  - 如果Collection的实现类是Set的子类TreeSet，需要提供排序方法。排序方法的提供有如下两种方法
    - 放入TreeSet的元素的所在类实现Comparable接口，并重写compareTo()
    - 创建Comparator实现类，在初始化TreeSet时作为参数传入

## 11.3 Collection接口中的方法

- add(Object o)： 将元素o添加到集合中

- size()：获取集合中元素的个数

- addAll(Collection c)：将集合c中的元素添加到当前集合中

- isEmpty()：判断当前集合是否为空，即判断当前集合中的size()是否等于0

- clear()：清空集合中的元素

- contains(Object o)：判断当前集合是否包含元素o

  比较时，调用的是元素o所对应的类的equals()方法

  ```java
  public class CollectionTest {
      @Test
      public  void test1() {
          Collection coll = new ArrayList();
          coll.add(123);
          coll.add(new String("hello"));
          coll.add(new Person("Jerry", 18));
          coll.add(new Student("XiaoMing", 10, 80));
  
          System.out.println(coll.contains(123)); // true
          System.out.println(coll.contains("hello")); // true.String重写了equals()方法，比较的是内容
          System.out.println(coll.contains(new Person("Jerry", 18))); // false，未重写equals()，比较的是地址值
          System.out.println(coll.contains(new Student("XiaoMing", 10, 80))); // true。重写了equals()，比较的是内容
      }
  }
  
  class Person {
      private String name;
      private int age;
  	...
  }
  class Student extends Person {
      private int score;
  	...
  
      @Override
      public boolean equals(Object o) {
          if (this == o) return true;
          if (o == null || getClass() != o.getClass()) return false;
          Student student = (Student) o;
          return score == student.score && getName().equals(student.getName()) && getAge() == student.getAge();
      }
  }
  
  ```

- containsAll(Collection c)：判断c中的元素是否都在当前结合中

- remove(Object o)：在当前集合中删除元素o，返回是否移除成功

  需要调用元素o所对应的类的equals()

- removeAll(Collection c)：在当前集合中删除集合c中所有元素

  需要调用c中所有元素对应的类的equals()方法

- retainAll(Collection c)：计算当前集合和集合c的交集（结果赋值给当前集合），返回值为boolean类型，即当前集合和集合c是否有交集

  如果二者没有交集，当前集合被修改为[]，返回值为false

- equals(Object o)：判断当前集合和o是否相等。

  调用的是元素o锁对应的类中的equals()

- hashCode()：返回当前对象的hash值

- toArray()：集合 ---> 数组

  Arrays.asList(Object[] o)：数组 ---> 集合

  ```java
  List list = Arrays.asList(new String[]{"AA", "BB", "CC"});
  System.out.println(list); // 输出[AA, BB, CC]
  
  List list1 = Arrays.asList(new int[]{1, 2, 3}); // 此处会把new int[]当做一个元素放到list1中
  System.out.println(list1); // 输出[[I@66cd51c3]
  
  List list2 = Arrays.asList({1, 2, 3});
  System.out.println(list2); // 输出[1, 2, 3]
  ```

- iterator()：返回Iterator接口的实例，用于遍历集合元素

## 11.4 Iterator迭代器接口

> 概述

- Iterator对象称为迭代器（设计模式的一种），主要用于遍历Collection集合中的元素
- <front style="background: yellow">GOF给迭代器模式的定义为</front>：提供一种方法访问一个容器对象中各个元素，而又不暴露该对象的内部细节。**迭代器模式，就是为容器而生**
- Collection接口继承了java.lang.Iterator接口，该接口有一个iterator()，所有实现了Collection接口的集合类都有一个iterator()， 用以返回一个实现了Iterator接口的对象
- Iterator仅用于遍历集合
- 集合对象每次调用iterator()都得到一个<front style="background: yellow">全新的</front>迭代对象，<front style="background: yellow">默认游标都在集合的第一个元素**之前**</front>

> 常用方法

- hasNext()：判断是否还有下一个元素

- next()：获取下一个元素

  <p><front style="background: yellow">调用next()执行的操作</front></p>：

  - 指针下移
  - 将下移后的集合位置上的元素返回

- remove()：在遍历的时候，删除集合中的元素。

  如果还未调用next()或者在上一次调用next()之后已经调用了remove()，再调用remove()，即连续两次调用remove()，会报IllegalStateException。

> 举例

```java
// 遍历 
@Test
public void test() {
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(new String("hello"));
    coll.add(new Person("Jerry", 18));
    coll.add(new Student("XiaoMing", 10, 80));

    Iterator iterator = coll.iterator();
    while (iterator.hasNext()) {
        System.out.println(iterator.next());
    }
}
// 移除元素
@Test
public void test2() {
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(new String("hello"));
    coll.add(new Person("Jerry", 18));
    coll.add(new Student("XiaoMing", 10, 80));

    Iterator iterator = coll.iterator();
    while (iterator.hasNext()) {
        Object o = iterator.next();
        // 移除元素
        if ("hello".equals(o)) {
            iterator.remove();
        }
    }

    // 重新遍历
    Iterator iterator1 = coll.iterator();
    while (iterator1.hasNext()) {
        System.out.println(iterator1.next());
    }
}
```

## 11.5 List接口

### 11.5.1 ArrayList源码分析

> JDK7中的ArrayList

```java
ArrayList list = new ArrayList(); // 底层创建了长度是10的Object[]数组elementData

list.add(123); // elementData[0] = new Integer(123)

...

list.add(11); // 如果此次的添加导致底层elementData数组容量不够，则扩容。默认情况下，扩容为原来的容量的**1.5倍**，同时需要将原有数组中的数据复制到新的数组中。
```

<p><front style="background: yellow">结论</front>：JDK7中，如果能确定list的长度，建议使用带参构造器ArrayList list = new ArrayList(int capacity);</p>

> JDK8中的ArrayList

```java
ArrayList list = new ArrayList(); // 底层Object[] elementData初始化为{}，并没有创建长度为10的数组

list.add(123); // 第一次调用add()时，底层会创建长度为10的数组，并执行如下操作elementData[0] = new Integer(123)

...

 // 后续操作与JDK7中无异
```

> 小结

JDK7中的ArrayList的对象创建类似于单例的饿汉式，JDK8中的ArrayList对象的创建类似于单例的懒汉式，**延迟了数组的创建，节省内存**。

### 11.5.2 LinkedList源码分析

```java
LinkedList list = new LinkedList(); // 内部声明了Node类型的first和last属性

list.add(123); // 将123封装到Node中，创建Node对象
```

其中Node的定义，体现了双向链表的说法。

```java
private static class Node<E> {
    E item; // 当前元素的值
    Node<E> next; // 指前指针
    Node<E> prev; // 指后指针

    Node(Node<E> prev, E element, Node<E> next) {
        this.item = element;
        this.next = next;
        this.prev = prev;
    }
}
```

### 11.5.3 Vector的源码分析

```java
Vector vector = new Vector<>(); // JDK7和JDK8中通过Vector()创建对象时，都创建了长度为10的数组

// 在扩容方面，默认扩容为原来的**2倍**。
```

### 11.5.4 List接口中的方法

- Collection接口中的API仍可用
- void add(int index, Object ele)：在index位置插入ele元素
- boolean addAll(int index, Collection eles)：在index位置开始将eles中的元素全部加进来
- Object get(int index)：获取index位置的元素
- int indexOf(Object ele)：获取元素ele在集合中首次出现的位置。如果不存在，返回-1
- int lastindexOf(Object ele)：获取元素ele在集合中最后一次出现的位置。如果不存在，返回-1
- Object remove(int index)：移除index位置的元素，并返回此元素
- Object set(int index, Object ele)：将index位置的元素设置为ele
- List subList(int fromIndex, int toIndex)：返回**[fromIndex, toIndex)**位置处的子集合，原集合没有变化

## 11.6 Set接口

### 11.6.1 概述

<p><front style="background: yellow">Set接口：存储无序的、不可重复的数据</front></p>

Set中没有额外定义方法，使用的都是Collection接口中的方法

> 分类

- HashSet：作为Set接口的主要实现类；线程不安全的，可以存储null；底层是数组+链表的结构
  - LinkedHashSet：作为HashSet的子类，在遍历内部数据时，可以按照添加的顺序遍历
- TreeSet：底层使用的是二叉树（红黑树）存储，放入TreeSet的元素，必须是同一个类的对象，可以按照添加对象的指定属性进行排序

> Set存储的无序性

以HashSet为例

- 无序性 $\neq$ 随机性
- 存储的数据在底层数组中并非按照数组索引的顺序添加，而是根据数据的哈希值决定的

> Set存储的不可重复性

以HashSet为例

保证添加的元素按照equals()判断时，不能返回true，确保相同的元素只能添加一个。

**Set中存储元素要想实现不可重复性，需要重新该元素对应类的equals()和hashCode()方法。**

### 11.6.2 HashSet

> HashSet添加元素的过程

当向HashSet中添加元素a时，首先调用元素 a所在类的hashCode()，计算元素a的哈希值，接下来用此哈希值通过某种算法计算出在HashSet底层数组中的存放位置（即索引位置），然后判断此位置上是否应有元素：

- 如果此位置上没有其他元素，则**元素a添加成功**；---情况1
- 如果此位置上有其他元素b（或者以链表形式存在的多个元素），则比较元素a与元素b的哈希值：
  - 如果hash值不相同，**元素a添加成功**；---情况2
  - 如果hash值相同，进而需要调用元素a所在类的equals()：
    - equals()返回true，**元素a添加失败**；
    - equals()返回false，**元素a添加成功**；---情况3

对于添加成功的情况2和情况3而言，元素a与已经存在指定索引位置上的数据以链表的方式存储。

JDK7：元素a放到数组中，指向原来的元素

JDK8：原来的元素放在数组中，指向a元素

总结：7上8下

>HashSet的特点

- 不能保证元素的顺序排列
- HashSet不是线程安全的
- 集合元素可以是null

> HashSet判断两个元素相等的标准

两个对象通过hashCode()比较相等，且两个对象的equals()返回值也相等

> 使用HashSet的主意事项

对于存放在Set容器中的对象，对应的类一定要重写equals()和hashCode()，以实现对象相等规则。即“<front style="background: yellow">相等的对象必须有相等的散列码（哈希值）</front>”

> 重写hashCode()的基本原则 

- 在程序运行时，同一个对象多次调用hashCode()，应该返回相同的值
- 当两个对象的equals()返回true时，这两个对象的hasCode()的返回值也相等
- 对象中用作equals()方法比较的属性，都应该用来计算hash值

<p><front style="background: yellow">建议使用快捷键自动生成！！！</front></p>

<p><front style="background: yellow">两个对象相同，hash值一定相等；hash值相等，两个对象不一定相同</front></p>

### 11.6.3 LinkedHashSet

- LinkedHashSet作为HashSet的子类，在添加数据的同时，每个数据还维护了两个变量，用以记录当前数据的前一个数据和后一个数据。
- 在遍历内部数据时，可以按照添加的顺序遍历。

- <front style="background: yellow">优点</front>：对于频繁的遍历操作，LinkedHashSet效率高于HashSet。

### 11.6.4 TreeSet

> 特点

- 底层是二叉树（红黑树）
- 可以按照添加对象的指定属性进行排序
- 有序，查询比list快

> 注意事项

- 向TreeSet中添加的数据，要求是相同类的对象

- 向TreeSet中添加的数据前，需要定义TreeSet中元素的排序方式：自然排序或者定制排序

  - 使用自然排序（实现Comparable接口）

    ```java
    public class TreeSetTest {
        @Test
        public void test1() {
            TreeSet treeSet = new TreeSet();
            treeSet.add(new User("Jack", 12));
            treeSet.add(new User("Janny", 22));
            treeSet.add(new User("Jery", 23));
            treeSet.add(new User("Jey", 34));
            treeSet.add(new User("Jane", 10));
    
            Iterator iterator = treeSet.iterator();
            while (iterator.hasNext()) {
                System.out.println(iterator.next());
            }
        }
    }
    
    class User implements Comparable{
        private String name;
        private int age;
    
        ...
    
        /**
         * 按照名称有小到大排序。名称相同，按照年龄有小到大排
         * @param o
         * @return
         */
        @Override
        public int compareTo(Object o) {
            if (o instanceof User) {
                User user = (User) o;
                int compared = this.name.compareTo(user.getName());
                if (compared == 0) {
                    compared = Integer.compare(this.age, user.age);
                }
                return compared;
            }
    
            throw new RuntimeException("输入的数据不匹配");
        }
    
        ...
    }
    ```

  - 使用定制排序（实现Comparator接口）

    ```java
    public class TreeSetTest {
        @Test
        public void test2() {
            Comparator comparator = new Comparator() {
                // 按照年龄由大到小排序
                @Override
                public int compare(Object o1, Object o2) {
                    if (o1 instanceof User && o2 instanceof User) {
                        User user1 = (User) o1;
                        User user2 = (User) o2;
                        return -Integer.compare(user1.getAge(), user2.getAge());
                    }
    
                    throw new RuntimeException("输入的数据不匹配");
                }
            };
    
            TreeSet treeSet = new TreeSet(comparator);
            treeSet.add(new User("Jack", 12));
            treeSet.add(new User("Janny", 22));
            treeSet.add(new User("Jery", 23));
            treeSet.add(new User("Jey", 34));
            treeSet.add(new User("Jane", 10));
    
            Iterator iterator = treeSet.iterator();
            while (iterator.hasNext()) {
                System.out.println(iterator.next());
            }
        }
    }
    
    class User {
        private String name;
        private int age;
    	...
    }
    ```

> TreeSet中比较两个对象是否相同的标准

- 使用自然排序：比较两个对象是否相同，即为元素所在类的compareTo()返回值是否为0
- 使用定制排序：比较两个对象是否相同，即为创建的 Comparator实现类中compare()返回值是否是0

<p><front style="background: yellow">比较的不再是hashCode()和equals()</front></p>

## 11.7 Map接口

### 11.7.1 概述

> Map接口简介

- Map接口：存储双列数据，存储的是key-value键值对

  - HashMap类：主要实现类；线程不安全，效率比Hashtable高；可以存储值为null的key和value；底层：数组+链表（JDK7及之前）、数组+链表+红黑树（JDK8）

    - LinkedHashMap类：比HashMap多了一对“指针”，用来指向前一个和后一个元素，保证在遍历map元素时，可以按照添加的顺序实现遍历；对于频繁的遍历操作，LinkedHashMap效率比HashMap高

  - TreeMap类：保证按照添加的key-value对进行排序，实现排序遍历。此时考虑key的自然排序或者定制排序，要求key是同一个类创建的对象

    ​							底层使用的是红黑树

  - Hashtable类：古老实现类；线程安全，效率比HashMap低；不可以存储值为null的key和value

    - Properties类：常用来处理配置文件。key和value都是String类型

> Map中结构的理解

以HashMap为例

- Map中的key：无序的、不可重复的，使用Set存储所有的key；key所在的类要重写equals()和hashCode()；
- Map中的value：无序的、可重复的，使用Collection存储所有的value；value所在的类需要重写equals()；
- 一个键值对构成一个Entry对象；
- Map中的entry：无序的、不可重复的，使用Set存储所有的entry 。

### 11.7.2 HashMap底层实现原理

> JDK7中HashMap实现原理

- `HashMap map = new HashMap();`：实例化之后，底层创建了一个长度是16的一维数组Entry[] table
- `map.add(key1, value1) `：
  - 首先，调用key1所在类的hashCode()计算key1的哈希值，此哈希值经过某种算法计算后，得到Entry数组中的存放位置
  - 如果此位置上的数据是空，此时key1-value1存放成功  --->情况1
  - 如果此位置上的数据不为空，意味着此位置上存在一个或多个数据（以链表形式存在），比较key1和已存在数据的哈希值：
    - 如果key1的哈希值与此位置上的数据的哈希值都不一样，此时key1-value1存放成功  --->情况2
    - 如果key1的哈希值与此位置上的某一个数据(key2,value2)的哈希值相同，则调用key1所在类的equals()方法进行比较：
      - 如果equals()返回false，此时key1-value1存放成功  --->情况3
      - 如果equals()返回true，使用value1替换value2
- 补充：关于情况2和情况3，此时key1-value1和原来的数据以链表的形式存在，由key1-value1指向原数据
- 关于扩容：在不断添加的过程中，会涉及到扩容问题。
  - 扩容时间：当超出临界值（注意不是数组的长度），且要存放数据的位置非空时，进行扩容 
  - 默认扩容为原来的2倍，并将原有的数据复制过来

> JDK8相较于JDK7在底层实现方面的不同

- `HashMap map = new HashMap();`：底层没有创建长度为16的数组。且底层数组是Node[]，而非Entry

- `map.add(key1, value1) `：如果是首次调用，会先创建长度为16的数组

- JDK7底层结构只有**数组+链表**，JDK8中底层结构是**数组+链表+红黑树**。

  当数组的**某一个索引位置上的元素以链表形式存在的数据个数 > 8 且当前数组的长度 > 64**时，此时**此索引位置上**的所有数据改为使用红黑树

> HashMap中常用常量

- `DEFAULT_INITIAL_CAPACITY`：HashMap默认容量，16
- `DEFAULT_LOAD_FACTOR`：默认加载因子，0.75
- `threshold`：扩容的临界值。threshold = DEFAULT_INITIAL_CAPACITY * DEFAULT_LOAD_FACTOR
- `TREEIFY_THRESHOLD`：Bucket中链表长度大于该默认值时，转为红黑树，8
- `MIN_TREEIFY_CAPACITY`：Bucket中Node被树化时最小的hash表容量，64

### 11.7.3 LinkedHashMap底层实现原理

LinkedHashMap底层使用的结构与HashMap相同，唯一的区别是LinkedHashMap内部提供了Entry用来替换HashMap中的Node。

LinkedHashMap.Entry类中比HashMap.Node多了两个变量，用来记录当前元素的前一个和后一个元素，确保能够记录元素的添加顺序

```java
static class Entry<K,V> extends HashMap.Node<K,V> {
    Entry<K,V> before, after;
    Entry(int hash, K key, V value, Node<K,V> next) {
        super(hash, key, value, next);
    }
}
```

### 11.7.4 Map接口中的方法

> 增删改

- Object put(Object key, Object value)：将key-value添加到（修改）当前map中
- Object putAll(Map m)：将m中的key-value添加到当前map中
- Object remove(Object key)：移除指定的key的key-value对，并返回对应的value
- void clear()：清空当前map

> 查询

- Object get(Object key)：获取key对应的value
- boolean containsKey(Object key)：判断是否包含指定的key
- boolean containsValue(Object value)：判断是否包含指定的value
- int size()：返回map中key-value对的个数
- boolean isEmpty()：判断当前map是否为空
- boolean equals(Object obj)：判断当前map和obj是否相等

> 遍历

- Set keySet()：返回所有key构成的Set集合

- Collection values()：返回所有的value集合

- Set entrySet()：返回所有的key-value对

  entrySet()获得的集合中的元素都是Map.Entry，可以强转

### 11.7.5 TreeMap的使用

- 向TreeMap中添加key-value，需要保证key是由同一个类创建的对象
- 因需要对key进行排序，因此要么key所在的类需要实现Comparable接口，要么在在创建TreeMap时将Comparator实现类作为参数传入

使用和TreeSet类似。

### 11.7.6 Properties

- Properties是Hashtable的子类，该对象用于处理属性文件

- Properties的key和value都是String类型

- 例子

  - jdbc.properties

    ```properties
    name=唐天华
    password=123456
    ```

  - PropertiesTest.java

    ```java
    public class PropertiesTest {
        public static void main(String[] args) {
            FileInputStream fis = null;
            try {
                Properties prop = new Properties();
                fis = new FileInputStream("jdbc.properties");
                // 加载流对应的文件
                prop.load(fis);
    
                // 获取配置文件中指定key对应的value值
                String name = prop.getProperty("name");
                String password = prop.getProperty("password");
                System.out.println("name="+name+", password="+password);
    
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                if (fis != null) {
                    try {
                        fis.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
    
        }
    }
    
    ```

## 11.8 Collections工具类

<p><front style="background: yellow">Collections是用来操作Collection和Map的工具类</front></p>

> 排序相关

- `void reverse(List<?> list)`：反转list中元素的顺序

- `void shuffle(List<?> list)`：对list中的元素进行随机排序

- `void sort(List<T> list)`：按照list中元素的自然顺序进行排序

- `void sort(List<T> list, Comparator<? super T> c)`：根据指定的Comparator对list中的元素进行排序

- `void swap(List<?> list, int i, int j) `：交换list中第i个和第j个元素的位置

- `T max(Collection<? extends T> coll)`：根据元素的自然顺序，返回集合中的最大元素

- `T max(Collection<? extends T> coll, Comparator<? super T> comp)`：根据指定的Comparator的指定顺序，返回集合中的最大元素

- `T min(Collection<? extends T> coll)`：根据元素的自然顺序，返回集合中的最小元素

- `T min(Collection<? extends T> coll, Comparator<? super T> comp)`：根据指定的Comparator的指定顺序，返回集合中的最小元素

- `int frequency(Collection<?> c, Object o)`：返回指定集合中指定元素出现的次数

- `void copy(List<? super T> dest, List<? extends T> src)`：将src中的内容赋值到的dest中

  使用此方法时，需要保证dest.size() >= src.size()

  ```java
  @Test
      public void test1() {
          List list = new ArrayList();
          list.add(11);
          list.add(989);
          list.add(454);
          list.add(89);
          list.add(23);
  
          // 错误写法，会报java.lang.IndexOutOfBoundsException: Source does not fit in dest 异常
  //        List dest = new ArrayList();
  //        Collections.copy(dest, list);
  
          // 正确写法
          List dest = Arrays.asList(new Object[list.size()]);
          Collections.copy(dest, list);
          System.out.println(dest);
      }
  ```

- `boolean replaceAll(List<T> list, T oldVal, T newVal)`：用newVal替换list中的oldVal

> 同步控制

Collections中提供了多个synchronizedXxx()，用来将指定集合包装成线程同步的集合，从而解决多线程并发访问集合时的线程安全问题。synchronizedXxx()的返回结果即为线程安全的。