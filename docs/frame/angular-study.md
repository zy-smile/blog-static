1. 安装angular代码运行环境node、python、c++编译器`npm  i  -g windows-build-tools`
2. 安装脚手架`cnpm  i  -g  @angular/cli`
3. 生成项目：`ng  new  项目名称`
4. 使用`ng  serve`运行项目
5. 生成组件`ng  generate  component   组件名称`
6. 安装typescript编译器：`npm i -g typescript`
7. 编译：`tsc  xx.ts`
8. 

```
数组
let arr: Array[number] = [1,3,4] 只能跟数字
let arr: number[]  = [2,3,4] 
数组解构
let [num1, num2,num3] = arr

元组：
let arr: [string, number] = [10, 'jack']

对象：
let obj: {name: string, age: number} = {}
重用：声明接口
interface  p = {
name: string,
age: number
}
let obj: p = {
name: 'zd',
age: 23}
对象解构：
let {name:uname, age} = obj

函数：
function add(x:number, y:number):number {
return x+y
}
let ret:number = add(10,30)
解构：
function add([x,y]):number {
return x+y
}
let ret : number = add([[10,30])

void:表示空的，没有返回值
function fn():void {
console.log(12)
}

剩余参数：
function add(...args: number[]) {
let ret
args.forEach(item => {
ret += item
}）
return ret
}
let res = add(1,3,4,5)

数组、对象展开运算符
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr = [...arr1,...arr2]

let obj1 = {
name: 'za'
}
let obj2 = {
...obj1,
age: 23
}


类：
pulic 默认成员
private: 私有成员，无法被继承
readonly: 只读的，不允许修改。
class Person {
公共的属性
public name: string,
public readonly age: number
私有的属性，外部访问不到
private type: string = ‘人类’
getType() {
在内部可以访问
return this.type
}
 }
 new Person().getType()
```
angular的双向数据绑定：

```css
在app.modules.ts中导入import { FormsModule } from '@angular/forms';
html中使用[(ngModule)]
```
angular条件判断：`*ngIf`
angular循环渲染：` *ngFor`

```css
<li *ngFor="let item of  items;  let i = index"></li>
```
生命周期钩子函数：

```css
ngOnInit() {} //页面数据初始化时执行一次
ngDoCheck() {} //页面数据改变时触发
```

路由：
路由重定向：`redirectTo`
路由导航：`this.router.navigate()`
路由导航链接：`routerLink`
获取路由静态路径参数： `this.route.snapshot.params`

请求接口：

```
import { HttpClient } from '@angular/common/http'
private: http = HttpClient
this.http.get(url).toPromise().then()
```


