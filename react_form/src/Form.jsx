import { useState } from "react"
export default function Form(){
    let {formData,setFormData}=useState(
        {
            fullname:"",
            username:""
        }
    )
    let onchangevalue = (event)=>{
        // console.log(event.target.value)
        setFullName(event.target.value)
    }

    let handelinputchange=(event)=>{
        let fieldname=event.target.name
        let value=event.target.value
        setFormData((currentdata)=>{
            currentdata[fieldname]=value
            return {...currentdata}
        })
        // console.log(feildname)
    }
    let sumbmithandeler=(event)=>{
        event.preventDefault()
        setFormData({
            fullname:"",
            username:""
        })
    }
    return (
        <form onSubmit={sumbmithandeler}>
            <label htmlFor="fullname"></label>
            <input type="text" name="fullname" id="fullname" placeholder="enter your full name please" value={formData.fullname} onChange={handelinputchange}/>
            <br /><br />
            <label htmlFor="username"></label>
            <input type="text" name="username" id="username" placeholder="enter your User Name please" value={formData.username} onChange={handelinputchange}/>
            <button>submit
            </button>
        </form>
    )
}