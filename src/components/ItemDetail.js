import { useState } from "react";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";

const ItemDetail = ({producto}) => {
   
    const [cantProducto, setCantProducto] = useState(0)
    
    const onAdd = (cantidad) => {
        setCantProducto(cantidad)
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
                    cantProducto > 0 ? (
                        <Link to= '/carrito'>Terminar compra</Link>
                    ) : (
                        <ItemCount inicial={0} stock={producto.stock} onAdd={onAdd}/>
                    )
                }
            </div>
        </article>
    )
}

export default ItemDetail