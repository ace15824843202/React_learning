import React, {Component} from 'react';
import Search from "./components/Search";
import ImageList from "./components/ImageList";

import './App.css'

class App extends Component {
    state = {list: [], showTip: true, isLoading: false, err: ""}
    updateState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (

            <div className="container">
                <Search updateState={this.updateState}/>
                <ImageList {...this.state}/>
            </div>

        );
    }
}

export default App;