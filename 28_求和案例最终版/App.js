import React, {Component} from 'react';
import Count from './container/Count'
import Person from './container/Person'


class App extends Component {

    render() {
        return (
            <div style={{margin:"20px"}}>
                <Count/>
                <hr style={{margin:"80px 20px"}}/>
                <Person/>
            </div>

        );
    }
}

export default App;