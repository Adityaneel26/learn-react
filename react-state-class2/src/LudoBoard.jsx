import { useState } from "react"
export default function LudoBoard(){

    let [moves,setMoves] = useState({blue:0,yellow:0,green:0,red:0})
    let updateBlue=()=>{
        console.log(`moves.blue =${moves.blue}`)
        setMoves((prevvalue)=>{
            return {...prevvalue,blue:prevvalue.blue+1}
        })

    }
     let updateYellow=()=>{
        // console.log(`moves.blue =${moves.blue}`)
        setMoves((prevvalue)=>{
            return {...prevvalue,yellow:prevvalue.yellow+1}
        })

    }
     let updateRed=()=>{
        // console.log(`moves.blue =${moves.blue}`)
        setMoves((prevvalue)=>{
            return {...prevvalue,red:prevvalue.red+1}
        })

    }
     let updateGreen=()=>{
        // console.log(`moves.blue =${moves.blue}`)
        setMoves((prevvalue)=>{
            return {...prevvalue,green:prevvalue.green+1}
        })

    }
    return(<>
    <div>

        <h1>game begin</h1>
        <div className="board">
            <p>blue moves = {moves.blue} </p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>yellow moves ={moves.yellow} </p>
            <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
            <p>green moves ={moves.green} </p>
            <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            <p>red moves = {moves.red} </p>
            <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
        </div>
    </div>
    </>
    )
}