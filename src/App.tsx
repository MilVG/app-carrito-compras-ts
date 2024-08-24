import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Main from './layouts/Main'
import './styles/mainaside_style.css'
import Carrito from './components/Carrito'
import useCart from './hooks/usecart'
import { useReducer } from 'react'
import { carritoReducer, initialState } from './reducers/cart-reducer'
function App() {
  const { handleshowCarrito, isFlex, setCarrito, carrito, datamotos, handleToCarrito, totalCart, handleclearCart, handleDeleteItem, handleIncrementQuantity, handleDescrementQuantity } = useCart()

  const [state, dispatch] = useReducer(carritoReducer, initialState)
  return (
    <>
      <Header />
      <Carrito
        carrito={carrito}
        setCarrito={setCarrito}
        handleshowCarrito={handleshowCarrito}
        isFlex={isFlex}
        totalCart={totalCart}
        handleIncrementQuantity={handleIncrementQuantity}
        handleDescrementQuantity={handleDescrementQuantity}
        handleDeleteItem={handleDeleteItem}
        handleclearCart={handleclearCart}
      />
      <div className='container_main' >
        <Main
          datamotos={datamotos}
          handleToCarrito={handleToCarrito}
        />
      </div>
      <Footer />
    </>
  )

}

export default App
