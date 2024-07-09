import{_ as i,o as t,c as n,b as e}from"./app-DRxAhH5h.js";const c={},o=e('<h1 id="长列表渲染优化" tabindex="-1"><a class="header-anchor" href="#长列表渲染优化"><span>长列表渲染优化</span></a></h1><p>今天咱们来看两个可以 直接提升渲染性能的 CSS 属性。</p><p><code>content-visibility</code> <code>contain-intrinsic-size</code> 这两个 CSS 属性，主要针对 长列表渲染。</p><h2 id="content-visibility" tabindex="-1"><a class="header-anchor" href="#content-visibility"><span>content-visibility</span></a></h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>content-visibility是CSS新增的属性，主要用来提高页面渲染性能，它可以控制一个元素是否渲染其内容，并且允许浏览器跳过这些元素的布局与渲染。</p></div><ul><li><code>visible</code>: 默认值，没有效果。元素的内容被正常布局和呈现</li><li><code>hidden</code>: 元素跳过它的内容。跳过的内容不能被用户代理功能访问. 例如在页面中查找、标签顺序导航等，也不能被选择或聚焦。这类似于给内容设置display: none。</li><li><code>auto</code>：该元素打开布局包含、样式包含和绘制包含。如果该元素与用户不相关，它也会跳过其内容。 与hidden不同，跳过的内容必须仍可正常用于用户代理功能，例如在页面中查找、tab 顺序导航等，并且必须正常可聚焦和可选择。</li></ul><h2 id="content-visibility-hidden手动管理可见性" tabindex="-1"><a class="header-anchor" href="#content-visibility-hidden手动管理可见性"><span>content-visibility: hidden手动管理可见性</span></a></h2><p>上面说到<code>content-visibility: hidden</code>的效果与<code>display: none</code>类似，但其实两者还是有比较大的区别的：</p><ul><li><code>content-visibility: hidden</code> 只是隐藏了子元素，自身不会被隐藏</li><li><code>content-visibility: hidden</code> 隐藏内容的渲染状态会被缓存，所以当它被移除或者设为可见时，浏览器不会重新渲染，而是会应用缓存，所以对于需要频繁切换显示隐藏的元素，这个属性能够极大地提高渲染性能。</li></ul><h2 id="content-visibility-auto-跳过渲染工作" tabindex="-1"><a class="header-anchor" href="#content-visibility-auto-跳过渲染工作"><span>content-visibility: auto 跳过渲染工作</span></a></h2><p>我们仔细想想，页面上虽然会有很多元素，但是它们会同时呈现在用户眼前吗？很显然是不会的。</p><p>用户每次能够真实看到就只有设备可见区那些内容，对于非可见区的内容只要页面不发生滚动，用户就永远看不到。虽然用户看不到，但浏览器却会实实在在的去渲染，以至于浪费大量的性能。所以我们得想办法让浏览器不渲染非可视区的内容就能够达到提高页面渲染性能的效果。</p><p>此时就可以直接使用 <code>content-visibility: auto</code> 它可以用来跳过屏幕外的内容渲染，对于这种有大量离屏内容的长列表，可以大大减少页面渲染时间。</p><p>首先是没有添加<code>content-visibility: auto</code>的效果，无论这些元素是否在可视区，都会被渲染</p><h2 id="contain-intrinsic-size-救场" tabindex="-1"><a class="header-anchor" href="#contain-intrinsic-size-救场"><span>contain-intrinsic-size 救场</span></a></h2><p>页面在滚动过程中滚动条一直抖动，这是一个不能接受的体验问题，为了更好地实现content-visibility，浏览器需要应用<code>size containment</code> 以确保内容的渲染结果不会以任何方式影响元素的大小。 这意味着该元素将像空的一样布局。如果元素没有在常规块布局中指定的高度，那么它将是0高度。</p><p>这个时候我们可以使用<code>contain-intrinsic-size</code>来指定的元素自然大小，确保我们未渲染子元素的 div 仍然占据空间，同时也保留延迟渲染的好处。</p><p>我们只需要给添加了<code>content-visibility:auto</code>的元素添加上<code>contain-intrinsic-size</code>就能够解决滚动条抖动的问题。 当然，这个高度约接近真实渲染的高度，效果会越好，如果实在无法知道准确的高度，我们也可以给一个大概的值，也会使滚动条的问题相对减少。</p>',18),s=[o];function l(a,d){return t(),n("div",null,s)}const r=i(c,[["render",l],["__file","longlist.html.vue"]]),p=JSON.parse('{"path":"/static/notes/CSS/longlist.html","title":"长列表渲染优化","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"content-visibility","slug":"content-visibility","link":"#content-visibility","children":[]},{"level":2,"title":"content-visibility: hidden手动管理可见性","slug":"content-visibility-hidden手动管理可见性","link":"#content-visibility-hidden手动管理可见性","children":[]},{"level":2,"title":"content-visibility: auto 跳过渲染工作","slug":"content-visibility-auto-跳过渲染工作","link":"#content-visibility-auto-跳过渲染工作","children":[]},{"level":2,"title":"contain-intrinsic-size 救场","slug":"contain-intrinsic-size-救场","link":"#contain-intrinsic-size-救场","children":[]}],"git":{},"filePathRelative":"static/notes/CSS/longlist.md"}');export{r as comp,p as data};
