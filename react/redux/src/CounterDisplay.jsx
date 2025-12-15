import { useSelector } from "react-redux";


function CounterDisplay() {
    const count = useSelector(state => state.count)

  return (
    <div style={{padding : 20 , border: "1px solid green" , marginTop: 30 ,}}>
        <h3>Counter display Component</h3>
        <p>current count is {count} </p>
    </div>
  )
}

export default CounterDisplay