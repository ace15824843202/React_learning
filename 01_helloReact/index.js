import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//性能
import reportWebVitals from './reportWebVitals';

//React.StrictMode 检查代码里不合理的位置
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
