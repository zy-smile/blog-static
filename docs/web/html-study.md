
#### HTML
-  Web标准三层组成：结构html,表现css，行为javascript
- 为什么要遵循Web标准：浏览器不同内核不同，显示页面或排版有差异，通过Web展示统一内容
###### html元素标签
- 元素标签分类：
  1. 常规元素（双标签）
  2. 空元素（单标签）

- 标签关系：
    1. 嵌套关系
    2. 并列关系
   
```css
<head>
	<title></title>
</head>
<body></body>
```
######  文档类型

```css
<!DOCTYPE  html>
/*位于文档最前面位置，告知浏览器文档使用哪种html或xhtml规范*/
</html>
```
######  字符集

```css
<meta  charset="UTF-8" />
```
#######  常用标签
- 排版标签
   1. 标题标签h
   2. 段落标签p
   3. 水平线标签hr
   4. 换行标签br
   5. div和span标签 div一行放一个span一行放多个
- 文本格式化标签
- 图像标签img
  1. src为标签必须属性（URL）路径
  2. alt图片不能显示时替换文本
  3. title鼠标悬停时图片显示内容
  4. width图片宽度
  5. height图片高度
  6. border设置边框
-   链接标签a
```css
<a href="" target="">文本<a>
/*href为必须属性target为页面打开方式_blank*/
```
- 注释标签

```css
<!--语句--> 快捷ctrl+/
```

######特殊字符

```css
/*空格*/
    &nbsp; 
/*小于号*/
    &lt;
/*大于号*/
    &gt;
```
###### 表格标签(table)

- 一个完整的表格有表格标签（table），行标签（tr），单元格标签（td）组成，没有列的标签

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200208165501122.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70)
- 表头单元格标签
  - 一般表头单元格位于表格的第一行或第一列，并且文本加粗居中

- 表格标题标签
   - caption 元素定义表格标题，通常这个标题会被居中且显示于表格之上。
   - caption 标签必须紧随 table 标签之后。
- 合并单元格
  - 跨行合并：rowspan="合并单元格的个数"
  - 跨列合并：colspan="合并单元格的个数"

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200208170119435.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70)
######  列表标签

- 列表标签分为无序列表ul有序列表ol和自定义列表dl
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200208170810578.png)
######  表单标签（input）
- 作用：搜集用户信息
- 表单分为表单控件（表单元素）、提示信息、表单域

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200208171745453.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70)
- label标签(理解)``

```css
1. 第一种用法就是用label直接包括input表单。

<label> 用户名： <input type="radio" name="usename" value="请输入用户名">   </label>
```
- 第二种用法 for 属性规定 label 与哪个表单元素绑定。

```html
<label for="sex">男</label>
<input type="radio" name="sex"  id="sex">
```
- textarea控件(文本域）作用:通过textarea控件可以轻松地创建多行文本输入框
######  文本框和文本域区别

| 表单              |  名称  |       区别       |                  默认值显示 |             用于场景 |
| :---------------- | :----: | :--------------: | --------------------------: | -------------------: |
| input type="text" | 文本框 | 只能显示一行文本 | 单标签，通过value显示默认值 | 用户名、昵称、密码等 |
| textarea          | 文本域 | 可以显示多行文本 |  双标签，默认值写到标签中间 |               留言板 |

- 下拉选择框
```html
<select>
  <option>选项1</option>
  <option>选项2</option>
  <option>选项3</option>
  ...
</select>
```
- select中至少包含一对 option
- 在option 中定义selected =" selected "时，当前项即为默认选中项
#######  form表单域
- 作用：实现用户信息的搜集和传递

```css
form action="url地址" method="提交方式" name="表单名称">
  各种表单控件
</form>
```

| 属性   | 属性值   | 作用                                               |
| ------ | :------- | -------------------------------------------------- |
| action | url地址  | 用于指定接收并处理表单数据的服务器程序的url地址。  |
| method | get/post | 用于设置表单数据的提交方式，其取值为get或post。    |
| name   | 名称     | 用于指定表单的名称，以区分同一个页面中的多个表单。 |


######  iframe内联框架

```html
  <iframe src="http://www.baidu.com" frameborder="0" width="1200px" height="500px"></iframe>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201016162011331.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hfZWxfbG8=,size_16,color_FFFFFF,t_70#pic_center)











 

