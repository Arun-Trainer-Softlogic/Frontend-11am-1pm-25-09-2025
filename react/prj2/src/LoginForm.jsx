import { useState } from "react"



export  default function LoginForm() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")


    const canSubmit = email.length > 0 && pass.length >= 6

    function handleSubmit(e){
        e.preventDefault();
        alert("logged in as " + email);
    }


    return(
        <form onSubmit={handleSubmit} >
            <input type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password"  
                placeholder="Password(min 6 char)"
                
                value={pass}
                onChange={(e) => setPass(e.target.value)}

            />

            <button disabled={!canSubmit}>Login</button>
        </form>
    )
}


