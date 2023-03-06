import{_ as t,c as n}from"./app.cfeeb12a.js";const a={},s=n(`<h1 id="python3\u57FA\u7840\u67E5\u6F0F\u8865\u7F3A" tabindex="-1"><a class="header-anchor" href="#python3\u57FA\u7840\u67E5\u6F0F\u8865\u7F3A" aria-hidden="true">#</a> python3\u57FA\u7840\u67E5\u6F0F\u8865\u7F3A</h1><h1 id="_1-\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_1-\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 1.\u8FD0\u7B97\u7B26</h1><p><code>**</code> \u5E42\uFF1A<code>a**b</code>\u8868\u793Aa\u7684b\u6B21\u65B9</p><p><code>//</code>\u53D6\u6574\u9664--\u5411\u4E0B\u53D6\u63A5\u8FD1\u5546\u7684\u6574\u6570\uFF1A<code>9//2</code>\u8FD4\u56DE<code>4</code>\uFF0C<code>-9//2</code>\u8FD4\u56DE<code>-5</code></p><p>\u200B <strong>\u6CE8\u610F\uFF1A <code>//</code>\u5F97\u5230\u7684\u5E76\u4E0D\u4E00\u5B9A\u662F\u6574\u6570\u7C7B\u578B\u7684\u6570\uFF0C\u5B83\u4E0E\u5206\u6BCD\u5206\u5B50\u7684\u6570\u636E\u7C7B\u578B\u6709\u5173\u7CFB</strong></p><p><code>/</code>\u9664\u6CD5-\u8FD4\u56DE\u4E00\u4E2A\u6D6E\u70B9\u6570</p><h1 id="_2-\u57FA\u672C\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u672C\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 2.\u57FA\u672C\u6570\u636E\u7C7B\u578B</h1><p><strong>\u5728Python\u4E2D\uFF0C\u53D8\u91CF\u5C31\u662F\u53D8\u91CF\uFF0C\u6CA1\u6709\u7C7B\u578B\u3002\u6211\u4EEC\u6240\u8BF4\u7684\u201D\u7C7B\u578B\u201C\u662F\u53D8\u91CF\u6240\u6307\u7684\u5185\u5B58\u4E2D\u5BF9\u8C61\u7684\u7C7B\u578B\u3002</strong></p><h2 id="_2-1\u6807\u51C6\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-1\u6807\u51C6\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 2.1\u6807\u51C6\u6570\u636E\u7C7B\u578B</h2><table><thead><tr><th style="text-align:left;">\u6570\u636E\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u53EF\u53D8</th><th style="text-align:center;">\u5B50\u7C7B\u578B/\u7236\u7EA7</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:left;">Number</td><td style="text-align:center;">\u4E0D\u53EF\u53D8</td><td style="text-align:center;">\u5B50\u7C7B\u578B\uFF1A<br>int\u3001float\u3001bool\u3001complex</td><td>bool\u7C7B\u578B\u7684\u53D8\u91CF\u53EF\u4EE5\u548C\u6570\u5B57\u76F8\u52A0\uFF1B<br>\u590D\u6570\u7528a+bj\u6216complex(a,b)\u8868\u793A\uFF1B</td></tr><tr><td style="text-align:left;">String</td><td style="text-align:center;">\u4E0D\u53EF\u53D8</td><td style="text-align:center;">\u7236\u7EA7\uFF1A<br>sequence</td><td>\u7D22\u5F15\u503C\uFF1A\u4ECE\u5DE6\u5230\u53F3\uFF0C\u4ECE0\u5F00\u59CB\u9012\u589E\uFF1B<br> \u4ECE\u53F3\u5230\u5DE6\uFF0C\u4ECE-1\u5F00\u59CB\u9012\u51CF<br>\u5B57\u7B26\u4E32\u622A\u53D6\uFF1A<code>\u53D8\u91CF[\u5934\u4E0B\u6807:\u5C3E\u4E0B\u6807]</code><br> \u542B\u5934\u4E0D\u542B\u5C3E<br> \u5C3E\u4E0B\u6807\u4E0D\u5199\u8868\u793A\u76F4\u5230\u6700\u540E\u4E00\u4E2A\u5143\u7D20<br>\u5B57\u7B26\u4E32\u91CD\u590D\uFF1A<code>\u53D8\u91CF*\u91CD\u590D\u6B21\u6570</code><br>\u5B57\u7B26\u4E32\u8FDE\u63A5\uFF1A<code>\u53D8\u91CF+\u5B57\u7B26\u4E32</code><br>\u5B57\u7B26\u4E32\u5206\u5272\uFF1A<code>\u53D8\u91CF.split(&quot;\u5206\u5272\u89C4\u5219&quot;)</code><br> \u8FD4\u56DE\u7ED3\u679C\u4E3AList<br>\u5305\u542B\uFF1A<code>\u5B57\u7B26\u4E32 in \u53D8\u91CF</code><br> \u8FD4\u56DE\u503C\u4E3Abool\u7C7B\u578B<br>\u4E0D\u5305\u542B\uFF1A<code>\u5B57\u7B26\u4E32 not in \u53D8\u91CF</code><br> \u8FD4\u56DE\u503C\u4E3Abool\u7C7B\u578B<br></td></tr><tr><td style="text-align:left;">List</td><td style="text-align:center;">\u53EF\u53D8</td><td style="text-align:center;">\u7236\u7EA7\uFF1A<br>sequence</td><td>\u6709\u5E8F\u7684\u5BF9\u8C61\u96C6\u5408\uFF1B<br>\u540C\u4E00\u5217\u8868\u4E2D\u7684\u5143\u7D20\u7C7B\u578B\u53EF\u4EE5\u4E0D\u540C\uFF1B<br>\u7D22\u5F15\u503C\uFF1A\u4ECE\u5DE6\u5230\u53F3\uFF0C\u4ECE0\u5F00\u59CB\u9012\u589E\uFF1B<br> \u4ECE\u53F3\u5230\u5DE6\uFF0C\u4ECE-1\u5F00\u59CB\u9012\u51CF<br>\u5217\u8868\u622A\u53D6\uFF1A<code>\u53D8\u91CF[\u5934\u4E0B\u6807:\u5C3E\u4E0B\u6807]</code><br> \u542B\u5934\u4E0D\u542B\u5C3E<br> \u5C3E\u4E0B\u6807\u4E0D\u5199\u8868\u793A\u76F4\u5230\u6700\u540E\u4E00\u4E2A\u5143\u7D20<br>\u5217\u8868\u91CD\u590D\uFF1A<code>\u53D8\u91CF*\u91CD\u590D\u6B21\u6570</code><br>\u5217\u8868\u8FDE\u63A5\uFF1A<code>\u53D8\u91CF+\u5217\u8868</code></td></tr><tr><td style="text-align:left;">Tuple</td><td style="text-align:center;">\u4E0D\u53EF\u53D8</td><td style="text-align:center;">\u7236\u7EA7\uFF1A<br>sequence</td><td>\u5199\u5728()\u4E2D\uFF0C\u5143\u7D20\u4E4B\u95F4\u7528\u9017\u53F7\u9694\u5F00\uFF1B<br>\u5143\u7D20\u5B58\u53D6\u65B9\u5F0F\uFF1A\u504F\u79FB\uFF1B<br>\u540C\u4E00\u5143\u7EC4\u4E2D\u7684\u5143\u7D20\u7C7B\u578B\u53EF\u4EE5\u4E0D\u540C\uFF1B<br>\u7D22\u5F15\u503C\uFF1A\u4ECE\u5DE6\u5230\u53F3\uFF0C\u4ECE0\u5F00\u59CB\u9012\u589E\uFF1B<br> \u4ECE\u53F3\u5230\u5DE6\uFF0C\u4ECE-1\u5F00\u59CB\u9012\u51CF<br>\u5143\u7EC4\u622A\u53D6\uFF1A<code>\u53D8\u91CF[\u5934\u4E0B\u6807:\u5C3E\u4E0B\u6807]</code><br> \u542B\u5934\u4E0D\u542B\u5C3E<br> \u5C3E\u4E0B\u6807\u4E0D\u5199\u8868\u793A\u76F4\u5230\u6700\u540E\u4E00\u4E2A\u5143\u7D20<br>\u5143\u7EC4\u91CD\u590D\uFF1A<code>\u53D8\u91CF*\u91CD\u590D\u6B21\u6570</code><br>\u5143\u7EC4\u8FDE\u63A5\uFF1A<code>\u53D8\u91CF+\u5143\u7EC4</code></td></tr><tr><td style="text-align:left;">Set</td><td style="text-align:center;">\u53EF\u53D8</td><td style="text-align:center;">-</td><td>\u65E0\u5E8F\u7684\u5BF9\u8C61\u96C6\u5408\uFF1B<br>\u5143\u7D20\u5B58\u53D6\u65B9\u5F0F\uFF1A\u952E\uFF1B<br>\u7528\u5927\u62EC\u53F7 <code>{}</code> \u6216\u8005 <code>set()</code> \u51FD\u6570\u521B\u5EFA\u96C6\u5408\uFF1B<br>\u521B\u5EFA\u7A7A\u96C6\u5408\u5FC5\u987B\u4F7F\u7528<code>set()</code>;<br>\u57FA\u672C\u529F\u80FD\uFF1A\u8FDB\u884C\u6210\u5458\u5173\u7CFB\u6D4B\u8BD5\u3001<br> \u5220\u9664\u91CD\u590D\u5143\u7D20;<br>\u96C6\u5408\u8FD0\u7B97\uFF1A<code>-</code>\u6C42\u5DEE\u96C6\uFF1B<br> \`</td></tr><tr><td style="text-align:left;">Dictionary</td><td style="text-align:center;">\u53EF\u53D8</td><td style="text-align:center;">-</td><td>\u662F\u4E00\u79CD\u6620\u5C04\u7C7B\u578B\uFF1B<br>\u7528<code>{}</code>\u6807\u8BC6\uFF1B<br>\u662F\u4E00\u79CD\u65E0\u5E8F\u7684 <strong>\u952E:\u503C</strong> \u7684\u96C6\u5408\uFF1B<br>\u540C\u4E00\u4E2A\u5B57\u5178\u4E2D<strong>\u952E</strong>\u662F\u552F\u4E00\u7684\uFF1B<br>\u83B7\u53D6\u6307\u5B9A\u7684\u952E\u7684\u503C\uFF1A<code>\u53D8\u91CF[\u952E]</code>\uFF1B<br>\u83B7\u53D6\u6240\u6709\u7684\u952E\uFF1A<code>\u53D8\u91CF.keys()</code>;<br>\u83B7\u53D6\u6240\u6709\u7684\u503C\uFF1A<code>\u53D8\u91CF.values()</code>;<br>\u6E05\u7A7A\u5B57\u5178\uFF1A<code>\u53D8\u91CF.clear()</code></td></tr></tbody></table><h2 id="_2-2-python\u6570\u636E\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_2-2-python\u6570\u636E\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 2.2 Python\u6570\u636E\u7C7B\u578B\u8F6C\u6362</h2><table><thead><tr><th>\u51FD\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>int(x[,base])</td><td>\u5C06x\u8F6C\u6362\u4E3A\u4E00\u4E2A\u6574\u6570</td></tr><tr><td>float(x)</td><td>\u5C06x\u8F6C\u6362\u4E3A\u4E00\u4E2A\u6D6E\u70B9\u6570</td></tr><tr><td>complex(real[,imag])</td><td>\u521B\u5EFA\u4E00\u4E2A\u590D\u6570</td></tr><tr><td>str(x)</td><td>\u5C06\u5BF9\u8C61x\u8F6C\u4E3A\u5B57\u7B26\u4E32</td></tr><tr><td>repr(x)</td><td>\u5C06\u5BF9\u8C61x\u8F6C\u4E3A\u8868\u8FBE\u5F0F\u5B57\u7B26\u4E32</td></tr><tr><td>eval(str)</td><td>\u7528\u6765\u8BA1\u7B97\u5728\u5B57\u7B26\u4E32\u4E2D\u7684\u6709\u6548Python\u8868\u8FBE\u5F0F\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61</td></tr><tr><td>tuple(s)</td><td>\u5C06\u5E8F\u5217s\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5143\u7956</td></tr><tr><td>list(s)</td><td>\u5C06\u5E8F\u5217s\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5217\u8868</td></tr><tr><td>set(s)</td><td>\u8F6C\u6362\u4E3A\u53EF\u53D8\u96C6\u5408</td></tr><tr><td>dict(d)</td><td>\u521B\u5EFA\u4E00\u4E2A\u5B57\u5178\u3002d\u5FC5\u987B\u662F\u4E00\u4E2A(key, vakue)\u5143\u7EC4\u5E8F\u5217</td></tr><tr><td>frozenset(s)</td><td>\u8F6C\u6362\u4E3A\u4E0D\u53EF\u53D8\u96C6\u5408</td></tr><tr><td>chr(x)</td><td>\u5C06\u4E00\u4E2A\u6574\u6570\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5B57\u7B26</td></tr><tr><td>ord(x)</td><td>\u5C06\u4E00\u4E2A\u5B57\u7B26\u8F6C\u6362\u4E3A\u4ED6\u7684\u6574\u6570\u503C</td></tr><tr><td>hex(x)</td><td>\u5C06\u4E00\u4E2A\u6574\u6570\u8F6C\u6362\u4E3A\u4E00\u4E2A16\u8FDB\u5236\u5B57\u7B26\u4E32</td></tr><tr><td>oct(x)</td><td>\u5C06\u4E00\u4E2A\u6574\u6570\u8F6C\u6362\u4E3A\u4E00\u4E2A8\u8FDB\u5236\u5B57\u7B26\u4E32</td></tr></tbody></table><h2 id="_2-3-\u6570\u5B57\u7C7B\u578Bnumber" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6570\u5B57\u7C7B\u578Bnumber" aria-hidden="true">#</a> 2.3 \u6570\u5B57\u7C7B\u578BNumber</h2><h3 id="_2-3-1-\u6570\u5B66\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-3-1-\u6570\u5B66\u51FD\u6570" aria-hidden="true">#</a> 2.3.1 \u6570\u5B66\u51FD\u6570</h3><p><em><strong>\u4EE5\u4E0B\u51FD\u6570\u8C03\u7528\uFF0C\u5747\u4EE5\u3010math.XX\u3011\u5F62\u5F0F</strong></em></p><table><thead><tr><th>\u51FD\u6570</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>abs(x)</td><td>\u8FD4\u56DEx\u7684\u7EDD\u5BF9\u503C</td></tr><tr><td>fabs(x)</td><td>\u8FD4\u56DEx\u7684\u7EDD\u5BF9\u503C\uFF0C\u5E26\u5C0F\u6570</td></tr><tr><td>exp(x)</td><td>\u8FD4\u56DEe\u7684x\u6B21\u5E42</td></tr><tr><td>ceil(x)</td><td>\u5BF9x\u5411\u4E0A\u53D6\u6574</td></tr><tr><td>floor(x)</td><td>\u5BF9x\u5411\u4E0B\u53D6\u6574</td></tr><tr><td>log(x)</td><td>\u5982math.log(math.e)\u8FD4\u56DE1.0,math.log(100,10)\u8FD4\u56DE2.0</td></tr><tr><td>log10(x)</td><td>\u8FD4\u56DE\u4EE510\u4E3A\u5E95x\u7684\u5BF9\u6570</td></tr><tr><td>acos(x)</td><td>\u8FD4\u56DEx\u7684\u53CD\u4F59\u5F26\u5F27\u5EA6\u503C</td></tr><tr><td>asin(x)</td><td>\u8FD4\u56DEx\u7684\u53CD\u6B63\u5F26\u5F27\u5EA6\u503C</td></tr><tr><td>atan(x)</td><td>\u8FD4\u56DEx\u7684\u53CD\u6B63\u5207\u5F27\u5EA6\u503C</td></tr><tr><td>atan2(y,x)</td><td>\u8FD4\u56DE\u7ED9\u5B9A\u7684x\u53CAy\u5750\u6807\u503C\u7684\u53CD\u6B63\u5207\u503C</td></tr><tr><td>cos(x)</td><td>\u8FD4\u56DEx\u7684\u4F59\u5F26\u503C</td></tr><tr><td>sin(x)</td><td>\u8FD4\u56DEx\u7684\u6B63\u5F26\u503C</td></tr><tr><td>tan(x)</td><td>\u8FD4\u56DEx\u7684\u6B63\u5207\u503C</td></tr><tr><td>degrees(x)</td><td>\u5C06\u5F27\u5EA6\u8F6C\u6362\u4E3A\u89D2\u5EA6</td></tr><tr><td>randians(x)</td><td>\u5C06\u89D2\u5EA6\u8F6C\u6362\u4E3A\u5F27\u5EA6</td></tr><tr><td>hypot(x,y)</td><td>\u8FD4\u56DE\u6B27\u51E0\u91CC\u5F97\u8303\u6570 sqrt(x*x+y*y)</td></tr></tbody></table><h3 id="_2-3-2-\u968F\u673A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-3-2-\u968F\u673A\u51FD\u6570" aria-hidden="true">#</a> 2.3.2 \u968F\u673A\u51FD\u6570</h3><p><em><strong>\u4EE5\u4E0B\u51FD\u6570\u8C03\u7528\uFF0C\u5747\u4EE5\u3010random.XX\u3011\u5F62\u5F0F</strong></em></p><table><thead><tr><th>\u51FD\u6570</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>choice(seq)</td><td>\u4ECE\u5E8F\u5217\u4E2D\u968F\u673A\u6311\u9009\u4E00\u4E2A\u5143\u7D20</td></tr><tr><td>randrange([start,]stop[,step])</td><td>\u4ECE\u6307\u5B9A\u5355\u4F4D\u5185\uFF0C\u6309\u6307\u5B9A\u57FA\u6570\u9012\u589E\u7684\u96C6\u5408\u4E2D\u83B7\u53D6\u4E00\u4E2A\u968F\u673A\u6570\uFF0C\u57FA\u6570\u9ED8\u8BA4\u503C\u4E3A1</td></tr><tr><td>random()</td><td>\u751F\u6210[0,1)\u7684\u968F\u673A\u6570</td></tr><tr><td>seed([x])</td><td>\u6539\u53D8\u968F\u673A\u6570\u751F\u6210\u5668\u7684\u79CD\u5B50</td></tr><tr><td>shuffle(lst)</td><td>\u5C06\u5E8F\u5217\u4E2D\u7684\u6240\u6709\u5143\u7D20\u968F\u673A\u6392\u5E8F</td></tr><tr><td>uniform(x,y)</td><td>\u968F\u673A\u751F\u6210\u4E00\u4E2A\u5B9E\u6570\uFF0C\u8303\u56F4\u4E3A[x,y]</td></tr></tbody></table><h2 id="_2-4\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_2-4\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 2.4\u5B57\u7B26\u4E32</h2><h3 id="_2-4-1-\u5B57\u7B26\u4E32\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#_2-4-1-\u5B57\u7B26\u4E32\u683C\u5F0F\u5316" aria-hidden="true">#</a> 2.4.1 \u5B57\u7B26\u4E32\u683C\u5F0F\u5316</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;\u6211\u53EB %s \u4ECA\u5E74 %d \u5C81!&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># \u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A\u6211\u53EB \u5C0F\u660E \u4ECA\u5E74 10 \u5C81!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_2-4-1-1-\u5B57\u7B26\u4E32\u683C\u5F0F\u5316\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#_2-4-1-1-\u5B57\u7B26\u4E32\u683C\u5F0F\u5316\u7B26\u53F7" aria-hidden="true">#</a> 2.4.1.1 \u5B57\u7B26\u4E32\u683C\u5F0F\u5316\u7B26\u53F7</h4><table><thead><tr><th>\u7B26\u53F7</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>%c</td><td>\u683C\u5F0F\u5316\u5B57\u7B26\u96C6ASCII\u7801</td></tr><tr><td>%s</td><td>\u683C\u5F0F\u5316\u5B57\u7B26\u4E32</td></tr><tr><td>%d</td><td>\u683C\u5F0F\u5316\u6574\u6570</td></tr><tr><td>%u</td><td>\u683C\u5F0F\u5316\u65E0\u7B26\u53F7\u6574\u6570</td></tr><tr><td>%o</td><td>\u683C\u5F0F\u5316\u65E0\u7B26\u53F7\u516B\u8FDB\u5236\u6570</td></tr><tr><td>%x</td><td>\u683C\u5F0F\u5316\u65E0\u7B26\u53F7\u5341\u516D\u8FDB\u5236\u6570</td></tr><tr><td>%X</td><td>\u683C\u5F0F\u5316\u65E0\u7C97\u8C6A\u5341\u516D\u8FDB\u5236\u6570\uFF08\u5927\u5199\uFF09</td></tr><tr><td>%f</td><td>\u683C\u5F0F\u5316\u6D6E\u70B9\u6570\uFF0C\u53EF\u6307\u5B9A\u5C0F\u6570\u70B9\u540E\u7684\u7ECF\u5EA6</td></tr><tr><td>%e</td><td>\u7528\u79D1\u5B66\u8BA1\u6570\u6CD5\u683C\u5F0F\u5316\u6D6E\u70B9\u6570</td></tr><tr><td>%E</td><td>\u540C%e</td></tr><tr><td>%g</td><td>%f \u548C %e \u7684\u7F29\u5199</td></tr><tr><td>%G</td><td>%f \u548C %E \u7684\u7F29\u5199</td></tr><tr><td>%p</td><td>\u7528\u5341\u516D\u8FDB\u5236\u6570\u683C\u5F0F\u5316\u53D8\u91CF\u7684\u5730\u5740</td></tr></tbody></table><h4 id="_2-4-1-2-\u683C\u5F0F\u5316\u64CD\u4F5C\u7B26\u8F85\u52A9\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-4-1-2-\u683C\u5F0F\u5316\u64CD\u4F5C\u7B26\u8F85\u52A9\u6307\u4EE4" aria-hidden="true">#</a> 2.4.1.2 \u683C\u5F0F\u5316\u64CD\u4F5C\u7B26\u8F85\u52A9\u6307\u4EE4</h4><table><thead><tr><th>\u7B26\u53F7</th><th>\u529F\u80FD</th></tr></thead><tbody><tr><td>*</td><td>\u5B9A\u4E49\u5BBD\u5EA6\u6216\u8005\u5C0F\u6570\u70B9\u7CBE\u5EA6</td></tr><tr><td>-</td><td>\u5DE6\u5BF9\u9F50</td></tr><tr><td>+</td><td>\u5728\u6B63\u6570\u524D\u9762\u663E\u793A\u52A0\u53F7</td></tr><tr><td>&lt;sp&gt;</td><td>\u5728\u6B63\u6570\u524D\u9762\u663E\u793A\u7A7A\u683C</td></tr><tr><td>#</td><td>\u5728\u516B\u8FDB\u5236\u6570\u524D\u9762\u663E\u793A\u96F6(&#39;0&#39;)\uFF0C\u5728\u5341\u516D\u8FDB\u5236\u524D\u9762\u663E\u793A&#39;0x&#39;\u6216\u8005&#39;0X&#39;(\u53D6\u51B3\u4E8E\u7528\u7684\u662F&#39;x&#39;\u8FD8\u662F&#39;X&#39;)</td></tr><tr><td>0</td><td>\u663E\u793A\u7684\u6570\u5B57\u524D\u9762\u586B\u5145&#39;0&#39;\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u7A7A\u683C</td></tr><tr><td>%</td><td>&#39;%%&#39;\u8F93\u51FA\u4E00\u4E2A\u5355\u4E00\u7684&#39;%&#39;</td></tr><tr><td>(var)</td><td>\u6620\u5C04\u53D8\u91CF(\u5B57\u5178\u53C2\u6570)</td></tr><tr><td>m.n.</td><td>m \u662F\u663E\u793A\u7684\u6700\u5C0F\u603B\u5BBD\u5EA6,n \u662F\u5C0F\u6570\u70B9\u540E\u7684\u4F4D\u6570(\u5982\u679C\u53EF\u7528\u7684\u8BDD)</td></tr></tbody></table><p>Python2.6 \u5F00\u59CB\uFF0C\u65B0\u589E\u4E86\u4E00\u79CD\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u7684\u51FD\u6570<code>str.fromat()</code>\uFF0C\u5B83\u589E\u5F3A\u4E86\u5B57\u7B26\u4E32\u683C\u5F0F\u5316\u7684\u529F\u80FD\u3002</p><h4 id="_2-4-1-3-str-format" tabindex="-1"><a class="header-anchor" href="#_2-4-1-3-str-format" aria-hidden="true">#</a> 2.4.1.3 str.format()</h4><p>\u57FA\u672C\u8BED\u6CD5\u662F\u901A\u8FC7<code>{}</code> \u548C <code>:</code>\u6765\u4EE3\u66FF\u4EE5\u524D\u7684 <code>%</code> \u3002</p><p>format \u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4E0D\u9650\u4E2A\u53C2\u6570\uFF0C\u4F4D\u7F6E\u53EF\u4EE5\u4E0D\u6309\u987A\u5E8F\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token string">&quot;{} {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>    <span class="token comment"># \u4E0D\u8BBE\u7F6E\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u6309\u9ED8\u8BA4\u987A\u5E8F</span>
<span class="token string">&#39;hello world&#39;</span>
 
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&quot;{0} {1}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u8BBE\u7F6E\u6307\u5B9A\u4F4D\u7F6E</span>
<span class="token string">&#39;hello world&#39;</span>
 
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&quot;{1} {0} {1}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u8BBE\u7F6E\u6307\u5B9A\u4F4D\u7F6E</span>
<span class="token string">&#39;world hello world&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_2-4-2-\u4E09\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#_2-4-2-\u4E09\u5F15\u53F7" aria-hidden="true">#</a> 2.4.2 \u4E09\u5F15\u53F7</h3><p>\u5141\u8BB8\u4E00\u4E2A\u5B57\u7B26\u4E32\u8DE8\u591A\u884C\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>errHTML <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;
&lt;HTML&gt;&lt;HEAD&gt;&lt;TITLE&gt;
Friends CGI Demo&lt;/TITLE&gt;&lt;/HEAD&gt;
&lt;BODY&gt;&lt;H3&gt;ERROR&lt;/H3&gt;
&lt;B&gt;%s&lt;/B&gt;&lt;P&gt;
&lt;FORM&gt;&lt;INPUT TYPE=button VALUE=Back
ONCLICK=&quot;window.history.back()&quot;&gt;&lt;/FORM&gt;
&lt;/BODY&gt;&lt;/HTML&gt;
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_2-4-3-\u5185\u7F6E\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-4-3-\u5185\u7F6E\u51FD\u6570" aria-hidden="true">#</a> 2.4.3 \u5185\u7F6E\u51FD\u6570</h3><p><em><strong>\u4EE5\u4E0B\u51FD\u6570\u8C03\u7528\uFF0C\u5747\u4EE5\u3010\u53D8\u91CF\u540D.XX\u3011\u5F62\u5F0F</strong></em></p><table><thead><tr><th>\u51FD\u6570</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>capitalize()</td><td>\u628A\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u5927\u5199</td></tr><tr><td>center(width[, fillchar])</td><td>\u8FD4\u56DE\u4E00\u4E2A\u539F\u5B57\u7B26\u4E32\u5C45\u4E2D,\u5E76\u4F7F\u7528\u7A7A\u683C\u586B\u5145\u81F3\u957F\u5EA6 width \u7684\u65B0\u5B57\u7B26\u4E32\u3002\u9ED8\u8BA4\u586B\u5145\u5B57\u7B26\u4E3A\u7A7A\u683C\u3002</td></tr><tr><td>count(sub[, start, end])</td><td>\u7EDF\u8BA1\u5B50\u5B57\u7B26sub\u51FA\u73B0\u7684\u6B21\u6570\u3002\u53EF\u9009\u53C2\u6570\u4E3A\u5728\u5B57\u7B26\u4E32\u641C\u7D22\u7684\u5F00\u59CB\u4E0E\u7ED3\u675F\u4F4D\u7F6E</td></tr><tr><td>decode(encoding, errors)</td><td>\u4EE5 <em>encoding</em> \u6307\u5B9A\u7684\u7F16\u7801\u683C\u5F0F\u89E3\u7801\u5B57\u7B26\u4E32\uFF0C\u82E5\u51FA\u9519\u9ED8\u8BA4\u62A5\u4E00\u4E2A ValueError \u7684 \u5F02 \u5E38\u3002<br>errors -- \u8BBE\u7F6E\u4E0D\u540C\u9519\u8BEF\u7684\u5904\u7406\u65B9\u6848\u3002\u9ED8\u8BA4\u4E3A &#39;strict&#39;,\u610F\u4E3A\u7F16\u7801\u9519\u8BEF\u5F15\u8D77\u4E00\u4E2AUnicodeError\u3002 \u5176\u4ED6\u53EF\u80FD\u5F97\u503C\u6709 &#39;ignore&#39;, &#39;replace&#39;, &#39;xmlcharrefreplace&#39;, &#39;backslashreplace&#39; \u4EE5\u53CA\u901A\u8FC7 codecs.register_error() \u6CE8\u518C\u7684\u4EFB\u4F55\u503C</td></tr><tr><td>encode(encoding, errors)</td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr></tbody></table><h1 id="_3-\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_3-\u65F6\u95F4" aria-hidden="true">#</a> 3.\u65F6\u95F4</h1><h2 id="_3-1-\u65F6\u95F4\u6233" tabindex="-1"><a class="header-anchor" href="#_3-1-\u65F6\u95F4\u6233" aria-hidden="true">#</a> 3.1 \u65F6\u95F4\u6233</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code> 
<span class="token keyword">import</span> time  <span class="token comment"># \u5F15\u5165time\u6A21\u5757</span>
 
ticks <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token string">&quot;\u5F53\u524D\u65F6\u95F4\u6233\u4E3A:&quot;</span><span class="token punctuation">,</span> ticks

<span class="token comment"># \u8F93\u51FA\u7ED3\u679C\uFF1A\u5F53\u524D\u65F6\u95F4\u6233\u4E3A: 1459994552.51</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_3-2-\u83B7\u53D6\u5F53\u524D\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_3-2-\u83B7\u53D6\u5F53\u524D\u65F6\u95F4" aria-hidden="true">#</a> 3.2 \u83B7\u53D6\u5F53\u524D\u65F6\u95F4</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time
 
localtime <span class="token operator">=</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token string">&quot;\u672C\u5730\u65F6\u95F4\u4E3A :&quot;</span><span class="token punctuation">,</span> localtime

<span class="token comment"># \u8F93\u51FA\u7ED3\u679C\uFF1A\u672C\u5730\u65F6\u95F4\u4E3A : time.struct_time(tm_year=2016, tm_mon=4, tm_mday=7, tm_hour=10, tm_min=3, tm_sec=27, tm_wday=3, tm_yday=98, tm_isdst=0)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_3-3-\u83B7\u53D6\u683C\u5F0F\u5316\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_3-3-\u83B7\u53D6\u683C\u5F0F\u5316\u65F6\u95F4" aria-hidden="true">#</a> 3.3 \u83B7\u53D6\u683C\u5F0F\u5316\u65F6\u95F4</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time
 
localtime <span class="token operator">=</span> time<span class="token punctuation">.</span>asctime<span class="token punctuation">(</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token string">&quot;\u672C\u5730\u65F6\u95F4\u4E3A :&quot;</span><span class="token punctuation">,</span> localtime
<span class="token comment"># \u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A\u672C\u5730\u65F6\u95F4\u4E3A : Thu Apr  7 10:05:21 2016</span>

<span class="token comment"># \u683C\u5F0F\u5316\u62102016-03-20 11:45:39\u5F62\u5F0F</span>
<span class="token keyword">print</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
 
<span class="token comment"># \u683C\u5F0F\u5316\u6210Sat Mar 28 22:24:24 2016\u5F62\u5F0F</span>
<span class="token keyword">print</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%a %b %d %H:%M:%S %Y&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
  
<span class="token comment"># \u5C06\u683C\u5F0F\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u65F6\u95F4\u6233</span>
a <span class="token operator">=</span> <span class="token string">&quot;Sat Mar 28 22:24:24 2016&quot;</span>
<span class="token keyword">print</span> time<span class="token punctuation">.</span>mktime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">&quot;%a %b %d %H:%M:%S %Y&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u65F6\u95F4\u683C\u5F0F\u5316\u7B26\u53F7\uFF1A</p><table><thead><tr><th>\u7B26\u53F7</th><th>\u610F\u4E49</th></tr></thead><tbody><tr><td>%y</td><td>\u4E24\u4F4D\u6570\u7684\u5E74\u4EFD\u8868\u793A(00-99)</td></tr><tr><td>%Y</td><td>\u56DB\u4F4D\u6570\u7684\u5E74\u4EFD\u8868\u793A</td></tr><tr><td>%m</td><td>\u6708\u4EFD\uFF0801-12\uFF09</td></tr><tr><td>%d</td><td>\u6708\u5185\u67D0\u4E00\u5929\uFF0801-31\uFF09</td></tr><tr><td>%H</td><td>24\u5C0F\u65F6\u5236\u5C0F\u65F6\u6570</td></tr><tr><td>%l</td><td>12\u5C0F\u65F6\u5236\u5C0F\u65F6\u6570</td></tr><tr><td>%M</td><td>\u5206\u949F\u6570</td></tr><tr><td>%S</td><td>\u79D2</td></tr><tr><td>%a</td><td>\u672C\u5730\u7B80\u5316\u661F\u671F\u540D</td></tr><tr><td>%A</td><td>\u672C\u5730\u5B8C\u6574\u661F\u671F\u540D</td></tr><tr><td>%b</td><td>\u672C\u5730\u7B80\u5316\u6708\u4EFD\u540D</td></tr><tr><td>%B</td><td>\u672C\u5730\u5B8C\u6574\u6708\u4EFD\u540D</td></tr><tr><td>%c</td><td>\u672C\u5730\u76F8\u5E94\u7684\u65E5\u671F\u8868\u793A\u548C\u65F6\u95F4\u8868\u793A</td></tr><tr><td>%j</td><td>\u5E74\u5185\u67D0\u4E00\u5929\uFF08001-366\uFF09</td></tr><tr><td>%p</td><td>\u672C\u5730A.M.\u6216P.M.\u7684\u7B49\u4EF7\u7B26</td></tr><tr><td>%U</td><td>\u4E00\u5E74\u4E2D\u7684\u661F\u671F\u6570\uFF0800-53\uFF09\uFF0C\u4EE5\u5468\u65E5\u4E3A\u661F\u671F\u7684\u5F00\u59CB</td></tr><tr><td>%u</td><td>\u4E00\u5E74\u4E2D\u7684\u661F\u671F\u6570\uFF080-53\uFF09\uFF0C\u4EE5\u5468\u65E5\u4E3A\u661F\u671F\u7684\u5F00\u59CB</td></tr><tr><td>%W</td><td>\u4E00\u5E74\u4E2D\u7684\u661F\u671F\u6570\uFF0800-53\uFF09\uFF0C\u4EE5\u5468\u4E00\u4E3A\u661F\u671F\u7684\u5F00\u59CB</td></tr><tr><td>%w</td><td>\u4E00\u5E74\u4E2D\u7684\u661F\u671F\u6570\uFF080-53\uFF09\uFF0C\u4EE5\u5468\u4E00\u4E3A\u661F\u671F\u7684\u5F00\u59CB</td></tr><tr><td>%x</td><td>\u672C\u5730\u5BF9\u5E94\u7684\u65E5\u671F\u8868\u793A\uFF08\u6708/\u65E5/\u5E74\uFF09</td></tr><tr><td>%X</td><td>\u672C\u5730\u76F8\u5E94\u7684\u65F6\u95F4\u8868\u793A\uFF08\u65F6:\u5206:\u79D2\uFF09</td></tr><tr><td>%Z</td><td>\u5F53\u524D\u5E02\u533A\u7684\u540D\u79F0</td></tr><tr><td>%%</td><td>%\u672C\u8EAB</td></tr></tbody></table><h1 id="_4-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u51FD\u6570" aria-hidden="true">#</a> 4.\u51FD\u6570</h1><h2 id="_4-1-\u53C2\u6570\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#_4-1-\u53C2\u6570\u4F20\u9012" aria-hidden="true">#</a> 4.1 \u53C2\u6570\u4F20\u9012</h2><p>\u4E0Ejava\u4E2D\u7684\u503C\u4F20\u9012\u548C\u5F15\u7528\u4F20\u9012\u7C7B\u4F3C\uFF0C\u56E0\u4E3Apython\u4E2D\u4E00\u5207\u90FD\u662F\u5BF9\u8C61\uFF0C\u56E0\u6B64\u6240\u8C13\u7684\u503C\u4F20\u9012\u548C\u5F15\u7528\u4F20\u9012\uFF0C\u4E25\u683C\u6765\u8BF4\u5C31\u662F\u4F20\u4E0D\u53EF\u53D8\u7C7B\u578B\u548C\u4F20\u53EF\u53D8\u7C7B\u578B\u3002</p><table><thead><tr><th>\u53C2\u6570\u7C7B\u578B</th><th>\u4E3E\u4F8B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u4E0D\u53EF\u53D8\u7C7B\u578B</td><td>Number\uFF0CString\uFF0C\u5143\u7EC4</td><td>\u51FD\u6570\u4E2D\u4FEE\u6539\u53C2\u6570\u7684\u503C\uFF0C\u5BF9\u51FD\u6570\u5916\u90E8\u7684\u5BF9\u8C61\u672C\u8EAB\u7684\u503C\u6CA1\u6709\u5F71\u54CD</td></tr><tr><td>\u53EF\u53D8\u7C7B\u578B</td><td>List\uFF0C\u5B57\u5178\uFF0CSet</td><td>\u4E00\u65E6\u5728\u51FD\u6570\u4E2D\u4FEE\u6539\u4E86\u53C2\u6570\u7684\u503C\uFF0C\u51FD\u6570\u5916\u90E8\u7684\u5BF9\u8C61\u4E5F\u4F1A\u88AB\u4FEE\u6539</td></tr></tbody></table><h2 id="_4-2-\u53C2\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_4-2-\u53C2\u6570\u7C7B\u578B" aria-hidden="true">#</a> 4.2 \u53C2\u6570\u7C7B\u578B</h2><table><thead><tr><th>\u53C2\u6570\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u4F8B\u5B50</th></tr></thead><tbody><tr><td>\u5FC5\u5907\u53C2\u6570</td><td>\u5FC5\u5907\u53C2\u6570\u987B\u4EE5\u6B63\u786E\u7684\u987A\u5E8F\u4F20\u5165\u51FD\u6570;<br>\u8C03\u7528\u65F6\u7684\u6570\u91CF\u5FC5\u987B\u548C\u58F0\u660E\u65F6\u7684\u4E00\u6837</td><td><code>&lt;img src=&quot;../images/python3\u57FA\u7840\u67E5\u6F0F\u8865\u7F3A/python-base-fun1.png&quot; /&gt;</code></td></tr><tr><td>\u5173\u952E\u5B57\u53C2\u6570</td><td>\u4F7F\u7528\u5173\u952E\u5B57\u53C2\u6570\u5141\u8BB8\u51FD\u6570\u8C03\u7528\u65F6\u53C2\u6570\u7684\u987A\u5E8F\u4E0E\u58F0\u660E\u65F6\u4E0D\u4E00\u81F4</td><td><code>&lt;img src=&quot;../images/python3\u57FA\u7840\u67E5\u6F0F\u8865\u7F3A\\python-base-fun2.png&quot; /&gt;</code></td></tr><tr><td>\u9ED8\u8BA4\u53C2\u6570</td><td>\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u9ED8\u8BA4\u53C2\u6570\u7684\u503C\u5982\u679C\u6CA1\u6709\u4F20\u5165\uFF0C\u5219\u88AB\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C</td><td><code>&lt;img src=&quot;../images/python3\u57FA\u7840\u67E5\u6F0F\u8865\u7F3A\\python-base-fun3.png&quot; /&gt;</code></td></tr><tr><td>\u4E0D\u5B9A\u957F\u53C2\u6570</td><td>\u4E00\u4E2A\u51FD\u6570\u80FD\u5904\u7406\u6BD4\u5F53\u521D\u58F0\u660E\u65F6\u66F4\u591A\u7684\u53C2\u6570\u3002\u8FD9\u4E9B\u53C2\u6570\u53EB\u505A\u4E0D\u5B9A\u957F\u53C2\u6570;<br>\u52A0\u4E86\u661F\u53F7\uFF08*\uFF09\u7684\u53D8\u91CF\u540D\u4F1A\u5B58\u653E\u6240\u6709\u672A\u547D\u540D\u7684\u53D8\u91CF\u53C2\u6570</td><td><code>&lt;img src=&quot;../images/python3\u57FA\u7840\u67E5\u6F0F\u8865\u7F3A\\python-base-fun4.png&quot; /&gt;</code></td></tr></tbody></table><h2 id="_4-3-\u533F\u540D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-3-\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a> 4.3 \u533F\u540D\u51FD\u6570</h2><p><strong>python \u4F7F\u7528 lambda \u6765\u521B\u5EFA\u533F\u540D\u51FD\u6570\u3002</strong></p><p>1\uFF09lambda\u4E3B\u4F53\u662F\u4E00\u4E2A\u8868\u8FBE\u5F0F</p><p>2\uFF09lambda\u51FD\u6570\u62E5\u6709\u81EA\u5DF1\u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u4E14\u4E0D\u80FD\u8BBF\u95EE\u81EA\u5DF1\u7684\u53C2\u6570\u5217\u8868\u4E4B\u5916\u6216\u8005\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u91CC\u7684\u53C2\u6570</p><p>3\uFF09\u8BED\u6CD5\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">lambda</span> <span class="token punctuation">[</span>arg1 <span class="token punctuation">[</span><span class="token punctuation">,</span>arg2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>argn<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>expression
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>eg.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!/usr/bin/python3</span>
 
<span class="token comment"># \u53EF\u5199\u51FD\u6570\u8BF4\u660E</span>
<span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token keyword">lambda</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">:</span> arg1 <span class="token operator">+</span> arg2
 
<span class="token comment"># \u8C03\u7528sum\u51FD\u6570</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;\u76F8\u52A0\u540E\u7684\u503C\u4E3A : &quot;</span><span class="token punctuation">,</span> <span class="token builtin">sum</span><span class="token punctuation">(</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># \u8F93\u51FA\u7ED3\u679C\uFF1A\u76F8\u52A0\u540E\u7684\u503C\u4E3A : 30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_4-4-return-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_4-4-return-\u8BED\u53E5" aria-hidden="true">#</a> 4.4 return \u8BED\u53E5</h2><p><code>return [\u8868\u8FBE\u5F0F]</code>\u8BED\u53E5\u7528\u4E8E\u9000\u51FA\u51FD\u6570\uFF0C\u9009\u62E9\u6027\u5730\u5411\u8C03\u7528\u65B9\u8FD4\u56DE\u4E00\u4E2A\u8868\u8FBE\u5F0F\u3002\u4E0D\u5E26\u53C2\u6570\u503C\u7684return\u8BED\u53E5\u8FD4\u56DENone\u3002</p><h2 id="_4-5\u5F3A\u5236\u4F4D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_4-5\u5F3A\u5236\u4F4D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> 4.5\u5F3A\u5236\u4F4D\u7F6E\u53C2\u6570</h2><p>python 3.8\u65B0\u8BED\u6CD5</p>`,64);function e(d,r){return s}var o=t(a,[["render",e],["__file","1.html.vue"]]);export{o as default};
