###  标签

> canvas标签用来初始出来一块画布,可以用来绘制处理图形
> getContext("2d")用来绘制2d图形

```js
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
```
##  常用的api
###  绘制矩形
* 绘制填充一个矩形

```
fillRect(x, y, width, height)
```

* 绘制一个矩形的边框

```
 strokeRect(x, y, width, height)
```

* 清除指定矩形区域，让清除部分完全透明

```
clearRect(x, y, width, height)
```

> x与y指定了在canvas画布上所绘制的矩形的左上角（相对于原点）的坐标。width和height设置矩形的尺寸。

###  绘制路径
1. 首先，你需要创建路径起始点。

> beginPath()新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径

2. 然后你使用画图命令去画出路径。

> moveTo(x,y)将笔触移动到指定的坐标x以及y上

3. 之后你把路径封闭。

> closePath()闭合路径之后图形绘制命令又重新指向到上下文中。

4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形。

> stroke()通过线条来绘制图形轮廓

> fill()通过填充路径的内容区域生成实心的图形。

###  绘制线

> lineTo(x, y)绘制一条从当前位置到指定x以及y位置的直线

> lineWidth = value设置线条宽度。

> lineCap = type设置线条末端样式。


###  绘制圆弧

> arc(x, y, radius, startAngle, endAngle, anticlockwise)

> 画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle(开始角度)开始到endAngle(结束角度)结束，按照anticlockwise(默认false)给定的方向（默认为顺时针）来生成


###  绘制图形颜色

> fillStyle = color设置图形的填充颜色

> strokeStyle = color设置图形轮廓的颜色。

> globalAlpha = '' 设置透明度

###  绘制文本

> fillText(text, x, y [, maxWidth])在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.

> strokeText(text, x, y [, maxWidth])在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的
> 

> font = value当前我们用来绘制文本的样式. 这个字符串使用和 CSS font 属性相同的语法. 默认的字体是 10px sans-serif
> 

> textAlign = value文本对齐选项. 可选的值包括：start, end, left, right or center. 默认值是 start。
>  

> direction = value文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。


### 绘制图片

> drawImage(image, x, y)其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。

###  例1.绘制笑脸

```html
<canvas id="myrect" width="400" height="400"></canvas>
```

```js
// 画笑脸
        var cvs = document.getElementById('myrect')
        if(cvs.getContext) {
            var cts = cvs.getContext("2d")
            cts.beginPath()
            cts.arc(100,100,50,0,Math.PI * 2,false)
            cts.stroke()
            cts.closePath()
            cts.beginPath()
            cts.arc(100,100,25,0,Math.PI,false)
            cts.stroke()
            cts.closePath()
            cts.beginPath()
            cts.arc(85,85,5,0,Math.PI * 2,false)
            cts.stroke()
            cts.closePath()
            cts.beginPath()
            cts.arc(115,85,5,0,Math.PI * 2,false)
            cts.stroke()
            cts.closePath()
        } 
```
###  例二
* 实现效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/c09fe1f88955412ca6ec1407949d87e5.gif#pic_center)

```js
 function setCanvas(count) {
            let cant = document.getElementById('canvasId')
            ct = cant.getContext("2d")
            // ct.fillStyle = 'gold'
            // ct.strokeStyle = 'yellow'
            for(var i = 1; i < 4;i++) {
                for(var j = 1; j < 4; j++) {
                    ct.beginPath()
                    if((i-1)*3 + j != 5) {
                        ct.arc(j * 50,i * 50,20,0,Math.PI * 2,false)
                    }
                    ct.closePath()
                    if(((i-1)*3 + j) == count) {
                        ct.fillStyle = 'red'
                    }else {
                        ct.fillStyle = 'gold'
                    }
                    ct.fill()
                }
            } 
        }
        let num = 0
        let arr = [1,2,3,6,9,8,7,4]
        setCanvas()
        setInterval(() => {
            if(num >= 8) {
                num = 0
            }
            setCanvas(arr[num])
            num++
        },500)
```

