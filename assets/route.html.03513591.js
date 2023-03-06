import{_ as t,c as h}from"./app.9b52f51c.js";const a={},r=h('<h1 id="\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531</h1><p>URL\u5230\u51FD\u6570\u7684\u6620\u5C04\u3002\u8DEF\u7531\u7684\u6620\u5C04\u51FD\u6570\u901A\u5E38\u662F\u8FDB\u884C\u4E00\u4E9BDOM\u7684\u663E\u793A\u9690\u85CF\u64CD\u4F5C\u3002\u5F53\u8BBF\u95EE\u4E0D\u540C\u8DEF\u5F84\u65F6\uFF0C\u5C31\u4F1A\u663E\u793A\u4E0D\u540C\u7684\u9875\u9762\u7EC4\u4EF6\u3002</p><p>\u4F18\u70B9\uFF1A\u8BBF\u95EE\u4E0D\u540C\u9875\u9762\u65F6\uFF0C\u4EC5\u4EC5\u53EA\u662F\u53D8\u6362\u4E86\u8DEF\u5F84\u800C\u5DF2\uFF0C\u6CA1\u6709\u7F51\u7EDC\u5EF6\u8FDF\uFF0C\u63D0\u5347\u4E86\u7528\u6237\u4F53\u9A8C\u3002</p><p>\u7F3A\u70B9\uFF1A\u4F7F\u7528\u6D4F\u89C8\u5668\u7684\u524D\u8FDB\u540E\u9000\u65F6\uFF0C\u4F1A\u91CD\u65B0\u53D1\u9001\u8BF7\u6C42\uFF0C\u6CA1\u6709\u5408\u7406\u7684\u5229\u7528\u7F13\u5B58\uFF0C\u4E0D\u5229\u4E8ESEO\u3002</p><h2 id="\u524D\u7AEF\u8DEF\u7531\u4E24\u79CD\u4E3B\u8981\u5B9E\u73B0\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u8DEF\u7531\u4E24\u79CD\u4E3B\u8981\u5B9E\u73B0\u65B9\u6848" aria-hidden="true">#</a> \u524D\u7AEF\u8DEF\u7531\u4E24\u79CD\u4E3B\u8981\u5B9E\u73B0\u65B9\u6848</h2><ul><li>hash\uFF1Ahash\u5B9E\u73B0\u5C31\u662F\u57FA\u4E8Elocation.hash\u6765\u5B9E\u73B0\u7684\uFF0C\u65E9\u671F\u524D\u7AEF\u8DEF\u7531\u90FD\u662F\u7528hash\u3002location.hash\u7684\u503C\u5C31\u662FURL\u4E2D#\u540E\u9762\u7684\u5185\u5BB9\u3002</li><li>history API\uFF1A\u66F4\u7F8E\u89C2\u7684\u5B9E\u73B0URL\u7684\u53D8\u5316\uFF0C\u7531H5\u63D0\u4F9B\u7684history API\u3002\u6700\u4E3B\u8981\u7684API\uFF1Ahistory.pushState()\u3001history.replaceState()\u3002\u8FD9\u4E24\u4E2AAPI\u53EF\u4EE5\u5728\u4E0D\u5237\u65B0\u7684\u60C5\u51B5\u4E0B\uFF0C\u64CD\u4F5C\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u3002\u533A\u522B\uFF1ApushState()\u662F\u4F1A\u589E\u52A0\u65B0\u7684\u5386\u53F2\u8BB0\u5F55\uFF0C\u800CreplaceState()\u662F\u66FF\u6362\u5F53\u524D\u7684\u5386\u53F2\u8BB0\u5F55\u3002\u90FD\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF08state\uFF0Ctitle\uFF0CURL\uFF09\u3002</li></ul><h2 id="hash\u548Chistory\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#hash\u548Chistory\u7684\u533A\u522B" aria-hidden="true">#</a> hash\u548Chistory\u7684\u533A\u522B</h2><table><thead><tr><th>hash</th><th>history</th></tr></thead><tbody><tr><td>\u517C\u5BB9\u66F4\u597D</td><td>\u66F4\u6B63\u5F0F\u7F8E\u89C2</td></tr><tr><td>\u53EA\u4FEE\u6539#\u540E\u9762\u5185\u5BB9</td><td>\u53EF\u4EE5\u8BBE\u7F6E\u540C\u6E90\u4E0B\u4EFB\u610FURL</td></tr><tr><td>\u65B0\u503C\u4E0D\u80FD\u4E0E\u65E7\u503C\u76F8\u540C\uFF0C\u4E00\u6837\u7684\u4E0D\u4F1A\u89E6\u53D1\u52A8\u4F5C\u5C06\u8BB0\u5F55\u6DFB\u52A0\u5230\u6808\u4E2D</td><td>\u65B0\u65E7\u503C\u53EF\u4EE5\u76F8\u540C\uFF0CpushSate\u8BE5\u6DFB\u52A0\u7684\u4F1A\u6DFB\u52A0\u5230\u6808\u4E2D</td></tr><tr><td>\u5BF9\u670D\u52A1\u5668\u65E0\u9700\u6539\u52A8</td><td>\u5237\u65B0\u65F6\uFF0C\u82E5\u670D\u52A1\u5668\u6CA1\u6709\u54CD\u5E94\u6570\u636E\u6216\u8D44\u6E90\uFF0C\u4F1A404\u3002\u9700\u8981\u5BF9\u670D\u52A1\u5668\u505A\u4E00\u4E9B\u6539\u9020\uFF0C\u5BF9\u4E0D\u540C\u7684\u8DEF\u7531\u8FDB\u884C\u76F8\u5E94\u7684\u8BBE\u7F6E\u3002</td></tr><tr><td>\u66F4\u6539\u65F6\u4E0D\u4F1A\u53D1\u9001\u8BF7\u6C42</td><td>\u4F1A\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF0C\u907F\u514D404\u670D\u52A1\u5668\u5E94\u8BE5\u505A\u5904\u7406\u3002\u5F53\u5339\u914D\u4E0D\u5230\u8D44\u6E90\u65F6\uFF0C\u5E94\u8FD4\u56DE\u540C\u4E00\u4E2Ahtml\u9875\u9762</td></tr></tbody></table>',8);function e(d,s){return r}var o=t(a,[["render",e],["__file","route.html.vue"]]);export{o as default};
