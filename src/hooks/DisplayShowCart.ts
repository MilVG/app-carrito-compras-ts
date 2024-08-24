import { useState } from 'react'
export default function DisplayShowCart() {

  //camibar el estado de un componente
  const [isFlex, setIsFlex] = useState<boolean>(false)

  function handleshowCarrito() {
    setIsFlex(!isFlex)
  }

  return {
    handleshowCarrito,
    isFlex,
  }

} 
