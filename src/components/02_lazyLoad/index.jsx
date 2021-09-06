import React, {Component, lazy, Suspense} from 'react';
import {Link, Route} from 'react-router-dom'
import Loading from "./Loading"
// import Home from "./Home"
// import About from "./About"
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

class LazyLoad extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*编写路由链接*/}
                            <Link className="list-group-item" to="/about">About</Link>
                            <Link className="list-group-item" to="/home">Home</Link>
                            {/*     <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a>*/}
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Suspense fallback={<Loading/>}>
                                    {/*注册路由*/}
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                </Suspense>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default LazyLoad;