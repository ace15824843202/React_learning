
//引入connect用于🔗UI组件与redux
import {connect} from "react-redux";
import {creatIncrementAction, creatReduceAction,createIncrementAsyncAction} from "../../redux/count_action"

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
        const {count} = this.props
        return (
            <div style={{margin: '20px'}}>
                <h3>求和为:{count}</h3>
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

            </div>
        );
    }
}


/*
* 1.mapStateToProps函数返回的是一个对象
* 2.返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件的props的value
* 3.mapStateToProps用于传递状态
*
* */
//一般写法
// const  mapStateToProps =state=> ({count: state})

/*
* 1.mapDispatchToProps函数返回的是一个对象
* 2.返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件的props的value
* 3.mapStateToProps用于传递操作状态的方法
*
* */

//一般写法
/*const mapDispatchToProps = dispatch=> (
{
        jia: (number) => dispatch(creatIncrementAction(number)),
        jian: (number) => dispatch(creatReduceAction(number)),
        jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time)),
    }
)*/

//使用connect()()创建并暴露一个Count容器组件
//简写优化
export default connect(
    state=> ({count: state}),
    {
        jia:creatIncrementAction,
        jian: creatReduceAction,
        jiaAsync:createIncrementAsyncAction,
    }
    )(Count)