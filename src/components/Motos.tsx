import '../styles/motos/motos_style.css'
import { carritoProps } from '../types/types.ts'

export default function Motos({ moto, handleAddToCarrito }: carritoProps) {

  const { id, name, description, img } = moto

  return (

    <div className="motos-container" key={id}>
      <div className="motos_section">
        <img src={"/images/" + img} alt="motos" className='motos_img' />
        <div className="details-motos">
          <div>
            <h3>{name}</h3>
          </div>
          <p className='text_motos'>{description}</p>
          <button onClick={() => handleAddToCarrito(moto)}>Agregar al Carrito</button>
        </div>
      </div>

    </div>

  )
}
