import React, {Component} from 'react';
import Search from "./components/Search";
import ImageList from "./components/ImageList";

import './App.css'

class App extends Component {
    state={list:[]}
    getAvatar=(res)=>{
        this.setState({list:res.items})
    }

    render() {
        return (

            <div className="container">
                <Search getAvatar={this.getAvatar}/>
                <ImageList avatar={this.state.list}/>
            </div>

        );
    }
}

export default App;