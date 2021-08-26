import React, {Component} from 'react';
import {NavLink,Route} from 'react-router-dom'
//路由页面组件 没有传props也能收到props里面有{history,match,location}
import Home from "./pages/Home"
import About from "./pages/About"
//一般组件
import Header from "./components/Header"

/*
路由的基本使用
* 1.明确好界面中的导航区、展示区
* 2.导航区的a标签改成Link标签
* <Link to ="/xxx">Demo<Link/>
* 3.展示区Route标签进行路径匹配
*   <Route path="/xxx" component={Demo} />
* 4.<App>的最外层包裹一个<BrowserRouter/>或<HashRouter/>
*
* */
/*
路由组件和一般组件的区别
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

* */

class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <Header/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*编写路由链接*/}
                            {/*NavLink有高亮效果，而Link没有，可以添加activeClassName*/}
                            <NavLink activeClassName="activeClass" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="activeClass" className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;