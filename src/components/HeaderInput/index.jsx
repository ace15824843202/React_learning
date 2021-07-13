import React, {Component} from 'react';
import './index.css'

class HeaderInput extends Component {
    handleKeyUp=(e)=>{
        if(e.keyCode===13){
            console.log('sddsdf',e.target.value)
        }

    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default HeaderInput;