# 18 JUC并发编程 

## 18.1.集合类不安全

### 18.1.1 List不安全

> 解决方案

- 使用Vector

  ```java
  List<String> list = new Vector<>)();
  ```

- 使用Collections.synchronizedList

  ```java
  List<String> list = Collections.synchronizedList(new ArrayList<>());
  ```

- 使用CopyOnWriteArrayList----JUC编程

  ```java
  List<String> list = new CopyOnWriteArrayList<>();
  ```

  CopyOnWriteArrayList和Vector相比，CopyOnWriteArrayList使用Lock实现的同步，Vector使用的是synchronized，前者效率更高。

  CopyOnWrite 写入时复制。------ COW 计算机程序设计领域的一种优化策略。

  ```java
  // CopyOnWriteArrayList.add()源码
  
  public boolean add(E e) {
          final ReentrantLock lock = this.lock;
          lock.lock();
          try {
              Object[] elements = getArray();
              int len = elements.length;
              Object[] newElements = Arrays.copyOf(elements, len + 1);
              newElements[len] = e;
              setArray(newElements);
              return true;
          } finally {
              lock.unlock();
          }
      }
  ```

  

### 18.1.2 Set不安全

> 解决方案

- 使用Collections.synchronizedSet

  ```java
  List<String> list = CCollections.synchronizedSet(new HashSet<>());
  ```

- 使用CopyOnWriteArrayList----JUC编程

  ```java
  List<String> list =  new CopyOnWriteArraySet<>();
  ```

### 18.1.3 HashMap

> 解决方案

- 使用Collections.synchronizedMap

  ```java
  Map<String, String> map2 = Collections.synchronizedMap(new HashMap<>());
  ```

- 使用ConcurrentHashMap----JUC编程

  ```java
  Map<String, String> map = new ConcurrentHashMap<>();
  ```

### 18.1.4 代码总结

```java
package io.renren.modules.Thread;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.CopyOnWriteArraySet;

public class UnSafeList {
    public static void main(String[] args) {
        addList();
        addSet();
        addMap();
    }

    public static void addList() {
        // 不安全
        List<String> list1 = new ArrayList<>();
        // 使用工具类
        List<String> list2 = Collections.synchronizedList(new ArrayList<>());
        // JUC
        List<String> list = new CopyOnWriteArrayList<>();
        for (int i = 1; i <= 10; i++) {
            new Thread(()->{
                list.add(UUID.randomUUID().toString().substring(0,5));
                System.out.println(list);
            }, i+"").start();
        }
    }

    public static void addSet() {
        // 不安全
        Set<String> set1 = new HashSet<>();
        // 使用工具类
        Set<String> set2 = Collections.synchronizedSet(new HashSet<>());
        // JUC
        Set<String> set = new CopyOnWriteArraySet<>();
        for (int i = 1; i < 11; i++) {
            new Thread(() -> {
                set.add(UUID.randomUUID().toString().substring(0,5));
                System.out.println(set);
            }, String.valueOf(i)).start();
        }
    }

    public static void addMap() {
        // 不安全
        Map<String, String> map1 = new HashMap<>();
        // 使用工具类
        Map<String, String> map2 = Collections.synchronizedMap(new HashMap<>());
        // JUC
        Map<String, String> map = new ConcurrentHashMap<>();

        for (int i = 1; i < 11; i++) {
            new Thread(() -> {
                map.put(Thread.currentThread().getName(), UUID.randomUUID().toString().substring(0,5));
                System.out.println(map);
            }, String.valueOf(i)).start();
        }
    }
}

```

## 18.2.Callable

```java
package io.renren.modules.Thread;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

public class CallableTest {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        MyThread myThread = new MyThread();
        //适配类
        FutureTask futureTask = new FutureTask(myThread);
        new Thread(futureTask, "A").start();
        new Thread(futureTask, "B").start(); // 两个线程，只会打印一次“---call---”，是因为结果会被缓存。有缓存，会提高效率
        //获取Callable返回值。此方法可能会产生阻塞，一般把它放到最后一行，或者使用异步通信。
        String result = futureTask.get().toString();
        System.out.println(result);
    }
}

class MyThread implements Callable<String> {
    @Override
    public String call() throws Exception {
        System.out.println("---call---");
        return "111";
    }
}
```

