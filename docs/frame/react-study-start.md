##  React

> 现在前端框架虽然语法和api不一样，但是其实大部分实现原理都是一样的，都是基于原生js开发的，我现在用的主要技术栈是Vue2,Vue3这些，想着去react的官方文档去一步一步的学习有些麻烦，而且英文文档看着也很吃力，于是想着能不能借助AI工具根据vue的知识体系去学习react的语法，这样无非就是根据现有的vue知识体系换一种实现语法，可以达到触类旁通的目的，这样学起来省时多了。


>  AI工具可以用Chatgpt或者其他Ai工具，市面上的AI工具还是挺多的，包括百度的文心一言、讯飞的火星大模型，下面是我借助抖音的AI工具豆包来学习的。

###  一.数据双向绑定

####  问题： react怎么实现类似vue的v-model数据双向绑定

在 React 中，可以通过以下方式实现类似 Vue 中`v-model`的数据双向绑定效果：

 

**一、在类组件中实现**



1. 使用

   ```
   value
   ```

   属性和

   ```
   onChange
   ```

   事件处理函数：

   - 在 React 的类组件中，可以通过设置输入元素的`value`属性来控制其显示的值，并通过`onChange`事件处理函数来更新组件的状态，从而实现双向绑定的效果。
   - 例如：



```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        <p>Input value: {this.state.inputValue}</p>
      </div>
    );
  }
}
```



- 在这个例子中，输入框的`value`属性绑定到组件的状态`inputValue`，当输入框的值发生变化时，`onChange`事件处理函数会被触发，更新组件的状态，从而实现双向绑定。



**二、在函数组件中实现**



1. 使用

   ```
   useState
   ```

    

   Hook 和

   ```
   onChange
   ```

   事件处理函数：

   - 在函数组件中，可以使用`useState` Hook 来管理状态，并通过设置输入元素的`value`属性和`onChange`事件处理函数来实现双向绑定。
   - 例如：

```jsx
const MyFunctionalComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input value: {inputValue}</p>
    </div>
  );
};
```



- 同样，输入框的`value`属性绑定到状态变量`inputValue`，通过`onChange`事件处理函数更新状态，实现双向绑定。



虽然 React 没有像 Vue 那样直接的`v-model`语法糖，但通过这种方式可以在 React 中实现类似的数据双向绑定效果。需要注意的是，React 更强调单向数据流，这种双向绑定的实现方式应该谨慎使用，以确保代码的可维护性和可预测性。



###  二. 侦听属性

####  问题： react中有类似vue中watch侦听属性吗

**一、使用`useEffect`实现简单的数据监听**



1. ```
   useEffect
   ```

   可以在函数组件中监听某个特定状态的变化，并在变化时执行特定的操作。

   例如，监听一个名为`count`的状态变量的变化：

```jsx
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyComponent;
```

- 在这个例子中，每当`count`状态发生变化时，`useEffect`中的回调函数就会被执行，打印出当前的`count`值。



**二、使用自定义 Hook 实现更复杂的监听逻辑**

1. 可以创建自定义 Hook 来封装更复杂的监听逻辑。

   例如，创建一个 Hook 来监听两个状态变量的变化，并在两个变量都满足特定条件时执行某个操作：

```jsx
import React, { useState, useEffect } from 'react';

const useCustomWatcher = (state1, state2) => {
  useEffect(() => {
    if (state1 > 10 && state2 === 'someValue') {
      console.log('Conditions met!');
    }
  }, [state1, state2]);
};

const MyComponent = () => {
  const [count1, setCount1] = useState(0);
  const [value2, setValue2] = useState('');

  useCustomWatcher(count1, value2);

  return (
    <div>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <input value={value2} onChange={e => setValue2(e.target.value)} />
    </div>
  );
};

export default MyComponent;
```

- 在这个例子中，`useCustomWatcher`自定义 Hook 监听了`count1`和`value2`两个状态变量，当它们满足特定条件时打印出消息。

虽然 React 的这种方式与 Vue 的`watch`侦听属性在语法和使用上有所不同，但可以通过合理运用`useEffect`和自定义 Hook 来实现类似的数据监听功能。

###  三. 计算属性 

####  问题：react中有类似vue计算属性的属性或方法吗

