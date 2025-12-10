import { useState } from "react"



export default function Nameinput(){
const [name , setName] =useState("")




    return (
        <div>
            <input
             type="text" 
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="enter your name"
            />


            <p>You have Typed : {name}</p>
        </div>
    )

}