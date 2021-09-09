import React, {Component,PureComponent} from 'react';
import './index.css'

class Parent extends PureComponent {
    state={car:'五菱',students:['a','b','c']}
    handleChange = ()=>{
        this.setState({car:"QQ"})
        //PureComponent要直接修改state数据，下面的修改原先的students对象
     /*
     const {students} = this.state
        students.unshift('G')
        this.setState({students})
        */
        const {students} = this.state
        this.setState({students:['G',...students]})

    }
    render() {
        console.log('parent---render')
        const {car,students}= this.state
        return (
            <div className="parent">
              <h5>我是父组件：{car}</h5>
              <h5>学生:{students}</h5>
                <button onClick={this.handleChange}>改变车</button>
                <Child carName={this.state.car}/>
            </div>
        );
    }
}
class Child extends Component {
    render() {
        console.log('child---render')
        return (
            <div className="child">
                <h5>我是子组件</h5>
                <h5>父组件传过来的车为:{this.props.carName}</h5>
            </div>
        );
    }
}

export default Parent;