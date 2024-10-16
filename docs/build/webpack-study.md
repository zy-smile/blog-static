# 							webpack学习

一、安装

​				`npm install webpack webpack-cli -D`

二、配置文件

​		在根目录创建webpack.config.js文件

​		`

​					const path = require('path')

​					module.exports = {

 						 mode: 'development', *// 指定构建模式*

 						 entry: path.join(__dirname,'./src/main.js'), *//入口文件*

 						 output: {

   								 path: path.join(__dirname,'./dist'), *//出口文件*

  								  filename: 'bandle.js'

 							 }

​					}

​		`

三、模块配置

​		1.热加载

​				 `npm install webpack-dev-server -D`

​					在package.json里面配置:

​					`start: webpack-dev-server`

