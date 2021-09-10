## jsx语法规则：

* 1.JS表达式要用单花括号
* 2.class -> className
* 3.for -> htmlFor
* 4.style={{}}
* 5.定义虚拟DOM不要写引号，用括号，只能有一个根标签
* 6.标签首字母

  （1）若小写字母开头，则改标签转为html同名元素，若html没有该标签元素，则报错、

  （2）若大写字母开头，react就去渲染对应的组件，若没有定义该组件，就报错

## todoList 案例相关知识点

### setState更新状态的2种写法

	(1).拆分组件，实现静态组件，注意：className,style的写法
					
	(2). 动态初始化列表，如何确定将数据放在那个组件的state中
	        --某个组件使用，放在七自身的state中
	        --某些组件使用，放在她们公共的父组件state中（官方撑操作为：状态提升）
    (3).关于父子通性：
            --【父组件】给【子组件】传递数据：通过prop传递
            --【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数，子把数据当作函数参数传回
    (4).注意defaultChecked和checked的区别，类是的还有：defaultValue和value的区别  
    (5).状态在哪里：操作转台的方法就写在哪里  

## 路由组件和一般组件的区别

* 1.写法不同 一般组件: <Demo/>
  路由组件：<Route path="/xxx" component={Demo} />
* 2.存放位置不同： 一般组件:components 路由组件：pages
* 3.接收到的props不同： 一般组件：写组件传递什么接收什么 路由组件：接收到固定的三个属性 history:
  go: ƒ go(n)
  goBack: ƒ goBack()
  goForward: ƒ goForward()
  push: ƒ push(path, state)
  replace: ƒ replace(path, state)
  location:
  pathname: "/about"
  search: ""
  state: undefined match:
  params: {} path: "/about"
  url: "/about"

## navLink与NavLink封装

* 1.NavLink可以实现路由链接高亮，通过activeClassName设置样式

* 2.标签体内容是一个特殊的标签属性

* 3.通过this.props.children可以获取标签体内容

## Switch的使用

* 1.通常情况下，path和component是一一对应的关系

* 2.如果path对应多个组件，匹配到了第一个，也会继续向下匹配，展示多个组件。效率低下
  `<Route path="/about" component={About}/>
  <Route path="/home" component={Home}/>
  <Route path="/aba" component={aba}/>
  <Route path="/home" component={Test}/>`

* 3.Switch可以提高路由匹配的效率（单一匹配）,匹配到了就不会继续向下匹配

## 解决多级路径刷新页面样式丢失的问题

例如：<Route path="/test/about" component={About}/>

* 1.public/index.html 中 引入样式时不写（./和../）写/（常用）
* 2.public/index.html 中 引入样式时不写（./和../）写%PUBLIC_URL%（常用，只能在react脚手架里用）
* 3.使用hashRouter #后面的都不会带给服务器

## Redirect的使用

* 1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
  <Switch>
  <Route path="/about" component={About}/>
  <Route path="/home" component={Home}/>
  <Redirect to="/about"/>
  <Switch>

## 嵌套路由

* 1.注册子路由时要写上父路由的path值
* 2.路由的匹配是按照注册路由的顺序进行的

## params参数

* 路由链接（携带参数）： <Link to={`/home/message/detailed/1/你好`} >你好</Link>
* 注册路由（声明接收）： <Route path="/home/message/detailed/:id/:title" component={Detailed}/>
* 接受参数：const {id,title} = this.props.match.params

## search传递参数

* 路由链接（携带参数）： <Link to={`/home/message/detailed?id=1&title=你好`} >你好</Link>
* 注册路由（无需声明接收）： <Route path="/home/message/detailed" component={Detailed}/>
* 接受参数：const searchParams = this.props.location.search const {id, title} = qs.parse(
  searchParams.slice(1))
* 备注：获取search是urlencoded编码字符串，需要借助querystring解析

## state传递参数 （常用）

* 路由链接（携带参数）： <Link to=to={{ pathname: '/home/message/detailed', state: {id: obj.id, title:
  obj.title} }} >你好</Link>
* 注册路由（无需声明接收）： <Route path="/home/message/detailed" component={Detailed}/>
* 接受参数：const {id,title} = this.props.location.state
* 备注：刷新也可以保留住参数，参数不会显示在地址栏中

## replace跳转模式

* 默认push路由跳转模式,压栈操作
* replace跳转模式是替换的过程不会压栈，没有回退

## 编程试路由

* 不用路由组件跳转（Link，NavLink），而是用this.props.history自带的api跳转 ,前进，后退

## withRouter的使用

export default withRouter(Header);

* withRouter 可以加工一般组件，让其具有路由组件所特有API
* withRouter的返回值是一个新组件

## BrowserRouter和HashRouter的区别

* 底层原理不一样

  BrowserRouter使用的是H5的history API,不兼容IE9及一下版本。HashRouter使用的是URL的哈希值。
* path的表现形式不一样

  BrowserRouter的路径中没有#，例如: localhost:3000/home/message/detailed

  HashRouter的路径包括#，例如: localhost:3000/#/home/message/detailed
* 刷新后对路由state参数的影响

  (1) BrowserRouter没有任何影响，因为state保存在history对象中

  (2) HashRouter刷新后会导致state参数丢失
* 备注：HashRouter可以用于解决一些路径错误相关的问题

## antd的按需引入+自定义主题

* 1.安装依赖: yarn add react-app-rewired customize-cra babel-plugin-import less less-loader@7.1.0
* 2.修改package.json

      "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
      },
* 3.根目录下创建config-overrides.js

  const {override, fixBabelImports,addLessLoader} = require('customize-cra'); //按需引入antd的样式文件
  module.exports = override(
  fixBabelImports('import', { libraryName: 'antd', libraryDirectory: 'es', style: true, }), //修改主题
  这里注意less-loader插件的版本不能过高，太高不支持这种写法 addLessLoader({ lessOptions: { javascriptEnabled:
  true,//允许用js修改 modifyVars: {'@primary-color': '#1DA57A'}, }, }),
  );

* 4.备注：不用在组件里亲自引入样式，即：import 'antd/dist/antd.css'

## 求和案例redux精简版

* 1.在src下创建redux文件夹，里面包括，store.js、count_reducer.js
* 2.在store.js中（该文件专门用于暴露一个store对象，整个应用只有一个store对象）

```
  //引入createStore,专门用于创建redux中最为核心的store对象
  import {createStore} from "redux";
  //引入为Count组件服务的reducer
  import countReducer from './count_reducer'

export default createStore(countReducer)
```

* 3.count_reducer.js中（该文件用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数）

  1）函数接收两个参数：preState，action，返回加工后的状态

  2）reducer有两个作用：初始化状态，加工状态

  3）reducer被第一次调用时，是store自动触发的,

      传递的preState是underfined,

      传递的action是:{type:'@@REDUX/INIT_a.2.b.4}

      注意点：只做单纯的加减操作，条件（异步加还是奇数加）放在组件里判断

  4)在index.js中检测store中的状态，一旦发生改变重新渲染<App/>

```  store.subscribe(() => {
        //React.StrictMode 检查代码里不合理的位置
        ReactDOM.render(
        <React.StrictMode>
        <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
        );

  })
```

## 求和案例redux完整版

新增文件：

* 1.count_action.js 专门用于创建action的对象
* 2.constant.js 放置由于编码疏忽写错action中的type

## 求和案例redux异步action版

* 1.明确:延迟的动作不想交给组件自身，想交给action
* 2.何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
* 3.具体编码

  1)npm install redux-thunk,并配置在store.js

  2)创建action的函数不再返回一般对象，而是一个函数，在函数里写异步任务

  3）异步任务有结果后，分发给一个同步的action去真正的操作数据

* 4.备注：异步action不是必须要写的。完全可以自己等待异步任务的结果再去同步action

## 求和案例react-redux基本使用

* 1.明确两个概念

  1）UI组件：不能使用任何redux的api，只负责页面的呈现、交互等

  2）容器组件：负责和redux通信。将结果交给UI组件
* 2.如何创建一个容器组件--靠react-redux的connent函数

  ```
  connect(mapStateToProps,mapDispatchToProps)(ui组件）
    -mapStateToProps：映射状态，返回值是一个对象
    -mapDispatchToProps：映射操作状态的方法，返回值是一个对象
  ```
* 3.备注1：容器组件中的store是靠props传进去的，而不是在自身里import引入的

## 求和案例react-redux优化

* 1.容器组件和ui组件整合一个文件
* 2.mapDispatchToProps也可以是一个对象
* 3.不用在index.js中store.subscript检测store的变化，react-redux帮你做了这一步
* 4.当存在多个容器组件，可在index.js中引入Provider组件包裹<APP/>,它负责给每个容器组件传store的

```
import store from './redux/store'
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

```

* 5.一个组件要和redux组件"打交道"要经过几步 （1）定义好UI组件---不暴露

  (2) 引入connect生成一个容器组件，并暴露，写法如下： connect(state=>(
  {key:value}),//映射状态 {key:XXXXAction}，//操作状态的方法
  )(UI组件)
  （3)在UI组件中，通过this.props.xxxxx读取和操作状态

