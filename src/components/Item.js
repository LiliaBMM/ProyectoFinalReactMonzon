import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({props}) => {
     const {nombre, img, stock, precio,  id} = props
      return(
        <article className="card shadow-lg p-4 rounden-md font-sans text-lg text-fuchsia-600">
            <h2 className="flex justify-center">Nombre: {nombre}</h2>
            <img src={img} alt={nombre} />
            <hr />
            <p>Precio: ${precio}</p>
            <section> 
                <ItemCount inicial={0} stock={stock} onAdd={(cantidad) => (
                   <p>Cantidad agregada: {cantidad}</p>
            )}/>    
            </section>
            <section className="flex justify-center"> 
                <Link to = {`/item/${id}`} className="border p-1 rounded px-3 bg-fuchsia-300">Ver Detalle</Link>
            </section>
        </article>    
    )
}
export default Item