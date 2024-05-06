import './Input.css'
import React from "react";

const ButtonAvaliar = () => {

    const [avaliar , setAvaliar] = React.useState('')

function selecionar (){

}
    
    

    return(
        <>
        <div>
        <input type="button" className='ButtonAvaliar' value={1} />
        <input type="button" className='ButtonAvaliar' value={2} />
        <input type="button" className='ButtonAvaliar' value={3} />
        <input type="button" className='ButtonAvaliar' value={4} />
        <input type="button" className='ButtonAvaliar' value={5} />
        
        </div>
        </>
    )
}

export default ButtonAvaliar;