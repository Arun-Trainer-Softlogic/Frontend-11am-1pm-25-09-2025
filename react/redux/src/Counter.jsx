import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/action'



useSelector

function Counter() {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();


    return (
        <div>
            <h2> Redux counter</h2>
            <h3> Count : {count}</h3>

            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())} style={{ marginLeft: 10 }}>-</button>



        </div>
    )
}

export default Counter