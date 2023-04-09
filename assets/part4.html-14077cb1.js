import{_ as t,p as e,q as l,a1 as d}from"./framework-5866ffd3.js";const a={},n=d('<h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h1><p>在 C 语言中，数据类型指的是用于声明不同类型的变量或函数的一个广泛的系统。变量的类型决定了变量存储占用的空间，以及如何解释存储的位模式。</p><p>C 中的类型可分为以下几种：</p><table><thead><tr><th style="text-align:left;">序号</th><th style="text-align:left;">类型与描述</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;"><strong>基本类型：</strong> 它们是算术类型，包括两种类型：整数类型和浮点类型。</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;"><strong>枚举类型：</strong> 它们也是算术类型，被用来定义在程序中只能赋予其一定的离散整数值的变量。</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;"><strong>void 类型：</strong> 类型说明符 <em>void</em> 表明没有可用的值。</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;"><strong>派生类型：</strong> 它们包括：指针类型、数组类型、结构类型、共用体类型和函数类型。</td></tr></tbody></table><p>数组类型和结构类型统称为聚合类型。函数的类型指的是函数返回值的类型。在本章节接下来的部分我们将介绍基本类型，其他几种类型会在后边几个章节中进行讲解。</p><h2 id="整数类型" tabindex="-1"><a class="header-anchor" href="#整数类型" aria-hidden="true">#</a> 整数类型</h2><p>下表列出了关于标准整数类型的存储大小和值范围的细节：</p><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">存储大小</th><th style="text-align:left;">值范围</th></tr></thead><tbody><tr><td style="text-align:left;">char</td><td style="text-align:left;">1 字节</td><td style="text-align:left;">-128 到 127 或 0 到 255</td></tr><tr><td style="text-align:left;">unsigned char</td><td style="text-align:left;">1 字节</td><td style="text-align:left;">0 到 255</td></tr><tr><td style="text-align:left;">signed char</td><td style="text-align:left;">1 字节</td><td style="text-align:left;">-128 到 127</td></tr><tr><td style="text-align:left;">int</td><td style="text-align:left;">2 或 4 字节</td><td style="text-align:left;">-32,768 到 32,767 或 -2,147,483,648 到 2,147,483,647</td></tr><tr><td style="text-align:left;">unsigned int</td><td style="text-align:left;">2 或 4 字节</td><td style="text-align:left;">0 到 65,535 或 0 到 4,294,967,295</td></tr><tr><td style="text-align:left;">short</td><td style="text-align:left;">2 字节</td><td style="text-align:left;">-32,768 到 32,767</td></tr><tr><td style="text-align:left;">unsigned short</td><td style="text-align:left;">2 字节</td><td style="text-align:left;">0 到 65,535</td></tr><tr><td style="text-align:left;">long</td><td style="text-align:left;">4 字节</td><td style="text-align:left;">-2,147,483,648 到 2,147,483,647</td></tr><tr><td style="text-align:left;">unsigned long</td><td style="text-align:left;">4 字节</td><td style="text-align:left;">0 到 4,294,967,295</td></tr></tbody></table>',8),s=[n];function r(i,g){return e(),l("div",null,s)}const x=t(a,[["render",r],["__file","part4.html.vue"]]);export{x as default};
