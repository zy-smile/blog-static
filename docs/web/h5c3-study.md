一、
HTML5新增语义化标签
增了那些语义化标签

- `header`   ---  头部标签
- `nav`        ---  导航标签
- `article` ---   内容标签
- `section` ---   块级标签
- `aside`     ---   侧边栏标签
- `footer`   ---   尾部标签
多媒体音频标签
1. 音频audio 支持格式ogg、MP3、wav
属性 autoplay="autoplay"音频马上播放
		controls="controls"向用户显示控件，比如播放按钮
		loop="loop"重新开始播放
		src="url"播放音频的url
		  因为不同浏览器支持不同的格式，所以我们采取的方案是这个音频准备多个文件
2. 视频video
支持格式ogg、mpeg 4、WebM
属性autoplay="autoplay"视频自动播放
		controls="controls"向用户显示播放控件
		width、height、设置宽度和高度
		loop="loop"循环播放
		src="url"视频url地址
		poster="lmgurl"加载等待画面图片
		muted="muted"静音播放
	多媒体标签总结

- 音频标签与视频标签使用基本一致
- 多媒体标签在不同浏览器下情况不同，存在兼容性问题
- 谷歌浏览器把音频和视频标签的自动播放都禁止了
- 谷歌浏览器中视频添加 muted 标签可以自己播放
- 注意：重点记住使用方法以及自动播放即可，其他属性可以在使用时查找对应的手册

新增input标签
属性tyle="email"限制用户输入必须为Email类型
		type="url"限制用户输入必须为url类型
		type="date"限制用户输入必须为日期类型
					"time"时间	"month"月"week"周
		tyle="number"限制用户输入必须为数字类型
		tyle="tel"手机号码
		tyle="search"搜索框
		tyle="color"生成一个颜色选择表单
	新增表单属性required="required"表单拥有该属性内容不能为空，必填
						placeholder提示文本  表单的提示信息，存在默认值将不显示
						autofocus="autofocus"自动聚焦属性
						autocomplete="off/on"浏览器基于之前输入的值显示  默认打开on关闭off
						需要放在表单内同时加name属性
						multiple="multiple"可以多选文件提交
二、CSS
**属性选择器**
E[att] 选择具有att属性的E元素
E[att="val"]选择具有att属性且属性值等于val的E元素
E[att^="val"]匹配具有att属性且以val开头的E元素
		$=匹配具有att属性且以val结尾的E元素
		*=匹配具有且值中含有val的E元素
**结构伪类选择器**
属性E:first-child匹配父元素的第一个子元素
last最后一个
E:nth-child(n)匹配父元素的第n个子元素
E:first-of-type 指定类型E的第一个
last最后一个
E:nth-of-type(n)指定类型的第n个
nth-child 详解

- 注意：本质上就是选中第几个子元素
- n 可以是数字、关键字、公式
- n 如果是数字，就是选中第几个
- 常见的关键字有 `even` 偶数、`odd` 奇数
- 常见的公式如下(如果 n 是公式，则从 0 开始计算)
- 但是第 0 个元素或者超出了元素的个数会被忽略
- 2n偶数
- 2n+1奇数
- 5n  	 5 10 15 
- n+5  从第5个开始到最后
- -n+5 	前5个（包含第5个）

区别

- `nth-child`  选择父元素里面的第几个子元素，不管是第几个类型
- `nt-of-type`  选择指定类型的元素
伪类选择器
：：before在元素前面插入内容
：：after在元素内部后面插入内容
伪类选择器注意事项

- `before` 和 `after` 必须有 `content` 属性
- `before` 在内容前面，after 在内容后面
- `before` 和 `after` 创建的是一个元素，但是属于行内元素
- 创建出来的元素在 `Dom` 中查找不到，所以称为伪元素
- 伪元素和标签选择器一样，权重为 1
- 用于添加添加字体图标
**2D转换
移动translate:**

```css
transform: translate(x, y)
transform: translateX(n)
transfrom: translateY(n)
```
translate` 最大的优点就是不影响其他元素的位置
行内标签没有效果
**旋转totate:单位（deg）**

```css
img:hover {
  transform: rotate(360deg)
}
```
**设置旋转中心点**：

```css
transform-origin: x y;
```
注意：1. translate可以沿X，Y轴移动，中间需要用逗号隔开。
			2. translate与rotate连写时用空格隔开。

缩放scale:

```css
transform: scale(x, y)
```
注意，x 与 y 之间使用逗号进行分隔
- 同时使用多个转换，其格式为 `transform: translate() rotate() scale()`
- 顺序会影响到转换的效果(先旋转会改变坐标轴方向)
动画（anination）
动画的基本使用

- 先定义动画
- 在调用定义好的动画`

