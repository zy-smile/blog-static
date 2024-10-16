import{_ as i,c as l,a0 as s,o as e}from"./chunks/framework.ClsDqtWH.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/java-study.md","filePath":"other/java-study.md"}'),t={name:"other/java-study.md"};function n(h,a,o,r,d,p){return e(),l("div",null,a[0]||(a[0]=[s(`<h2 id="java环境搭建" tabindex="-1">java环境搭建 <a class="header-anchor" href="#java环境搭建" aria-label="Permalink to &quot;java环境搭建&quot;">​</a></h2><h3 id="java的特性" tabindex="-1">java的特性 <a class="header-anchor" href="#java的特性" aria-label="Permalink to &quot;java的特性&quot;">​</a></h3><ol><li>面对对象</li><li>移植性（可以在window系统、linux系统运行）</li><li>健壮性 （自动回收垃圾的机制）</li><li>多线程</li></ol><h3 id="java编写" tabindex="-1">java编写 <a class="header-anchor" href="#java编写" aria-label="Permalink to &quot;java编写&quot;">​</a></h3><ol><li>安装编辑器</li><li>安装JDK开发工具包。配置环境变量（bin目录根路径）</li><li>JDK的bin目录命令： <ul><li>javac.exe负责编译</li><li>java.exe负责运行</li></ul></li></ol><h5 id="编译中文乱码问题" tabindex="-1">编译中文乱码问题 <a class="header-anchor" href="#编译中文乱码问题" aria-label="Permalink to &quot;编译中文乱码问题&quot;">​</a></h5><p>解决方法是编译时用 -encoding 指定源文件的编码方式:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javac -encoding UTF-8 xxx.java</span></span></code></pre></div><h5 id="helloworld" tabindex="-1">helloWorld <a class="header-anchor" href="#helloworld" aria-label="Permalink to &quot;helloWorld&quot;">​</a></h5><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public class HelloWorld{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // 类体</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    public</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> static</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        // 方法体</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    System</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">out</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&quot;你好, &#39;世界&#39;&quot;); // 在控制台打印</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="源文件" tabindex="-1">源文件 <a class="header-anchor" href="#源文件" aria-label="Permalink to &quot;源文件&quot;">​</a></h4><ol><li>一个源文件可以定义多个class类,类里必须有主方法，否则会报错。</li><li>public class 不是必须的</li><li>一个class类可以编辑一个class文件</li><li>public class 定义的公共类必须和java源文件的名称一致，并且只能有一个。</li></ol><h2 id="java基础" tabindex="-1">java基础 <a class="header-anchor" href="#java基础" aria-label="Permalink to &quot;java基础&quot;">​</a></h2><h3 id="java标识符" tabindex="-1">java标识符 <a class="header-anchor" href="#java标识符" aria-label="Permalink to &quot;java标识符&quot;">​</a></h3><ol><li>变量名</li><li>方法名</li><li>类名</li><li>常量名</li></ol><h5 id="标识符规范" tabindex="-1">标识符规范 <a class="header-anchor" href="#标识符规范" aria-label="Permalink to &quot;标识符规范&quot;">​</a></h5><ol><li>见名知意</li><li>遵循驼峰命名法</li><li>类名、接口名必须大写，后面每个单词首字母大写</li><li>方法名、变量名首字母小写，后面每个单词首字母大写</li><li>常量名首字母大写、后面每个单词首字母大写</li></ol><h3 id="一、变量" tabindex="-1">一、变量 <a class="header-anchor" href="#一、变量" aria-label="Permalink to &quot;一、变量&quot;">​</a></h3><ol><li>在方法体中代码逐行执行。</li><li>变量不可以重名，可以重新赋值。</li><li>变量的作用域总结： <strong>出了大括号就不认识了。（在大括号内有效）</strong></li><li>变量的分类：</li></ol><ul><li>根据声明的位置分类</li></ul><ol><li>在方法体内声明的变量为局部变量。</li><li>在方法体外声明的变量为成员变量。</li></ol><ul><li>在不同作用域可以用相同的变量名，变量查询遵循就近原则。</li><li>类体中不能直接编写java语句，除了声明变量以外。</li></ul><h3 id="二、-数据类型" tabindex="-1">二、 数据类型 <a class="header-anchor" href="#二、-数据类型" aria-label="Permalink to &quot;二、 数据类型&quot;">​</a></h3><ol><li>数据类型分为四大类八小种：</li></ol><ul><li>整数型：int long short byte</li><li>浮点型： float double</li><li>布尔型： blooean</li><li>字符型： char</li></ul><ol start="2"><li>字符串属于应用类型，用双引号，字符型用单引号。</li><li>\\在java中具有转义功能，将特殊字符转义成普通字符。</li><li>print()表示输出，println()表示输出后换行。</li><li>类型转换: 需要在init类型变量值后面加L(long = 2147483648L)</li></ol>`,26)]))}const u=i(t,[["render",n]]);export{c as __pageData,u as default};