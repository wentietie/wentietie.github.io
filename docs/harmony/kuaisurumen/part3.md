# 写一个小demo

实现如下页面：
![image.png](../images/4.png)

## 分析

在上图中，我们将页面内的结构抽象三大部分。其中，第1部分为轮播图部分，第2部分为赋能套件部分，第3部分为入门教程部分。

- 顶部的标题部分
- 轮播图部分：可自动播放、展示多张图片的组件，命名为Banner，每一个元素为BannerItem
- 赋能套件部分：横向可滑动的组件，命名为Enablement ，由多个EnablementItem组成。
- 入门教程部分：纵向可滑动的组件，命名为Tutorial ，由多个TutorialItem组成。

## 实现

### 页面整体布局

:::tip 容器
页面整体布局沿垂直方向布局，根容器使用Column。Column容器可以使组件内的元素沿垂直方向布局。
:::

```ts
@Entry
@Component
struct Index {
  @State message: string = '快速入门';

  build() {
    Column() {
      
    }
    .height('100%')
    .width('100%')
    .backgroundColor('#F1F3F5')
  }
}
```

### 顶部的标题部分

:::tip
首先将Text组件宽度设置为占满屏幕（100%），并设置文本对齐属性为Start，文本在Text组件内会向左对齐。设置文本左边距，padding属性可以设置内容器向内的边距，此处设置左边距（left）为16。
:::

```ts
@Entry
@Component
struct Index {
  @State message: string = '快速入门';

  build() {
    Column() {
      Text(this.message)
        .fontSize(24)
        .fontWeight(700)
        .width('100%')
        .textAlign(TextAlign.Start)
        .padding({ left: 16 })
        .fontFamily('HarmonyHeiTi-Bold')
        .lineHeight(33)
    }
    .height('100%')
    .width('100%')
    .backgroundColor('#F1F3F5')
  }
}
```

### 轮播图部分：Swiper组件提供滑动轮播显示的能力。

#### Swiper 循环的Item

根据设计图可以看到快速入门Banner运营位由多张图片资源构成，于是我们可以在Index.ets文件中创建一个BannerClass类，用于表示每张图片资源的数据结构。

```ts
class BannerClass {
  id: string = '';
  imageSrc: ResourceStr = '';

  constructor(id: string, imageSrc: ResourceStr, url: string) {
    this.id = id;
    this.imageSrc = imageSrc;
  }
}
```

#### 静态资源

将Resource文件夹中的所有图片资源放置在entry/src/main/resources/base/media路径下，我们可使用$r('app.media.filename')
的方式将该路径下的图片读取到Image组件内。

#### 创建一个组件

创建一个Banner组件，使用`@Component`
进行装饰。定义需要渲染的Banner图片数据源。使用刚刚创建的BannerClass构建出bannerList数组，如代码中，在bannerList中构建了六个BannerClass实例。

```ts
@Component
struct Banner {
  @State bannerList: Array<BannerClass> = [
    new BannerClass('pic0', $r('app.media.banner_pic0')),
    new BannerClass('pic1', $r('app.media.banner_pic1')),
    new BannerClass('pic2', $r('app.media.banner_pic2')),
    new BannerClass('pic3', $r('app.media.banner_pic3')),
    new BannerClass('pic4', $r('app.media.banner_pic4')),
    new BannerClass('pic5', $r('app.media.banner_pic5'))
  ];

  build() {
    
  }
}
```

#### 列表循环渲染

:::tip
使用Swiper组件作为外层容器。使用ForEach进行列表循环渲染。循环渲染一个Image组件。
:::

##### ForEach

| 参数            | 类型                                    | 介绍                                                                                                                      |
|---------------|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| arr           | Array                                 | 一个任意类型的数组arr                                                                                                            |
| itemGenerator | (item: any, index?: number) => void   | 该函数会按序取到数组中的每一个项，生成函数体中的组件。                                                                                             |
| keyGenerator  | (item: any, index?: number) => string | 这个函数关键的作用就在于通过标识每一个实际的组件，当数组元素变化触发页面更新时，能通过对比标识来判断组件是否存在，是否需要创建新的对应的组件，达成增量渲染，而非全量的重新渲染，以提高渲染效率，所以建议在使用ForEach循环渲染传入该参数 |

```ts
@Component
struct Banner {
  @State bannerList: Array<BannerClass> = [
    new BannerClass('pic0', $r('app.media.banner_pic0')),
    new BannerClass('pic1', $r('app.media.banner_pic1')),
    new BannerClass('pic2', $r('app.media.banner_pic2')),
    new BannerClass('pic3', $r('app.media.banner_pic3')),
    new BannerClass('pic4', $r('app.media.banner_pic4')),
    new BannerClass('pic5', $r('app.media.banner_pic5'))
  ];

  build() {
    Swiper() {
      ForEach(this.bannerList, (item: BannerClass, index: number) => {
        Image($r('app.media.banner_pic1'))
          .objectFit(ImageFit.Contain)
          .width('100%')
          .padding({ top: 11, left: 16, right: 16 })
          .borderRadius(16)
      }, (item: BannerClass, index: number) => item.id)
    }
  }
}
```