在 React 中，可以从类组件和函数组件两个方面来分析类似 Vue 计算属性的实现方式。

**一、类组件**



1. 在类组件中，可以使用

   ```
   getter
   ```

   方法来模拟计算属性的功能。

   - 例如：

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      multiplier: 2
    };
  }

  get doubledCount() {
    return this.state.count * this.state.multiplier;
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <p>Multiplier: {this.state.multiplier}</p>
        <p>Doubled Count: {this.doubledCount}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}
```



- 在这个例子中，`doubledCount`就类似于 Vue 中的计算属性，它根据`state`中的`count`和`multiplier`计算得出，并且在依赖的值发生变化时会自动更新。



**二、函数组件**

1. 在函数组件中，可以使用

   ```
   useMemo
   ```

    

   Hook 来实现类似计算属性的功能。

   - `useMemo`接受一个函数和一个依赖数组作为参数，只有当依赖数组中的值发生变化时，才会重新计算函数的结果。
   - 例如：

```jsx
import React, { useState, useMemo } from 'react';

const MyFunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  const doubledCount = useMemo(() => count * multiplier, [count, multiplier]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Multiplier: {multiplier}</p>
      <p>Doubled Count: {doubledCount}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};
```



- 在这个例子中，`doubledCount`是通过`useMemo`计算得出的，只有当`count`或`multiplier`发生变化时，才会重新计算。



虽然 React 的实现方式与 Vue 的计算属性在语法和使用上有所不同，但通过这些方法可以在 React 中实现类似的功能，即根据其他状态值自动计算出一个派生值，并且在依赖的值发生变化时自动更新。



###  四. 事件绑定  

####  问题： react中有类似vue中事件注册的方法吗

在 React 中，可以从类组件和函数组件两个方面来分析与 Vue 中事件相关的功能类似的实现方式。



**一、类组件**



1. 在 React 的类组件中，事件处理通过在组件中定义方法并将其作为属性传递给元素来实现。
   - 例如：



```jsx
class MyComponent extends React.Component {
  handleClick = () => {
    console.log('Button clicked');
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```



- 这与 Vue 中在模板中绑定事件的方式类似，都是通过指定元素的属性来触发特定的行为。



1. 可以传递参数给事件处理方法，通过使用箭头函数或在构造函数中绑定

   来确保正确的上下文。

   - 例如：



```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickWithParam = this.handleClickWithParam.bind(this);
  }

  handleClickWithParam(param) {
    console.log(`Button clicked with param: ${param}`);
  }

  render() {
    return <button onClick={() => this.handleClickWithParam('some value')}>Click me with param</button>;
  }
}
```



**二、函数组件**



1. 在函数组件中，使用箭头函数来定义事件处理函数，直接将其作为属性传递给元素。
   - 例如：

```jsx
const MyFunctionalComponent = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return <button onClick={handleClick}>Click me</button>;
};
```



1. 同样可以传递参数给事件处理函数，使用箭头函数的方式更加简洁。
   - 例如：

```jsx
const MyFunctionalComponent = () => {
  const handleClickWithParam = (param) => {
    console.log(`Button clicked with param: ${param}`);
  };

  return <button onClick={() => handleClickWithParam('some value')}>Click me with param</button>;
};
```



虽然 React 的事件处理方式与 Vue 略有不同，但都实现了在用户交互时触发特定行为的功能。React 更强调通过函数式的方式来处理事件，而 Vue 则在模板中使用简洁的语法来绑定事件。



###  五.样式和类名绑定

####  问题：react中怎么实现类似vue的样式和类名绑定

在 React 中，可以从以下几个方面实现类似 Vue 的样式和类名绑定：



**一、类组件中的样式和类名绑定**



1. 内联样式：
   - 在 React 的类组件中，可以通过对象的形式设置内联样式。与 Vue 中内联样式的设置类似，使用驼峰命名法来表示 CSS 属性。
   - 例如：





```jsx
class MyComponent extends React.Component {
  render() {
    const style = {
      color: 'blue',
      fontSize: '16px',
    };
    return <div style={style}>Styled component</div>;
  }
}
```



1. 类名绑定：
   - 可以通过条件判断来动态添加或移除类名。在 React 中，通常使用`classnames`库来方便地处理类名的组合和条件添加。
   - 首先安装`classnames`库：`npm install classnames`。
   - 然后使用：



```jsx
import classNames from 'classnames';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleActive = () => {
    this.setState({ isActive:!this.state.isActive });
  };

  render() {
    const buttonClasses = classNames({
      'active-class': this.state.isActive,
      'another-class': true,
    });
    return (
      <div>
        <button className={buttonClasses} onClick={this.toggleActive}>Click me</button>
      </div>
    );
  }
}
```



**二、函数组件中的样式和类名绑定**



1. 内联样式：
   - 与类组件一样，可以使用对象形式的内联样式。
   - 例如：



```jsx
const MyFunctionalComponent = () => {
  const style = {
    color: 'green',
    backgroundColor: 'lightgray',
  };
  return <div style={style}>Styled functional component</div>;
};
```



1. 类名绑定：
   - 同样可以使用`classnames`库来处理类名的动态绑定。
   - 例如：



```jsx
import classNames from 'classnames';

