import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
  
  const {id} = useParams()
  const [producto, setProducto] = useState([])
   
    useEffect(() => {
     const db = getFirestore();
     const productById = doc(db, 'productos', id);
     getDoc(productById)
        .then(res => setProducto({id: res.id, ...res.data()}))
    }, [id])

  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer