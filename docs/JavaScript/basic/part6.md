:::tip 来源
本文整理自 [前端知识体库 · 重学js](https://wuzaofeng.github.io/learning/javascript/deep/)
:::

# 排序算法

## 乱序
遍历元素，获取元素，再将剩余的个数随机获取。互换元素

```js
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

function shuffle (arr) {
  for (var i = 0; i<arr.length; i++) {
    var j = Math.floor(Math.random() * arr.length)

    var x
    x = arr[i]
    arr[i] = arr[j]
    arr[j] = x
  }
  return arr
}
```

```js
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}

function shuffle (arr) {
   for (let i = 0; i<arr.length; i++) {
    var j = Math.floor(Math.random() * arr.length)
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}
```

## 插入排序
将第一个元素作为有序序列，遍历后面未排序的元素，一个个与已经排序的元素做比较，并且排到前面

![插入排序](/JavaScript/basic/img/insertionsort.gif)

```js
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var element = arr[i];
        for (var j = i - 1; j >= 0; j--) {
            var tmp = arr[j];
            var order = tmp - element;
            if (order > 0) {
                arr[j + 1] = tmp;
            } else {
                break;
            }
        }
        arr[j + 1] = element;
    }
    return arr;
}

var arr = [6, 5, 4, 3, 2, 1];
console.log(insertionSort(arr));
```

[插入排序](https://visualgo.net/zh/sorting)

## 快速排序
1. 选择一个元素作为"基准"
2. 小于"基准"的元素，都移到"基准"的左边；大于"基准"的元素，都移到"基准"的右边。
3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

![快速排序](/JavaScript/basic/img/quicksort.gif)

```js
var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
    // 取数组的中间元素作为基准
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];

　　var left = [];
　　var right = [];

　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};
```

[《快速排序（Quicksort）的Javascript实现》](http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html)
