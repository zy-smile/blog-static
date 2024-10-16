import{_ as i,c as t,a0 as a,o as l}from"./chunks/framework.CoVXEd1Z.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/html-study.md","filePath":"web/html-study.md"}'),h={name:"web/html-study.md"};function n(e,s,p,k,d,r){return l(),t("div",null,s[0]||(s[0]=[a(`<h4 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h4><ul><li>Web标准三层组成：结构html,表现css，行为javascript</li><li>为什么要遵循Web标准：浏览器不同内核不同，显示页面或排版有差异，通过Web展示统一内容</li></ul><h6 id="html元素标签" tabindex="-1">html元素标签 <a class="header-anchor" href="#html元素标签" aria-label="Permalink to &quot;html元素标签&quot;">​</a></h6><ul><li><p>元素标签分类：</p><ol><li>常规元素（双标签）</li><li>空元素（单标签）</li></ol></li><li><p>标签关系：</p><ol><li>嵌套关系</li><li>并列关系</li></ol></li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h6 id="文档类型" tabindex="-1">文档类型 <a class="header-anchor" href="#文档类型" aria-label="Permalink to &quot;文档类型&quot;">​</a></h6><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!DOCTYPE  </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*位于文档最前面位置，告知浏览器文档使用哪种html或xhtml规范*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h6 id="字符集" tabindex="-1">字符集 <a class="header-anchor" href="#字符集" aria-label="Permalink to &quot;字符集&quot;">​</a></h6><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  charset=&quot;UTF-8&quot; /</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>####### 常用标签</p><ul><li>排版标签 <ol><li>标题标签h</li><li>段落标签p</li><li>水平线标签hr</li><li>换行标签br</li><li>div和span标签 div一行放一个span一行放多个</li></ol></li><li>文本格式化标签</li><li>图像标签img <ol><li>src为标签必须属性（URL）路径</li><li>alt图片不能显示时替换文本</li><li>title鼠标悬停时图片显示内容</li><li>width图片宽度</li><li>height图片高度</li><li>border设置边框</li></ol></li><li>链接标签a</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> href=&quot;&quot; target=&quot;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">文本&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*href为必须属性target为页面打开方式_blank*/</span></span></code></pre></div><ul><li>注释标签</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!--语句--</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 快捷ctrl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span></span></code></pre></div><p>######特殊字符</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*空格*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &amp;nbsp; </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*小于号*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &amp;lt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*大于号*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &amp;gt;</span></span></code></pre></div><h6 id="表格标签-table" tabindex="-1">表格标签(table) <a class="header-anchor" href="#表格标签-table" aria-label="Permalink to &quot;表格标签(table)&quot;">​</a></h6><ul><li>一个完整的表格有表格标签（table），行标签（tr），单元格标签（td）组成，没有列的标签</li></ul><p><img src="https://img-blog.csdnimg.cn/20200208165501122.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p><ul><li><p>表头单元格标签</p><ul><li>一般表头单元格位于表格的第一行或第一列，并且文本加粗居中</li></ul></li><li><p>表格标题标签</p><ul><li>caption 元素定义表格标题，通常这个标题会被居中且显示于表格之上。</li><li>caption 标签必须紧随 table 标签之后。</li></ul></li><li><p>合并单元格</p><ul><li>跨行合并：rowspan=&quot;合并单元格的个数&quot;</li><li>跨列合并：colspan=&quot;合并单元格的个数&quot;</li></ul></li></ul><p><img src="https://img-blog.csdnimg.cn/20200208170119435.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p><h6 id="列表标签" tabindex="-1">列表标签 <a class="header-anchor" href="#列表标签" aria-label="Permalink to &quot;列表标签&quot;">​</a></h6><ul><li>列表标签分为无序列表ul有序列表ol和自定义列表dl <img src="https://img-blog.csdnimg.cn/20200208170810578.png" alt="在这里插入图片描述"></li></ul><h6 id="表单标签-input" tabindex="-1">表单标签（input） <a class="header-anchor" href="#表单标签-input" aria-label="Permalink to &quot;表单标签（input）&quot;">​</a></h6><ul><li>作用：搜集用户信息</li><li>表单分为表单控件（表单元素）、提示信息、表单域</li></ul><p><img src="https://img-blog.csdnimg.cn/20200208171745453.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p><ul><li>label标签(理解)\`\`</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1. 第一种用法就是用label直接包括input表单。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用户名： &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> type=&quot;radio&quot; name=&quot;usename&quot; value=&quot;请输入用户名&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><ul><li>第二种用法 for 属性规定 label 与哪个表单元素绑定。</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;男&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sex&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>textarea控件(文本域）作用:通过textarea控件可以轻松地创建多行文本输入框</li></ul><h6 id="文本框和文本域区别" tabindex="-1">文本框和文本域区别 <a class="header-anchor" href="#文本框和文本域区别" aria-label="Permalink to &quot;文本框和文本域区别&quot;">​</a></h6><table tabindex="0"><thead><tr><th style="text-align:left;">表单</th><th style="text-align:center;">名称</th><th style="text-align:center;">区别</th><th style="text-align:right;">默认值显示</th><th style="text-align:right;">用于场景</th></tr></thead><tbody><tr><td style="text-align:left;">input type=&quot;text&quot;</td><td style="text-align:center;">文本框</td><td style="text-align:center;">只能显示一行文本</td><td style="text-align:right;">单标签，通过value显示默认值</td><td style="text-align:right;">用户名、昵称、密码等</td></tr><tr><td style="text-align:left;">textarea</td><td style="text-align:center;">文本域</td><td style="text-align:center;">可以显示多行文本</td><td style="text-align:right;">双标签，默认值写到标签中间</td><td style="text-align:right;">留言板</td></tr></tbody></table><ul><li>下拉选择框</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;选项1&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;选项2&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;选项3&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>select中至少包含一对 option</li><li>在option 中定义selected =&quot; selected &quot;时，当前项即为默认选中项 ####### form表单域</li><li>作用：实现用户信息的搜集和传递</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> action=&quot;url地址&quot; method=&quot;提交方式&quot; name=&quot;表单名称&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  各种表单控件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><table tabindex="0"><thead><tr><th>属性</th><th style="text-align:left;">属性值</th><th>作用</th></tr></thead><tbody><tr><td>action</td><td style="text-align:left;">url地址</td><td>用于指定接收并处理表单数据的服务器程序的url地址。</td></tr><tr><td>method</td><td style="text-align:left;">get/post</td><td>用于设置表单数据的提交方式，其取值为get或post。</td></tr><tr><td>name</td><td style="text-align:left;">名称</td><td>用于指定表单的名称，以区分同一个页面中的多个表单。</td></tr></tbody></table><h6 id="iframe内联框架" tabindex="-1">iframe内联框架 <a class="header-anchor" href="#iframe内联框架" aria-label="Permalink to &quot;iframe内联框架&quot;">​</a></h6><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">iframe</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.baidu.com&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> frameborder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1200px&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;500px&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">iframe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><img src="https://img-blog.csdnimg.cn/20201016162011331.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p>`,41)]))}const o=i(h,[["render",n]]);export{E as __pageData,o as default};