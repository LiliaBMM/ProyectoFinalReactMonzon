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
        <p className="font-serif text-sm text-fuchsia-600">Precio: ${precio}</p>
        <p className="font-serif text-sm text-fuchsia-600">Cantidad: {cantidad}</p>
        <p className="font-serif text-sm text-fuchsia-600">SubTotal: ${cantidad * precio}</p>
        <button className="border p-1 rounded px-3 bg-fuchsia-300" onClick={() => removeCart(id)}>Eliminar</button>
    </article>
  )
}

export default ItemCart