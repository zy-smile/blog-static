import{_ as a,c as p,a0 as l,o as i}from"./chunks/framework.ClsDqtWH.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/mobile-study.md","filePath":"web/mobile-study.md"}'),n={name:"web/mobile-study.md"};function e(t,s,o,r,c,d){return i(),p("div",null,s[0]||(s[0]=[l(`<ol><li>视口</li></ol><p>视口（viewport）就是浏览器显示页面内容的屏幕区域。 视口可以分为布局视口、视觉视口和理想视口 meta标签</p><p>meta标签</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name=viewport&quot; content=&quot;width=</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">device-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">user-scalable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=no,</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">initial-scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maximum-scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">minimum-scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=1.0&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><ol start="2"><li>二倍图 一个px的能显示的物理像素点的个数，称为物理像素比或屏幕像素比 lRetina（视网膜屏幕）是一种显示技术，可以将把更多的物理像素点压缩至一块屏幕里，从而达到更高的分辨率，并提高屏幕显示的细腻程度。 对于一张 50px * 50px 的图片,在手机或 Retina 屏中打开，按照刚才的物理像素比会放大倍数，这样会造成图片模糊 在标准的viewport设置中，使用倍图来提高图片质量，解决在高清设备中的模糊问题</li><li>背景缩放background-size background-size 属性规定背景图像的尺寸</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>background-size: 背景图片宽度 背景图片高度;</span></span></code></pre></div><p>单位： 长度|百分比|cover|contain;</p><p>cover把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。</p><p>contain把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域 4. 移动端开发选择 1） 单独制作移动端页面 2）响应式页面兼容移动端 移动端浏览器基本以 webkit 内核为主，因此我们就考虑webkit兼容性问题。 移动端公共样式</p><p>移动端 CSS 初始化推荐使用 normalize.css</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  /*CSS3盒子模型*/</span></span>
<span class="line"><span>    box-sizing: border-box;</span></span>
<span class="line"><span>    -webkit-box-sizing: border-box;</span></span>
<span class="line"><span>    /*点击高亮我们需要清除清除  设置为transparent 完成透明*/</span></span>
<span class="line"><span>    -webkit-tap-highlight-color: transparent;</span></span>
<span class="line"><span>    /*在移动端浏览器默认的外观在iOS上加上这个属性才能给按钮和输入框自定义样式*/</span></span>
<span class="line"><span>    -webkit-appearance: none;</span></span>
<span class="line"><span>    /*禁用长按页面时的弹出菜单*/</span></span>
<span class="line"><span>    img,a { -webkit-touch-callout: none; }</span></span></code></pre></div><h3 id="流式布局-百分比布局" tabindex="-1">流式布局（百分比布局） <a class="header-anchor" href="#流式布局-百分比布局" aria-label="Permalink to &quot;流式布局（百分比布局）&quot;">​</a></h3><p>通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充</p><h3 id="flex布局" tabindex="-1">flex布局 <a class="header-anchor" href="#flex布局" aria-label="Permalink to &quot;flex布局&quot;">​</a></h3><p>传统布局</p><ul><li><p>兼容性好</p></li><li><p>布局繁琐</p></li><li><p>局限性，不能再移动端很好的布局 flex布局</p></li><li><p>操作方便，布局极其简单，移动端使用比较广泛</p></li><li><p>pc端浏览器支持情况比较差</p></li><li><p>IE11或更低版本不支持flex或仅支持部分 就是通过给父盒子添加flex属性，来控制子盒子的位置和排列方式 <strong>父项常见属性</strong></p></li><li><p>flex-direction：设置主轴的方向</p></li></ul><p>主轴和侧轴是会变化的，就看 flex-direction 设置谁为主轴，剩下的就是侧轴。而我们的子元素是跟着主轴来排列的 row 默认从左到右 row-reverse从右到左 column从上到下 column-reverse从下到上</p><ul><li>justify-content：设置主轴上的子元素排列方式</li></ul><p>flex-start默认值从头部开始 flex-end从尾部开始 center主轴居中 space-around平分剩余空间 space-between先贴两边在平分</p><ul><li>flex-wrap：设置子元素是否换行</li></ul><p>-默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，flex布局中默认是不换行的。 nowrap 不换行 wrap 换行</p><ul><li><p>align-content：设置侧轴上的子元素的排列方式（多行） flex-start从侧轴头部开始end尾部 center侧轴中间 space-around和space-between stretch设置子元素高度平分父元素高度</p></li><li><p>align-items：设置侧轴上的子元素排列方式（单行）</p></li><li><p>该属性是控制子项在侧轴（默认是y轴）上的排列方式 在子项为单项（单行）的时候使用</p></li><li><p>总结就是单行找align-items 多行找 align-content</p></li><li><p>flex-start 从头部开始</p></li><li><p>flex-end 从尾部开始</p></li><li><p>center 居中显示</p></li><li><p>stretch 拉伸</p></li><li></li><li><p>flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap</p></li><li><p>flex-flow:row wrap; flex布局子项常见属性</p></li><li><p>flex子项目占的份数</p></li><li><p>align-self控制子项自己在侧轴的排列方式 align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。</p></li></ul><p>默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch</p><ul><li>order属性定义子项的排列顺序（前后顺序）</li><li>数值越小，排列越靠前，默认为0。</li></ul><p>注意：和 z-index 不一样。 .item { order: 1; }</p><h3 id="rem布局" tabindex="-1">rem布局 <a class="header-anchor" href="#rem布局" aria-label="Permalink to &quot;rem布局&quot;">​</a></h3><p>rem单位</p><p>rem (root em)是一个相对单位，类似于em，em是父元素字体大小。</p><p>不同的是rem的基准是相对于html元素的字体大小。 rem的优势：父元素文字大小可能不一致， 但是整个页面只有一个html，可以很好来控制整个页面的元素大小 <strong>媒体查询（Media Query）是CSS3新语法</strong>。</p><ul><li>使用 @media查询，可以针对不同的媒体类型定义不同的样式</li><li>@media 可以针对不同的屏幕尺寸设置不同的样式</li><li>当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面</li><li>用 @media开头 注意@符号</li><li>mediatype 媒体类型</li></ul><p>all所有设备print打印机scree电脑屏幕平板电脑智能手机</p><ul><li><p>关键字 and not only</p></li><li><p>and：可以将多个媒体特性连接到一起，相当于“且”的意思。</p></li><li><p>not：排除某个媒体类型，相当于“非”的意思，可以省略。</p></li><li><p>only：指定某个特定的媒体类型，可以省略。</p></li><li><p>media feature 媒体特性必须有小括号包含 -width minwidth maxwidth</p></li><li><p><code>@media mediatype and|not|only (media feature) { CSS-Code; }</code> 注意： 为了防止混乱，媒体查询我们要按照从小到大或者从大到小的顺序来写,但是我们最喜欢的还是从小到大来写，这样代码更简洁 <strong>less基础</strong><strong>CSS 是一门非程序式语言</strong>，没有变量、函数、SCOPE（作用域）等概念。</p></li><li><p>CSS 需要书写大量看似没有逻辑的代码，CSS 冗余度是比较高的。</p></li><li><p>不方便维护及扩展，不利于复用。</p></li><li><p>CSS 没有很好的计算能力</p></li><li><p>非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目</p></li></ul><p>Less（LeanerStyle Sheets 的缩写）是一门 CSS扩展语言，也成为CSS预处理器。</p><p>做为 CSS的一种形式的扩展，它并没有减少CSS的功能，而是在现有的CSS语法上，为CSS加入程序式语言的特性。</p><p>它在CSS 的语法基础之上，引入了变量，Mixin（混入），运算以及函数等功能，大大简化了 CSS 的编写，并且降低了 CSS的维护成本，就像它的名称所说的那样，Less可以让我们用更少的代码做更多的事情。</p><p>Less中文网址：<a href="http://lesscss.cn/" target="_blank" rel="noreferrer">http://</a><a href="http://lesscss.cn/" target="_blank" rel="noreferrer">less</a><a href="http://lesscss.cn/" target="_blank" rel="noreferrer">css.cn/</a> 一句话：Less是一门 CSS 预处理语言，它扩展了CSS的动态特性 Less安装</p><p>①安装nodejs，可选择版本(8.0)，网址：<a href="http://nodejs.cn/download/" target="_blank" rel="noreferrer">http://nodejs.cn/download/</a></p><p>②检查是否安装成功，使用cmd命令（win10是window+r 打开运行输入cmd） ---输入“node –v”查看版本即可</p><p>③基于nodejs在线安装Less，使用cmd命令“npm install -g less”即可</p><p>④检查是否安装成功，使用cmd命令“ lessc -v ”查看版本即可</p><p>Less 使用之变量</p><p>变量是指没有固定的值，可以改变的。因为我们CSS中的一些颜色和数值等经常使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@变量名:值;</span></span></code></pre></div><ul><li>必须有@为前缀</li><li>不能包含特殊字符</li><li>不能以数字开头</li><li>大小写敏感 Easy LESS 插件用来把less文件编译为css文件</li></ul><p>Less 嵌套</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 将css改为less</span></span>
<span class="line"><span>#header .logo {</span></span>
<span class="line"><span>  width: 300px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#header {</span></span>
<span class="line"><span>    .logo {</span></span>
<span class="line"><span>       width: 300px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果遇见 （交集|伪类|伪元素选择器） ，利用&amp;进行连接</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a:hover{</span></span>
<span class="line"><span>    color:red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>a{</span></span>
<span class="line"><span>  &amp;:hover{</span></span>
<span class="line"><span>      color:red;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Less 运算</p><p>任何数字、颜色或者变量都可以参与运算。就是Less提供了加（+）、减（-）、乘（*）、除（/）算术运算。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/*Less 里面写*/</span></span>
<span class="line"><span>@witdh: 10px + 5;</span></span>
<span class="line"><span>div {</span></span>
<span class="line"><span>    border: @witdh solid red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/*生成的css*/</span></span>
<span class="line"><span>div {</span></span>
<span class="line"><span>  border: 15px solid red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/*Less 甚至还可以这样 */</span></span>
<span class="line"><span>width: (@width + 5) * 2;</span></span></code></pre></div><ul><li>乘号（*）和除号（/）的写法</li><li>运算符中间左右有个空格隔开 1px + 5</li><li>对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位</li><li>如果两个值之间只有一个值有单位，则运算结果就取该单位</li></ul><h3 id="响应式布局" tabindex="-1">响应式布局 <a class="header-anchor" href="#响应式布局" aria-label="Permalink to &quot;响应式布局&quot;">​</a></h3><p>原理： 就是使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。 响应式需要一个父级做为布局容器，来配合子级元素来实现变化效果。</p><p>原理就是在不同屏幕下，通过媒体查询来改变这个布局容器的大小，再改变里面子元素的排列方式和大小，从而实现不同屏幕下，看到不同的页面布局和样式变化。</p><p>父容器版心的尺寸划分</p><ul><li>超小屏幕（手机，小于 768px）：设置宽度为 100%</li><li>小屏幕（平板，大于等于 768px）：设置宽度为 750px</li><li>中等屏幕（桌面显示器，大于等于 992px）：宽度设置为 970px</li><li>大屏幕（大桌面显示器，大于等于 1200px）：宽度设置为 1170px</li></ul><h4 id="bootstrap简介" tabindex="-1">Bootstrap简介 <a class="header-anchor" href="#bootstrap简介" aria-label="Permalink to &quot;Bootstrap简介&quot;">​</a></h4><p>Bootstrap 来自 Twitter（推特），是目前最受欢迎的前端框架。Bootstrap 是基于HTML、CSS 和 JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。</p><p><a href="lhttp://www.bootcss.com/" target="_blank" rel="noreferrer">中文网</a> <a href="lhttp://getbootstrap.com/" target="_blank" rel="noreferrer">官网</a> <a href="http://bootstrap.css88.com/" target="_blank" rel="noreferrer">推荐网站</a></p><p>框架：顾名思义就是一套架构，它有一套比较完整的网页功能解决方案，而且控制权在框架本身，有预制样式库、组件和插件。使用者要按照框架所规定的某种规范进行开发。</p><h4 id="bootstrap优点" tabindex="-1">bootstrap优点 <a class="header-anchor" href="#bootstrap优点" aria-label="Permalink to &quot;bootstrap优点&quot;">​</a></h4><ul><li>标准化的html+css编码规范</li><li>提供了一套简洁、直观、强悍的组件</li><li>有自己的生态圈，不断的更新迭代</li><li>让开发更简单，提高了开发的效率</li></ul><h4 id="bootstrap栅格系统" tabindex="-1">bootstrap栅格系统 <a class="header-anchor" href="#bootstrap栅格系统" aria-label="Permalink to &quot;bootstrap栅格系统&quot;">​</a></h4><p>Bootstrap提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。</p><p>栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。</p><ul><li>按照不同屏幕划分为1~12 等份</li><li>行（row） 可以去除父容器作用15px的边距</li><li>xs-extra small：超小； sm-small：小； md-medium：中等； lg-large：大；</li><li>列（column）大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列</li><li>每一列默认有左右15像素的 padding</li><li>可以同时为一列指定多个设备的类名，以便划分不同份数 例如 class=&quot;col-md-4 col-sm-6&quot;</li></ul><p>栅格嵌套</p><p>栅格系统内置的栅格系统将内容再次嵌套。简单理解就是一个列内再分成若干份小列。我们可以通过添加一个新的 .row 元素和一系列 .col-sm-* 元素到已经存在的 .col-sm-* 元素内 列偏移</p><p>使用 .col-md-offset-* 类可以将列向右侧偏移。这些类实际是通过使用 * 选择器为当前元素增加了左侧的边距（margin）。 列排序</p><p>通过使用 .col-md-push-* 和 .col-md-pull-* 类就可以很容易的改变列（column）的顺序。 .hidden-xs超小屏隐藏.hidden-sm小屏隐藏.hidden-md中屏隐藏.hidden-lg大屏隐藏</p>`,71)]))}const m=a(n,[["render",e]]);export{u as __pageData,m as default};