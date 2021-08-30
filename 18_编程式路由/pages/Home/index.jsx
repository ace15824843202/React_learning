import React, {Component} from 'react';
import {Route, Redirect, Switch} from "react-router-dom"
import MyNavLink from "../../components/MyNavLink";
import News from "./News";
import Message from "./Message";

class Home extends Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/home/message/detailed', {id: '01', title: '消息1'})
    //     },2000)
    // }

    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/Message">Message</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News}/>
                        <Route path="/home/message" component={Message}/>
                        <Redirect to="/home/news"/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;