import { useState } from "react"

export default function Counter(){
    let [Count ,setCount]=useState(0)
    function updateCount(){
        // setCount(Count+1 )
        setCount((currstate)=>{
            return currstate+1
        })
        setCount((currstate)=>{
            
            return currstate+1
        })
        setCount((currstate)=>{
            return currstate+1
        })
    }
    return (
        <div>
            <h3>count = {Count}</h3><i class="fa-solid fa-face-smile"></i>
            <button onClick={updateCount}>click to update coutn</button>
        </div>
    )
}