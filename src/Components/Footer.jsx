import { useContext } from "react"
import { ContextGlobal } from "./utils/global.context"


const Footer = () => {

  const {state} = useContext(ContextGlobal);

  return (
    <footer className={state.theme === "light" ? "light" : "dark"}>
        <p>Powered by Andres Ruiz</p>
        <img src="./img/DH.png" alt='DH-logo' />
        <div>
          <img src="../../public/images/ico-facebook.png" alt="facebook" />
          <img src="../../public/images/ico-instagram.png" alt="instagram" />
          <img src="../../public/images/ico-tiktok.png" alt="tiktok" />
          <img src="../../public/images/ico-whatsapp.png" alt="whatsapp" />
        </div>
    </footer>
  )
}

export default Footer
