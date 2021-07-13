import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*/!*JSX-单花括号*!/
function testFun(user) {
    return (<h1>hello,{user.name}</h1>)
}

const userObj = {name: 'TiAmo', age: 25}

/!*JSX-babel转译一个名为createElement函数调用*!/
const element = React.createElement(
    'h1',
    {
        className: 'greeting',
    },
    'Hello World'
)
//两者相等
const element2 = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);
function renderEle() {
    return element
}

ReactDOM.render(
    // testFun(userObj),
    renderEle(),
    document.getElementById('root')
)*/

/*注意事项：存在多个同级html标签，需要一个根标签包裹起来*/
function UserInfo(props) {
    console.log('props', props)
    return (
        <div>
            <div>{props.user.name}</div>
            <div>{props.user.age}</div>
        </div>

    )
}

//2.这种class组件写法等同与函数组件写法
/*class UserInfo extends React.Component{
    render() {
        return(
            <div>
                <div>{this.props.user.name}</div>
                <div>{this.props.user.age}</div>
            </div>
        )
    }
}*/

//1.prop改写state
class Clock extends React.Component {
    //唯一给state 赋值的地方
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    //组件生命周期，组件已经被渲染到 DOM 中后运行
    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return (
            <div>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}

function Content(props) {
    return (
        <div>
            <div>{props.url}</div>
            <UserInfo user={props.author}/>
            <Clock/>
        </div>


    )
}

const data = {
    author: {
        name: 'xi',
        age: 25
    },
    url: 'https://www.baidu.com'
};
/*ReactDOM.render(
    <Content author={data.author} url={data.url}/>,

    document.getElementById('root')
)*/


// 渲染多个组件
const arrNumber = ['one', 'two', 'three', 'four', 'five']
const mapArr = arrNumber.map((item, index) => {
    return <li key={index}>{item}</li>
})
// ReactDOM.render(
//     <ul>{mapArr}</ul>,
//     document.getElementById('root')
// )

//可控表单，state为唯一来源
class MyInput extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('提交的名字:' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>名字:<input type="text" value={this.state.value} onChange={this.handleChange}/></label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

// ReactDOM.render(
//     <MyInput/>,
//     document.getElementById("root")
// )

// 2.实现多个表单同步（状态提升）(华氏度转摄氏度)

function convert(input, type) {

    if (type === 'f') {
        // 摄氏度转华氏度
        return (input - 32) * 5 / 9;
    }
    return (input * 9 / 5) + 32;
}


function translate(temperature, type) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input, type);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.onTemperatureChange(event.target.value)
    }

    render() {
        return (
            <fieldset>
                <label>{this.props.labelName} </label>
                <input type="text" onChange={this.handleChange} value={this.props.inputValue}/>
            </fieldset>
        )
    }
}

class Calculation extends React.Component {
    constructor(props) {
        super(props);
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleSetC = this.handleSetC.bind(this)
        this.handleSetF = this.handleSetF.bind(this)
        this.state = {
            temperature: '',
            type: 'c'
        }
    }

    handleSetC(temperature) {
        console.log('event', temperature)
        this.setState({temperature: temperature, type: 'c'})
    }

    handleSetF(temperature) {
        this.setState({temperature: temperature, type: 'f'})
    }

    render() {
        const cTem = this.state.type === 'c' ? this.state.temperature : translate(this.state.temperature, 'f')
        const fTem = this.state.type === 'f' ? this.state.temperature : translate(this.state.temperature, 'c')
        return (
            <div>
                <TemperatureInput labelName='摄氏度' onTemperatureChange={this.handleSetC} inputValue={cTem}/>
                <TemperatureInput labelName='华氏度' onTemperatureChange={this.handleSetF} inputValue={fTem}/>
            </div>
        )
    }
}

// ReactDOM.render(
//     <Calculation />,
//     document.getElementById('root')
// )

// 3.传递组件，类似vue中的slot，用prop传递

function Parent(props) {
    return (
        <div>
            我是父组件
            {props.children}

        </div>
    )
}

function MNameParent(props) {
    return (
        <div>
            我是父组件2
            <div style={{color: "red"}}>{props.childLeft}</div>
            <div style={{color: "yellow"}}>{props.childRight}</div>
        </div>
    )
}

