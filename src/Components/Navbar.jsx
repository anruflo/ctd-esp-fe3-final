

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContext } from "react";
import { Link } from "react-router-dom"
import { ContextGlobal } from "./utils/global.context";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import NavbarStyle from "../Styles/Navbar.module.css"

const Navbar = () => {
  const {state, toggleTheme} = useContext(ContextGlobal);



  return (
    <nav className={NavbarStyle.navbar}>
      <img src="../../public/DH.ico" alt="DH-logo" />
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className={NavbarStyle.navLinks}>
        <Link to="/"><h4>Home</h4></Link>
        <Link to="/contact"><h4>Contact</h4></Link>
        <Link to="/favs"><h4>Favs</h4></Link>        
      </div>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme} className={NavbarStyle.themeButton}>
        {state.theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  )
}

export default Navbar