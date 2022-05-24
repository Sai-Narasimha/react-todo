import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import '../App.css'
export const TodoInput = () => {
    const [text,setText] = useState('');

    const handleAddToDb = ()=>{
      fetch(" http://localhost:8080/Todos",{
        method : 'POST',
        body : JSON.stringify({
          title : text.toUpperCase()
        }),
        headers : {
          "content-type" : "application/json"
        }

      }).then((res)=>alert("Todo Added to Database"))
    }
    const handleAddText = (e)=>{
        setText(e.target.value)
    }
  return (
      <>
        <div className="todoInput">
            <input type="text"  placeholder="Enter Todo" onChange = {handleAddText} className="inputBox"/>
            <button onClick = {handleAddToDb} style = {{
              height:"30px",
              border : "none",
              color : 'white',
              fontWeight: 'bold',
              backgroundColor :"skyblue"
            }} >Add to List</button>
        </div>
       
      </>
  )
}
