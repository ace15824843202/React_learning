import React, {Component} from 'react';
import './index.css'
import PropTypes from 'prop-types'

class Item extends Component {
    static  propTypes = {
        delChecked: PropTypes.func.isRequired,

    }
    state = {enter: false}

    handleChange = (id) => {
        return (e) => {

            this.props.changeChecked(id, e.target.checked)


        }

    }
    handleMouse = (flag) => {
        return () => {
            this.setState({enter: flag})
        }
    }
    handleDel = (id) => {
        return () => {
            if (window.confirm('确定删除么？')) {
                this.props.delChecked(id)
            }
        }
    }

    render() {
        const {id, value, checked} = this.props
        const {enter} = this.state
        return (
            <li style={{background: enter ? '#ddd' : '#fff'}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" onChange={this.handleChange(id)} checked={checked}/>
                    <span>{value}</span>
                </label>
                <button className="btn btn-danger" style={{display: enter ? 'block' : 'none'}}
                        onClick={this.handleDel(id)}>删除
                </button>
            </li>
        );
    }
}

export default Item;