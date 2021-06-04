import React, { useState } from 'react';
import Todoform from './Todoform';
import Todo from './Todo';

function Todolist() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };


  return (
    <div>
      <h1>To Do List</h1>
      <Todo todos={todos} removeTodo={removeTodo}/>
      <Todoform onSubmit={addTodo} />
    </div>
  );
}

export default Todolist;