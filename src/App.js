import React, {Component} from 'react';
import SetStateExtension from "./components/01_setStateExtension";
import LazyLoad from "./components/02_lazyLoad";
import StateHook from "./components/03_stateHook";
import EffectHook from "./components/04_effectHook";


class App extends Component {

    render() {
        return (
            <div style={{margin: "20px"}}>
                <h2>setstate扩展</h2>
                <SetStateExtension/>
                <hr/>
                <h2>路由的lazyLoad</h2>
                <LazyLoad/>
                <hr/>
                <h2>StateHook</h2>
                <StateHook/>
                <hr/>
                <h2>EffectHook</h2>
                <EffectHook/>
            </div>

        );
    }
}

export default App;