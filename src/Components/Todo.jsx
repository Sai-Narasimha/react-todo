import React, { useState } from 'react'
import {TodoList} from './TodoList'
import {TodoInput} from './TodoInput'
import {v4 as uuid} from 'uuid'
export const Todo = () => {
    const [todos,setTodos] = useState([])

  
    const handleSetTodos = (data) =>{
        const text = {
            addToList : data,
            status : false,
            id : uuid()
        }
        setTodos([
            ...todos,text
        ])
    }
    const handleDel = ({id})=>{
        const newTodo = todos.filter((e) => e.id !== id);
        setTodos(newTodo);
    }
    
console.log(todos)
  return (
    <div>
        {/* <input type="text"  placeholder="Enter Todo" onChange = {handleAddText}/>
        <input type= 'submit' onClick={handleSetTodos}/> */}
        {/* <div className = 'todoList'>
            <table border= '1' cellSpacing >
                <thead>
                    <td>S.No</td>
                    <td>Todo List</td>
                    <td>Status</td>
                </thead>
                <tbody>
                    {todos.map((todo,i)=>(
                        <tr>
                            <td>{i+1}</td>
                            <td>{todo}</td>
                            <button>Delete</button>
                        </tr>
                    ))}

                </tbody>

            </table>
        </div> */}
        <TodoInput getText = {handleSetTodos}/>
        {todos.map((todo)=>(
            <TodoList {...todo}  handleDel = {handleDel}/>
        ))}
    </div>
  )
}

export default Todo

