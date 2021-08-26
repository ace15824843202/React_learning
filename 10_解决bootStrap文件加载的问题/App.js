import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
//路由页面组件 没有传props也能收到props里面有{history,match,location}
import Home from "./pages/Home"
import About from "./pages/About"
//一般组件
import Header from "./components/Header"
import MyNavLink from "./components/MyNavLink";

/*
解决多级路径刷新页面样式丢失的问题
例如：<Route path="/test/about" component={About}/>
* 1.public/index.html 中 引入样式时不写（./和../）写/（常用）
* 2.public/index.html 中 引入样式时不写（./和../）写%PUBLIC_URL%（常用，只能在react脚手架里用）
* 3.使用hashRouter #后面的都不会带给服务器
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
                            <MyNavLink to="/test/about">About</MyNavLink>
                            <MyNavLink to="/test/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Switch>
                                    <Route path="/test/about" component={About}/>
                                    <Route path="/test/home" component={Home}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;