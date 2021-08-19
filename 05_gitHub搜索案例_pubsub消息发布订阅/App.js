import React, {Component} from 'react';
import Search from "./components/Search";
import ImageList from "./components/ImageList";

import './App.css'

class App extends Component {

    render() {
        return (

            <div className="container">
                <Search/>
                <ImageList/>
            </div>

        );
    }
}

export default App;