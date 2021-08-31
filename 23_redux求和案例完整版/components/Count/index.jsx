import React, {Component} from 'react';
import {Button, Select} from 'antd'
//引入store，获取值
import store from "../../redux/store";
//引入createAction
import {creatIncrementAction,creatReduceAction} from "../../redux/count_action"

const {Option} = Select;

class Count extends Component {
    state = { selectVal: 1}

    //不在这里写，在index.js中写，好处在于尽管多个页面用到store，不用在每个页面里都写监听
    /*
    componentDidMount() {
         //检测redux中状态的变化，只要变化，就调用render
         store.subscribe(()=>{
             this.setState({})
         })
     }*/

    handleChange = (value) => {
        this.setState({selectVal: value})

    }
    increment = () => {
        const {selectVal} = this.state
        store.dispatch(creatIncrementAction(selectVal*1))
    }
    reduce = () => {
        const {selectVal} = this.state
        store.dispatch(creatReduceAction(selectVal*1))
    }
    incrementIfOdd = () => {
        const {selectVal} = this.state
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(creatIncrementAction(selectVal*1))
        }

    }
    incrementAsyn = () => {
        const {selectVal} = this.state
        setTimeout(() => {
            store.dispatch(creatIncrementAction(selectVal*1))
        }, 1000)


    }

    render() {
        return (
            <div style={{margin: '20px'}}>
                <h3>求和为:{store.getState()}</h3>
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
                &nbsp;<Button onClick={this.incrementAsyn}>异步+</Button>

            </div>
        );
    }
}

export default Count;