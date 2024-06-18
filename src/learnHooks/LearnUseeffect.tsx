import {useEffect, useState} from 'react'
import '../styles/teststylehooks/style_learn_useefect.css'
export default function LearnUseeffect() {

    const [variable,setVariable] = useState(true)
    useEffect(()=>{
        console.log("componente listo")
    },[variable])

    setTimeout(()=>{
        setVariable(false)
    },3000)

  return (
    <div className='div-useefect'>
        container test
    </div>
  )
}
