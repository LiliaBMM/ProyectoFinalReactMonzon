import { useState  } from "react";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";
import {useCartContext} from "../context/CartContex";

const ItemDetail = ({producto}) => {
   
    const [goToCart, setGoToCart] = useState(false);
    const {addCart} = useCartContext();
    
    const onAdd = (cantidad) => {
        setGoToCart(true);
        addCart(producto, cantidad);

    }
    return(
        <article>
            <h2>Nombre: {producto.nombre}</h2>
            <img src={producto.img} alt={producto.nombre} />
            <hr />
            <p>Categoria: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock disponible: {producto.stock}</p>
            <p>Información: {producto.descripcion}</p>
            <div>
                {
                    goToCart > 0 ? (
                        <Link to= '/cart'>Agregar al carrito</Link>
                    ) : (
                        <ItemCount inicial={0} stock={producto.stock} onAdd={onAdd}/>
                    )
                }
            </div>
        </article>
    )
}

export default ItemDetail