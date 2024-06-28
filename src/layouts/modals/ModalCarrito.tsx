import { useMemo } from 'react'
import { Carrito } from '../../types/types.ts'
export default function ModalCarrito({ isFlex, carrito, setCarrito }: { isFlex: boolean, carrito: Carrito, setCarrito: React.Dispatch<React.SetStateAction<Carrito>> }) {


  const totalCart = useMemo(() => carrito.reduce((total, item) => total + (item.quantity * item.precio), 0), [carrito])

  function handleclearCart() {
    setCarrito([])
    
  }
  function handleDeleteItem(id: number) {
    const newCarrito = carrito.filter((item) => item.id !== id)
    setCarrito(newCarrito)
  }

  function handleIncrementQuantity(id: number) {
    const newCarrito = carrito.map((item) => {
      if (item.id === id && item.quantity < 5) {
        item.quantity++
      }

      return item
    })
    
    setCarrito(newCarrito)
  }
  function handleDescrementQuantity(id:number){
    const newCarrito = carrito.map((item) =>{
      if(item.id === id && item.quantity > 1){
        item.quantity--
      }
      return item
    })
    setCarrito(newCarrito)
  }
  return (
    <div className='modal-carrito' style={{ display: isFlex ? 'flex' : 'none' }}>

      <h2 className='title-carrito'> {carrito.length > 0 ? 'TIENES ' + carrito.length + ' ITEMS' : 'El carrito esta Vacio'}</h2>

      <table className='table-carrito'>
        <thead>
          <tr>
            <th>PRECIO</th>
            <th >NOMBRE</th>
            <th >PRECIO</th>
            <th>CANTIDAD</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((moto) => (

            <tr key={moto.id}>
              <td><img src={`/images/${moto.img}`} alt="" width={40} height={40} style={{ borderRadius: '50%' }} /></td>
              <td>{moto.name}</td>
              <td>{moto.precio}</td>
              <td>
                <button onClick={() => handleDescrementQuantity(moto.id)}>-</button>
                {moto.quantity}
                <button onClick={() => handleIncrementQuantity(moto.id)}>+</button>
              </td>
              <td>
                <button onClick={() => handleDeleteItem(moto.id)} style={{ color: '#ff5733', borderRadius: '50%', cursor: 'pointer' }}>X</button>
              </td>
            </tr>
          ))
          }

        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>total</td>
            <td>S/.{totalCart}</td>
          </tr>
          <tr>
            <td><button className='btn-clear-carrito' onClick={() => handleclearCart()}>VACIAR CARRITO</button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