#### 设置Swiper组件的属性

:::tip
autoPlay控制是否自动轮播子组件，loop属性控制是否循环播放，indicator属性自定义导航点的位置和样式。
:::

```ts
@Component
struct Banner {
  @State bannerList: Array<BannerClass> = [
    new BannerClass('pic0', $r('app.media.banner_pic0')),
    new BannerClass('pic1', $r('app.media.banner_pic1')),
    new BannerClass('pic2', $r('app.media.banner_pic2')),
    new BannerClass('pic3', $r('app.media.banner_pic3')),
    new BannerClass('pic4', $r('app.media.banner_pic4')),
    new BannerClass('pic5', $r('app.media.banner_pic5'))
  ];

  build() {
    Swiper() {
      ForEach(this.bannerList, (item: BannerClass, index: number) => {
        Image($r('app.media.banner_pic1'))
          .objectFit(ImageFit.Contain)
          .width('100%')
          .padding({ top: 11, left: 16, right: 16 })
          .borderRadius(16)
      }, (item: BannerClass, index: number) => item.id)
    }
  }
  .autoPlay(true)
    .loop(true)
    .indicator(
      new DotIndicator()
        .color('#1a000000')
        .selectedColor('#0A59F7'))
}
```

### 赋能套件部分

:::tip
整体为上下结构。下部的列表为横向结构，可以横向滚动。列表的单个Item为纵向结构，包含图片、标题、描述。
:::

#### 创建容器

创建一个 EnablementView 组件

```ts
@Component
export struct EnablementView {
  build() {
    Column() {
    
    }
    .margin({ top: 18 })
    .alignItems(HorizontalAlign.Start)
  }
}
```

#### 创建文字标题和横向滚动区域

:::tip
Grid组件为网格容器，由“行”和“列”分割的单元格所组成，其中容器内各条目对应一个GridItem组件。如果仅设置行、列数量与占比中的一个，网格单元将按照设置的方向排列，超出Grid显示区域后，Grid拥有可滚动能力。在这部分，可以设置单行显示，则赋能套件部分可以横向滑动。
:::

```ts
@Component
export struct EnablementView {
  build() {
    Column() {
      Text('赋能套件')
        .fontColor('#182431')
        .fontSize(16)
        .fontWeight(500)
        .fontFamily('HarmonyHeiTi-medium')
        .textAlign(TextAlign.Start)
        .padding({ left: 16 })
        .margin({ bottom: 8.5 })

      Grid() {

      }
      .rowsTemplate('1fr')
      .columnsGap(8)
      .scrollBar(BarState.Off)
      .height(169)
      .padding({ top: 2, left: 16, right: 16 })
    }
    .margin({ top: 18 })
    .alignItems(HorizontalAlign.Start)
  }
}
```

#### 创建GridItem和每个Item的数据结构

```ts
@Component
struct EnablementItem {
  private title: string = 'HarmonyOS第一课';
  private brief: string = '基于真实的开发场景，提供向导式学习，多维度融合课程等内容，给开发者提供全新的学习体验。';
 
  build() {
    Column() {
      Image($r('app.media.enablement_pic1'))
        .width('100%')
        .objectFit(ImageFit.Cover)
        .height(96)
        .borderRadius({
          topLeft: 16,
          topRight: 16
        })
      Text(this.title)
        .height(19)
        .width('100%')
        .fontSize(14)
        .textAlign(TextAlign.Start)
        .textOverflow({ overflow: TextOverflow.Ellipsis })
        .maxLines(1)
        .fontWeight(400)
        .padding({ left: 12, right: 12 })
        .margin({ top: 8 })
      Text(this.brief)
        .height(32)
        .width('100%')
        .fontSize(12)
        .textAlign(TextAlign.Start)
        .textOverflow({ overflow: TextOverflow.Ellipsis })
        .maxLines(2)
        .fontWeight(400)
        .fontColor('rgba(0, 0, 0, 0.6)')
        .padding({ left: 12, right: 12 })
        .margin({ top: 2 })
    }
    .width(160)
    .height(169)
    .borderRadius(16)
    .backgroundColor(Color.White)
  }
}

@Component
export struct EnablementView {

  class ArticleClass {
    id: string = '';
    imageSrc: ResourceStr = '';
    title: string = '';
    brief: string = '';
    webUrl: string = '';
  
    constructor(id: string, imageSrc: ResourceStr, title: string, brief: string, webUrl: string) {
      this.id = id;
      this.imageSrc = imageSrc;
      this.title = title;
      this.brief = brief;
      this.webUrl = webUrl;
    }
  }

  build() {
    Column() {
      Text('赋能套件')
        .fontColor('#182431')
        .fontSize(16)
        .fontWeight(500)
        .fontFamily('HarmonyHeiTi-medium')
        .textAlign(TextAlign.Start)
        .padding({ left: 16 })
        .margin({ bottom: 8.5 })

      Grid() {
        ForEach(this.enablementList, (item: ArticleClass) => {
          GridItem() {
            EnablementItem({ enablementItem: item })
          }
        }, (item: ArticleClass) => item.id)
      }
      .rowsTemplate('1fr')
      .columnsGap(8)
      .scrollBar(BarState.Off)
      .height(169)
      .padding({ top: 2, left: 16, right: 16 })
    }
    .margin({ top: 18 })
    .alignItems(HorizontalAlign.Start)
  }
}
```


