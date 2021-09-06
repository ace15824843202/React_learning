import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);

// store.subscribe(() => {
// //React.StrictMode 检查代码里不合理的位置
//     ReactDOM.render(
//         <React.StrictMode>
//             <App store={store}/>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
//
// })



