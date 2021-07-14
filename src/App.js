import './App.css';
import React, {Component} from 'react';
import {nanoid} from "nanoid";

import HeaderInput from "./components/HeaderInput";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";


//子给父传递数据（只用于展示），可以从父传个函数给子，子把数据当作参数传回给父
class App extends Component {
    state = {
        todoList: [
            {id: 1, value: 'test1', checked: false},
            {id: 2, value: 'test2', checked: false},
            {id: 3, value: 'test3', checked: false},
        ],
        len: 0
    }
    //input输入
    addTodo = (data) => {
        const {todoList} = this.state
        const newObj = {id: nanoid(), value: data, checked: false}
        this.setState({todoList: [...todoList, newObj]})
    }
    // check操作
    changeChecked = (id, checked) => {
        const {todoList} = this.state
        const changeObj = todoList.map(item => {
            if (item.id === id) {
                item.checked = checked
            }
            return item
        })
        this.setState({todoList: changeObj})
        //修改footer的值
        const checkList = todoList.filter(item => {
            if (item.checked) {
                return item
            }
        })
        this.setState({len: checkList.length})

    }
    //清除已完成任务
    clearChecked = (id) => {
        const {todoList} = this.state
        const checkFalse = todoList.filter(item => {
            if (id) {
                if (item.id !== id) return item
            } else {
                if (!item.checked) return item
            }

        })
        console.log('checkFalse', checkFalse)
        this.setState({todoList: checkFalse, len: 0})
    }

    render() {
        const {todoList, len} = this.state
        return (
            <div className="App">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <HeaderInput addTodo={this.addTodo}/>
                        <ToDoList todoList={todoList} changeChecked={this.changeChecked}
                                  delChecked={this.clearChecked}/>
                        <Footer todoList={todoList} len={len} clearChecked={this.clearChecked}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
