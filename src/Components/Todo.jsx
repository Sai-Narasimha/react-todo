import React, { useState } from 'react'
import {TodoList} from './TodoList'
import {TodoInput} from './TodoInput'
import {v4 as uuid} from 'uuid'
import '../App.css'
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
   
    
console.log(todos)
  return (
    <div className= 'todo'>
       
        <TodoInput getText = {handleSetTodos}/>
        <TodoList/>
        
    </div>
  )
}

export default Todo

//  {/* <input type="text"  placeholder="Enter Todo" onChange = {handleAddText}/>
//         <input type= 'submit' onClick={handleSetTodos}/> */}
//         {/* <div className = 'todoList'>
//             <table border= '1' cellSpacing >
//                 <thead>
//                     <td>S.No</td>
//                     <td>Todo List</td>
//                     <td>Status</td>
//                 </thead>
//                 <tbody>
//                     {todos.map((todo,i)=>(
//                         <tr>
//                             <td>{i+1}</td>
//                             <td>{todo}</td>
//                             <button>Delete</button>
//                         </tr>
//                     ))}

//                 </tbody>

//             </table>
//         </div> */}