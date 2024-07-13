import '../styles/motos/motos_style.css'
import { carritoProps } from '../types/types.ts'

export default function Motos({ moto, handleAddToCarrito }: carritoProps) {

  const { id, name, description, img, precio } = moto

  return (

    <div className="motos-container" key={id}>
      <div className="motos_section">
        <div className='container-image'>

        <img src={"/images/" + img} alt="motos" className='motos_img' />
        </div>
          <div className="details-motos">
            <h3>{name}</h3>
            <p className='price-motos'>S/.{precio}</p>
            <p className='text_description-motos'>{description}</p>
          </div>
          <button onClick={() => handleAddToCarrito(moto)}>Agregar al Carrito</button>
      </div>

    </div>


  )
}
