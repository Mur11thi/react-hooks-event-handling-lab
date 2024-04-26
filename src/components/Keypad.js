// Code Keypad Component Here
import React from "react";

function Keypad (){
function changeHandler(){
    console.log("Entering password...")
}    
    return (
        <div>
            <input onChange={changeHandler} type="password" />
        </div>
    )
}

export default Keypad;