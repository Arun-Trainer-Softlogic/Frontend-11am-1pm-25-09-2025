import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);


    return (
        <div className="ar" style={{ padding: 12 }}>
            <button onClick={() => setCount(c => c + 1)}>+1</button>
            <button onClick={() => setCount(c => c - 1)}>-1</button>
            <button onClick={() => setCount(0)}>reset</button>

            <h3>{count}</h3>

        </div>

    )
}