// ReactDOM.render(
//     <Parent>
//         <MNameParent childLeft={<div>我是子组件1</div>} childRight={<div>我是子组件2</div>}/>
//     </Parent>,
//     document.getElementById('root')
// )

// 4.练习示例


class LiList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.arr.map(item => {

                if (this.props.check) {
                    if (item.stocked) {
                        return (<div key={item.name}><span className="listStyle"
                                                           style={{color: item.stocked ? '' : 'red'}}>{item.name}</span>
                            <span className="listStyle">{item.price}</span></div>)
                    } else {
                        return null
                    }

                } else {
                    return (<div key={item.name}><span className="listStyle"
                                                       style={{color: item.stocked ? '' : 'red'}}>{item.name}</span>
                        <span className="listStyle">{item.price}</span></div>)
                }

            }))
    }
}

const defaultArr = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            check: true,
            arr: [
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
            ]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeBox = this.handleChangeBox.bind(this)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
//动态控制输入框的焦点获取
        this.inputRef.current.focus()
    }

    handleChange(e) {

        let newArr = this.state.arr.filter(item => {
            if (item.name.indexOf(e.target.value) !== -1) {
                return item
            }
            return
        })
        if (!e.target.value) {
            newArr = defaultArr
        }
        this.setState({search: e.target.value, arr: newArr})

    }

    handleChangeBox(e) {
        this.setState({check: e.target.checked})
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} onChange={this.handleChange} value={this.state.search}/>
                <input type="checkbox" onChange={this.handleChangeBox} checked={this.state.check}/>Only show products in
                stock
                <div>
                    <span className="listStyle">Name</span> <span className="listStyle">Price</span>
                    <LiList arr={this.state.arr} check={this.state.check} search={this.state.search}/>

                </div>
            </div>
        )
    }
}
/*ReactDOM.render(
    <SearchInput/>,
    document.getElementById('root')
)*/



// 6.全局变量context
const ThemeContext = React.createContext('light')
const ZhContext = React.createContext('zh')

class ToolbarButton extends React.Component {
    static contextType = ZhContext

    render() {
        return (
            <div>{this.context}</div>
        )
    }
}

function Toolbar() {


    return (
        <div>
            <ToolbarButton/>
        </div>
    )
}


function Sidebar() {

    return (
        <ThemeContext.Consumer>
            {theme => (
                <ZhContext.Consumer>
                    {value => {
                        return (
                            <div>
                                {value},{theme}
                            </div>
                        )
                    }}
                </ZhContext.Consumer>)}

        </ThemeContext.Consumer>
    )


}

class ThemeWarp extends React.Component {

    render() {
        return (
            <ThemeContext.Provider value='dark'>
                <ZhContext.Provider value='En'>
                    <Toolbar/>
                    <Sidebar/>
                </ZhContext.Provider>
            </ThemeContext.Provider>
        )
    }
}

/*ReactDOM.render(
    <ThemeWarp/>,
    document.getElementById('root')
)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// 注意事项
/*
* 一.JSX中label的属性for改为了htmlFor
* 二.当需要一个外标签时，将标签分组，又不想在DOM中添加额外节点在React中用<React.Fragments>标签包裹(或者短语法<></>)，
* vue中用template，小程序用block标签包裹
* 三.React中"插槽"用prop接收，Vue中有Slot
* 四.JSX中行内样式style={{color:'red',...}}，第一层花括号是JSX解析{}，第二层花括号是对象格式的{}
* 五.
* （1）Dom的ref constructor(props){ super(props) this.inputRef = React.createRef()}
* （2）使用React.forwardRef(()=>())将外层的ref传递到子组件
* 六.
* （1）全局变量React.createContext（'light），Context.Provider 接收 ，Class.contextType
* （2）嵌套深的组件，可以用consumers更新context
* <MyContext.Consumer>
*  {value =>基于 context 值进行渲染}
*</MyContext.Consumer>
* 七.用Api.displayName可以改变在devTools中显示的名字（例如：context.displayName,forwardRef.displayName）
* 八.高阶组件HOC，订阅监听（DataSource.addChangeListener(function)），取消监听（DataSource.removeChangeListener(function)）
* 九.继承React.pureComponent来代替手写的shouldComponentUpdate
* 十.通过portal进行事件冒泡
*
*
*
*/