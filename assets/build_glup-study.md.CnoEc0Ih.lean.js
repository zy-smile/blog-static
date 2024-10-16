import{_ as i,c as a,a0 as n,o as l}from"./chunks/framework.CoVXEd1Z.js";const r=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"build/glup-study.md","filePath":"build/glup-study.md"}'),p={name:"build/glup-study.md"};function t(h,s,k,e,c,g){return l(),a("div",null,s[0]||(s[0]=[n(`<p>gulp插件：</p><ol><li><code>gulp-htmlmin </code>压缩html</li><li><code>gulp-csso</code> 压缩css</li><li><code>gulp-less</code>less语法转换</li><li><code>gulp-file-include</code> 公共文件包含</li><li><code>gulp-babel</code> javascript语法转换es6转换为es5</li><li><code>gulp-uglify</code>压缩js</li><li><code>browsersync</code>l浏览器实时同步</li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const gulp = require(&#39;gulp&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const htmlmin = require(&#39;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gulp-htmlmin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const csso = require(&#39;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gulp-csso</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const babel = require(&#39;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gulp-babel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gulp.task(&#39;first&#39;, (cb) =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	console</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&#39;第一个</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gulp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">执行了&#39;);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	console</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&#39;第二个</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gulp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">执行了&#39;);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	cb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gulp.task(&#39;two&#39;,(cb)=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	console</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&#39;执行不了&#39;);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	cb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 打包html文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gulp.task(&#39;htmlmin&#39;,(cb) =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	gulp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&#39;./</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">src</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*.html&#39;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		.pipe(htmlmin({ collapseWhitespace: true }))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		.pipe(gulp.dest(&#39;dist&#39;));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	cb();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 打包css文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">gulp.task(&#39;cssmin&#39;,(cb) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	gulp.src(&#39;./src/css/*.css&#39;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		.pipe(csso())</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		.pipe(gulp.dest(&#39;dist/css&#39;));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		cb();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 打包js文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">gulp.task(&#39;jsmin&#39;,(cb)=&gt; {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	gulp.src(&#39;./src/js/*.js&#39;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		.pipe(babel({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            presets: [&#39;@babel/env&#39;]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        }))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		.pipe(gulp.dest(&#39;dist/js&#39;));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		cb();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 打包图片</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">gulp.task(&#39;copy&#39;,(cb)=&gt;{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	gulp.src(&#39;./src/images/*&#39;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		.pipe(gulp.dest(&#39;dist/images&#39;));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	gulp.src(&#39;./src/lib/*&#39;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		.pipe(gulp.dest(&#39;dist/lib&#39;))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		cb();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 同时执行多个任务</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">gulp.task(&#39;default&#39;,gulp.series(&#39;htmlmin&#39;,&#39;cssmin&#39;,&#39;jsmin&#39;,&#39;copy&#39;,(cb) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something after a,b, and c are finished.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    cb();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">}));</span></span></code></pre></div>`,3)]))}const E=i(p,[["render",t]]);export{r as __pageData,E as default};