```css
@keyframes 动画名称 {
    0% {
        width: 100px;
    }
    100% {
        width: 200px
    }
}
```

```css
div {
	/* 调用动画 */
    animation-name: 动画名称;
 	/* 持续时间 */
 	animation-duration: 持续时间；
}
```
常见属性：
@keyframes 规定动画
animation 动画的简写属性
animation-name 规定动画名称
animation-duration 花费一个周期需要的时间
animation-timing-function 速度曲线  默认ease
	（linear匀速）（steps步长）
animation-dely 规定动画何时开始
animation-iteration-count 动画播放次数  infinite无限
animation-direction 规定是否逆向播放  alternate逆播放
animation-play-state 是否暂停默认running  暂停paused
animation-fill-mode 结束后状态  保持forwards 回到起始backwards


![在这里插入图片描述](https://img-blog.csdnimg.cn/20201017085616529.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70#pic_center)

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020101708563239.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70#pic_center)

简写
```css
/* animation: 动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 起始与结束状态 */
animation: name duration timing-function delay iteration-count direction fill-mode
```
3D转换
3D` 的特点

- 近大远小
- 物体和面遮挡不可见
三维坐标系

- x 轴：水平向右  -- **注意：x 轴右边是正值，左边是负值**
- y 轴：垂直向下  -- **注意：y 轴下面是正值，上面是负值**
- z 轴：垂直屏幕  --  **注意：往外边的是正值，往里面的是负值**
3D` 转换知识要点

- `3D` 位移：`translate3d(x, y, z)`
- `3D` 旋转：`rotate3d(x, y, z)`
- 透视：`perspctive` 后跟像素
- `3D`呈现 `transfrom-style`
- 3D` 移动就是在 `2D` 移动的基础上多加了一个可以移动的方向，就是 z 轴方向
- `transform: translateX(100px)`：仅仅是在 x 轴上移动
- `transform: translateY(100px)`：仅仅是在 y 轴上移动
- `transform: translateZ(100px)`：仅仅是在 z 轴上移动
- `transform: translate3d(x, y, z)`：其中x、y、z 分别指要移动的轴的方向的距离
- **注意：x, y, z 对应的值不能省略，不需要填写用 0 进行填充**


**透视perspective**
* 透视需要写在被视察元素的父盒子上面

- 透视也称为视距，所谓的视距就是人的眼睛到屏幕的距离
- 距离视觉点越近的在电脑平面成像越大，越远成像越小
- 透视的单位是像素
**- 如果想要网页产生 `3D` 效果需要透视**
 
- z 轴越大(正值)，我们看到的物体就越大


3D旋转
3D 旋转指可以让元素在三维平面内沿着 x 轴、y 轴、z 轴 或者自定义轴进行旋转
语法

- `transform: rotateX(45deg)` -- 沿着 x 轴正方向旋转 45 度
- `transform: rotateY(45deg)` -- 沿着 y 轴正方向旋转 45 度
- `transform: rotateZ(45deg)` -- 沿着 z 轴正方向旋转 45 度
- `transform: rotate3d(x, y, z, 45deg)` -- 沿着自定义轴旋转 45 deg 为角度
- 左手准则

- 左手的手拇指指向 x 轴的正方向
- 其余手指的弯曲方向就是该元素沿着 x 轴旋转的方向
- 左手准则

- 左手的拇指指向 y 轴的正方向
- 其余的手指弯曲方向就是该元素沿着 y 轴旋转的方向(正值)
rotate3d`

- `transform: rotate3d(x, y, z, deg)` -- 沿着自定义轴旋转 deg 为角度
- x, y, z 表示旋转轴的矢量，是标识你是否希望沿着该轴进行旋转，最后一个标识旋转的角度
  - `transform: rotate3d(1, 1, 0, 180deg)` -- 沿着对角线旋转 45deg
  - `transform: rotate3d(1, 0, 0, 180deg)` -- 沿着 x 轴旋转 45deg


###### 3D` 呈现 `transform-style`

1. `transform-style`
   - ☆☆☆☆☆
   - 控制子元素是否开启三维立体环境
   - `transform-style: flat`  代表子元素不开启 `3D` 立体空间，默认的
   - `transform-style: preserve-3d` 子元素开启立体空间
   - 代码写给父级，但是影响的是子盒子




