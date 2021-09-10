import React, {Component} from 'react';
import './index.css'

const MyContext = React.createContext()
const {Provider, Consumer} = MyContext

class A extends Component {
    state = {name: 'Jackson', age: 19}

    render() {
        const {name, age} = this.state
        return (
            <div className="parent">
                <h5>我是A组件（父组件):我叫{name},年龄:{age}</h5>
                <Provider value={{name, age}}>
                    <B/>
                </Provider>

            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className="child">
                <h5>我是B组件(子组件)</h5>
                <C/>
            </div>
        );
    }
}

class C extends Component {
    static contextType = MyContext

    render() {
        console.log(this.context)
        return (
            <div className="grand">
                <h5>我是C组件(孙子组件)</h5>
                <h5>从A组件传过来的值:我叫{this.context.name},年龄:{this.context.age}</h5>
                <D/>
            </div>
        );
    }
}

function D() {
    return (
        <div className="ggrand">
            <h5>我是D组件(曾孙函数组件)
                <span>
                    <Consumer>
                        {
                            value => (`从A组件传过来的数据：我叫${value.name},年龄${value.age}`)
                        }
                    </Consumer>
                </span>
            </h5>
        </div>
    );
}

export default A;