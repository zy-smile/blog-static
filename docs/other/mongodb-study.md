
####  数据库下载

> 下载地址：https://www.mongodb.com/download-center/community

####  开启数据库

> 在命令行工具中运行net start mongodb即可启动MongoDB，否则MongoDB将无法连接

####  连接数据库

```js
const mongoose = require('mongoose');
// 数据库连接 27017是mongodb数据库的默认端口
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
	.then(() => console.log('数据库连接成功'))
	.catch(() => console.log('数据库连接失败'));
```
####  创建集合

```js

//创建集合规则
const courseSchema = new mongoose.Schema({//使用new 构造函数创建实例对象
name: String,
author: String,
isPublished: Boolean
})


// 使用规则创建集合
const Course = mongoose.model('Course',courseSchema)//括号内跟集合名称，规则名称   Course是构造函数  

```

####  向集合中插入文档
#####  方法一
```js
	   //创建文档
const course = new Course({//new 实例对象
	name: 'node.js基础',
	author:'黑马讲师',
	ispublished: true
})
course.save()//调用save()方法//插入数据
```
#####  方法二

```js
	Course.create({name:'javascript123基础',author:'黑马讲师',ispublished:false},(err,doc) => {
		console.log(err)
		console.log(doc)
	})
```

####  查找文档
#####  id查找
```js
 Course.find({_id :'5e9e7424e6395a04a028c5e6'}).then(result => console.log(result))//返回数组
```
#####  查找一个

```js
	Course.findOne().then()//返回一个
```

####  删除文档
#####  删除一个
```js
		Course.findOneAndDelete().then(result => 			console.log(result))
```
#####  删除多个

```js
	Course.deleteMany({}).then(result => console.log(result))
```

####  修改文档

#####  修改一个

```js
	Course.updateOne({name: 'node.js基础'},{name: 'java基础'}).then(result => console.log(result))
```

#####  修改多个

```js
	Course.updateMany({},{author: 'pink老师'}).then(result => console.log(result))
```

