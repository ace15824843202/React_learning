import React, {Component} from 'react';

class SetStateExtension extends Component {
    state = {count: 0}
    handleAdd = () => {
        // const {count} = this.state
        /*
                this.setState({count:count+1}) //setState的更新是异步的
                console.log(this.state.count) // 0

        */


        /*

            // 1.setState 对象式写法
             this.setState({count: count + 1}, () => {
                 //回调函数中可以拿到更新后的值
                 console.log(this.state.count) // 1
             })

         */

        // 2.setState函数式写法
        this.setState((state, props) => {
            return {count: state.count + 1}
        }, () => {
            //回调函数中可以拿到更新后的值
            console.log(this.state.count) // 1
        })
    }
    com

    render() {
        const {count} = this.state
        return (
            <div style={{marginLeft:"40px"}}>
                <h3>当前的和为:{count}</h3>
                <button onClick={this.handleAdd}>点我+1</button>

            </div>
        );
    }
}

export default SetStateExtension;