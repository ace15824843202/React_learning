import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {
    getData = ()=>{//代理服务器是开在前端的端口，（跨域是发送成功，数据返回被拦截）
        axios.get('http://localhost:3000/api1/students').then(res=>{

            console.log('students',res)
        },error=>{})
    }
    getCar = ()=>{
        axios.get('http://localhost:3000/api2/cars').then(res=>{

            console.log('cars',res)
        },error=>{})
    }
    render() {
        return (
            <div>
             <button onClick={this.getData}>点我获取学生数据</button>
             <button onClick={this.getCar}>点我获取汽车数据</button>
            </div>
        );
    }
}

export default App;