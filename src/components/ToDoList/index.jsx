import React, {Component} from 'react';
import Item from "../Item";
import './index.css'

class ToDoList extends Component {

    render() {
        const {todoList,changeChecked,delChecked} = this.props
        return (
                <ul className="todo-main" >
                    {
                        todoList.map((item) => {
                            return <Item  changeChecked={changeChecked}  delChecked={delChecked} key={item.id} {...item}/>
                        })
                    }

                </ul>

        );
    }
}

export default ToDoList;