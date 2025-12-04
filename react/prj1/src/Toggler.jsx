import  { useState } from 'react'

function Toggler() {
    const [on , setOn] = useState(false)
  return (
    <div>
        <p>switch  is <strong>{on ? "ON " : "OFF"}</strong></p>
        <button onClick={()=> setOn(prev => !prev)} > {on ? "Turn off" : "Turn On"} </button>
    </div>
  )
}

export default Toggler