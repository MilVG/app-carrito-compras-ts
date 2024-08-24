import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Main from './layouts/Main'
import './styles/mainaside_style.css'
import Carrito from './components/Carrito'
import { useEffect, useReducer } from 'react'
import { carritoReducer, initialState } from './reducers/cart-reducer'
import DisplayShowCart from './hooks/DisplayShowCart'
function App() {

  const { handleshowCarrito, isFlex } = DisplayShowCart()

  const [state, dispatch] = useReducer(carritoReducer, initialState)

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(state.cart))
  }, [state.cart])
  return (
    <>
      <Header />
      <Carrito
        cart={state.cart}
        handleshowCarrito={handleshowCarrito}
        isFlex={isFlex}
        dispatch={dispatch}
      />
      <div className='container_main' >
        <Main
          datamotos={state.data}
          dispatch={dispatch}
        />
      </div>
      <Footer />
    </>
  )

}

export default App
