import React from 'react';
import "./styles.css";

const TodoItem = (props) => {
return(
<div className='toDoitem'>
 <li onClick={props.onClick} style={{ textDecoration: props.completed ? 'line-through' : 'none' }}>{props.todo}</li>
</div>
 )

}

export default TodoItem;
