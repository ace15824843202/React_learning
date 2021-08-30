import React, {Component} from 'react';

const messageData = [
    {id: '01', content: "你好，中国"},
    {id: '02', content: "你好，北京"},
    {id: '03', content: "你好，海淀"},
]

class Detailed extends Component {

    render() {
        const {id, title} = this.props.match.params
        const findContent = messageData.find(obj => {
            return obj.id === id
        })
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