import './App.css';
import React from 'react';
import Todolist from './components/Todolist';
import Todoform from './components/Todoform';

function App() {
  return (
    <div className="todo-app">
     <Todolist/>
    </div>
  );
}

export default App;
