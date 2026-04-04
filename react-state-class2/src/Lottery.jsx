import { useState } from "react"
import "./Lottery.css"
import { getTicket,sum } from "./helper"

export default function Lottorey(){
    let [ticket,setTicket]=useState(getTicket(3))
    let iswinning=sum(ticket)===15
    let buyTicket=()=>{
        setTicket(getTicket(3))
    }
    return (
        <div>
            <h1>Welocome to Lottery</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{iswinning && "congradulation, you won"}</h3>
        </div>
    )
}