## 求和案例——react-redux多个组件共享数据

* 1.定义一个Person组件和Count组件通过redux共享数据
* 2.为Person组件边界：reducer、action 配置constant常量
* 3.重点：Person的reducer和Count的Reducer使用combineReducer进行合并,合并后的总状态是一个对象
* 4.交给store的是总的reducer

## 求和案例——react-redux开发者工具的使用

* 1.npm install redux-devtools-extension

* 2.在store中配置
  ```
  import {composeWithDevTools} from 'redux-devtools-extension'
  export default createStore(combineReducers({count:countReducer,person:personReducer}),composeWithDevTools(applyMiddleware(thunk)))
  ```

## 求和案例——react-redux最终版

* 1.reducer文件夹下新建一个index.js文件进行整合combineReducers多个组件的reducer，在store中引入
* 2.命名规范

## 打包上线

* 1.npm run build命令打包，会出现一个build文件夹
* 2.可以自行部署一个node服务器或者借助第三方库serve

  1）全局安装 npm i serve -g 2）serve build

# 扩展内容

## setState更新状态的两种写法

* 1.setState(stateChange,[callback])------对象式setState
  ```
   this.setState({count: 99}, () => {
                 //回调函数中可以拿到更新后的值
                 console.log(this.state.count) // 1
             })
  ```
* 2.setState(updater,[callback])-----函数式setState

```
  this.setState((state, props) => {
            return {count: state.count + 1}
        }, () => {
            //回调函数中可以拿到更新后的值
            console.log(this.state.count) // 1
        })
```

* 总结

  （1）对象式setState写法式函数式setState写法的简写方式（语法糖）

  （2）使用规则：

      I 如果新状态不依赖原状态 ===》使用对象方式

      II 如果新状态依赖原状态 ===》使用函数方式
    
      III 如果需要在setState()执行后获取最新的状态数据，要在callback函数中读取（setState是异步的）

## 路由组件的lazyLoad

* 1.引入import React, {Component, **lazy, Suspense**} from 'react';
* 2.路由组件引入方式

```
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
```

* 3.通过<Suspense></Suspense>包裹路由, 通过fallback来加载当路由组件没有加载完成显示的一个组件
  ```
   <Suspense fallback={<Loading/>}>
       {/*注册路由*/}
        <Route path="/about" component={About}/>
        <Route path="/home" component={Home}/>
   </Suspense>
  ```
  **注意：** Loading组件要提前加载好，所以import Loading from "./Loading"引入

## Hooks

* 1.React Hooks/Hooks是React16.8之后增加的新语法，可以让**我们在函数组件中使用state以及其他的React特性**
* 2.三个常用的Hook :

  (1)State Hook：React.useState()

  (2)Effect Hook: React.usrEffect()

  (3)Ref Hook: React.useRef()

### State Hook

* 1.语法: const [xxx,setXxx] = React.useState(initValue)
* 2.setXxx()两种写法
    1. setXxx(newValue):参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
    2. setXxx(value=>newValue):参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值

```
function StateHook() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('张三')

    function handleAdd() {
        setCount(count => {
            return count + 1
        })
    }

    function handleChange() {
        setName(() => '李四')
    }

    return (
        <div>
            <h3>当前的和为:{count}</h3>
            <button onClick={handleAdd}>点我+1</button>
            <h3>我的名字是:{name}</h3>
            <button onClick={handleChange}>改变我的名字</button>
        </div>
    )
}

export default StateHook;

```

### Effect Hook

