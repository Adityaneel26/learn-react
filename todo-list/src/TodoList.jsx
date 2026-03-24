import { useState } from "react"
export default function TodoList(){
    let [todos,setTodos]=useState(["sample task"])
    let [newtodo,setnewTodo]=useState("")
    function addnewtast(){
        setTodos((prevvalue)=>{
            return [...prevvalue,newtodo]
        })
        setnewTodo("")
    }
    function updatetodovalue(event){
        // console.log(event.target.value)
        setnewTodo(event.target.value)
    }
    return(
        <div>
            <input type="text" placeholder="add a new task" value={newtodo} onChange={updatetodovalue}/>
            <button onClick={addnewtast}>Add a task</button>
             <br /><br /><br />
             <hr />

             <h3>todo list</h3>
             <ul>
                {
                    todos.map((todo)=>(
                         <li>{todo}</li> 
                    ))
                }
             </ul>
        </div>
    )
}