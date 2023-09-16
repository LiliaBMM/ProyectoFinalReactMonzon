import React from 'react'
import { useCartContext } from '../context/CartContex'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Cart = () => {

    const {cart, precioTotal, clearCart} = useCartContext();

    const orden = {
      buyer: {
        nombre: 'Lilia',
        correo: 'lilia@email.com',
        telefono: '12345678',
        direccion: 'Venezuela'
      },
      items: cart.map(producto => ({id: producto.id, nombre:producto.nombre, precio: producto.precio, cantidad:producto.cantidad })),
      total: precioTotal(),
    }

    const handleClick = () => {
      const db = getFirestore()
      const coleccionorden = collection(db, 'ordenes')
      addDoc(coleccionorden, orden)
        .then(({id}) => console.log('orden generada y enviada a firebase: ',id))
    }

    if(cart.length === 0) {
        return (
            <div className='justify-evenly text-center'>
              <p className="font-serif text-sm text-fuchsia-600">No hay elementos en el carrito</p> 
              <Link to='/' className="font-serif text-xl text-fuchsia-600">Seguir comprando</Link> 
            </div>
          )
    }
    return (
        <>
          {
            cart.map(producto => <ItemCart key = {producto.id} producto = {producto} />)
          }
          <p className="font-serif text-sm text-fuchsia-600">Precio total: ${precioTotal()}</p>
          <div>
              <button className="border p-1 rounded px-3 bg-fuchsia-300" onClick={clearCart}>Limpiar carrito</button>
              <button className="border p-1 rounded px-3 bg-fuchsia-300" onClick={handleClick}>Concretar compra</button>
          </div>
          
        </>
    )
  }

export default Cart