import { useContext } from "react";
import { Link } from "react-router-dom"
import { ContextGlobal } from "./utils/global.context";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import NavbarStyle from "../Styles/Navbar.module.css"
import DHlogo from "../../public/DH.ico"

const Navbar = () => {
  const {state, toggleTheme} = useContext(ContextGlobal);



  return (
    <nav className={NavbarStyle.navbar}>
      <Link to="/"><img src={DHlogo} alt="DH-logo" /></Link>
      <div className={NavbarStyle.navLinks}>
        <Link to="/"><h4>Home</h4></Link>
        <Link to="/contact"><h4>Contact</h4></Link>
        <Link to="/favs"><h4>Favs</h4></Link>        
      </div>

      <button onClick={toggleTheme} className={NavbarStyle.themeButton}>
        {state.theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  )
}

export default Navbar