细节：

- 有缓存----效率高
- futureTask.get()可能会发生阻塞

## 18.3.常用辅助类

### 18.3.1 CountDownLanch

其实是个减法计数器。

```java
CountDownLatch countDownLatch = new CountDownLatch(6);
```

> 原理

`countDownLatch.countDown()`数量减一；

`countDownLatch.await()`等待计数器归零，然后再向下执行。

每个线程执行完毕后，调用`countDownLatch.countDown()`方法，会执行减一操作。

### 18.3.2 CyclicBarrier

其实是个加法计数器。

```java
CyclicBarrier cyclicBarrier = new CyclicBarrier(7, () -> {
    System.out.println("召唤神龙成功");
});

for (int i = 1; i <= 7; i++) {
    final int temp = i;
    new Thread(()-> {
        System.out.println(Thread.currentThread().getName()+"收集了"+temp+"个龙珠");
        try {
            cyclicBarrier.await();//等待
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (BrokenBarrierException e) {
            e.printStackTrace();
        }
    }).start();
}
```

### 18.3.3 Semaphore

抢车位。一般限流时使用。

```java
	// 3个车位，6辆车，抢车位
        Semaphore semaphore = new Semaphore(3);
        for (int i = 1; i <= 6; i++) {
            new Thread(() -> {
                try {
                    semaphore.acquire(); // 抢到车位
                    System.out.println(Thread.currentThread().getName()+"抢到车位");
                    TimeUnit.SECONDS.sleep(3);
                    System.out.println(Thread.currentThread().getName()+"离开车位");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    semaphore.release();// 离开车位
                }
            }, String.valueOf(i)).start();
        }
```

> 原理

`semaphore.acquire();`获得。假设已经满了，就会等待，一直到被释放为止。

`semaphore.release();`释放。会将当前的信号释放，唤醒正在等待的县程。

> 作用

- 多个共享资源互斥时使用
- 并发限流，控制最大线程数

## 18.4.线程池

> 使用线程池的好处

- 降低资源消耗
- 提高响应速度
- 可以控制最大线程数
- 方便管理线程

### 18.4.1 “三大方法”

```java
package io.renren.modules.Thread;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Executors 工具类：3大方法
 */
public class ThreadPoolDemo {
    public static void main(String[] args) {
        // 创建线程池---线程池中只有一个线程
        ExecutorService service1 = Executors.newSingleThreadExecutor();
        // 创建线程池---指定线程池中线程数量
        ExecutorService service2 = Executors.newFixedThreadPool(5);
        // 创建线程池---线程池大小可伸缩，遇强则强遇弱则弱
        ExecutorService service3 = Executors.newCachedThreadPool();

        try{
            for (int i = 1; i <= 10; i++) {
                // 创建线程
                service3.execute(() -> {
                    System.out.println(Thread.currentThread().getName()+" ok");
                });
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            // 线程池使用完毕，关闭线程池
            service3.shutdown();
        }
    }
}

```

<p><front style="background: yellow">注：</front></p>

创建线程池不要使用`Executors`工具类，而是使用底层方法`ThreadPoolExecutor`。

使用`Executors`工具类的弊端如下：

- `FixedThreadPool`和`SingleThreadPool`：允许请求的队列长度是`Integer.MAX_VALUE`(约为21亿)，可能会堆积大量请求，导致OOM。
- `CachedThreadPool`和`ScheduledThreadPool`：允许创建的线程数量是`Integer.MAX_VALUE`(约为21亿)，可能会创建大量线程，导致OOM。

### 18.4.2 "七大参数"

