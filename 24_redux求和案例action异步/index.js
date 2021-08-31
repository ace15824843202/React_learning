import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'

ReactDOM.render(
    <React.StrictMode>
        <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
);

store.subscribe(() => {
//React.StrictMode 检查代码里不合理的位置
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

})



