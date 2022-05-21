import React from 'react'
import { useState } from 'react';
export const TodoInput = ({getText}) => {
    const [text,setText] = useState('');

    const handleAddText = (e)=>{
        setText(e.target.value)
    }
  return (
      <>
        <div>
            <input type="text"  placeholder="Enter Todo" onChange = {handleAddText}/>
            <button onClick = {()=>getText(text) }>Add to List</button>
        </div>
       
      </>
  )
}
