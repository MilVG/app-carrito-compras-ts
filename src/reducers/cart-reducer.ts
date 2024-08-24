
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
  cart: Carrito
}

const initialCart = (): Carrito => {
  const datStorage = localStorage.getItem('carrito')
  return datStorage ? JSON.parse(datStorage) : []
}


export const initialState: CartState = {
  data: listmotos,
  cart: initialCart()
}

export const carritoReducer = (
  state: CartState = initialState,
  acciones: CarritoAcciones
) => {
  switch (acciones.type) {
    case "añadir-carrito":

      let updateCarrito: Motoslist[] = []

      const itemExists = state.cart.find(moto => moto.id == acciones.payload.item.id)
      if (itemExists) {
        updateCarrito = state.cart.map(item => {
          if (item.id === acciones.payload.item.id) {
            if (item.quantity < 5) {
              return { ...item, quantity: item.quantity + 1 }
            } else {

              return item
            }
          } else {
            return item
          }
        })
      } else {
        const newItem: Motoslist = { ...acciones.payload.item, quantity: 1 }
        updateCarrito = [...state.cart, newItem]
      }


      return {
        ...state,
        cart: updateCarrito
      }

    case "eliminar-item-carrito":

      //const newCarrito = carrito.filter((item) => item.id !== id)
      const removeitemcarrito = state.cart.filter(item => item.id !== acciones.payload.id)
      return {
        ...state,
        cart: removeitemcarrito
      }
    case "aumentar-cantidad-item":

      const newCarrito = state.cart.map((item) => {
        if (item.id === acciones.payload.id && item.quantity < 5) {
          item.quantity++
        }

        return item
      })

      return {
        ...state,
        cart: newCarrito
      }

    case "reducir-cantidad-item":

      const DecrementItem = state.cart.map((item) => {
        if (item.id === acciones.payload.id && item.quantity > 1) {
          item.quantity--
        }
        return item
      })

      return {
        ...state,
        cart: DecrementItem
      }

    case "vaciar-carrito":

      return {
        ...state,
        cart: []
      }

    default:
      return state

  }
}

