import ModalCarrito from '../layouts/modals/ModalCarrito';
import '../styles/carrito_style.css'
import { GiShoppingCart } from "react-icons/gi";
import { cartProps } from '../types/types';
export default function Carrito({
  cart,
  handleshowCarrito,
  isFlex,
  dispatch,
}: cartProps) {
  return (
    <>
      <ModalCarrito
        cart={cart}
        isFlex={isFlex}
        handleshowCarrito={handleshowCarrito}
        dispatch={dispatch}
      />
      <div className='pcarrito'>
        <button className='btn-carrito' onClick={() => handleshowCarrito()}>
          <div className='cout-item'>
            {cart.length}
          </div>
          <GiShoppingCart className='icon-carrito' size={50} />
        </button>
      </div>
    </>

  )
}
