![在这里插入图片描述](https://img-blog.csdnimg.cn/1ebf005bc9d347d0af2d222cee7aacb2.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70#pic_center)
##  目录导航
[JS循环语句](#xunhuan)<br/>
[函数](#hanshu)<br/>
[对象](#duixiang)<br/>
[内置对象](#neizhi)<br/>
[DOM](#dom)<br/>
[BOM](#bom)<br/>
[原型和原型链](#yuanxing)<br/>
[正则表达式](#zhengze)<br/>




##  正文
###  <a id=xunhuan></a>JS循环语句

- switch语句（针对特定值）。

```js
  var choice = prompt('请输入数字1-4')js
        choice = parseInt(choice);
        switch(choice) {
            case 1:
                alert("数字1");
                break;
            case 2: 
                alert('数字2');
                break;
            case 3: 
                alert('数字3')
                break;
            case 4: 
                alert('数字4')
                break;
            default: 
                alert('请输入数值1-4')
        }
```

- while循环语句

```js
  var add = prompt('请输入用户名：');
        var mima = prompt('请输入密码：');
        while (add != 'admin' || mima != '123456') {
            add = prompt('请输入用户名：');
            mima = prompt('请输入密码：');
        }
        alert('登录成功');

```
- do-while语句

    ```js
        //  do ... while语句
        var num = 0;
        do {
          console.log(num)
          document.write(num)
          num++;
        }while(num < 10)
    ```
- continue退出本次循环break退出整个循环


###  <a id=duixiang></a> 对象

####  创建对象

```js
 <!-- 字面量创建 -->
           var obj = {
                uname: '张三疯',
                age: 18,
                sex: '男',
                sayHi: function() {
                    console.log('hi~');
                }
            }
    <!-- new Object 创建对象 -->
        var obj = new Object(); // 创建了一个空的对象
          obj.uname = '张三疯';
          obj.age = 18;
          obj.sex = '男';
          obj.sayHi = function() {
              console.log('hi~');
    
          }
      <!-- 构造函数创建 -->
         function Star(uname, age, sex) {
            this.name = uname;
            this.age = age;
            this.sex = sex;
            this.sing = function(sang) {
                console.log(sang);
              }
          }
          var ldh = new Star('刘德华', 18, '男');
```

####  遍历对象

```js
for (var k in obj) {
            console.log(k); // k 变量 输出  得到的是 属性名
            console.log(obj[k]); // obj[k] 得到是 属性值
        }
```



### <a id=hanshu />函数
####  参数
```js
    function getMax() { // arguments = [1,2,3]
        var max = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    }
```
#### 函数的声明

```js
  <!-- 命名函数 -->
          function fn() {...}
          // 调用  
          fn(); 
    
          <!-- 匿名函数 -->
          var fn = function(){...}；
          // 调用的方式，函数调用必须写到函数体下面
          fn();
        
    	  //利用 new Function('参数1','参数2', '函数体');
    		  var f = new Function('a', 'b', 'console.log(a + b)');
            f(1, 2);
            // 4. 所有函数都是 Function 的实例(对象)
            console.dir(f);
            // 5. 函数也属于对象
            console.log(f instanceof Object);
```

####  函数预解析

```js
  var num = 1;
        function demo() {
          console.log(num);
          function demoSon() {
              num = 3;
          }
          var num = 2
          demoSon();
        }
        demo();
    
        //  函数预解析
        var num;
        function demo() {
            var num;
            function demoSon() {
                 num = 3;
             }
             console.log(num);
            num = 2;
             demoSon();
         }
         num = 1;
         demo();
```




### <a id=neizhi />内置对象
* Math对象

| 属性、方法名          | 功能                                         |
| --------------------- | -------------------------------------------- |
| Math.PI               | 圆周率                                       |
| Math.floor()          | 向下取整                                     |
| Math.ceil()           | 向上取整                                     |
| Math.round()          | 四舍五入版 就近取整   注意 -3.5   结果是  -3 |
| Math.abs()            | 绝对值                                       |
| Math.max()/Math.min() | 求最大和最小值                               |
| Math.random()         | 获取范围在[0,1)内的随机值                    |
- 获取指定范围内的随机整数:

    ```js
        function getRandom(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min; 
        }
    ```
###  <a id=dom />DOM
####  元素操作

```js
  <!-- 获取html -->
          document.documentElement
          <!-- 获取body -->
          document.body
          <!-- 获取id元素 -->
          document.getElementById("box")
          <!-- 标签名获取 -->
          document.getElementsByTagName("div")
          <!-- 类名获取 -->
          document.getElementsByClassName(".box")
          <!-- h5新增 -->
          document.querySelector('.box')
          <!-- 获取所有元素集合 -->
          document.querySelectorAll("div")
```



####  属性操作

```js
<!-- 获取属性 -->
        element.getAttribute()
        <!-- 设置属性 -->
        element.setAttribute()
        <!-- 移除属性 -->
        element.removeAttribute()
```
####  文本操作

  

> - innerText 不识别盒子内html标签 非标准  去除空格和换行
 > - innerHTML 识别html标签 W3C标准 保留空格和换行的

####  节点操作
>    - 网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM 中，节点使用 node 来表示
> * 元素节点node type为1；属性节点node type为2；文本节点node type为3（包括文字、空格、换行）
> * 父级节点node.parentNode
> * 所有子节点parentNode.childNodes   
> * 子元素节点parentNode.children(非标准，重点掌握）


```js
       <!-- 创建节点 -->
          createdElement(tagName)
          createTextNode()		// 创建文本节点
          <!-- 添加节点 -->
          appendChild(nodde) // 向元素末尾添加子节点

          insertBefore()     // 在元素内部之前插入节点，第一个参数是新节点，第二个是插入到哪个子节点前面
          ul.insertBefore(lili, ul.children[0]);

          <!-- 替换节点 -->
          replaceChild()	
          <!-- 删除节点 -->
          removeChild()
          <!-- 克隆节点 -->
          cloneNode()		// 加true深度克隆

          // 下一个兄弟节点
          div.nextSibling
          // 前一个兄弟节点
          div.previousSibling
          // 兄弟元素节点
          div.nextElementSibling
```

####  类名操作

  ```js
      <!-- classList -->
      element.classList.add('current')
  ```




```js
// 移除类名
focus.classList.remove('current');
```

```js
// 切换类
focus.classList.toggle('current');
```
####  DOM事件流

1.  DOM 事件流会经历3个阶段： 捕获阶段、当前目标阶段、冒泡阶段 。
2. 事件对象属性和方法：

```js
				e.target返回触发事件对象 
				e.type返回事件类型 
				e.preventDefault()该方法阻止默认事件默认行为
				e.stopPropagation()阻止冒泡标准。
```

3. target 和 this 的区别

- this 是事件绑定的元素（绑定这个事件处理函数的元素） 。
- e.target 是事件触发的元素。

4.移除事件：

```
box.removeEventListener('click', myFun)
```
####  键盘事件
* onkeyup某个键盘松开时触发
* onkeydown某个键盘被按下时触发
* onkeypress某个键盘被按下时触发，不识别功能键，区分大小写。
* 三个的执行顺序down>press>up




###  <a id=bom />BOM
1. BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window。
2. DOM和BOM的区别：
* DOM是文档对象模型，顶级对象是document，主要学习的是操作页面元素。是W3c标准规范。
* BOM是浏览器对象模型，，顶级对象是window。bom学习浏览器窗口交互一些对象。
* BOM 比 DOM 更大，它包含 DOM。
####  window对象：

- window.innerWidth和window.innerHeight是浏览器窗口文档显示区的宽度和高度，不包含边框和滚动条
- window.outerWidth和window.outerHeight是浏览器的高度和宽度，包含工具条和滚动条
- document.body.clientWidth或者是document.documentElement.clientWidth是文档可视区的高度和宽度

```css
 //一、 入口函数
        window.onload = function() {

        }
        window.addEventListener('load', function() {
            
        })
```


```css
// 二 、调整窗口大小触发事件
		window.onresize = function(e) {
		                console.log(123);
		            }
	    window.addEventListener('resize', function() {
	            console.log(456);
	        })
```

```css
// 三、定时器
 			// 循环打印123
              let timer = setInterval(() => {
                console.log(123);
            }, 1000);
            //  清除定时器
            clearInterval(timer) 
            // 只打印一次
            setTimeout(() => {
                console.log(456);
            }, 1000)
```

#### location对象：


![在这里插入图片描述](https://img-blog.csdnimg.cn/20200314183619371.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200314183828979.png)
####  navigator对象

```
console.log(window.navigator)
```

#### history对象

```css
btn.onclick = function() {
                //点击后退
                window.history.go(-1)
            }
```

####  边偏移
* 元素偏移量offSet系列
* 获得元素距离带有定位父元素的位置
*  获得元素自身的大小（宽度高度）
*  注意：返回的数值都不带单位
* offset系列 经常用于获得元素位置    offsetLeft  offsetTop

* client经常用于获取元素大小  clientWidth clientHeight

* scroll 经常用于获取滚动距离 scrollTop  scrollLeft  

* 注意页面滚动的距离通过 window.pageXOffset  获得

- offsetWidth,offsetHeight水平方向的宽度和垂直高度，包含边框内边距和元素的实际宽度。
```js
		// 在body有设置zoom缩放属性时
		document.body.offsetWidth
		// 1579
		document.documentElement.offsetWidth
		// 1263
```



- offsetLeft,offsetTop，没有父元素没有定位时盒子的距离浏览器窗口内侧顶部和左侧的距离，父元素有定位时是盒子到父元素内侧边框的偏移距离
```js
		document.body.offsetLeft
		// 0
		document.body.offseTop
		// 0
		document.documentElement.offsetTop
		// 0
		document.documentElement.offsetLeft
		// 0
```

- clientWidth,clientHeight是水平方向的宽度和垂直高度，包含内边距和元素实际高度，不包含边框和滚动条。
```js
		// body有设置zoom缩放属性时
		document.body.clientWidth
		// 1263
		document.documentElement.clientWidth
		// 1263
```

- clientLeft,clientTop是盒子左侧和顶部边框的宽度
```js
		document.body.clientTop
		// 0
		document.body.clientLeft
		// 0
		document.documentElement.clientTop
		// 0
		document.documentElement.clientLeft
		// 0
```

- scrollWidth,scrollHeight是文档的真实高度，包含滚动的内容高度。

- scrollLeft，scrollTop是盒子卷曲的头部和左侧的距离，是可以写入的属性



####  本地存储

- 数据存储在用户浏览器中

- 设置、读取方便、甚至页面刷新不丢失数据

- 容量较大，sessionStorage约5M、localStorage约20M

- 只能存储字符串，可以将对象JSON.stringify() 编码后存储

* window.sessionStorage:
   	1. 生命周期为关闭浏览器窗口
   	2. 在同一个窗口(页面)下数据可以共享
   	3. 以键值对的形式存储使用

* window.localStorage:
  		1. 声明周期永久生效，除非手动删除 否则关闭页面也会存在
    		2. 可以多窗口（页面）共享（同一浏览器可以共享）
    		3. 以键值对的形式存储使用

- 存储数据`sessionStorage.setItem(key, value)`
 - 获取数据`sessionStorage.getItem(key)`
 - 删除数据`sessionStorage.removeItem(key)`
 - 清除数据`sessionStorage.clear()`




###  <a id=yuanxing ></a>原型和原型链
- 面向对象是把事务分解成为一个个对象，然后由对象之间分工与合作
- 可以使用 class 关键字声明一个类，之后以这个类来实例化对象。类抽象了对象的公共部分，它泛指某一大类（class）对象特指某一个，通过类实例化一个具体的对象
- 利用super 调用父类的构造函数super 必须在子类this之前调用。

- 构造函数:每一个构造函数都有一个prototype 属性，指向另一个对象。注意这个prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有

- 我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法。

- 对象原型：对象都会有一个属性 __proto__ 指向构造函数的 prototype 原型对象，之所以我们对象可以使用构造函数 prototype 原型对象的属性和方法，就是因为对象有 __proto__ 原型的存在。
  - proto__对象原型和原型对象 prototype 是等价的__
  - __proto__对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条路线，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象 prototype。

- constructor构造函数：对象原型（ __proto__）和构造函数（prototype）原型对象里面都有一个属性 constructor 属性 ，constructor 我们称为构造函数，因为它指回构造函数本身。

- 原型链：每一个实例对象又有一个__proto__属性，指向的构造函数的原型对象，构造函数的原型对象也是一个对象，也有__proto__属性，这样一层一层往上找就形成了原型链
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200325142613135.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70)
  - 构造函数的prototype属性指向了构造函数原型对象
    2.实例对象是由构造函数创建的,实例对象的__proto__属性指向了构造函数的原型对象
    3.构造函数的原型对象的constructor属性指向了构造函数,实例对象的原型的constructor属性也指向了构造函数 
     只要是对象就有__proto__ 原型, 指向原型对象，

- 我们Star原型对象里面的__proto__原型指向的是 Object.prototype

- 我们Object.prototype原型对象里面的__proto__原型  指向为 null。
- 在构造函数中,里面this指向的是对象实例 ，原型对象函数里面的this 指向的是 实例对象。


```js
var obj = {
            id: 1,
            pname: '小米',
            price: 1999
        };
         Object.defineProperty(obj, 'address', {
            value: '中国山东蓝翔技校xx单元',
            // 如果只为false 不允许修改这个属性值 默认值也是false
            writable: false,
            // enumerable 如果值为false 则不允许遍历, 默认的值是 false
            enumerable: false,
            // configurable 如果为false 则不允许删除这个属性
             不允许在修改第三个参数里面的特性 默认为false
            configurable: false
        });
```

```js
 // Object.keys用于获取对象自身所有的属性
        var obj = {
            id: 1,
            pname: '小米',
            price: 1999,
            num: 2000
        };
        var arr = Object.keys(obj);
        console.log(arr);//id  pname  price  num 
```



- 严格模式：严格模式可以应用到整个脚本或个别函数中。因此在使用时，我们可以将严格模式分为为脚本开启严格模式和为函数开启严格模式两种情况。







###  <a id="zhengze" />正则表达式

- 创建正则表达式

```js
	
		// 1.字面量创建
		var reg1 = /^[123]$/
        
        // 对象创建
        var reg2 = new RegExp('^[123]$')
        
        // i的使用 i不区分大小写
		var reg3 = /^[wer]/i
        
        // ^的使用查找不包含[]内的数字
		var reg4 = /^[^123]/
        
        // \d 查找数字
		var reg5 = /^\d$/
		
        //  \D 查找所有字母
		var reg6 = /^\D/
        
        var rg = /[abc]/; // 只要包含有a 或者 包含有b 或者包含有c 都返回为true

        var rg1 = /^[abc]$/; // 三选一 只有是a 或者是 b  或者是c 这三个字母才返回 true

        var rg1 = /^[abc]$/; // 三选一 只有是a 或者是 b  或者是c 这三个字母才返回 true

         var reg1 = /^[a-zA-Z0-9_-]$/; // 26个英文字母(大写和小写都可以)任何一个字母返回 true  
 
    // 如果中括号里面有^ 表示取反的意思 千万和 我们边界符 ^ 别混淆
```



* 大括号  量词符.  里面表示重复次数
 * 中括号 字符集合。匹配方括号中的任意字符. 
* 小括号表示优先级

- 量词符: 用来设定某个模式出现的次数。* 相当于 >= 0 可以出现0次或者很多次 。+ 相当于 >= 1 可以出现1次或者很多次。 ?  相当于 1 || 0。{3 } 就是重复3次。{3, }  大于等于3。{3, 16}  大于等于3 并且 小于等于16。

```js
		//{} 匹配3-6次
		let newReg =/^[2]{3,6}$/
        
        //* 大于0次
		let newReg =/^[2]*$/
        
        //  + 大于等于一次
		let newReg =/^[2]+$/
        
        //  ? 匹配1或0次
		let newReg =/^[2]?$/
```



- replace() 方法可以实现替换字符串操作，用来替换的参数可以是一个字符串或是一个正则表达式。//全部替换g  ，  //忽略大小写i

```js
var str = 'aAbcAba';
var newStr = str.replace(/a/gi,'哈哈')//"哈哈哈哈bc哈哈b哈哈"
```




  
