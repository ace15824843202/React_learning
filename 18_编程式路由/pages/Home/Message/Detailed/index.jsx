import React, {Component} from 'react';
// import qs from 'querystring'

const messageData = [
    {id: '01', content: "你好，中国"},
    {id: '02', content: "你好，北京"},
    {id: '03', content: "你好，海淀"},
]

class Detailed extends Component {

    render() {
        console.log('props', this.props)
        //获取params参数
        // const {id, title} = this.props.match.params || {}

        //获取search参数
        /*const searchParams = this.props.location.search
        const {id, title} = qs.parse(searchParams.slice(1)) || {}*/

        //获取state参数
        const {id, title} = this.props.location.state

        const findContent = messageData.find(obj => {
            return obj.id === id
        }) || {}
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findContent.content}</li>
            </ul>
        );
    }
}

export default Detailed;