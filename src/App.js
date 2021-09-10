import React, {Component, Fragment} from 'react';
import SetStateExtension from "./components/01_setStateExtension";
import LazyLoad from "./components/02_lazyLoad";
import StateHook from "./components/03_stateHook";
import EffectHook from "./components/04_effectHook";
import RefHook from "./components/05_refHook";
import A from "./components/06_Context";
import Optimize from "./components/07_ComponentOptimiza";
import RenderProp from "./components/08_renderProp";
import ErrorBoundary from "./components/09_errorBoundary";


class App extends Component {

    render() {
        return (
            <div style={{margin: "20px"}}>
                <Fragment>
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
                    <hr/>
                    <h2>RefHook</h2>
                    <RefHook/>
                    <hr/>
                    <h2>Context</h2>
                    <A/>
                    <hr/>
                    <h2>component优化</h2>
                    <Optimize/>
                    <hr/>
                    <h2>renderProp(插槽)</h2>
                    <RenderProp/>
                    <hr/>
                    <h2>错误边界</h2>
                    <ErrorBoundary/>
                </Fragment>
            </div>

        );
    }
}

export default App;