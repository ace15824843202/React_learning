import React from 'react';
import ReactDOM from 'react-dom';

/*class RefHook extends React.Component {
    inputRef = React.createRef()
    state = {count: 0}
    showInput = () => {
        alert(this.inputRef.current.value)
    }
    handleAdd = () => {
        this.setState((state, props) => {
            return {count: state.count + 1}
        }, () => {
            //回调函数中可以拿到更新后的值
            console.log(this.state.count) // 1
        })
    }
    unload =()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState(state=>({count: state.count+1}))
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }


    render() {
        const {count} = this.state
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <h2>当前的和为:{count}</h2>
                <button onClick={this.handleAdd}>点我+1</button>&nbsp;
                <button onClick={this.unload}>卸载组件</button>
                <button onClick={this.showInput}>展示input内容</button>

            </div>
        );
    }
}*/

function RefHook() {
    const inputRef = React.useRef()
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count])


    function handleAdd() {
        setCount(count => {
            return count + 1
        })
    }
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function showInput(){
        alert(inputRef.current.value)
    }

    return (

        <div style={{marginLeft: "40px"}}>

            <input type="text" ref={inputRef}/>
            <h3>当前的和为:{count}</h3>
            <button onClick={handleAdd}>点我+1</button>
            &nbsp;
            <button onClick={unmount}>卸载组件</button>
            &nbsp;
            <button onClick={showInput}>展示input框内容</button>

        </div>
    )
}

export default RefHook;