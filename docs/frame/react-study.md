* React特点：
   1. 声明式编码
   2. 组件化编码
   3. 支持客户端和服务器端的渲染
   4. 高效
   5. 单向数据流
* 高效原因： 
    1. 操作虚拟DOM.
    2. DOM Diff算法，最小化页面重绘。
* 导入的相关库文件：

```
react.js, react-dom.js, babel.min.js
```
#####  jsx
全称: JavaScript XML

* react定义的一种类似于XML的JS扩展语法: XML+JS

* 作用: 用来创建react虚拟DOM(元素)对象

* js中直接可以套标签, 但标签要套js需要放在{}中

* 在解析显示js数组时, 会自动遍历显示

* 把数据的数组转换为标签的数组: 

  ```jsx
    var liArr = dataArr.map(function(item, index){
      return <li key={index}>{item}</li>
    })
  ```

* 注意:

  * 标签必须有结束
  * 标签的class属性必须改为className属性
  * 标签的style属性值必须为: 
  ```jsx
    <p style={{color: 'red'}}></p>
  ```
#####  组件
* * 自定义的标签: 组件类(函数)/标签

  * 创建组件类

    ```jsx
    //方式1: 无状态函数(最简洁, 推荐使用)
    function MyComponent1() {
      return <h1>自定义组件标题11111</h1>;
    }
    //方式2: ES6类语法(复杂组件, 推荐使用)
    class MyComponent3 extends React.Component {
      render () {
        return <h1>自定义组件标题33333</h1>;
      }
    }
    //方式3: ES5老语法(不推荐使用了)
    var MyComponent2 = React.createClass({
      render () {
        return <h1>自定义组件标题22222</h1>;
      }
    });
    ```

  * 渲染组件标签

    ```jsx
    ReactDOM.render(<MyComp />,  cotainerEle);
    ```

  * ReactDOM.render()渲染组件标签的基本流程

    * React内部会创建组件实例对象/调用组件函数, 得到虚拟DOM对象
    * 将虚拟DOM并解析为真实DOM
    * 插入到指定的页面元素内部

* props

  * 所有组件标签的属性的集合对象

  * 给标签指定属性, 保存外部数据(可能是一个function)

  * 在组件内部读取属性: this.props.propertyName

  * 作用: 从目标组件外部向组件内部传递数据

  * 对props中的属性值进行类型限制和必要性限制

    ```jsx
    Person.propTypes = {
      name: React.PropTypes.string.isRequired,
      age: React.PropTypes.number.isRequired
    }
    ```

  * 扩展属性: 将对象的所有属性通过props传递

    ```jsx
    <Person {...person}/>
    ```

* 组件的组合

  * 组件标签中包含子组件标签
  * 拆分组件: 拆分界面, 抽取组件
  * 通过props传递数据

* refs

  * 组件内包含ref属性的标签元素的集合对象
  * 给操作目标标签指定ref属性, 打一个标识
  * 在组件内部获得标签对象: this.refs.refName(只是得到了标签元素对象)
  * 作用: 操作组件内部的真实标签dom元素对象

* 事件处理

  * 给标签添加属性: onXxx={this.eventHandler}

  * 在组件中添加事件处理方法

    ```js
      eventHandler(event) {
                  
      }
    ```

  * 使自定义方法中的this为组件对象

    * 在constructor()中bind(this)
    * 使用箭头函数定义方法(ES6模块化编码时才能使用)

* state

  * 组件被称为"状态机", 页面的显示是根据组件的state属性的数据来显示
  * 初始化指定:
        ```jsx
        constructor() {
          super();
          this.state = {
            stateName1 : stateValue1,
            stateName2 : stateValue2
          };
        }
        ```
  * 读取显示: 
    this.state.stateName1
  * 更新状态-->更新界面 : 
    this.setState({stateName1 : newValue})

* 实现一个双向绑定的组件

  * React是单向数据流
  * 需要通过onChange监听手动实现
* 组件生命周期

