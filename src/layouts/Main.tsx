import '../styles/main_style.css'
import Motos from '../components/Motos'
import { Motoslist, motos } from '../types/types'
export default function Main({ datamotos, dispatch }: motos) {
  return (
    <main className="main">
      {
        datamotos.map((moto: Motoslist) => (
          <Motos
            key={moto.id}
            moto={moto}
            dispatch={dispatch}
          />
        ))
      }
    </main>
  )
}
