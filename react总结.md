##jsx语法规则：
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
* 1.写法不同
  一般组件: <Demo/>
  路由组件：<Route path="/xxx" component={Demo} />
* 2.存放位置不同：
  一般组件:components
  路由组件：pages
* 3.接收到的props不同：
  一般组件：写组件传递什么接收什么
  路由组件：接收到固定的三个属性
  history:
  go: ƒ go(n)
  goBack: ƒ goBack()
  goForward: ƒ goForward()
  push: ƒ push(path, state)
  replace: ƒ replace(path, state)
  location:
  pathname: "/about"
  search: ""
  state: undefined
  match:
  params: {}
  path: "/about"
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
* 接受参数：const searchParams = this.props.location.search
            const {id, title} = qs.parse(searchParams.slice(1))
* 备注：获取search是urlencoded编码字符串，需要借助querystring解析

## state传递参数 （常用）
* 路由链接（携带参数）： <Link to=to={{
pathname: '/home/message/detailed',
state: {id: obj.id, title: obj.title}
}} >你好</Link>
* 注册路由（无需声明接收）： <Route path="/home/message/detailed" component={Detailed}/>
* 接受参数：const {id,title} = this.props.location.state
* 备注：刷新也可以保留住参数，参数不会显示在地址栏中


##replace跳转模式
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

  
    const {override, fixBabelImports,addLessLoader} = require('customize-cra');
    //按需引入antd的样式文件
    module.exports = override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
        }),
      //修改主题 这里注意less-loader插件的版本不能过高，太高不支持这种写法
      addLessLoader({
        lessOptions: {
        javascriptEnabled: true,//允许用js修改
        modifyVars: {'@primary-color': '#1DA57A'},
        },
      }),
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
* 5.一个组件要和redux组件"打交道"要经过几步
 （1）定义好UI组件---不暴露
  
  (2) 引入connect生成一个容器组件，并暴露，写法如下：
      connect(state=>(
  {key:value}),//映射状态
  {key:XXXXAction}，//操作状态的方法
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
  
    1）全局安装 npm i serve -g
  
    2）serve build