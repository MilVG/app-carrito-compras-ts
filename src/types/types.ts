import { Dispatch } from "react";
import { CarritoAcciones } from "../reducers/cart-reducer";


export type Motoslist = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  precio: number;
  img: string;
}

export type Carrito = Motoslist[];

export type handleshowCarrito = () => void

export type motos = {
  datamotos: Motoslist[];
  dispatch: Dispatch<CarritoAcciones>
}


export type cartProps = {
  cart: Carrito
  handleshowCarrito: handleshowCarrito
  isFlex: boolean
  dispatch: Dispatch<CarritoAcciones>

}
