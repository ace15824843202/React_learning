import React, {Component} from 'react';
import {Button, Select} from 'antd'

const {Option} = Select;

class Count extends Component {
    state = {count: 0, selectVal: 1}
    handleChange = (value) => {
        this.setState({selectVal: value})

    }
    increment = () => {
        const {count, selectVal} = this.state
        this.setState({count: count + selectVal * 1})
    }
    reduce = () => {
        const {count, selectVal} = this.state
        this.setState({count: count - selectVal * 1})
    }
    incrementIfOdd = () => {
        const {count, selectVal} = this.state
        if (count % 2 !== 0) {
            this.setState({count: count + selectVal * 1})
        }

    }
    incrementAsyn = () => {
        const {count, selectVal} = this.state
        setTimeout(() => {
            this.setState({count: count + selectVal * 1})
        }, 1000)


    }

    render() {
        const {count} = this.state
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
                &nbsp;<Button onClick={this.incrementAsyn}>异步+</Button>

            </div>
        );
    }
}

export default Count;