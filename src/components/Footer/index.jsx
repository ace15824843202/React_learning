import React, {Component} from 'react';

import './index.css'

class Footer extends Component {

    delAll=()=>{
        this.setState({arr: []})
    }
    render() {
        return (


                <div className="todo-footer">
                    <label>
                        <input type="checkbox"/>
                    </label>
                    <span>
                      <span>已完成0</span> / 全部{this.props.length}
                    </span>
                    <button className="btn btn-danger" onClick={this.delAll}>清除已完成任务</button>
                </div>

        );
    }
}

export default Footer;