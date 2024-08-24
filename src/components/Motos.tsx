import { Dispatch } from 'react'
import '../styles/motos/motos_style.css'
import { Motoslist } from '../types/types'
import { CarritoAcciones } from '../reducers/cart-reducer'

type motosPropsItems = {
  moto: Motoslist,
  dispatch: Dispatch<CarritoAcciones>
}

export default function Motos({ moto, dispatch }: motosPropsItems) {

  const { name, description, img, precio } = moto

  return (

    <div className="motos-container">
      <div className="motos_section">
        <div className='container-image'>
          <img src={"/images/" + img} alt="motos" className='motos_img' />
        </div>
        <div className="details-motos">
          <h3>{name}</h3>
          <p className='price-motos'>S/.{precio}</p>
          <p className='text_description-motos'>{description}</p>
        </div>
        <button onClick={() => dispatch({ type: 'añadir-carrito', payload: { item: moto } })}>Agregar al Carrito</button>
      </div>

    </div>


  )
}
