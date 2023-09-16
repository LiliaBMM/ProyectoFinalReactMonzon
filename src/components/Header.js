import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-around items-center px-6">
        <h1 className="font-serif text-2xl text-fuchsia-600">Vallita Cosméticos</h1>
        <Link to = "/"><img src="/favicon.jpg" alt="Vallita cosméticos" /></Link>
    </div>
  )
}

export default Header