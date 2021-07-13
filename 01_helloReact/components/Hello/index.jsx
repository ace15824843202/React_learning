import React,{Component} from 'react'
//样式的模块化
import hello from './index.module.css'
export default class Hello extends Component{
    render(){
        return(
            <div className={hello.title}>Hello React!!!</div>
        )
    }
}