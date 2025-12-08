import { useState } from "react";

function Logintoggle() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);



  return (
    <div>
        <h3>{isLoggedIn ? "welcome back !" : "please log in"}</h3>

        <button onClick={() => setIsLoggedIn (!isLoggedIn)} >
            {isLoggedIn ? "Logout" : "login"}
        </button>
    </div>
  )
}

export default Logintoggle  