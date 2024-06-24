import '../styles/main_style.css'
import { listmotos } from "../data/motoslist"
import { useState } from 'react'
import Motos from '../components/Motos'
import {Motoslist,carritoPropsRoot } from '../types/types.ts'

export default function Main( { carrito, setCarrito }:carritoPropsRoot) {

  const [datamotos, setDatamotos] = useState<Motoslist[]>(listmotos)

  function handleToCarrito(item: Motoslist) {
    
    const itemExists = carrito.findIndex(moto => moto.id == item.id)
    if( itemExists >= 0){
      const updateCarrito = [...carrito]
      updateCarrito[itemExists].quantity++
      setCarrito(updateCarrito)
    }else{
       setCarrito([...carrito, item])
    }
  }
  return (
    <main className="main">
      {
        datamotos.map((moto) => (
          <Motos
            key={moto.id}
            moto={moto}
            handleAddToCarrito={handleToCarrito}
          />
        ))
      }
    </main>
  )
}
