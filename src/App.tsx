import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Main from './layouts/Main'
import './styles/mainaside_style.css'
import Carrito from './components/Carrito'

import { Carrito as Cart} from './types/types.ts'
import { useState } from 'react'
function App() {
  const [carrito, setCarrito] = useState<Cart>([])


  //camibar el estado de un componente
  const [isFlex , setIsFlex] = useState<boolean>(false)

  function handleshowCarrito() {
    setIsFlex(!isFlex)
  }
  return (
    <>
      <Header />
      <Carrito
        handleshowCarrito={handleshowCarrito}
        isFlex={isFlex}
        setCarrito={setCarrito}
        carrito={carrito}
      />
      <div  className='container_main' >


        <Main 
          carrito={carrito}
          setCarrito={setCarrito}
        />
      </div>
      <Footer />
    </>
  )

}

export default App
