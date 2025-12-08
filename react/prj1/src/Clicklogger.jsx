
function Clicklogger() {


function handleClick(e) {
    alert('Button was clicked!')
    console.log("type of event:", e.type , "target: ", e.target);
    

}

  return (
    <button onClick={handleClick}>Click me</button>
  )
}

export default Clicklogger