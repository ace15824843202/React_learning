import React, {Component} from 'react';
import Item from "../Item";
import './index.css'

class ToDoList extends Component {
    state = {
        arr: []
    }


    componentDidMount() {
        const {arr} = this.state
        this.setState({arr: [...arr, this.props.value]})
    }

    render() {
        const {arr} = this.state
        return (
                <ul className="todo-main" >
                    {
                        arr.map((item) => {
                            return <Item key={item} value={item}/>
                        })
                    }

                </ul>

        );
    }
}

export default ToDoList;