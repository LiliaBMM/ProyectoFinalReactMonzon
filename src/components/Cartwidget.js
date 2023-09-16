import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContex"


const Cartwidget = () => {

 const { productosTotal } = useCartContext ();


  return (
      <Link to='/cart' className="flex " style={{display: productosTotal() > 0 ? 'block' : 'none'}}>  
        <img src="/shoppingcart.png" alt="" />
        {productosTotal()}
      </Link>
          
  )
}

export default Cartwidget