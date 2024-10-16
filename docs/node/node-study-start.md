##  Node的使用
###  前言
*  简单的说 Node.js 就是运行在服务端的 JavaScript， 是一个基于Chrome JavaScript 运行时建立的一个平台
### 创建web服务器：
* 引入http系统模块创建服务
```js
  // 引用http系统模块
 const http = require('http');
  // 创建web服务器
 const app = http.createServer();

  // 监听3000端口
 app.listen(3000);
 console.log('服务器已启动，监听3000端口，请访问 localhost:3000')
```

###  监听客户端的请求

```js
 app.on('request', (req, res) => {
     req.headers  // 获取请求报文
     req.url      // 获取请求地址
     req.method   // 获取请求方法
	console.log(res)
	
 });
```



###  get请求
* 引入url系统模块解析请求路径,解析结果是一个包含请求host、pathname、search、query等信息的对象
```js
		
		const url = require('url')
		
		app.on('request', (req,res) => {
		    const method = req.method
		    const {pathname, query} = url.parse(req.url, true)
		    console.log(pathname);//  /index
		    console.log(query); // {name: lei}

		})
		
```
###  post请求
* 引入querystring系统模块把body里面的字符串参数解析成包含键值对的对象
######  html页面发送的post请求,请求类型为表单类型

```js
 function getParams() {
            window.fetch('http://localhost:3000/getnum',{
                    method: 'POST',
                    body: 'username=lisi&age=12',
                    headers: {
                        "content-type": 'x-www-form-urlencoded'
                    }
            }).then(res => {
                console.log(res);
            })
        }
```


```js
 // 导入系统模块querystring 用于将HTTP参数转换为对象格式
 const querystring = require('querystring');
 app.on('request', (req, res) => {
     let postData = '';
     // 监听参数传输事件
     // chunk参数默认是buffer类型二进制数据，+ 上字符串相当于调用了toString方法，参数多的情况下要需要传输多次
     req.on('data', (chunk) => postData += chunk;);
     // 监听参数传输完毕事件
     req.on('end', () => { 
         console.log(querystring.parse(postData)); 
     }); 
 });
```
######  html发送post请求，请求参数类型是json对象

```js
   function getParams() {
            window.fetch('http://localhost:3000/getnum',{
                    method: 'POST',
                    body: JSON.stringify({username: 'lisi',age: 12}),
                    headers: {

                        "content-type": 'application/json'
                    }
            }).then(res => {
                console.log(res);
            })
        }
```
* app.js服务端代码

```js
  if(req.method == 'POST') {
        var parsedata = ''
        req.on('data',(data)=> {
            parsedata += data
        })
        req.on('end',()=> {
            console.log(parsedata);
            // {"username":"lisi","age":12} 字符串类型
            console.log(JSON.parse(parsedata));
            // { username: 'lisi', age: 12 } 对象
        })
  
    }
```

###  设置响应报文
* 可以在页面中显示汉字
```js
   // 设置响应报文
     res.writeHead(200, {'Content-Type': 'text/html;charset=utf8‘
     });
```
###  路由

```js

app.on('request', (req, res) => {
	// 获取请求方式
	const method = req.method.toLowerCase();
	// 获取请求地址
	const pathname = url.parse(req.url).pathname;

	res.writeHead(200, {
		'content-type': 'text/html;charset=utf8'
	});

	if (method == 'get') {

		if (pathname == '/' || pathname == '/index') {
			res.end('欢迎来到首页')
		}else if (pathname == '/list') {
			res.end('欢迎来到列表页')
		}else {
			res.end('您访问的页面不存在')
		}

	}else if (method == 'post') {

	}

});

```

### 访问静态资源

```js

const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

app.on('request', (req, res) => {
	// 获取用户的请求路径
	let pathname = url.parse(req.url).pathname;

	pathname = pathname == '/' ? '/default.html' : pathname;

	// 将用户的请求路径转换为实际的服务器硬盘路径
	let realPath = path.join(__dirname, 'public' + pathname);

	let type = mime.getType(realPath)

	// 读取文件
	fs.readFile(realPath, (error, result) => {
		// 如果文件读取失败
		if (error != null) {
			res.writeHead(404, {
				'content-type': 'text/html;charset=utf8'
			})
			res.end('文件读取失败');
			return;
		}

		res.writeHead(200, {
			'content-type': type
		})

		res.end(result);
	});
});

```


###  同步和异步API
* 异步读取
```js

 // 读取文件
 fs.readFile('./demo.txt', 'utf8', (err, result) => {
     console.log(result);
 });
```

* 同步读取
```js
let resCity = fs.readFileSync(`${__dirname}/city.json`,'utf-8')
console.log(JSON.parse(resCity));

// 读取图片
let baseData = fs.readFileSync(`${__dirname}/images/swiper1.jpg`).toString('base64')
// 存储成二进制数据
const myjpg = Buffer(baseData,'base64')
fs.writeFileSync(`${__dirname}/1.jpg`,myjpg)
```


 


###  模块
* 系统模块
  1. fs文件读取模块

```js
文件读取fs.readFile(文件名称，文件编码，callback）
文件写入fs.writeFile(文件名称，写入内容，callback）

			const fs = require('fs');
			fs.writeFile('./demo.txt', '写入的内容',err => {
				if (err != null) {
					console.log(err);
					return;
				}
				console.log('写入成功');
		})


	// 文件读取
		const fs = require('fs');
		fs.readFile('./helloworld.js', 'utf8', (err, doc) => {
			console.log(doc);
			console.log(err);
		})
```

2. path路径模块

```js
path.join(__dirname,'路径'）
——dirname获取当前文件的绝对路径

const path = require('path');
const  a = path.join('public','require','arrtor');
console.log(a); // public\require\arrtor
```
3. querystring参数解析模块
可以把字符串拼接的url解析成键值对
4. url模块
url.parse(req.url,true)可以把请求路径解析成对象
* 第三方模块
5. nodemon 热更新服务器

```js
npm install nodemon --save-dev

nodemon app.js
```

###  demo

```js
const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring')

const app = http.createServer()

app.on('request',(req,res) => {
  console.log(req.method);
    let {query,pathname} = url.parse(req.url,true)
    console.log(pathname);
    res.writeHead(200,{"content-type": 'text/html;charset=utf8'})
    if(req.method == 'GET') {
      if(pathname == '/1.json') {
        let filepath = path.join(__dirname,'public','1.json')
        fs.readFile(filepath,'utf8',(error,result) => {
          if(error != null) {
            res.writeHead(404,{"content-type": 'text/html;charset=utf8'})
            res.end('page is not found')
          }else {
            res.writeHead(200,{"content-type": 'application/json'})
            res.end(result)
          }

        })
      }else if(pathname == '/1.html') {
        let filepath = path.join(__dirname,'public','1.html')
        fs.readFile(filepath,'utf8',(error,result) => {
          res.writeHead(200,{"content-type": 'text/html;charset=utf8'})
          if(error != null) {
            res.end('page is not found')
          }else {
            res.end(result)
          }

        })
      }
      // res.end('get请求参数-----' + JSON.stringify(query) + '---路径--' + pathname)
    }else if(req.method == 'POST') {
      console.log(pathname);
       if(pathname == '/post') {
        let postdata = ''
        req.on('data',(chunk) => {
          console.log(chunk.toString());
            postdata += chunk
        })
        req.on('end',() => {
          console.log(querystring.parse(postdata));
        })
       }
    }
})

app.listen(3000,() => {
  console.log("server in localhost: 3000,服务器启动成功！");
})
```











