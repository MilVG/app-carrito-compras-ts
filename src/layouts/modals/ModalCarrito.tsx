import { Carrito } from '../../types/types.ts'
export default function ModalCarrito({ isFlex, carrito, setCarrito }: { isFlex: boolean, carrito: Carrito, setCarrito: React.Dispatch<React.SetStateAction<Carrito>> }) {


    return (
        <div className='modal-carrito' style={{ display: isFlex ? 'flex' : 'none' }}>

            <h2 className='title-carrito'> {carrito.length > 0 ? 'TIENES ' + carrito.length + ' ITEMS' : 'El carrito esta vacio Carrito'}</h2>

            <table className='table-carrito'>
                <thead>
                    <tr>
                        <th>PRECIO</th>
                        <th >NOMBRE</th>
                        <th >PRECIO</th>
                        <th>CANTIDAD</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((moto) => (

                        <tr key={moto.id}>
                            <td>img</td>
                            <td>nombre</td>
                            <td>precio</td>
                            <td>1</td>
                        </tr>
                    ))
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>total</td>
                        <td>1</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
