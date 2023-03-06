import{_ as a,c as s}from"./app.9b52f51c.js";var e="/assets/sever-install-jdk-1.b8eafc72.png",n="/assets/sever-install-jdk-2.b326fb8d.png",r="/assets/sever-install-jdk-3.47c12915.png",i="/assets/sever-install-jdk-4.826f7fe9.png";const l={},t=s('<h1 id="centos7\u5B89\u88C5jdk1-8" tabindex="-1"><a class="header-anchor" href="#centos7\u5B89\u88C5jdk1-8" aria-hidden="true">#</a> CentOS7\u5B89\u88C5jdk1.8</h1><h1 id="_1-\u5B98\u7F51\u4E0B\u8F7Djdk" tabindex="-1"><a class="header-anchor" href="#_1-\u5B98\u7F51\u4E0B\u8F7Djdk" aria-hidden="true">#</a> 1.\u5B98\u7F51\u4E0B\u8F7Djdk</h1><p>https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html</p><p><img src="'+e+'" alt=""></p><h1 id="_2-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5" aria-hidden="true">#</a> 2.\u5B89\u88C5</h1><p>\u521B\u5EFA<code>/usr/java8</code>\u6587\u4EF6\u5939\uFF0C\u5C06\u538B\u7F29\u5305\u4E0A\u4F20\u81F3\u8BE5\u6587\u4EF6\u5939\u5185\uFF0C\u8FDB\u884C\u89E3\u538B\u3002</p><p><img src="'+n+'" alt=""></p><h1 id="_3-\u914D\u7F6Ejdk" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6Ejdk" aria-hidden="true">#</a> 3.\u914D\u7F6EJDK</h1><p>\u7F16\u8F91 <code>/etc/profile</code>\u6587\u4EF6\uFF0C\u8FDB\u884C\u5168\u5C40\u53D8\u91CF\u7684\u8BBE\u7F6E\uFF0C\u5728\u6587\u4EF6\u672B\u5C3E\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\u5373\u53EF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#java environment</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/java8/jdk1.8.0_281\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">${JAVA_HOME}</span>/jre/lib/rt.jar:<span class="token variable">${JAVA_HOME}</span>/lib/dt.jar:<span class="token variable">${JAVA_HOME}</span>/lib/tools.jar\n<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">${JAVA_HOME}</span>/bin\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="'+r+`" alt=""></p><h1 id="_4-\u8BA9\u73AF\u5883\u53D8\u91CF\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#_4-\u8BA9\u73AF\u5883\u53D8\u91CF\u751F\u6548" aria-hidden="true">#</a> 4.\u8BA9\u73AF\u5883\u53D8\u91CF\u751F\u6548</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_5-\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#_5-\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F" aria-hidden="true">#</a> 5.\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -version
javac -version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+i+'" alt=""></p>',16);function p(c,d){return t}var h=a(l,[["render",p],["__file","part3.html.vue"]]);export{h as default};
