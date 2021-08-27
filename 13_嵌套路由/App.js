import React, {Component} from 'react';
import {Switch, Route,Redirect} from 'react-router-dom'
//路由页面组件 没有传props也能收到props里面有{history,match,location}
import Home from "./pages/Home"
import About from "./pages/About"
//一般组件
import Header from "./components/Header"
import MyNavLink from "./components/MyNavLink";

/*
嵌套路由
* 1.注册子路由时要写上父路由的path值
* 2.路由的匹配是按照注册路由的顺序进行的
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
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Switch>
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                    {/*重定向*/}
                                    <Redirect to="/about"/>
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