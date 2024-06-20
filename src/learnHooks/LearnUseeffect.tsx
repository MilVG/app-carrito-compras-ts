import {useEffect, useState} from 'react'
import '../styles/teststylehooks/style_learn_useefect.css'
import customLog from '../help/customlog'
export default function LearnUseeffect() {

    const [variable,setVariable] = useState(false)
    useEffect(()=>{
      if(variable){
        customLog("hola")
      }
    },[variable])

    setTimeout(()=>{
        setVariable(true)
    },5000)

  return (
    <div className='div-useefect'>
        container test
    </div>
  )
}
