import{_ as e,c as p,a0 as a,o as n}from"./chunks/framework.CoVXEd1Z.js";const m=JSON.parse('{"title":"webpack学习","description":"","frontmatter":{},"headers":[],"relativePath":"build/webpack-study.md","filePath":"build/webpack-study.md"}'),c={name:"build/webpack-study.md"};function o(d,t,r,s,i,l){return n(),p("div",null,t[0]||(t[0]=[a(`<h1 id="webpack学习" tabindex="-1">webpack学习 <a class="header-anchor" href="#webpack学习" aria-label="Permalink to &quot;webpack学习&quot;">​</a></h1><p>一、安装</p><p>​ <code>npm install webpack webpack-cli -D</code></p><p>二、配置文件</p><p>​ 在根目录创建webpack.config.js文件</p><p>​ \`</p><p>​ const path = require(&#39;path&#39;)</p><p>​ module.exports = {</p><pre><code>					 mode: &#39;development&#39;, *// 指定构建模式*

					 entry: path.join(__dirname,&#39;./src/main.js&#39;), *//入口文件*

					 output: {

							 path: path.join(__dirname,&#39;./dist&#39;), *//出口文件*

							  filename: &#39;bandle.js&#39;

						 }
</code></pre><p>​ }</p><p>​ \`</p><p>三、模块配置</p><p>​ 1.热加载</p><p>​ <code>npm install webpack-dev-server -D</code></p><p>​ 在package.json里面配置:</p><p>​ <code>start: webpack-dev-server</code></p>`,16)]))}const k=e(c,[["render",o]]);export{m as __pageData,k as default};
