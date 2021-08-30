import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Detailed from "./Detailed";

class Message extends Component {
    state = {
        messageArr: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息3'},
        ]
    }
    pushRoute = (id, title) => {
        // params参数
        // this.props.history.push(`/home/message/detailed/${id}/${title}`)

        // search参数
        // this.props.history.push(`/home/message/detailed?id=${id}&title=${title}`)

        // state参数
        this.props.history.push(`/home/message/detailed`,{id:id,title:title})

    }
    replaceRoute = (id, title) => {
        // params参数
        // this.props.history.replace(`/home/message/detailed/${id}/${title}`)

        // search参数
        // this.props.history.replace(`/home/message/detailed?id=${id}&title=${title}`)

        // state参数
        this.props.history.replace(`/home/message/detailed`,{id:id,title:title})

    }

    back = ()=>{
        this.props.history.goBack()
    }

    forward = ()=>{
        this.props.history.goForward()
    }

    go = ()=>{
        this.props.history.go(2)
    }

    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map(obj => {
                            return (
                                <li key={obj.id}>
                                    {/*params传递参数*/}
                                    {/*<Link to={`/home/message/detailed/${obj.id}/${obj.title}`}>{obj.title}</Link>*/}

                                    {/*search传递参数*/}
                                    {/*<Link to={`/home/message/detailed?id=${obj.id}&title=${obj.title}`}>{obj.title}</Link>*/}

                                    {/*state传递参数*/}
                                    <Link to={{ pathname: '/home/message/detailed',state: {id: obj.id, title: obj.title}}}>{obj.title}</Link>

                                    &nbsp;
                                    <button
                                        onClick={()=>this.pushRoute(obj.id, obj.title)}>push跳转
                                    </button>
                                    &nbsp;
                                    <button
                                        onClick={()=>this.replaceRoute(obj.id, obj.title)}>replace跳转
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <button onClick={this.back}>回退</button>&nbsp; <button onClick={this.forward}>前进</button>
                &nbsp; <button onClick={this.go}>go</button>
                <hr/>
                {/*params声明接受参数*/}
                {/*<Route path="/home/message/detailed/:id/:title" component={Detailed}/>*/}

                {/*search无需声明接受参数 直接注册路由即可*/}
                {/*<Route path="/home/message/detailed" component={Detailed}/>*/}

                {/*state无需声明接受参数 直接注册路由即可*/}
                <Route path="/home/message/detailed" component={Detailed}/>
            </div>

        );
    }
}

export default Message;