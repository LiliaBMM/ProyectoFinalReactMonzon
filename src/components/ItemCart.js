import React from 'react'
import { useCartContext } from '../context/CartContex'

const ItemCart = ({producto}) => {
    
    const {nombre, img, precio,  cantidad, id} = producto
    const {removeCart} = useCartContext();

  return (
    <article className="card shadow-lg p-4 rounden-md font-sans text-lg text-fuchsia-600">
        <h2 className="flex justify-center">Nombre: {nombre}</h2>
        <img src={img} alt={nombre} />
        <hr />
        <p>Precio: ${precio}</p>
        <p>Cantidad: {cantidad}</p>
        <p>SubTotal: ${cantidad * precio}</p>
        <button onClick={() => removeCart(id)}>Eliminar</button>
    </article>
  )
}

export default ItemCart