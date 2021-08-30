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

  
    