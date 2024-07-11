import{_ as t,o as e,c as a,b as h}from"./app-CW2dCZSC.js";const s={},r=h('<h1 id="路由" tabindex="-1"><a class="header-anchor" href="#路由"><span>路由</span></a></h1><p>URL到函数的映射。路由的映射函数通常是进行一些DOM的显示隐藏操作。当访问不同路径时，就会显示不同的页面组件。</p><p>优点：访问不同页面时，仅仅只是变换了路径而已，没有网络延迟，提升了用户体验。</p><p>缺点：使用浏览器的前进后退时，会重新发送请求，没有合理的利用缓存，不利于SEO。</p><h2 id="前端路由两种主要实现方案" tabindex="-1"><a class="header-anchor" href="#前端路由两种主要实现方案"><span>前端路由两种主要实现方案</span></a></h2><ul><li>hash：hash实现就是基于location.hash来实现的，早期前端路由都是用hash。location.hash的值就是URL中#后面的内容。</li><li>history API：更美观的实现URL的变化，由H5提供的history API。最主要的API：history.pushState()、history.replaceState()。这两个API可以在不刷新的情况下，操作浏览器的历史记录。区别：pushState()是会增加新的历史记录，而replaceState()是替换当前的历史记录。都接受三个参数（state，title，URL）。</li></ul><h2 id="hash和history的区别" tabindex="-1"><a class="header-anchor" href="#hash和history的区别"><span>hash和history的区别</span></a></h2><table><thead><tr><th>hash</th><th>history</th></tr></thead><tbody><tr><td>兼容更好</td><td>更正式美观</td></tr><tr><td>只修改#后面内容</td><td>可以设置同源下任意URL</td></tr><tr><td>新值不能与旧值相同，一样的不会触发动作将记录添加到栈中</td><td>新旧值可以相同，pushSate该添加的会添加到栈中</td></tr><tr><td>对服务器无需改动</td><td>刷新时，若服务器没有响应数据或资源，会404。需要对服务器做一些改造，对不同的路由进行相应的设置。</td></tr><tr><td>更改时不会发送请求</td><td>会向服务器发送请求，避免404服务器应该做处理。当匹配不到资源时，应返回同一个html页面</td></tr></tbody></table>',8),o=[r];function i(d,l){return e(),a("div",null,o)}const c=t(s,[["render",i],["__file","route.html.vue"]]),p=JSON.parse('{"path":"/static/notes/browser/route.html","title":"路由","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"前端路由两种主要实现方案","slug":"前端路由两种主要实现方案","link":"#前端路由两种主要实现方案","children":[]},{"level":2,"title":"hash和history的区别","slug":"hash和history的区别","link":"#hash和history的区别","children":[]}],"git":{"updatedTime":1720499771000,"contributors":[{"name":"文铁铁~","email":"1179131421@qq.com","commits":1}]},"filePathRelative":"static/notes/browser/route.md"}');export{c as comp,p as data};