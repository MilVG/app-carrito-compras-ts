import ModalCarrito from '../layouts/modals/ModalCarrito';
import '../styles/carrito_style.css'
import { GiShoppingCart } from "react-icons/gi";
import { handleshowCarrito, Carrito as cart} from '../types/types.ts'
export default function Carrito({handleshowCarrito,isFlex,carrito,setCarrito}:{handleshowCarrito:handleshowCarrito,isFlex:boolean,carrito:cart,setCarrito:React.Dispatch<React.SetStateAction<cart>>}) {

  return (
<>
    <ModalCarrito 
      isFlex={isFlex}
      carrito={carrito}
      setCarrito={setCarrito}
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
