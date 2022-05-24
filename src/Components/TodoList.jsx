import axios from 'axios'
import React from 'react'
import '../App.css'
export const TodoList = () => {
  const [list,setList] = React.useState([])
  const [page,setPage] = React.useState(1)
  React.useEffect(() => {
    getList()
  },[page])

  const getList = ()=>{
    axios.get(`http://localhost:8080/Todos?_limit=5&_page=${page}`).then((res)=>setList(res.data))
  }
  const handleDelete = (id)=>{
    axios.delete(`http://localhost:8080/Todos/${id}`).then((res)=>getList())
  }
  console.log("list :" ,list)

  return (
      
    <div className="todoList">
      {list.map((ele)=>(
        <div className = "listItems">{ele.title}
        <button   style = {{
          border: "none",
          color : "white",
          backgroundColor: "skyblue",
          height: "24px"
        }}
        onClick = {()=>handleDelete(ele.id)}
        >
          Delete
        </button>
        </div>
      ))}
      <div className = "pagination" style = {{
        width : "50%",
        margin: "auto",
        display : "flex",
        gap : "20px",
        
      }}>
        <button onClick={()=>{if(page >1)setPage(page-1)}}>Prev</button>
        <div>{page}</div>
        <button onClick={()=>{if(list.length >1)setPage(page+1)}}>next</button>

      </div>
    </div>
        
    
  )
}
