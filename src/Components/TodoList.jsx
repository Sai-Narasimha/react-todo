import React from 'react'

export const TodoList = ({addToList,status,id,handleDel}) => {
  return (
      
    <div>
        {addToList}
        <button onClick = {()=> handleDel(id)}>Delete</button>
    </div>
  )
}
