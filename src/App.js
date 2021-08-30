import React, {Component} from 'react';
import {Button} from 'antd'
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';


class App extends Component {

    render() {
        return (
            <div>
             APP.....
                <Button type="primary"> Button</Button>
                <SmileTwoTone />
                <HeartTwoTone twoToneColor="#eb2f96" />
                <CheckCircleTwoTone twoToneColor="#52c41a" />
            </div>

        );
    }
}

export default App;