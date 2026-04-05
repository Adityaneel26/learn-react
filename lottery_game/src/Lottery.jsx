import { useState } from "react"
// import "./Lottery.css"   
import Ticket from "./Ticket"
import { getTicket,sum } from "./helper"

export default function Lottorey({n=3,winningSum=15}){
    let [ticket,setTicket]=useState(getTicket(n))
    let iswinning=sum(ticket)===winningSum
    let buyTicket=()=>{
        setTicket(getTicket(n))
    }
    return (
        <div>
            <h1>Welocome to Lottery</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{iswinning && "congradulation, you won"}</h3>
        </div>
    )
}