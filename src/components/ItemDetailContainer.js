import { useState, useEffect } from "react"
import {getProductById} from "../asyncMock"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
 
 const {id} = useParams()

 const [producto, setProducto] = useState([])
   
    useEffect(() => {
      if (id !== undefined){
        getProductById(id)
            .then(response => {
              setProducto(response)
            })
            .catch(error => {
              console.error(error)
            })
      }
    }, [id])

  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer