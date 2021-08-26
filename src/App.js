import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
//路由页面组件 没有传props也能收到props里面有{history,match,location}
import Home from "./pages/Home"
import About from "./pages/About"
import Test from "./pages/Test"
//一般组件
import Header from "./components/Header"
import MyNavLink from "./components/MyNavLink";

/*
navLink与NavLink封装
    1.NavLink可以实现路由链接高亮，通过activeClassName设置样式
    2.标签体内容是一个特殊的标签属性
    3.通过this.props.children可以获取标签体内容

 */

/*
Switch的使用
    1.通常情况下，path和component是一一对应的关系
    2.如果path对应多个组件，匹配到了第一个，也会继续向下匹配，展示多个组件。效率低下
         <Route path="/about" component={About}/>
         <Route path="/home" component={Home}/>
          <Route path="/aba" component={aba}/>
          <Route path="/home" component={Test}/>

    3.Switch可以提高路由匹配的效率（单一匹配）,匹配到了就不会继续向下匹配

 */


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
                                    <Route path="/home" component={Test}/>
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