* 组件的三个生命周期状态:
* Mount：插入真实 DOM
* Update：被重新渲染
* Unmount：被移出真实 DOM
* 生命周期流程:
  
	

```
  *  第一次初始化显示
constructor()
componentWillMount() : 将要插入回调
render() : 用于插入虚拟DOM回调
componentDidMount() : 已经插入回调
 *  每次更新state
componentWillReceiveProps(): 接收父组件新的属性
componentWillUpdate() : 将要更新回调
render() : 更新(重新渲染)
componentDidUpdate() : 已经更新回调
  *  删除组件
ReactDOM.unmountComponentAtNode(document.getElementById('example')) : 移除组件
componentWillUnmount() : 组件将要被移除回调
```
  *  常用的方法
  * render(): 必须重写, 返回一个自定义的虚拟DOM
* constructor(): 初始化状态, 绑定this(可以箭头函数代替)
* componentDidMount() : 只执行一次, 已经在dom树中, 适合启动/设置一些监听 


####  react-router
* BrowserRouter、hashRouter 路由容器，所有的路由操作都应该在这个组件下面。
		1. BrowserRouter使用h5的history实现spa应用。上线阶段使用
		2. hashRouter使用锚点跳转实现spa应用。开发阶段使用。
* Route定义路径和显示组件对应关系。
* Link路由跳转。

```jsx
import React  from 'react'
import {BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import About from './About'
import User from './User'
import Home from './Home'
import '../css/index.css'
import ListLink from './ListLink'
class App extends React.Component {
    render() {
        return (
        // 定义路由容器，所有代码必须写在router容器内。
         <Router>
            <div>
                    <h3>App组件</h3>
                    <ul>
                        <li>
                            <NavLink to="/about" activeClassName="selected">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user" activeClassName="selected">User</NavLink>
                        </li>
                    </ul>
                    {/* 封装组件 */}
                    <ListLink to='/person' label='个人'></ListLink><br/>
                    <ListLink to='/detail' label="详情"></ListLink>
               //  定义映射关系，路由表
                <Route path="/about"><About/></Route>
                <Route path="/user"><User/></Route>   
            </div>
         </Router>
        )
    }
}
export default App

```

```jsx
import React from 'react'
import {Route, Link } from 'react-router-dom'
// 封装个人组件
export default function ListLink({to,label }) {
    return (
    // children :当前点击链接时match属性不为空
        <Route path={to} children={({match}) => {
            // 返回一个link链接
        return <Link to={to} className={match? 'active': ''}>{label}</Link>
        }}>
        </Route>
    )
}
```


```jsx
import React  from 'react'
class Home extends React.Component {
    render() {
        return (
            <h3>Home组件</h3>
        )
    }
}
export default Home
```
#####  嵌套路由和参数

```jsx
import React, { Component }from 'react'
import { NavLink,Route } from 'react-router-dom'
import News from './News'
class Detail extends Component {
    render() {
        return (
            <div>
                    <h3>Detail组件</h3>
                    <ul>
                       <li><NavLink to="/detail/news/1">detail1</NavLink></li> 
                       <li><NavLink to="/detail/news/2">detail2</NavLink></li> 
                       <li><NavLink to="/detail/news/3">detail3</NavLink></li>  
                    </ul>
                    <Route path="/detail/news/:id" component={News}></Route>
            </div>
        )
    }
}
export default Detail
```

```jsx
import React from 'react'
export default function News(props) {
  console.log(props);
  return (
    <div>
      <p>news组件{props.match.params.id}</p>
    </div>
  )
}
```

```jsx
  <Switch>
                        {/* exact： 精准匹配 */}
                    <Route exact path="/" component={Home}></Route>
                    <Route path='/about' component={About}/>
                    <Route path='/detail' component={Detail}/>
                    {/* 1.错误匹配
                    <Route component={NotFound}></Route> */}
                    <Route path="/notfound" component={NotFound}></Route>
                    {/* 路由重定向 */}
                    <Redirect from="*" to="/notfound"></Redirect>
                    </Switch>
```

