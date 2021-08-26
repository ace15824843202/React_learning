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
    1.默认使用模糊匹配（【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
    2.开启严格匹配：<Route exact path="/home" component={Home}/>
    3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
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
                            <MyNavLink to="/about">About</MyNavLink>
                            {/*默认模糊匹配*/}
                            <MyNavLink to="/home">Home</MyNavLink>
                            <MyNavLink to="/home/a/b">Home/a/b</MyNavLink>
                            {/*这个模糊匹配不上*/}
                            <MyNavLink to="/a/home/b">/a/home/b</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Switch>
                                    {/*严格匹配*/}
                                    <Route exact path="/about" component={About}/>
                                    <Route exact path="/home" component={Home}/>
                                    {/*<Route path="/about" component={About}/>*/}
                                    {/*<Route path="/home" component={Home}/>*/}
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