```java
package io.renren.modules.Thread;

import java.util.concurrent.*;

/**
 * Executors 工具类：7大参数
 */
public class ThreadPoolDemo {
    public static void main(String[] args) {
        // 使用ThreadPoolExecutor创建线程池
        // 最大线程数=max+queue长度
        ExecutorService service = new ThreadPoolExecutor(
                2, //核心线程数
                5,//最大线程数
                3,// 超时多长时间没被调用就会释放
                TimeUnit.SECONDS,// 超时单位
                new ArrayBlockingQueue<>(3),// 阻塞队列
                Executors.defaultThreadFactory(),// 线程工厂，创建线程，一般不用动
                new ThreadPoolExecutor.AbortPolicy() // 拒绝策略
        );

        try{
            for (int i = 1; i <= 8; i++) {
                // 创建线程
                service.execute(() -> {
                    System.out.println(Thread.currentThread().getName()+" ok");
                });
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            // 线程池使用完毕，关闭线程池
            service.shutdown();
        }
    }
}

```

### 18.4.3 "四大拒绝策略"

```java
package io.renren.modules.Thread;

import java.util.concurrent.*;

/**
 * Executors 工具类：4大拒绝策略
 */
public class ThreadPoolDemo {
    public static void main(String[] args) {
        // 使用ThreadPoolExecutor创建线程池
        ExecutorService service = new ThreadPoolExecutor(
                2, //核心线程数
                5,//最大线程数
                3,// 超时多长时间没被调用就会释放，释放的是（最大线程-核心线程）
                TimeUnit.SECONDS,// 超时单位
                new ArrayBlockingQueue<>(3),// 阻塞队列
                Executors.defaultThreadFactory(),// 线程工厂，创建线程，一般不用动
//                new ThreadPoolExecutor.AbortPolicy() // 缓存队列已满，且超出最大线程数，抛出异常
//                new ThreadPoolExecutor.CallerRunsPolicy() // 哪来的回哪去
//                new ThreadPoolExecutor.DiscardPolicy() // 超出的线程会被丢弃，不会抛出异常
                new ThreadPoolExecutor.DiscardOldestPolicy() //超出的线程会尝试着和最老的进程竞争，成功与否不敢保证
        );

        try{
            for (int i = 1; i <= 28; i++) {
                // 创建线程
                service.execute(() -> {
                    System.out.println(Thread.currentThread().getName()+" ok");
                });
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            // 线程池使用完毕，关闭线程池
            service.shutdown();
        }
    }
}

```

### 18.4.4 线程池的最大大小如何设置？

- CPU密集型：电脑CPU几核就是几，可以保持CPU的效率最高

  使用`Runtime.getRuntime().availableProcessors()`获取CPU核数！

- IO密集型：程序中十分耗IO的线程数*2

- 

## 18.5.ForkJoin

<p><front style="background: yellow">3种方法实现从1累加至10_0000_0000的效率对比</front></p>

