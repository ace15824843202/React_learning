import React, {Component} from 'react';
import Item from "../Item";
import './index.css'
import PropTypes from 'prop-types'

class ToDoList extends Component {
    static  propTypes = {
        changeChecked:PropTypes.func.isRequired,
        delChecked:PropTypes.func.isRequired,
        todoList: PropTypes.array
    }

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