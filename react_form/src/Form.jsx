import { useState } from "react"
export default function Form(){
    let {fullname,setFullName}=useState("")
    let onchangevalue = (event)=>{
        // console.log(event.target.value)
        setFullName(event.target.value)
    }
    return (
        <form>
            <label htmlFor="username"></label>
            <input type="text" id="username" placeholder="enter your full name please" value={fullname} onChange={onchangevalue}/>
            <button>submit
            </button>
        </form>
    )
}