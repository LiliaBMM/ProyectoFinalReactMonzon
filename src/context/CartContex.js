import React, {  useState , useContext } from "react";

const CartContext = React.createContext ([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart , setCart] = useState([]);

    
    const addCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map(producto => {
                return producto.id === item.id ? { ...producto, cantidad: producto.cantidad + cantidad} : producto
            }));
        } else {
            setCart([...cart, {...item, cantidad }]);
        }
    }
    console.log('carrito:' , cart);

    const precioTotal = () => {
        return cart.reduce((cuenta, actual) => cuenta + actual.cantidad * actual.precio, 0);
    }

    const productosTotal = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);
    
    const clearCart = () => setCart([]); 

    const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false;

    const removeCart = (id) => setCart(cart.filter(producto => producto.id !==id));

    
    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeCart,
            addCart,
            precioTotal,
            productosTotal,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;