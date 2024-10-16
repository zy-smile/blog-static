import{_ as n,c as a,a0 as p,o as e}from"./chunks/framework.CoVXEd1Z.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frame/angular-study.md","filePath":"frame/angular-study.md"}'),l={name:"frame/angular-study.md"};function i(t,s,c,r,o,d){return e(),a("div",null,s[0]||(s[0]=[p(`<ol><li>安装angular代码运行环境node、python、c++编译器<code>npm i -g windows-build-tools</code></li><li>安装脚手架<code>cnpm i -g @angular/cli</code></li><li>生成项目：<code>ng new 项目名称</code></li><li>使用<code>ng serve</code>运行项目</li><li>生成组件<code>ng generate component 组件名称</code></li><li>安装typescript编译器：<code>npm i -g typescript</code></li><li>编译：<code>tsc xx.ts</code></li><li></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>数组</span></span>
<span class="line"><span>let arr: Array[number] = [1,3,4] 只能跟数字</span></span>
<span class="line"><span>let arr: number[]  = [2,3,4] </span></span>
<span class="line"><span>数组解构</span></span>
<span class="line"><span>let [num1, num2,num3] = arr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>元组：</span></span>
<span class="line"><span>let arr: [string, number] = [10, &#39;jack&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对象：</span></span>
<span class="line"><span>let obj: {name: string, age: number} = {}</span></span>
<span class="line"><span>重用：声明接口</span></span>
<span class="line"><span>interface  p = {</span></span>
<span class="line"><span>name: string,</span></span>
<span class="line"><span>age: number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let obj: p = {</span></span>
<span class="line"><span>name: &#39;zd&#39;,</span></span>
<span class="line"><span>age: 23}</span></span>
<span class="line"><span>对象解构：</span></span>
<span class="line"><span>let {name:uname, age} = obj</span></span>
<span class="line"><span></span></span>
<span class="line"><span>函数：</span></span>
<span class="line"><span>function add(x:number, y:number):number {</span></span>
<span class="line"><span>return x+y</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let ret:number = add(10,30)</span></span>
<span class="line"><span>解构：</span></span>
<span class="line"><span>function add([x,y]):number {</span></span>
<span class="line"><span>return x+y</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let ret : number = add([[10,30])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void:表示空的，没有返回值</span></span>
<span class="line"><span>function fn():void {</span></span>
<span class="line"><span>console.log(12)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>剩余参数：</span></span>
<span class="line"><span>function add(...args: number[]) {</span></span>
<span class="line"><span>let ret</span></span>
<span class="line"><span>args.forEach(item =&gt; {</span></span>
<span class="line"><span>ret += item</span></span>
<span class="line"><span>}）</span></span>
<span class="line"><span>return ret</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let res = add(1,3,4,5)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数组、对象展开运算符</span></span>
<span class="line"><span>let arr1 = [1,2,3]</span></span>
<span class="line"><span>let arr2 = [4,5,6]</span></span>
<span class="line"><span>let arr = [...arr1,...arr2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let obj1 = {</span></span>
<span class="line"><span>name: &#39;za&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let obj2 = {</span></span>
<span class="line"><span>...obj1,</span></span>
<span class="line"><span>age: 23</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>类：</span></span>
<span class="line"><span>pulic 默认成员</span></span>
<span class="line"><span>private: 私有成员，无法被继承</span></span>
<span class="line"><span>readonly: 只读的，不允许修改。</span></span>
<span class="line"><span>class Person {</span></span>
<span class="line"><span>公共的属性</span></span>
<span class="line"><span>public name: string,</span></span>
<span class="line"><span>public readonly age: number</span></span>
<span class="line"><span>私有的属性，外部访问不到</span></span>
<span class="line"><span>private type: string = ‘人类’</span></span>
<span class="line"><span>getType() {</span></span>
<span class="line"><span>在内部可以访问</span></span>
<span class="line"><span>return this.type</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> new Person().getType()</span></span></code></pre></div><p>angular的双向数据绑定：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">在app</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.modules.ts中导入import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FormsModule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } from &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@angular</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/forms&#39;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">html中使用[(ngModule)]</span></span></code></pre></div><p>angular条件判断：<code>*ngIf</code> angular循环渲染：<code> *ngFor</code></p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ngFor=&quot;let item of  items;  let </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = index&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>生命周期钩子函数：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ngOnInit() {} //页面数据初始化时执行一次</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ngDoCheck() {} //页面数据改变时触发</span></span></code></pre></div><p>路由： 路由重定向：<code>redirectTo</code> 路由导航：<code>this.router.navigate()</code> 路由导航链接：<code>routerLink</code> 获取路由静态路径参数： <code>this.route.snapshot.params</code></p><p>请求接口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { HttpClient } from &#39;@angular/common/http&#39;</span></span>
<span class="line"><span>private: http = HttpClient</span></span>
<span class="line"><span>this.http.get(url).toPromise().then()</span></span></code></pre></div>`,11)]))}const u=n(l,[["render",i]]);export{g as __pageData,u as default};