const MyFunctionalComponent = () => {
  const isActive = false;
  const buttonClasses = classNames({
    'active-class': isActive,
    'another-class': true,
  });
  return (
    <div>
      <button className={buttonClasses}>Click me</button>
    </div>
  );
};
```



通过这些方式，可以在 React 中实现类似于 Vue 的样式和类名绑定，根据条件动态地设置组件的样式和类名。



###  六. 条件和循环 

####  问题：react中有类似vue中条件、循环判断的api吗

**一、类组件**

1. 条件判断：
   - 在 React 的类组件中，可以使用 JavaScript 的条件语句（如`if`、`else`等）来实现条件判断。通常在`render`方法中根据条件来决定渲染哪些内容。
   - 例如：



```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  toggleVisibility = () => {
    this.setState({ isVisible:!this.state.isVisible });
  };

  render() {
    return (
      <div>
        {this.state.isVisible && <p>Visible content</p>}
        <button onClick={this.toggleVisibility}>Toggle Visibility</button>
      </div>
    );
  }
}
```



- 在这个例子中，根据`state`中的`isVisible`状态来决定是否渲染`<p>Visible content</p>`。



1. 循环判断：
   - 可以使用 JavaScript 的循环结构（如`for`、`while`等）或数组的遍历方法（如`map`）来实现循环判断。通常在`render`方法中对数组进行遍历，渲染多个相同结构的元素。
   - 例如：



```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['item1', 'item2', 'item3']
    };
  }

  render() {
    return (
      <div>
        {this.state.items.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
    );
  }
}
```



- 在这个例子中，使用`map`方法遍历`state`中的`items`数组，渲染出多个`<p>`元素。



**二、函数组件**



1. 条件判断：
   - 在函数组件中，可以使用条件运算符（`? :`）或逻辑与运算符（`&&`）来实现条件判断。同样在返回的 JSX 中根据条件决定渲染哪些内容。
   - 例如：



```jsx
const MyFunctionalComponent = () => {
  const isVisible = true;
  return (
    <div>
      {isVisible && <p>Visible content</p>}
    </div>
  );
};
```



1. 循环判断：
   - 和类组件一样，可以使用数组的遍历方法（如`map`）来实现循环判断。
   - 例如：



```jsx
const MyFunctionalComponent = () => {
  const items = ['item1', 'item2', 'item3'];
  return (
    <div>
      {items.map(item => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};
```



虽然 React 的语法与 Vue 有所不同，但通过这些方式可以在 React 中实现类似 Vue 中的条件和循环判断，以动态地渲染内容。



###  七. 生命周期   

####  问题：react有类似vue的生命周期的函数吗

**一、挂载阶段**



1. ```
   componentDidMount
   ```

    

   类似 Vue 的

    

   ```
   mounted
   ```

   ：

   - 在 React 中，`componentDidMount`在组件挂载到 DOM 后被调用。可以在这个方法中进行一些初始化操作，比如发起数据请求。
   - 示例：

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    console.log('Component mounted');
    // 可以在此处进行数据请求等操作
  }

  render() {
    return <div>Hello, React!</div>;
  }
}

export default MyComponent;
```



**二、更新阶段**



1. ```
   componentDidUpdate
   ```

    

   类似 Vue 的

    

   ```
   updated
   ```

   ：

   - `componentDidUpdate`在组件更新后被调用，可以在此方法中处理更新后的逻辑，比如根据新的 props 或 state 进行操作。
   - 示例：

```jsx
class MyComponent extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.someValue!== prevProps.someValue) {
      console.log('Props have changed');
    }
    if (this.state.someState!== prevState.someState) {
      console.log('State has changed');
    }
  }

  render() {
    return <div>Hello, React!</div>;
  }
}
```



1. ```
   shouldComponentUpdate
   ```

    

   可用于控制组件是否需要更新，类似 Vue 中的计算属性或方法来优化更新逻辑：

   - 该方法接收新的 props 和 state 作为参数，返回一个布尔值，决定组件是否应该更新。如果返回 false，则组件不会更新。
   - 示例：

```jsx
class MyComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.someValue!== this.props.someValue || nextState.someState!== this.state.someState;
  }

  render() {
    return <div>Hello, React!</div>;
  }
}
```



**三、卸载阶段**



1. ```
   componentWillUnmount
   ```

    

   类似 Vue 的

    

   ```
   beforeDestroy
   ```

    

   和

    

   ```
   destroyed
   ```

   ：

   - 在组件卸载前被调用，可以在这个方法中清理一些资源，比如取消定时器、移除事件监听器等。
   - 示例：

```jsx
class MyComponent extends Component {
  componentWillUnmount() {
    console.log('Component will unmount');
    // 清理资源的操作
  }

  render() {
    return <div>Hello, React!</div>;
  }
}
```



在 React 的函数组件中，可以使用 React 的 Hook 来实现类似的生命周期效果。例如，使用`useEffect`可以模拟上述生命周期方法的功能：

```jsx
import React, { useState, useEffect } from 'react';

const MyFunctionalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or updated');
    return () => {
      console.log('Component will unmount or cleanup on update');
    };
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyFunctionalComponent;
```



在这个函数组件中，`useEffect`的回调函数在组件挂载和更新时都会被调用，返回的函数在组件卸载或下一次更新前被调用，起到类似`componentDidMount`、`componentDidUpdate`和`componentWillUnmount`的作用。









### 八. 依赖注入  

####  问题：react有类似vue的依赖注入provide属性吗

在 React 中没有完全与 Vue 的依赖注入（provide/inject）一模一样的功能，但可以通过一些方式来实现类似的依赖传递。



**一、使用 React 的 Context API**



1. React 的 Context API 可以在组件树中传递数据，类似于 Vue 的 provide/inject。
   - 首先，创建一个 Context：

```jsx
import React from 'react';

const MyContext = React.createContext();
```



- 然后，在一个较高层级的组件中使用`Provider`来提供数据：

```jsx
const ParentComponent = () => {
  const dataToShare = 'Some shared data';
  return (
    <MyContext.Provider value={dataToShare}>
      <ChildComponent />
    </MyContext.Provider>
  );
};
```



- 在需要接收数据的子组件中，可以使用`useContext` Hook 来获取数据：

```jsx
const ChildComponent = () => {
  const sharedData = React.useContext(MyContext);
  return <div>{sharedData}</div>;
};
```



**二、自定义 Hook 和全局状态管理库**

1. 可以创建自定义 Hook 来封装获取共享数据的逻辑，并结合全局状态管理库（如 Redux、MobX 等）来实现类似的依赖注入效果。
   - 例如，使用 Redux：
   - 首先，设置 Redux store 和 reducer：

```javascript
import { createStore } from 'redux';

const initialState = { sharedData: 'Initial shared data' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SHARED_DATA':
      return {...state, sharedData: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);
```

- 然后，创建一个自定义 Hook 来获取共享数据：



```jsx
import { useSelector } from 'react-redux';

const useSharedData = () => {
  return useSelector(state => state.sharedData);
};
```



- 在组件中使用自定义 Hook：

```jsx
const MyComponent = () => {
  const sharedData = useSharedData();
  return <div>{sharedData}</div>;
};
```

虽然 React 的实现方式与 Vue 的依赖注入有所不同，但通过 Context API、自定义 Hook 和全局状态管理库等方法，可以在 React 中实现类似的依赖传递和共享数据的功能。

### 九.组件插槽    

####  问题： react有类似vue的插槽的api吗

在 React 中没有完全与 Vue 中的插槽（slot）一模一样的 API，但有类似的概念和实现方式。

**一、React 中的实现方式**

1. 通过属性传递组件：
   - 在 React 中，可以通过将子组件作为属性传递给父组件的方式来实现类似插槽的功能。
   - 例如：

```jsx
const ParentComponent = () => {
  const CustomButton = () => <button>Custom Button</button>;
  return <ChildComponent customComponent={CustomButton} />;
};

const ChildComponent = ({ customComponent }) => {
  return (
    <div>
      <p>This is a child component.</p>
      {customComponent && <customComponent />}
    </div>
  );
};
```



- 在这个例子中，`ParentComponent`定义了一个名为`CustomButton`的子组件，并将其作为属性传递给`ChildComponent`。`ChildComponent`在其渲染逻辑中根据接收到的属性来决定是否渲染这个自定义组件。



1. 条件渲染：
   - 可以通过条件渲染来实现类似插槽的效果，根据特定条件来决定是否渲染某个子组件。
   - 例如：

```jsx
const ParentComponent = () => {
  const showCustomContent = true;
  return <ChildComponent showCustom={showCustomContent} />;
};

const ChildComponent = ({ showCustom }) => {
  return (
    <div>
      <p>This is a child component.</p>
      {showCustom && <div>This is custom content.</div>}
    </div>
  );
};
```



- 在这个例子中，`ParentComponent`通过一个布尔值来控制`ChildComponent`是否渲染特定的内容，起到了类似插槽的作用，根据条件来决定是否显示特定的子组件内容。



虽然 React 的实现方式与 Vue 的插槽在语法和使用上有所不同，但通过属性传递和条件渲染等方式，可以在 React 中实现类似的功能，以实现更灵活的组件组合和复用。



###  十. 组件传参  

####  问题： 在 React 中，有与 Vue 类似的组件传参方式，可以从类组件和函数组件两个方面进行分析。

**一、类组件传参**

1. 父组件向子组件传参：
   - 通过属性（props）传递。父组件在渲染子组件时，将数据作为属性传递给子组件。
   - 例如：



```jsx
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from parent',
    };
  }

  render() {
    return <ChildComponent message={this.state.message} />;
  }
}

class ChildComponent extends React.Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}
```



- 在子组件中，可以通过`this.props`来访问父组件传递过来的属性。



1. 子组件向父组件传参：
   - 通常通过在父组件中定义回调函数，并将其作为属性传递给子组件。子组件在需要的时候调用这个回调函数，将数据传递给父组件。
   - 例如：





```jsx
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromChild: null,
    };
    this.handleChildData = this.handleChildData.bind(this);
  }

  handleChildData(data) {
    this.setState({ dataFromChild: data });
  }

  render() {
    return <ChildComponent onSendData={this.handleChildData} />;
  }
}

class ChildComponent extends React.Component {
  sendDataToParent() {
    const data = 'Data from child';
    this.props.onSendData(data);
  }

  render() {
    return <button onClick={this.sendDataToParent.bind(this)}>Send data to parent</button>;
  }
}
```



**二、函数组件传参**



1. 父组件向子组件传参：
   - 同样通过属性传递。
   - 例如：



```jsx
const ParentComponent = () => {
  const message = 'Hello from parent';
  return <ChildComponent message={message} />;
};

const ChildComponent = ({ message }) => {
  return <div>{message}</div>;
};
```



1. 子组件向父组件传参：
   - 可以使用回调函数或者使用 React 的`useState`和`useContext`等 Hook 结合的方式来实现。
   - 例如，使用回调函数：



```jsx
const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState(null);
  const handleChildData = (data) => {
    setDataFromChild(data);
  };
  return <ChildComponent onSendData={handleChildData} />;
};

const ChildComponent = ({ onSendData }) => {
  return <button onClick={() => onSendData('Data from child')}>Send data to parent</button>;
};
```



- 或者使用`useContext`创建一个上下文，在父组件中提供数据和回调函数，子组件通过上下文来访问和调用：



```jsx
const DataContext = React.createContext();

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState(null);
  const handleChildData = (data) => {
    setDataFromChild(data);
  };
  return (
    <DataContext.Provider value={{ dataFromChild, handleChildData }}>
      <ChildComponent />
    </DataContext.Provider>
  );
};

const ChildComponent = () => {
  const { dataFromChild, handleChildData } = React.useContext(DataContext);
  return <button onClick={() => handleChildData('Data from child')}>Send data to parent</button>;
};
```



总体而言，React 的组件传参方式与 Vue 有相似之处，都是通过明确的属性传递来实现父子组件之间的通信，而对于兄弟组件之间的通信，通常需要借助共同的父组件或者使用状态管理库来实现

###  十一.获取dom元素  

####  问题：react怎么获取dom引用

  在 React 中获取 DOM 引用通常使用 `ref`。可以通过 `useRef` 钩子（对于函数组件）或 `createRef` 方法（对于类组件）来实现。

1. 函数组件

```jsx
import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.focus(); // 访问 DOM 节点
    }
  }, []);

  return <input ref={myRef} type="text" />;
};
```

2. 类组件

```jsx
import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus(); // 访问 DOM 节点
  }

  render() {
    return <input ref={this.myRef} type="text" />;
  }
}
```

-总结

通过 `ref`，你可以方便地访问和操作 DOM 元素。



###  十二、获取组件实例和子组件属性方法

####  问题：react怎么实现类似vue获取子组件实例属性和方法

在 React 中，可以通过以下方式在类组件和函数组件中实现类似 Vue 获取子组件实例属性和方法的功能：

**一、类组件**



1. 使用refs

   - 通过`React.createRef()`创建一个 ref 对象，并将其赋值给子组件的`ref`属性。在类组件中，可以在`componentDidMount`生命周期方法中通过`this.ref.current`访问子组件的实例，进而访问子组件的属性和方法。
   - 例如：

```jsx
import React, { Component } from 'react';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  componentDidMount() {
    if (this.childRef.current) {
      console.log(this.childRef.current.someChildProperty);
      this.childRef.current.someChildMethod();
    }
  }

  render() {
    return (
      <div>
        <ChildComponent ref={this.childRef} />
      </div>
    );
  }
}

class ChildComponent extends Component {
  someChildProperty = 'child property value';

  someChildMethod() {
    console.log('Child method called');
  }

  render() {
    return <div>Child Component</div>;
  }
}

export default ParentComponent;
```



**二、函数组件**


1. 使用forwardRef和useImperativeHandle

   - `forwardRef`用于将 ref 转发到子组件，而`useImperativeHandle`可以自定义暴露给父组件的子组件实例的属性和方法。
   - 例如：



```jsx
import React, { forwardRef, useImperativeHandle } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const childMethod = () => {
    console.log('Child method called');
  };

  useImperativeHandle(ref, () => ({
    someChildProperty: 'child property value',
    childMethod
  }));

  return <div>Child Component</div>;
});

const ParentComponent = () => {
  const childRef = React.createRef();

  const callChildMethod = () => {
    if (childRef.current) {
      console.log(childRef.current.someChildProperty);
      childRef.current.childMethod();
    }
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={callChildMethod}>Call child method</button>
    </div>
  );
};

export default ParentComponent;
```



需要注意的是，在 React 中过度依赖获取子组件实例可能会导致代码的复杂性增加和可维护性降低。通常，React 鼓励通过数据的单向流动和组件的组合来实现功能。



####  十三、自定义hooks

#####  问题：react中有哪些内置的hooks？

在 React 中，有一些内置的 Hook，主要包括以下几个：

**一、`useState`**



1. 作用：用于在函数组件中添加状态。
   - 允许函数组件拥有自己的状态变量，并在状态变化时触发组件的重新渲染。
   - 例如：



```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```



**二、`useEffect`**



1. 作用：用于处理副作用，如数据获取、订阅事件、手动修改 DOM 等操作。
   - 接收一个函数作为参数，该函数在组件挂载后、更新后或者卸载前执行。可以通过第二个参数控制副作用的触发时机。
   - 例如：



```jsx
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.example.com/data')
     .then(response => response.json())
     .then(data => setData(data));
  }, []);
  return <div>{data? JSON.stringify(data) : 'Loading...'}</div>;
};
```



**三、`useContext`**



1. 作用：用于在组件树中共享数据，而无需通过层层传递 props。
   - 通过创建和使用`Context`对象，可以轻松地在不同组件之间传递数据。
   - 例如：



```jsx
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

const Provider = ({ children }) => {
  const [value, setValue] = useState('initial value');
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

const ConsumerComponent = () => {
  const { value, setValue } = useContext(MyContext);
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue('new value')}>Change Value</button>
    </div>
  );
};

const App = () => (
  <Provider>
    <ConsumerComponent />
  </Provider>
);
```



**四、`useReducer`**



1. 作用：用于处理复杂的状态逻辑，类似于 Redux 的 reducer 函数。
   - 接收一个 reducer 函数和初始状态作为参数，返回当前状态和一个 dispatch 函数，用于触发状态的更新。
   - 例如：



```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};
```



**五、`useCallback`**



1. 作用：用于记忆函数，避免在每次渲染时重新创建函数，从而提高性能。
   - 接收一个函数和一个依赖项数组作为参数，只有当依赖项发生变化时，才会重新创建函数。
   - 例如：



```jsx
import React, { useState, useCallback } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

const ChildComponent = ({ onClick }) => {
  return <button onClick={onClick}>Log Count</button>;
};
```



**六、`useMemo`**



1. 作用：用于记忆计算结果，避免在每次渲染时进行重复计算，从而提高性能。
   - 接收一个计算函数和一个依赖项数组作为参数，只有当依赖项发生变化时，才会重新计算结果。
   - 例如：



```jsx
import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = ({ num }) => {
  console.log('Calculating...');
  return num * 2;
};

const MemoizedComponent = () => {
  const [num, setNum] = useState(0);
  const memoizedValue = useMemo(() => ExpensiveCalculation({ num }), [num]);
  return (
    <div>
      <p>Value: {memoizedValue}</p>
      <button onClick={() => setNum(num + 1)}>Increment</button>
    </div>
  );
};
```

**七、`useRef`**



1. 作用：
   - `useRef`返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。
   - 主要用途包括：
     - 访问 DOM 元素。
     - 保存可变值而不触发组件重新渲染。
2. 示例：
   - 访问 DOM 元素：



```jsx
import React, { useRef } from 'react';

const MyComponent = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};
```



- 保存可变值：



```jsx
const Counter = () => {
  const count = useRef(0);
  const increment = () => {
    count.current++;
    console.log(count.current);
  };
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```



**八、`useLayoutEffect`**



1. 作用：
   - 其功能与 `useEffect`类似，但在浏览器渲染完成后、屏幕更新前执行。
   - 主要用于需要在 DOM 变更后立即测量布局或执行其他与布局相关的操作，避免出现闪烁或布局跳动。
2. 示例：

```jsx
import React, { useLayoutEffect, useState } from 'react';

const MeasuredComponent = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const updateSize = () => {
      if (element.current) {
        const { width, height } = element.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };
    const element = document.getElementById('measured-element');
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  return <div id="measured-element">Measured Element: {size.width} x {size.height}</div>;
};
```



**九、`useImperativeHandle`**



1. 作用：
   - 可以让父组件自定义暴露给子组件的实例方法。
   - 通常与 `forwardRef`一起使用，允许在使用函数组件时自定义子组件被父组件引用时暴露的方法。
2. 示例：

```jsx
import React, { forwardRef, useImperativeHandle } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const childMethod = () => {
    console.log('Child method called.');
  };
  useImperativeHandle(ref, () => ({
    childMethod,
  }));
  return <div>Child Component</div>;
});

const ParentComponent = () => {
  const childRef = useRef(null);
  const callChildMethod = () => {
    if (childRef.current) {
      childRef.current.childMethod();
    }
  };
  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={callChildMethod}>Call Child Method</button>
    </div>
  );
```

这些内置的 Hook 为 React 函数组件提供了强大的功能，使开发者能够更高效地管理状态、处理副作用和优化性能。



> 总结到这里基本上所有vue比较重要的知识点都有涉及到，AI工具的总结能力还是蛮强的，利用Ai工具来帮助我们学习新技术还是非常省时的，省去了去不断翻文档查找的时间，后续会持续学习react的路由和状态管理，在此记录一下
>
















​	





