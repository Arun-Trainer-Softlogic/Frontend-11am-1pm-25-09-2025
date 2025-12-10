import React, { useEffect } from 'react'
import { useState } from 'react'

function CountEffect() {

    const [count , setCount ] = useState(0);


    useEffect(() => {
        console.log("count Changed : " , count );
    }, [count])





  return (
    <div>
        <h3>Count : {count}</h3>
        <button onClick={() => setCount (c => c+ 1)}>Increase </button>
        </div>
  )
}

export default CountEffect