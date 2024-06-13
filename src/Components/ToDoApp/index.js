import React, {useState, useEffect} from 'react';
import './styles.css';
import TodoList from '../ToDoList';

const ToDoApp = () =>{
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);
    
    const addToDo = (e) => {
    setInput(e);    
    }

    const addToList = () => {
    if(input.trim !== ''){
        setItems([...items, {text:input , completed:false}]);
        setInput('');
    }
    }

    const toggleToDo = (index) => {
        const newItems = items.map((item,idx) => {
            if(idx === index){
                return {
                    ...item, completed:!items.completed
                }
            }
            return item;
        })
        setItems(newItems)
    }

    return (
        <div className='app'>
            <h1>ToDoApp</h1>
            <div className='inputField'>
                <input className='input-box' onChange={(e) => {addToDo(e.target.value)}} value={input} placeholder='Enter a task toDo' />
                <button className='button' onClick={addToList} >Add</button>
            </div>
            <div>
                <TodoList items={items} toggleToDo={toggleToDo}/>
            </div>
        </div>
    )
}

export default ToDoApp;