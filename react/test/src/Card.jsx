import React from 'react'

function Card({ title, text }) {
    return (
        <>
            <h2>{title}</h2>
            <p>Count : {text}</p>
        </>

    )
}

export default Card