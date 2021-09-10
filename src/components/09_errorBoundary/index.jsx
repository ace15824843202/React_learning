import React, {PureComponent} from 'react';
import Child from "./Child";
import './index.css'

class Parent extends PureComponent {
    state = {
        hasError: "",//用于标识子组件是否产生错误
    }
    //当子组件出现报错时，会触发调用，并携带错误信息
    //state中的某些值永远取决于error
    static getDerivedStateFromError(error) {
        console.log('----error', error)
        return {hasError: error}
    }
    componentDidCatch(error, errorInfo) {
        console.log('此处统计错误，反馈给服务器，用户通知编码人员进行bug解决',error,errorInfo)
    }

    render() {
        return (
            <div className="parent">
                <h5>我是父组件</h5>
                {/*在开发环境会显示一瞬间*/}
                {this.state.hasError ? <h2>子组件报错的状态，给用户的一个友好提示，以至于不会影响到其他组件</h2> : <Child className="a"/>}

            </div>
        );
    }
}

export default Parent;