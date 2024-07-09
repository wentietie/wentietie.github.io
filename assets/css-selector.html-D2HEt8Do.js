import{_ as s,o as c,c as l,b as e}from"./app-DRxAhH5h.js";const t={},i=e('<h1 id="css-权重" tabindex="-1"><a class="header-anchor" href="#css-权重"><span>css 权重</span></a></h1><p>css权重指的是css6大基础选择符的优先级，优先级高的css样式会覆盖优先级底的css样式，优先级越高说明权重越高，反之亦然。</p><h2 id="css-6大选择器" tabindex="-1"><a class="header-anchor" href="#css-6大选择器"><span>css 6大选择器</span></a></h2><ul><li>id选择器</li><li>类选择器</li><li>属性选择器</li><li>伪类和为元素选择器</li><li>标签选择器</li><li>通配符选择器</li></ul><h2 id="css权重计算规则" tabindex="-1"><a class="header-anchor" href="#css权重计算规则"><span>css权重计算规则</span></a></h2><p>计算css权重是有一定规则的，根据w3c制定的css规范，css权重计算规则如下：</p><ul><li>!important为10000</li><li>style为1000</li><li>计算选择符中id选择器的数量，一个id为一个a，一个a为100</li><li>计算类和属性选择器的数量，一个选择器为一个b，一个b为10</li><li>标签和伪对象选择器数量，一个选择器为一个c，一个c为1</li><li>通配符选择器忽略不计</li></ul><h2 id="优先级问题" tabindex="-1"><a class="header-anchor" href="#优先级问题"><span>优先级问题</span></a></h2><p>!important &gt; 行内样式 &gt; ID选择器 &gt; 类选择器 &gt; 标签 &gt; 通配符 &gt; 继承 &gt; 浏览器默认属性</p><div class="custom-container tip"><p class="custom-container-title">注</p><p>用数字表示只是说明思想，一万个class也不如一个id权值高</p></div>',10),a=[i];function n(r,o){return c(),l("div",null,a)}const d=s(t,[["render",n],["__file","css-selector.html.vue"]]),p=JSON.parse('{"path":"/static/notes/CSS/css-selector.html","title":"css 权重","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"css 6大选择器","slug":"css-6大选择器","link":"#css-6大选择器","children":[]},{"level":2,"title":"css权重计算规则","slug":"css权重计算规则","link":"#css权重计算规则","children":[]},{"level":2,"title":"优先级问题","slug":"优先级问题","link":"#优先级问题","children":[]}],"git":{},"filePathRelative":"static/notes/CSS/css-selector.md"}');export{d as comp,p as data};
