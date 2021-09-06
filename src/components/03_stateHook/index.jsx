import React from 'react';

/*
class StateHook extends React.Component {
    state = {count: 0}
    handleAdd = () => {
        this.setState((state, props) => {
            return {count: state.count + 1}
        }, () => {
            //回调函数中可以拿到更新后的值
            console.log(this.state.count) // 1
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h2>当前的和为:{count}</h2>
                <button onClick={this.handleAdd}>点我+1</button>

            </div>
        );
    }
}
*/
function StateHook() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('张三')

    function handleAdd() {
        setCount(count => {
            return count + 1
        })
    }

    function handleChange() {
        setName('李四')
    }

    return (
        <div style={{marginLeft:"40px"}}>
            <h3>当前的和为:{count}</h3>
            <button onClick={handleAdd}>点我+1</button>
            <h3>我的名字是:{name}</h3>
            <button onClick={handleChange}>改变我的名字</button>
        </div>
    )
}

export default StateHook;