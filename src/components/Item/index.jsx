import React, {Component} from 'react';
import './index.css'

class Item extends Component {
    static defaultProps = {
        value:'test'
    }
    handleChange=(e)=>{
        console.log('我勾选了',e.target.checked)
    }
    render() {
        const {value} = this.props
        return (
            <li>
                <label>
                    <input type="checkbox" onChange={this.handleChange}/>
                    <span>{value}</span>
                </label>
                <button className="btn btn-danger" style={{display:"none"}}>删除</button>
            </li>
        );
    }
}

export default Item;