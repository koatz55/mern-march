import logo from './logo.svg';
import './App.css';
import List from './components/List';
import DisplayList from './components/DisplayList';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState ([])
  return (
    <div className="App">
      <header className="App-header">
        <List todoList = {todoList} setTodoList = {setTodoList}/>
        <DisplayList todoList = {todoList} setTodoList = {setTodoList}/>
      </header>
    </div>
  );
}

export default App;
