import { useState, useEffect } from "react";
import ItemLists from "./ItemLists";
import {getProducto,getProductByCategoria} from "../asyncMock";
import { useParams } from "react-router-dom";


function ItemListContainer(greeting) {

  const [produto, setProducto] = useState([])
  
  const {categoria} = useParams()
  
  useEffect(() => {
    if(categoria !== undefined){
      getProductByCategoria(categoria)
     .then(response => {
        setProducto(response)
      })
     .catch(error => {
      console.error(error);
     })
    }else{
      getProducto()
     .then(response => {
        setProducto(response)
     })
     .catch(error => {
      console.error(error);
     })
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