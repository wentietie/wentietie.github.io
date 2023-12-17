import{_ as s,p as i,q as c,a1 as a}from"./framework-5866ffd3.js";const e={},t=a('<h1 id="css-权重" tabindex="-1"><a class="header-anchor" href="#css-权重" aria-hidden="true">#</a> css 权重</h1><p>css权重指的是css6大基础选择符的优先级，优先级高的css样式会覆盖优先级底的css样式，优先级越高说明权重越高，反之亦然。</p><h2 id="css-6大选择器" tabindex="-1"><a class="header-anchor" href="#css-6大选择器" aria-hidden="true">#</a> css 6大选择器</h2><ul><li>id选择器</li><li>类选择器</li><li>属性选择器</li><li>伪类和为元素选择器</li><li>标签选择器</li><li>通配符选择器</li></ul><h2 id="css权重计算规则" tabindex="-1"><a class="header-anchor" href="#css权重计算规则" aria-hidden="true">#</a> css权重计算规则</h2><p>计算css权重是有一定规则的，根据w3c制定的css规范，css权重计算规则如下：</p><ul><li>!important为10000</li><li>style为1000</li><li>计算选择符中id选择器的数量，一个id为一个a，一个a为100</li><li>计算类和属性选择器的数量，一个选择器为一个b，一个b为10</li><li>标签和伪对象选择器数量，一个选择器为一个c，一个c为1</li><li>通配符选择器忽略不计</li></ul><h2 id="优先级问题" tabindex="-1"><a class="header-anchor" href="#优先级问题" aria-hidden="true">#</a> 优先级问题</h2><p>!important &gt; 行内样式 &gt; ID选择器 &gt; 类选择器 &gt; 标签 &gt; 通配符 &gt; 继承 &gt; 浏览器默认属性</p><div class="custom-container tip"><p class="custom-container-title">注</p><p>用数字表示只是说明思想，一万个class也不如一个id权值高</p></div>',10),l=[t];function r(d,n){return i(),c("div",null,l)}const o=s(e,[["render",r],["__file","css-selector.html.vue"]]);export{o as default};