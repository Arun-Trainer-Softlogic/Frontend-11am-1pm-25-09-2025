import React, { useEffect, useState } from 'react'

function TimerEffect() {
    const [seconds , setSeconds] = useState(0);

    useEffect(() => {
        console.log("Timer Started");
        const id = setInterval(() => {
            setSeconds (s => s + 1)
        }, 3000);

        return () => {
            console.log("Timer Cleaned up ");
            clearInterval(id)
            
        }
        
    }, []) // runs only once 



    
  return (
    <h3>Seconds Passed : {seconds}</h3>
  )
}

export default TimerEffect