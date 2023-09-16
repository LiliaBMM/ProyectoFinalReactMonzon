import { useState, useEffect } from "react";
import ItemLists from "./ItemLists";
import { useParams } from "react-router-dom";
import { getDocs, collection, getFirestore, query , where } from "firebase/firestore";


function ItemListContainer(greeting) {

  const [produto, setProducto] = useState([])
  
  const {categoria} = useParams()
  
  useEffect(() => {
      const db = getFirestore();
      const productoColeccion = collection(db, 'productos');
      if (categoria) {
          const productByCategoria = query(productoColeccion, where('categoria', '==', categoria))
          getDocs(productByCategoria)
             .then(res => setProducto(res.docs.map(produto => ({id: produto.id, ...produto.data()}))))
      }else{
          getDocs(productoColeccion)
             .then(res => setProducto(res.docs.map(produto => ({id: produto.id, ...produto.data()})))) 
            }
      },[categoria])

  return (
    <>

      {Object.keys(greeting).length !== 0 && <p>Bienvenido {greeting.cliente} a nuestra tienda</p>} 
      <ItemLists producto = {produto}/>
    </>
  )
}

export default ItemListContainer