import React from 'react'
import { useState } from 'react'

function AlertBox() {

    const [show, setShow] = useState(true)



    return (
        <div>

            <button onClick={() => setShow(s => !s)}>
                {show ? "Hide Alert " : "Show Alert"}
            </button>


            {show && <p style={{ color: "red" }}> Thi is an alert message in red !</p>}

        </div>
    )
}

export default AlertBox