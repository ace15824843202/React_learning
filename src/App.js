import './App.css';
import HeaderInput from "./components/HeaderInput";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <div className="todo-container">
                <div className="todo-wrap">
                    <HeaderInput/>
                    <ToDoList/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