### 入门教程区域
:::tip
列表是一种复杂的容器，当列表项达到一定数量，内容超过屏幕大小时，可以自动提供滚动功能。它适合用于呈现同类数据类型或数据类型集，使用列表可以轻松高效地显示结构化、可滚动的信息。
:::

入门教程区域也是由上至下的布局，也可以考虑采用Column组件作为外部容器组件。其中包含一行文本，以及多个结构类似的内容，我们就可以采用List组件进行组织。

```ts
@Component
struct TutorialView {
  @State tutorialList: Array<ArticleClass> = ...;
  
  build() {
    Column() {
      Text('入门教程')
        .fontColor('#182431')
        .fontSize(16)
        .fontWeight(500)
        .fontFamily('HarmonyHeiTi-medium')
        .textAlign(TextAlign.Start)
        .padding({ left: 16 })
        .margin({ bottom: 8.5 })
    }
    .margin({ top: 18 })
    .alignItems(HorizontalAlign.Start)
    
    List({ space: 12 }) {
        
    }
    .scrollBar(BarState.Off)
    .padding({ left: 16, right: 16 })
  }
}
```

#### 实现ListItem内容
:::tip
在组件中定义标题（title）和简介（brief）。它们的类型都是string，赋值分别为“Step1 快速入门介绍” 和 “本篇教程实现了快速入门——一个用于了解和学习HarmonyOS的应用程序 ”。布局整体为左右布局，左边为两个文本，这个两个文本沿垂直方向排列。可以最外层使用Row容器，使文本和图片左右排列。左边文本可以使用Column容器垂直排列title和brief文本。
:::
```ts
@Component
struct TutorialItem {
  private title: string = 'Step1 快速入门介绍';
  private brief: string = '本篇教程实现了快速入门——一个用于了解和学习HarmonyOS的应用程序 。';

  build() {
    Row() {
      Column() {
        Text(this.title)
          .height(19)
          .width('100%')
          .fontSize(14)
          .textAlign(TextAlign.Start)
          .textOverflow({ overflow: TextOverflow.Ellipsis })
          .maxLines(1)
          .fontWeight(400)
          .margin({ top: 4 })
        Text(this.brief)
          .height(32)
          .width('100%')
          .fontSize(12)
          .textAlign(TextAlign.Start)
          .textOverflow({ overflow: TextOverflow.Ellipsis })
          .maxLines(2)
          .fontWeight(400)
          .fontColor('rgba(0, 0, 0, 0.6)')
          .margin({ top: 5 })
      }
      .height('100%')
      .layoutWeight(1)
      .alignItems(HorizontalAlign.Start)
      .margin({ right: 12 })
      Image($r('app.media.enablement_pic1'))
        .objectFit(ImageFit.Cover)
        .height(64)
        .width(108)
        .borderRadius(16)
    }
    .width('100%')
    .height(88)
    .borderRadius(16)
    .backgroundColor(Color.White)
    .padding(12)
    .alignItems(VerticalAlign.Top)
  }
}
```

#### 实现list列表

```ts
@Component
struct TutorialView {
  // 数据类型定义和初始化与赋能套件相同
  @State tutorialList: Array<ArticleClass> = ...;

  build() {
    Column() {
      Text('入门教程')
        ...
      List({ space: 12 }) {
        ForEach(this.tutorialList, (item: ArticleClass) => {
          ListItem() {
            TutorialItem({ tutorialItem: item })
          }
        }, (item: ArticleClass) => item.id)
      }
      .scrollBar(BarState.Off)
      .padding({ left: 16, right: 16 })
    }
    .margin({ top: 18 })
  }
}
```