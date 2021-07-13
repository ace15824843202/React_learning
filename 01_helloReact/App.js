import './App.css';
//用了多种暴露的方式，而不是结构赋值
// import React,{Component} from 'react'
import  Hello from './components/Hello'
import  Welcome from './components/Welcome'
function App() {
  return (
    <div className="App">
      <Hello/>
      <Welcome/>
    </div>
  );
}

export default App;
