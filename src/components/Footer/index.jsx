import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './index.css'

class Footer extends Component {
    static  propTypes = {
        clearChecked:PropTypes.func.isRequired,
        len:PropTypes.number,
        todoList: PropTypes.array
    }
    check = React.createRef()

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {len, todoList} = this.props
        this.check.current.checked = len === todoList.length
    }
    handleClear=()=>{
        this.props.clearChecked()
    }

    render() {
        const {todoList, len} = this.props
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" ref={this.check}/>
                </label>
                <span>
                      <span>已完成{len}</span> / 全部{todoList.length}
                    </span>
                <button className="btn btn-danger" onClick={this.handleClear}>清除已完成任务</button>
            </div>

        );
    }
}

export default Footer;