import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//React.StrictMode 检查代码里不合理的位置
ReactDOM.render(
    <React.StrictMode>
            <App/>

    </React.StrictMode>,
    document.getElementById('root')
);