```java
package io.renren.JUC;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.RecursiveTask;
import java.util.stream.LongStream;


public class ForkJoinDemo {
    public static void main(String[] args) {
        System.out.println("核数："+Runtime.getRuntime().availableProcessors());
        // 普通累加
        test1();
        // 使用ForkJoin
        test2();
        // 使用流
        test3();
    }

    /**
     * 普通累加
     */
    public static void test1() {
        System.out.println("test1===========================");
        Long start = System.currentTimeMillis();
        
        Long sum = 0L;
        for (Long i = 1L; i <= 10_0000_0000; i++) {
            sum += i;
        }
        
        Long end = System.currentTimeMillis();
        System.out.println("sum="+sum+"   耗时："+ (end - start) + "ms");
    }

    /**
     * 使用ForkJoin
     * *******************************************************
     * 使用方法：
     * 1、通过ForkJoin池执行，故需要ForkJoinPool forkJoinPool= new ForkJoinPool();
     * 2、执行ForkJoin任务，即forkJoinPool.execute(ForkJoinTask)或者forkJoinPool.submit(ForkJoinTask)。前者没有返回值，后者可以获取返回值。此处我们需要返回值，故使用submit方法
     * 3、创建ForkJoinTask类。该类有两个常用子类：RecursiveAction(递归事件，没有返回值)、 RecursiveTask(递归任务，有返回值)。此处我们需要返回值，故使用RecursiveTask子类
     * 4、编写自己的类继承RecursiveTask类，并实现其中的抽象方法compute()。在该方法中进行计算并返回
     * 5、在compute()方法中，调用RecursiveTask.fork()拆分任务，将任务压入到线程队列；使用RecursiveTask.join()方法获取单个任务的值
     *
     *
     */
    public static void test2() {
        System.out.println("test2===========================");
        Long start = System.currentTimeMillis();
        
        Long sum = 0L;
        ForkJoinPool forkJoinPool = new ForkJoinPool();
        MyForkJoinTask myForkJoinTask = new MyForkJoinTask(0L, 10_0000_0000L);
        forkJoinPool.submit(myForkJoinTask);
        try {
            sum = myForkJoinTask.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
        
        Long end = System.currentTimeMillis();
        System.out.println("sum="+sum+"   耗时："+ (end - start) + "ms");
    }

    /**
     * 使用流
     */
    public static void test3() {
        System.out.println("test3===========================");
        Long start = System.currentTimeMillis();
        
        Long sum = LongStream.rangeClosed(0L, 10_0000_0000).parallel().reduce(0, Long::sum);
        
        Long end = System.currentTimeMillis();
        System.out.println("sum="+sum+"   耗时："+ (end - start) + "ms");
    }
}

class MyForkJoinTask extends RecursiveTask<Long> {
    private Long start = 0L;
    private Long end = 10_0000_0000L;
    private Long temp = 1_0000L;

    public MyForkJoinTask(Long start, Long end) {
        this.start = start;
        this.end = end;
    }

    @Override
    protected Long compute() {
        Long sum = 0L;
        // 如果end > temp,直接累加；否则使用ForkJoin分支合并
        if ((end - start) > temp) {
            for (Long i = start; i <= end; i++) {
                sum += i;
            }
        }else {
            Long middle = (start + end) / 2;
            MyForkJoinTask task1 = new MyForkJoinTask(start, middle);
            task1.fork();// 拆分任务，把任务压入到线程队列
            MyForkJoinTask task2 = new MyForkJoinTask(middle +1, end);
            task2.fork();
            sum = task1.join() + task2.join();
        }
        return sum;
    }

}
```

```java

核数：12
test1===========================
sum=500000000500000000   耗时：4871ms
test2===========================
sum=500000000500000000   耗时：4142ms
test3===========================
sum=500000000500000000   耗时：131ms

Process finished with exit code 0
```

## 18.6.异步回调

```java
package io.renren.JUC;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

/**
 * 异步回调
 */
public class AsyncDemo {
    public static void main(String[] args) {

        test1();
        test2();

    }

    /**
     * 没有返回值的异步回调
     */
    public static void test1() {
        System.out.println("test1================================");
        CompletableFuture<Void> voidC = CompletableFuture.runAsync(() -> {
            try {
                TimeUnit.SECONDS.sleep(3);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("没有返回值的异步回调");
        });

        System.out.println("主线程代码");

        try {
            System.out.println("获取返回值====>"+voidC.get());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }

    /**
     * 有返回值的异步回调
     */
    public static void test2() {
        System.out.println("\ntest2================================");
        CompletableFuture<Integer> integerC = CompletableFuture.supplyAsync(() -> {
            try {
                TimeUnit.SECONDS.sleep(3);
                System.out.println("有返回值的异步请求");
                int i = 10/0;
                return 200;
            } catch (InterruptedException e) {
                e.printStackTrace();
                return 300;
            }
        });

        System.out.println("主线程代码");

        // 请求成功后的处理
        try {
            System.out.println(integerC.whenComplete((t, u) -> {
                System.out.println("t=======>" + t);
                System.out.println("u=======>" + u);
            }).exceptionally(e -> {
                e.getMessage();
                return 500;
            }).get());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }

    }
}

```
