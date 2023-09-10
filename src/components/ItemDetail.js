import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
   
    return(
        <article>
            <h2>Nombre: {producto.nombre}</h2>
            <img src={producto.img} alt={producto.nombre} />
            <hr />
            <p>Categoria: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock disponible: {producto.stock}</p>
            <p>Información: {producto.descripcion}</p>
            <ItemCount inicial={0} stock={producto.stock} onAdd={(cantidad) => (
                   <h2>Cantidad agregada: {cantidad}</h2>
            )}/>
        </article>
    )
}

export default ItemDetail