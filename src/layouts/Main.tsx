import '../styles/main_style.css'
import {listmotos} from "../data/motoslist"
import { useState } from 'react'
import Motos from '../components/Motos'
export default function Main() {
  const [datamotos,setDatamotos] = useState(listmotos)
  return (
    <main className="main">
      <Motos 
        datamotos={datamotos}
      />
    </main>
  )
}
