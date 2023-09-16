import React from 'react'
import { useCartContext } from '../context/CartContex'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';

const Cart = () => {

    const {cart, precioTotal, clearCart} = useCartContext();

    if(cart.length === 0) {
        return (
            <>
              <p>No hay elementos en el carrito</p> 
              <Link to='/'>Seguir comprando</Link> 
            </>
          )
    }
    return (
        <>
          {
            cart.map(producto => <ItemCart key = {producto.id} producto = {producto} />)
          }
          <p>Precio total: ${precioTotal()}</p>
          <button onClick={clearCart}>Limpiar carrito</button>
        </>
    )
  }

export default Cart