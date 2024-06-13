import React from 'react';
import TodoItem from '../ToDoItem';

const TodoList = (props) => {
    let todos = props.items; 
    return(
  <ul>
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo.text} completed={todo.completed} onClick={() => props.toggleToDo(index)} />
    ))}
  </ul>
  )
}

export default TodoList;
