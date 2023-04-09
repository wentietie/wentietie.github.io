import{_ as n,p as e,q as a,a1 as s}from"./framework-5866ffd3.js";const o={},t=s(`<h1 id="_1-自定义主题" tabindex="-1"><a class="header-anchor" href="#_1-自定义主题" aria-hidden="true">#</a> 1.自定义主题</h1><p>直接导入<code>pixyll.css</code>即可。</p><h2 id="_2-设置字体颜色" tabindex="-1"><a class="header-anchor" href="#_2-设置字体颜色" aria-hidden="true">#</a> 2.设置字体颜色</h2><p>打开<code>文件-&gt;偏好设置-&gt;Markdown</code>，勾选<code>内联公式</code>，然后重启Typora后，才可以用内联公式修改文字颜色。</p><blockquote><p>使用方法</p></blockquote><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>// 语法
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{字体颜色}{文字}$</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>eg：$\\textcolor{red}{输入红色字体的例子}$</p><blockquote><p>颜色公式代码</p></blockquote><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code><span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{GreenYellow}{GreenYellow} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Yellow}{Yellow}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Goldenrod}{Goldenrod} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Dandelion}{Dandelion}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Apricot}{Apricot} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Peach}{Peach}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Melon}{Melon} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{YellowOrange}{YellowOrange}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Orange}{Orange} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{BurntOrange}{BurntOrange}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Bittersweet}{Bittersweet}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{RedOrange}{RedOrange} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Mahogany}{Mahogany}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Maroon}{Maroon} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{BrickRed}{BrickRed}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Red}{Red} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{OrangeRed}{OrangeRed}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{RubineRed}{RubineRed}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{WildStrawberry}{WildStrawberry}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Salmon}{Salmon}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{CarnationPink}{CarnationPink}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Magenta}{Magenta} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{VioletRed}{VioletRed}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Rhodamine}{Rhodamine} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Mulberry}{Mulberry}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{RedViolet}{RedViolet} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Fuchsia}{Fuchsia}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Lavender}{Lavender} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Thistle}{Thistle}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Orchid}{Orchid} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{DarkOrchid}{DarkOrchid}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Purple}{Purple} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Plum}{Plum}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Violet}{Violet} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{RoyalPurple}{RoyalPurple}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{BlueViolet}{BlueViolet}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Periwinkle}{Periwinkle}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{CadetBlue}{CadetBlue}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{CornflowerBlue}{CornflowerBlue}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{MidnightBlue}{MidnightBlue}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{NavyBlue}{NavyBlue} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{RoyalBlue}{RoyalBlue}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Blue}{Blue} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Cerulean}{Cerulean}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Cyan}{Cyan} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{ProcessBlue}{ProcessBlue}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{SkyBlue}{SkyBlue} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Turquoise}{Turquoise}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{TealBlue}{TealBlue} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Aquamarine}{Aquamarine}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{BlueGreen}{BlueGreen} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Emerald}{Emerald}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{JungleGreen}{JungleGreen}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{SeaGreen}{SeaGreen} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Green}{Green}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{ForestGreen}{ForestGreen}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{PineGreen}{PineGreen} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{LimeGreen}{LimeGreen}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{YellowGreen}{YellowGreen}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{SpringGreen}{SpringGreen}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{OliveGreen}{OliveGreen}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{RawSienna}{RawSienna} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Sepia}{Sepia}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Brown}{Brown} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Tan}{Tan}$</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Gray}{Gray} $</span>
<span class="token equation string">$<span class="token equation-command regex">\\textcolor</span>{Black}{Black}$</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[t];function l(r,c){return e(),a("div",null,i)}const d=n(o,[["render",l],["__file","1.html.vue"]]);export{d as default};
