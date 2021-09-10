import React, {Component} from 'react';

class Child extends Component {
    //正确的值

    /*state = {students:[
        {id:'01',name:'Jack',age:18},
        {id:'02',name:'Mary',age:18},
        {id:'03',name:'Hani',age:18}
        ]}*/

    //错误的值
    state={students:''}

    render() {

        const {students} = this.state
        return (
            <div className={this.props.className}>
                <div>我是子组件</div>
                {
                    students.map(item=>{
                        return (<p key={item.id}>{item.name}---{item.age}</p>)
                    })
                }

            </div>
        );
    }
}

export default Child;