import ModalCarrito from '../layouts/modals/ModalCarrito';
import '../styles/carrito_style.css'
import { GiShoppingCart } from "react-icons/gi";
import { cartProps } from '../types/types';
export default function Carrito( {carrito,setCarrito,handleshowCarrito,isFlex,totalCart,handleIncrementQuantity,handleDescrementQuantity,handleDeleteItem,handleclearCart} :  cartProps ) {
  return (
<>
    <ModalCarrito
      carrito={carrito}
      isFlex={isFlex}
      setCarrito={setCarrito}
      handleshowCarrito={handleshowCarrito}
      totalCart={totalCart}
      handleIncrementQuantity={handleIncrementQuantity}
      handleDescrementQuantity={handleDescrementQuantity}
      handleDeleteItem={handleDeleteItem}
      handleclearCart={handleclearCart}
    />
    <div className='pcarrito'>
      <button className='btn-carrito' onClick={() => handleshowCarrito()}>
        <div className='cout-item'>
          {carrito.length}
        </div>
        <GiShoppingCart className='icon-carrito' size={50} />
      </button>
    </div>
</>

  )
}
