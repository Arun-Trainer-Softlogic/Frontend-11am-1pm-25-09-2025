import { useEffect, useState } from "react";



export default function EveryrenderEffect() {
    const [count, setCount] = useState(0)



    useEffect(() => {

        console.log("Ypu ran every time");

    }, [])

    return (
        <>
            <h3>Count : {count}</h3>


            <button onClick={count}>Increase</button>
        </>
    )
}

