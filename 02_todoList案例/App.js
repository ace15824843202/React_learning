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

    }
    handleCheckAll = (flag) => {
        const {todoList} = this.state
        const newTodos = todoList.map(item => {
            return {...item, checked: flag}
        })
        this.setState({todoList: newTodos})


    }
    //清除已完成任务
    clearChecked = (id) => {
        const {todoList} = this.state
        const checkFalse = todoList.filter(item => {
            if (id) {
                return item.id !== id
            } else {
                return !item.checked
            }

        })
        this.setState({todoList: checkFalse})
    }

    render() {
        const {todoList} = this.state
        return (
            <div className="App">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <HeaderInput addTodo={this.addTodo}/>
                        <ToDoList todoList={todoList} changeChecked={this.changeChecked}
                                  delChecked={this.clearChecked}/>
                        <Footer todoList={todoList}
                                handleCheckAll={this.handleCheckAll}
                                clearChecked={this.clearChecked}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
