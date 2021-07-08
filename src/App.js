import React, { useState } from 'react';
import './App.css';

// Importing Components
import Form from './Components/Form';
import TodoList from './Components/TodoList'

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([])
  
  return (
    <div className="App">
      <header>
        <h1>Samulde's To-Do list</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;
