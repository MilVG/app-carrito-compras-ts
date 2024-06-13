import '../styles/carrito_style.css'
import { GiShoppingCart } from "react-icons/gi";
export default function Carrito() {
  return (

    <div className='pcarrito'>
      <button className='btn-carrito'>
        <div className='cout-item'>
          0
        </div>
        <GiShoppingCart className='icon-carrito' size={50} />
      </button>
    </div>

  )
}
