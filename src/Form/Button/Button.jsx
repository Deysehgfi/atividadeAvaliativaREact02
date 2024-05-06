import React from "react";
import './Button.css'

const Button = () =>{
const [ativo, setAtivo] = React.useState(true)

function ativar (){
    setAtivo(false)
}

    return(
        <>
            <button onClick={!ativo} className="button">submit</button>
        </>
    )
}

export default Button;