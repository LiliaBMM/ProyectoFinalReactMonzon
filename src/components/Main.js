import Cart from "./Cart";
import Checkout from "./Checkout";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import {Routes, Route} from "react-router-dom"


function Main() {
  return (
    <main className="p-2 grow">
        <Routes>
                <Route path="/" element = {<ItemListContainer cliente = "Lilia"/>}/>
                <Route path="/item/:id" element = {<ItemDetailContainer/> }/>
                <Route path="/category/:categoria" element = {<ItemListContainer/>}/>
                <Route path="/cart" element = {<Cart/>}/>
                <Route path="/checkout" element = {<Checkout/>}></Route>
        </Routes>
    </main>
  )
}

export default Main
 