import{_ as t,c as i,a0 as a,o as e}from"./chunks/framework.CoVXEd1Z.js";const o="/assets/image-20241003195612549.Hz5XlAYF.png",l="/assets/image-20241003195709334.DOTPtOyY.png",p="/assets/image-20241003195834440.BGVB6ZPo.png",r="/assets/image-20241003200558246.Dp7OImjf.png",m="/assets/image-20241003200639800.C2i0_cdr.png",g="/assets/image-20241003200909347.DDKVGd24.png",n="/assets/image-20241003201029307.CoaaV78w.png",c="/assets/image-20241003201917944.CeN40wp4.png",_="/assets/image-20241015150858281.DuHmaQg6.png",d="/assets/image-20241015150953521.mea-sVlt.png",f="/assets/image-20241015151110958.D-VQTC4N.png",h="/assets/image-20241015151222817.B2Xe5O8C.png",u="/assets/image-20241015151344133.DqGmM__e.png",D="/assets/image-20241015151459975.DCP1cgyN.png",$=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/server.md","filePath":"other/server.md"}'),v={name:"other/server.md"};function C(P,s,V,B,N,O){return e(),i("div",null,s[0]||(s[0]=[a('<h3 id="环境搭建" tabindex="-1">环境搭建 <a class="header-anchor" href="#环境搭建" aria-label="Permalink to &quot;环境搭建&quot;">​</a></h3><ol><li><p>在阿里云或者腾讯云购买云服务器</p><p><img src="'+o+'" alt="image-20241003195612549"></p></li><li><p>登录服务器管理后台</p></li></ol><p><img src="'+l+'" alt="image-20241003195709334"></p><ol start="3"><li>创建服务器时可以选择宝塔面板镜像服务</li></ol><p><img src="'+p+'" alt="image-20241003195834440"></p><ol start="4"><li>远程连接服务器</li></ol><p><img src="'+r+'" alt="image-20241003200558246"></p><ol start="5"><li>登录后宝塔面板安装执行命令</li></ol><p><img src="'+m+'" alt="image-20241003200639800"></p><p>阿里云服务器选第一个命令执行，执行完生成宝塔面板外网、内网入口和登录密码，这个时候在外网打开入口链接会失败</p><ol start="6"><li>服务器开启8888端口连接</li></ol><p><img src="'+g+'" alt="image-20241003200909347"></p><ol start="7"><li>登录宝塔面板</li></ol><p><img src="'+n+'" alt="image-20241003201029307"></p><p>8.网站添加项目</p><p><img src="'+c+'" alt="image-20241003201917944"></p><ol start="9"><li>使用ftp上传文件</li><li>创建node项目</li></ol><p><img src="'+_+'" alt="image-20241015150858281"></p><ol start="11"><li>配置代理</li></ol><p>​ 1. 不配置代理，前端请求接口会报404错误</p><p><img src="'+d+'" alt="image-20241015150953521"></p><ol><li>不配置代理，前端刷新页面会报404错误</li></ol><p><img src="'+f+'" alt="image-20241015151110958"></p><ol start="12"><li>配置node项目静态文件访问路径</li></ol><p><img src="'+h+'" alt="image-20241015151222817"></p><ol start="13"><li>打包前端vue项目，把静态文件放到node的document文件夹里面</li></ol><p><img src="'+u+'" alt="image-20241015151344133"></p><ol start="14"><li>在node项目设置里面配置域名或者ip, 并开启外网映射</li></ol><p><img src="'+D+'" alt="image-20241015151459975"></p><ol start="15"><li>这样就可以通过域名或者ip访问前端项目啦</li></ol>',30)]))}const k=t(v,[["render",C]]);export{$ as __pageData,k as default};
