 ![在这里插入图片描述](https://img-blog.csdnimg.cn/d80a947d93df44349b5d9b266b685348.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70#pic_center)


 jQuery的入口函数：
   ```js
    <!-- 第一种 -->
        $(function () {   
            ...  // 此处是页面 DOM 加载完成的入口
        }) ; 
    <!-- 第二种 -->
        $(document).ready(function(){
          ...  //  此处是页面DOM加载完成的入口
        });
    ```


2. DOM对象和jQuery对象的转换：
  - DOM对象转换成jQuery对象

  ```js
      var box = document.getElementById('box')
      var jQueryObject = $(box)
  ```
  - jQuery 对象转换为 DOM 对象(两种方法)

  ```js
    var domObject1 = $('div')[0]
    var domObject2 = $('div').get(0)
  ```

 jQuery选择器

```js
    $(".nav") // 基础选择器
    $("ul li") // 子代选择器
    // 子元素过滤
    $("ul li:first")
    $("ul li:eq(2)")// eq(index)--index为索引值
    $("ol li:odd")
    $("ol li:even")
```

> 排他思想——想要多选一的效果，排他思想：当前元素设置样式，其余的兄弟元素清除样式。

  
```js
$(this).css(“color”,”red”);
$(this).siblings(). css(“color”,””);
```

> 隐式迭代——遍历内部 DOM 元素（伪数组形式存储）的过程就叫做隐式迭代。

> 链式编程

```js
$(this).css('color', 'red').sibling().css('color', ''); 
```

- css样式  
  - 参数只写属性名，则是返回属性值
  - 参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号
  - 参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开
```js
var strColor = $(this).css('color');

$(this).css(''color'', ''red'');

$(this).css({ "color":"white","font-size":"20px"});
```
- css类名方法
 - 添加类
 - 删除类
 - 切换类
```js
// 1.添加类
$("div").addClass("current");

// 2.删除类
$("div").removeClass("current");

// 3.切换类
$("div").toggleClass("current");
```
6. 属性操作
  - prop()——获取固有属性prop（），设置属性prop（“属性”，“属性值”）
  - attr()——	获取自定义属性attr（），设置自定义属性attr（“属性”，“属性值”）
  - data()
7. 文本操作

 - html()——可识别标签
 - text()——不识别标签
 - val()——获取表单输入框的值

8. 元素操作
  - each() 方法遍历元素 

    ```js
      var arr = ["red", "green", "blue"];
       $("div").each(function(i, domEle) {
              <!-- i元素索引 -->
              <!-- domEle当前元素项 -->
            })
    ```
    ```js
         $.each($("div"), function(i, ele){
                 <!-- i索引 -->
                 <!-- 当前项 -->
             });
    ```
  - 创建、添加、删除元素
 ```js
      <!-- 创建 -->
        var li = $("<li>我是后来创建的li</li>"); 
        
        <!-- 内部添加 -->
         $("ul").append(li);  //内部添加并且放到内容的最后面 
        $("ul").prepend(li); // 内部添加并且放到内容的最前面

        <!-- 外部添加 -->
        $(".test").after(div);
        $(".test").before(div);

        <!-- 删除元素 -->
        $("ul").remove() // 移除元素
        $("ul").empty() // 移除元素的子节点
   ```

9. 事件处理

>   on(): 用于事件绑定
>   off(): 事件解绑
>   trigger() / triggerHandler(): 事件触发,触发元素的默认行为


11. jQuery动画

> 显示隐藏：show() / hide() / toggle() ;
> 划入画出：slideDown() / slideUp() / slideToggle() ; 
> 淡入淡出：fadeIn() / fadeOut() / fadeToggle() / fadeTo() 

> 自定义动画：animate() ，停止动画排队——每次使用动画之前，先调用 stop() ,在调用动画

									
