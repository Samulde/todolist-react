import React from 'react';
import './App.css';

// Importing Components
import Form from './Components/Form';
import TodoList from './Components/TodoList'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Samulde's To-Do list</h1>
      </header>
      <Form />
      <TodoList />
      
    </div>
  );
}

export default App;
