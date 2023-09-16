import Cartwidget from "./Cartwidget";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex justify-around items-center py-4 px-2 bg-fuchsia-300">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to={`/category/maquillaje`}>Maquillaje</NavLink>
      <NavLink to={`/category/skincare`}>Skincare</NavLink>
      <NavLink to="/cart"><Cartwidget/></NavLink>
    </nav>
  )
}

export default NavBar