import React, { useState } from 'react';
import Todoform from './Todoform';
// import { RiDeleteBack2Fill } from 'react-icons/ri';


const Todo = ({ todos, completeTodo, removeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });



  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text} 
      </div>
      <div>
      <button 
          onClick={() => removeTodo(todo.id)}>
              Delete
          </button>
      </div>
    </div>
  ));
};

export default Todo;