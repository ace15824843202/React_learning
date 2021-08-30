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
                                    <Link
                                        to={`/home/message/detailed?id=${obj.id}&title=${obj.title}`}>{obj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>

                {/*params声明接受参数*/}
                {/*<Route path="/home/message/detailed/:id/:title" component={Detailed}/>*/}

                {/*search无需声明接受参数 直接注册路由即可*/}
                <Route path="/home/message/detailed" component={Detailed}/>
            </div>

        );
    }
}

export default Message;