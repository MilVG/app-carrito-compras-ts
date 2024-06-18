import {useState} from 'react'
import '../styles/teststylehooks/style_learn_usestate.css'
function LearnUsestate() {
    //En esta seccion definiremos nuestro hook usestate
    const [variable, setVariable] = useState(false)
    
    const handlesetcolor=()=>{
        setVariable(true)
    }
    const handleReset= () =>{
      setVariable(false)
    }
  return (
    <>
    <div className='div-color' style={{backgroundColor:variable? "":"red"}}>{variable? "verdadero":"falso"}</div>
    <button onClick={handlesetcolor}>click</button>
    <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default LearnUsestate