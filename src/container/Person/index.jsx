import React, {Component} from 'react';
import {Button, Input} from 'antd'
import {connect} from "react-redux";
import {nanoid} from "nanoid";
import {createAddPersonAction} from "../../redux/actions/person";

class Person extends Component {
    state={name:null,age:null}
    handleOnBlur=(e,filed)=>{
        this.setState({[filed]:e.target.value})
    }
    addPerson = ()=>{
        const  data = {id:nanoid,...this.state}
        this.props.addPerson(data)
        this.setState({name:null,age:null})
    }
    render() {
        const {count,person} = this.props
        return (
            <div>
                <h2>Person组件</h2>
                <Input
                    style={{ width: '20%' }}
                    onBlur={(e)=>{this.handleOnBlur(e,'name')}}
                    placeholder="请输入姓名"
                    allowClear
                />
                &nbsp;
                <Input
                    style={{ width: '20%' }}
                    onBlur={(e)=>{this.handleOnBlur(e,'age')}}
                    placeholder="请输入年龄"
                    allowClear
                />
                &nbsp;<Button onClick={this.addPerson}>添加</Button>
                <hr/>
                <h4>求和为:{count}</h4>
                <hr/>
                <ul>
                    {
                        person.map((item)=>{
                            return(
                                <li key={item.id}>姓名:{item.name} 年龄:{item.age}</li>
                            )

                        })
                    }
                </ul>
            </div>
        );
    }
}


export default connect(
    state=>({...state}),
    {
        addPerson:createAddPersonAction
    }
    )(Person)