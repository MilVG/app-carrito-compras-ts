
import { listmotos } from '../data/motoslist.ts'
import { Carrito, Motoslist, } from '../types/types.ts'
export type CarritoAcciones =
  { type: 'añadir-carrito', payload: { item: Motoslist } } |
  { type: 'eliminar-item-carrito', payload: { id: number } } |
  { type: 'reducir-cantidad-item', payload: { id: number } } |
  { type: 'aumentar-cantidad-item', payload: { id: number } } |
  { type: 'vaciar-carrito' }

export type CartState = {
  data: Motoslist[],
  cart: Carrito[]
}

export const initialState: CartState = {
  data: listmotos,
  cart: []
}

export const carritoReducer = (
  state: CartState = initialState,
  acciones: CarritoAcciones
) => {
  switch (acciones.type) {
    case "añadir-carrito":
      return {
        ...state
      }

    case "eliminar-item-carrito":

      return {
        ...state
      }
    case "aumentar-cantidad-item":
      return {
        ...state
      }

    case "reducir-cantidad-item":
      return {
        ...state
      }

    case "vaciar-carrito":
      return {
        ...state
      }

    default:
      state

  }
}

