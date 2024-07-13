import '../styles/main_style.css'
import Motos from '../components/Motos'
import {motos} from '../types/types'
export default function Main( {datamotos,handleToCarrito}: motos) {
  return (
    <main className="main">
      {
        datamotos.map((moto) => (
          <Motos
            key={moto.id}
            moto={moto}
            handleAddToCarrito={handleToCarrito}
          />
        ))
      }
    </main>
  )
}
