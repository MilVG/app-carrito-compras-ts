import { Carrito as Cart } from './../types/types.ts'
import { useState, useEffect ,useMemo} from 'react'
import { Motoslist } from './../types/types.ts'
import { listmotos } from "../data/motoslist"
const useCart = () => {

    const initialCart: () => Cart = () => {
        const datStorage = localStorage.getItem('carrito')
        if (datStorage) {
            return JSON.parse(datStorage) as Cart
        } else {
            return []
        }
    }
    const [carrito, setCarrito] = useState<Cart>(initialCart())
    const [datamotos, setDatamotos] = useState<Motoslist[]>(listmotos)

    //camibar el estado de un componente
    const [isFlex, setIsFlex] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    function handleshowCarrito() {
        setIsFlex(!isFlex)
    }

    function handleToCarrito(item: Motoslist) {

        const itemExists = carrito.findIndex(moto => moto.id == item.id)
        if (itemExists >= 0) {
            if (carrito[itemExists].quantity >= 5) return
            const updateCarrito = [...carrito]
            updateCarrito[itemExists].quantity++
            setCarrito(updateCarrito)
        } else {
            item.quantity = 1
            setCarrito([...carrito, item])
        }
    }

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
    function handleDescrementQuantity(id: number) {
        const newCarrito = carrito.map((item) => {
            if (item.id === id && item.quantity > 1) {
                item.quantity--
            }
            return item
        })
        setCarrito(newCarrito)
    }
    return {
        handleshowCarrito,
        isFlex,
        setCarrito,
        carrito,
        datamotos,
        handleToCarrito,
        totalCart,
        handleclearCart,
        handleDeleteItem,
        handleIncrementQuantity,
        handleDescrementQuantity
    }

}

export default useCart