import React, {Component} from 'react';
import './index.css'

class HeaderInput extends Component {
    inputRef = React.createRef()
    handleKeyUp = (e) => {
        if (e.target.value.trim() === '') {
            alert('请输入内容')
            return
        }
        if (e.keyCode === 13) {
            this.props.addTodo(e.target.value)
            e.target.value = null
        }

    }

    render() {
        return (
            <div className="todo-header">
                <input ref={this.inputRef} onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default HeaderInput;