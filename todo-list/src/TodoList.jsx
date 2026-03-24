import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
export default function TodoList(){
    let [todos,setTodos]=useState([{task:"sample taks",id:uuidv4(),isdone:false}])
    let [newtodo,setnewTodo]=useState("")
    function addnewtast(){
        setTodos((prevvalue)=>{
            return [...prevvalue,{task:newtodo,id:uuidv4(),isdone:false}]
        })
        setnewTodo("")
    }
    function updatetodovalue(event){
        // console.log(event.target.value)
        setnewTodo(event.target.value)
    }
    function deleteTodo(id){
        setTodos((prevvalue)=>
            todos.filter((prevvalue)=>prevvalue.id != id))
    }

    function markalldone(){
        setTodos(todos.map((todo)=>{
            return{
                ...todo,isdone:true
            }
        }))
    }
    function markasdone(id){
        setTodos(todos.map((todo)=>{
            if(todo.id== id) {

                return{
                    ...todo,isdone:true
                }
            }
            else{
                return todo;
            }
        }))
    }
    // function upercaseall(){
    //     setTodos(todos.map((todo)=>{
    //         return{
    //             ...todo,task:todo.task.toUpperCase()
    //         }
    //     }))
    // }
    // function upercaseone(id){
    //     setTodos(todos.map((todo)=>{
    //         if(todo.id== id) {

    //             return{
    //                 ...todo,task:todo.task.toUpperCase()
    //             }
    //         }
    //         else{
    //             return todo;
    //         }
    //     }))
    // }
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
                         <li key={todo.id}>
                            <span style={todo.isdone ? {textDecorationLine:"line-through"}:{}} >
                                {todo.task}
                                </span>
                                <button onClick={()=>deleteTodo(todo.id)} style={{backgroundColor:"red",margin:"10px"}}>Delete</button>
                                <button onClick={()=>markasdone(todo.id)} style={{backgroundColor:"red",margin:"10px"}}>markasdone

                                </button>
                         </li> 
                    ))
                }
             </ul>
             <button onClick={markalldone}>mark all done </button>
        </div>
    )
}