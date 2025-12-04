import { useState } from "react";


function expensiveInitial(){
    console.log("expensive init running");
    return ["" , ""]
    
}

export default function ProfileEditor (){
    const [profile , setprofile] = useState(() => expensiveInitial());

function updateField(e){
    const {name , value} = e.target;

    setprofile((prev) => {
        if(name === "name"){
            return [value, prev[1]] ; //update name 
        }
        if(name === "bio"){
            return [prev[0],value]; // update bio 
        }
        return prev
    })
  
}

return (
    <div>
        <input 
        type="text" 
         name="name" 
         value={profile[0]} 
         onChange={updateField} 
         placeholder="name"/>


        <textarea 
        name="bio" 
        value={profile[1]} 
        onChange={updateField} 
        placeholder="bio" />

  <p>name : {profile[0]}</p>
  <p>Bio : {profile[1]}</p>
    </div>
)
}
