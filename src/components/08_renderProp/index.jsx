import React, {PureComponent} from 'react';
import './index.css'

class Parent extends PureComponent {
    state = {car: '五菱'}

    render() {
        const {car} = this.state
        return (
            <div className="parent">
                <h5>我是父组件：{car}</h5>
                <A render={(name) => <B name={name}/>}/>
            </div>
        );
    }
}

class A extends PureComponent {
    state = {name: "A"}

    render() {
        return (
            <div className="a">
                我是A组件
                {this.props.render(this.state.name)}
            </div>

        )

    }
}

class B extends PureComponent {
    render() {
        return (
            <div className="b">
                我是B组件
                <span>我从A组件拿到的{this.props.name}</span>
            </div>

        )

    }
}

export default Parent;