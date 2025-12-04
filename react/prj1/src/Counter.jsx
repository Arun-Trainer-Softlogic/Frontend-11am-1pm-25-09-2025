import { useState } from "react"



export default function Counter(){
    const [count, setcount] = useState(0);
    







    return (
        <div className="ar" style={{padding:12}}>
            <button onClick={()=> setcount(c => c + 1)}>+1</button>
            <button onClick={()=> setcount(c => c - 1)}>-1</button>
            <button onClick={() => setcount(0)}>reset</button>

            <h3>{count}</h3>
          
        </div>
    )
}