####  注册
在vue实例中引入并注册使用：

```
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
```
####  state
定义数据,提供唯一的数据源，所有的共享数据都要统一放到store中的state中存储

####  mutations方法
定义在mutations中的函数才能修改state中的数据

```css
 mutations: {
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
```
使用方法一：使用commit调用

```
methods:{
  Add(){
    //使用commit函数调用mutations中的对应函数，
    //第一个参数就是我们要调用的mutations中的函数名
    //第二个参数就是传递给add函数的参数
    this.$store.commit('add',10)
  }
}
```
使用方法二：

```css
import { mapMutations } from 'vuex'

methods:{
  ...mapMutations(['add'])
}
```

####  actions方法
可以在这里执行异步函数，不能直接修改state中的数据，需要通过context.commit(）触发mutations中的方法

```css
actions: {
    addAsync(context) {
      setTimeout(() => {
        // 在 actions 中，不能直接修改 state 中的数据；
        // 必须通过 context.commit() 触发某个 mutation 才行
        context.commit('add')
      }, 1000)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    }
  },
```
使用方法一：通过dispatch触发

```
methods:{
  AddAsync(){
    this.$store.dispatch('addAsync',5)
  }
}
```
使用方法二：

```
import { mapActions } from 'vuex'

methods:{
  ...mapActions(['subAsync'])
}
```

####  getter
Getter用于对Store中的数据进行加工处理形成新的数据,不会修改state中保存的数据，会随着state中数据的变化而变化

```
 getters:{
    //添加了一个showNum的属性
    showNum : state =>{
      return '最新的count值为：'+state.count;
    }
  }
```
使用方法一：

```

			{{$store.getters.showNum}}
```
使用方法二：

```
import { mapGetters } from 'vuex'
computed:{
  ...mapGetters(['showNum'])
}
```

