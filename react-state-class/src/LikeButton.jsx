import { useState } from "react"

export default function LikeButton(){
    let [like, setLike] = useState(false)

    function toggleLike(){
        setLike(!like)
    }

    return(
        <div>
            <p onClick={toggleLike}>
              {
                like 
                ? <i className="fa-solid fa-heart" style={{color: "rgb(255, 16, 16)"}}></i>
                : <i className="fa-regular fa-heart"></i>
              }
            </p>
        </div>
    )
}