import Cartwidget from "./Cartwidget"

function NavBar() {
  return (
    <nav className="flex justify-around items-center py-4 px-2 bg-fuchsia-300">
        <a href=" ">Inicio</a>
        <a href=" ">Cosméticos</a>
        <a href=" ">SkinCare</a>
        <a href=" "><Cartwidget/> </a>
    </nav>
  )
}

export default NavBar