* 1 . effect Hook 让你能在函数组件中使用到执行副作用操作（类似类组件中的生命周期钩子）
* 2 . react中的副作用操作:发送ajax，设置订阅/启动定时器，手动改写真实的dom
* 3 .

```
 React.useEffect(() => {
        //在此可以执行任何副作用操作
        return () => {
           //在这做一些收尾工作，比如清除定时器/取消订阅等
           //类似于类组件的componentWillUnmount
        }
    }, [stateValue])
    //如果指定[],不监听任何，只会在第一次render调用一次（类似于类组件的componentDidMount）
    //[要监听的值,要监听的值,...]，值的改变都会调用，（类似于类组件的componentDidUpdate）

```

### Ref Hook
使用Ref Hook 可以让函数组件像类组件使用标签

```
const refName = React.useRef()

function XXX() {
   alert( refName.current.value)
   
   }

<input type="text" ref={refName} />

```

## Fragment使用
* 1.<Fragment ></Fragment>相当于vue中的template标签，在DoM树中不会显示
* 2.简写方式<></>
* 3.简写方式的标签上不能有任何属性，Fragment上只能有一个key属性
```
import React, {Component,Fragment} from 'react';

 <Fragment >
    <input type="text"/>
     <input type="text"/>
 </Fragment>
```
## context使用--一种组件间的通信方式，常用于【祖组件】于【后代组件】间通信
* 1. 创建Context容器对象
  ```
  //要创建在组件都共享的空间里
  const MyContext = React.createContext()
  ```
* 2.用MyContext.Provider包裹子组件，value给后代组件传值
```
<MyContext.Provider value={{name, age}}>
                  子组件
 </MyContext.Provider>
```
* 3.后代读取组件
  * 第一种方式：仅试用类组件
  ```
  static contextType = MyContext //声明接收值
  this.context //读取context值使用
  
  
  ```
  *第二种方式：函数组件和类组件都能用
  ```
  <MyContext.Consumer value={{name, age}}>
  {
    value=>( // value是context中的value数据
      要显示的内容
    )
  }
  </MyContext.Consumer>
  
  ```
* **_注意_** ：在应用开发中一般不用context，一般都用它的封装react插件

## 组件优化
  * _**问题**_：setState()即使不改变状态数据，组件也会重新render，子组件没用到父组件的state也会render--效率低
  * **_效率高的做法_**：只有单组件的state或props数据改变才重新render()
  * **_原因_**：Component中shouldComponentUpdate（）总是返回true
  * **_解决：_**： 
    * 1.重写shouldComponentUpdate（）方法，比较新旧state或props数据，如果有变化才返回true，如果没有返回false
    * 2.使用PureComponent(底层重写shouldComponentUpdate)--常用
      
      **_注意：_**: 只是进行state和props数据的浅比较，如果只是数据对象的内部数据变了，返回false,不要直接修改state数据，而是产生新数据
  
## renderProp---插槽
* 1.render props:通过组件标签属性传入结构，一般用render函数属性
```
<A render={(value) => <B value={value}/>}/>
A组件：{this.props.render(A组件内部数据)}
B组件：<span>我从A组件拿到的{this.props.value}</span>
```
* 2.children props --B组件拿不到A组件内部的state数据
```
<A> <B/> </A>
A组件：{this.props.childern}
```
## 错误边界  
* 1.错误边界（Error boundary):用来捕获后代组件的错误，渲染出备用页面
* 2.特点：只能用来捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件，定时器中产生的错误
* 3.使用方法 getDerivedStateFromError配合componentDidCatch
```
//当子组件出现报错时，会触发调用，并携带错误信息
    //state中的某些值永远取决于error
    static getDerivedStateFromError(error) {
        console.log('----error', error)
        return {hasError: error}
    }
    componentDidCatch(error, errorInfo) {
        console.log('此处统计错误，反馈给服务器，用户通知编码人员进行bug解决',error,errorInfo)
    }
```
 
##组件通信方式
* 1.通信方式

  （1）props：children prop 和render prop（插槽）

  （2）消息订阅-发布：pubs-sub、event等

  （3）集中式管理：redux dev等

  （4）conText:生产者-消费者模式
* 2.如何选择搭配
  
  （1）父子组件：props

  （2）兄弟组件：消息订阅，集中式管理

  （3）祖孙组件：消息订阅发布，集中式管理，context（开发用的少，插件用的多）