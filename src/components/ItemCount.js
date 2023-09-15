import {useState} from "react";

function ItemCount( {inicial, stock, onAdd}) {
    
    const [contador, setContador] = useState(inicial);

    const sumar = () => {
        if (contador < stock)
            setContador(contador + 1)
    }
    const restar = () => {
        if (contador > 1)
            setContador(contador - 1)
    }
    const resetear = () => {
        setContador(0)
    }

    const confirmarCompra = () => {
        console.log("confirmar compra");
        onAdd(contador)
        // () => onAdd (contador)} disabled = {!stock}
    }

  return (
     <>
        <div className="flex justify-center items-center gap-3 px-3 py-3"> 
            <button className="border p-1 rounded px-3 bg-fuchsia-300" onClick={sumar}>+</button>
            <p className="text-color-lightcoral">Cantidad: {contador}</p>
            <button className="border p-1 rounded px-3  bg-fuchsia-300" onClick={restar}>-</button>
        </div>
        <div className="flex justify-around px-3 py-3">
            <button className="border p-1 rounded  bg-fuchsia-300" onClick={confirmarCompra}>Confirmar compra</button>
            <button className="border p-1 rounded  bg-fuchsia-300" onClick={resetear}>Eliminar compra</button>
        </div>
    </>
  )
}

export default ItemCount