
//引入connect用于🔗UI组件与redux
import {connect} from "react-redux";
import {creatIncrementAction, creatReduceAction,createIncrementAsyncAction} from "../../redux/actions/count"

import React, {Component} from 'react';
import {Button, Select} from 'antd'

const {Option} = Select;

class Count extends Component {
    state = {selectVal: 1}

    handleChange = (value) => {
        this.setState({selectVal: value})


    }
    increment = () => {
        const {selectVal} = this.state
        this.props.jia(selectVal * 1)
    }
    reduce = () => {
        const {selectVal} = this.state
        this.props.jian(selectVal * 1)
    }
    incrementIfOdd = () => {
        const {selectVal} = this.state
        if (this.props.count % 2 !== 0) {
            this.props.jia(selectVal * 1)
        }

    }
    incrementAsync = () => {
        const {selectVal} = this.state
        this.props.jiaAsync(selectVal * 1,1000)

    }

    render() {
        const {count,person} = this.props
        return (
            <div>
                <h2>Count组件</h2>
                <h4>求和为:{count}</h4>
                <Select defaultValue="1" style={{width: 120}} onChange={this.handleChange}>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">
                        3
                    </Option>
                    <Option value="4">4</Option>
                </Select>

                &nbsp;<Button onClick={this.increment}>+</Button>
                &nbsp;<Button onClick={this.reduce}>-</Button>
                &nbsp;<Button onClick={this.incrementIfOdd}>求和为奇数加</Button>
                &nbsp;<Button onClick={this.incrementAsync}>异步+</Button>

                <hr/>
                <h4>下方人数为:{person.length}</h4>
            </div>
        );
    }
}

export default connect(
    state=> ({...state}),
    {
        jia:creatIncrementAction,
        jian: creatReduceAction,
        jiaAsync:createIncrementAsyncAction,
    }
    )(Count)