import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './index.css'

class Footer extends Component {
    static  propTypes = {
        clearChecked: PropTypes.func.isRequired,
        todoList: PropTypes.array
    }
    check = React.createRef()

    handleClear = () => {
        this.props.clearChecked()
    }
    handleChange = () => {
        this.props.handleCheckAll(this.check.current.checked)
    }


    render() {
        const {todoList} = this.props
        const completeCount = todoList.reduce((pre, cur) => {
            return pre + (cur.checked ? 1 : 0)
        }, 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" ref={this.check}
                           checked={completeCount === todoList.length && todoList.length !== 0 ? true : false}
                           onChange={this.handleChange}/>
                </label>
                <span>
                      <span>已完成{completeCount}</span> / 全部{todoList.length}
                    </span>
                <button className="btn btn-danger" onClick={this.handleClear}>清除已完成任务</button>
            </div>

        );
    }
}

export default Footer;