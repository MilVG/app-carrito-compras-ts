export type Motoslist = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  precio: number;
  img: string;
}

export type Carrito = Motoslist[];

export type handleToCarrito = (item: Motoslist) => void
export type carritoProps = {
  moto: Motoslist;
  //setCarrito: React.Dispatch<React.SetStateAction<Carrito>>
  handleAddToCarrito: handleToCarrito
}

export type handleshowCarrito = () => void
export type carritoPropsRoot = {
  carrito: Motoslist[];
  setCarrito: React.Dispatch<React.SetStateAction<Motoslist[]>>
}

