import React, {Component} from 'react';
import Count from './container/Count'
import store from './redux/store'



class App extends Component {

    render() {
        return (
            <Count store={store}/>
        );
    }
}

export default App;