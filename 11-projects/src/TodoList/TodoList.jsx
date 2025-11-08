import React from 'react'
import style from './TodoList.module.css'
import { useState } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";

const TodoList = () => {
    const[input, setInput] = useState('');
    const[todos, setTodo] = useState(() =>{
        const savedData = localStorage.getItem('todos');
        if(!savedData) return [];
        return JSON.parse(savedData)
    });
    const[time, setTime] = useState(null)

    const handleOnSubmit = (event) =>{
        event.preventDefault();

        if(todos.includes(input)){
        alert('This todo is already here.');
        setInput("")
        return
      }

        setTodo([...todos, input]);
        setInput("")
    }

    const handleOnDelete = (id) =>{
        setTodo(todos.filter((_, index) => id != index))
    }

    localStorage.setItem('todos', JSON.stringify(todos))
    

    setInterval(() =>{
        const now = new Date();
        const formatedDate = now.toLocaleDateString();
        const formatedTime = now.toLocaleTimeString();
        setTime(`${formatedDate} - ${formatedTime}`)
        
    })
    

  return (
    <div className={style.container}>
        <div className={style['todo-container']}>
            <h1 className={style.heading}>Todo List</h1>
            
            <div className={style['timer-container']}>
                <h3>{time}</h3>
            </div>

            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder='Enter todo here' value={input} onChange={(event) => setInput(event.target.value)}/>
                <button className={style.addbtn} type='submit'>Add</button>
            </form>

            <div className={style.result}>
            {
                todos.map((items, index) =>(
                    <ul className={style['result-container']} key={index}>
                        <li>{items}</li>
                        <button onClick={() => handleOnDelete(index)}><RiDeleteBin5Line className={style.delete}/></button>
                    </ul>
                ))
            }
            </div>

            <div>
                <button className={style.clearbtn} onClick={() => setTodo([])}>Clear</button>
            </div>
        </div>
    </div>
  )
}

export default TodoList