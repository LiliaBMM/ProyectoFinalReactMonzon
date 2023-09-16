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
        <article className="card shadow-lg p-4 rounden-md font-sans text-lg text-fuchsia-600 text-center">
            <h2 className="flex justify-center">Nombre: {producto.nombre}</h2>
            <img  src={producto.img} alt={producto.nombre}/>
            <hr />
            <p className="font-serif text-sm text-fuchsia-600">Categoria: {producto.categoria}</p>
            <p className="font-serif text-sm text-fuchsia-600">Precio: ${producto.precio}</p>
            <p className="font-serif text-sm text-fuchsia-600">Stock disponible: {producto.stock}</p>
            <p className="font-serif text-sm text-fuchsia-600">Información: {producto.descripcion}</p>
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