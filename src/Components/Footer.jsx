import { useContext } from "react"
import { ContextGlobal } from "./utils/global.context"
import FooterStyles from "../Styles/Footer.module.css"
import logoFooter from "../../public/images/DH.png"
import FBicon from "../../public/images/ico-facebook.png"
import IGicon from "../../public/images/ico-instagram.png"
import TTicon from "../../public/images/ico-tiktok.png"
import WPicon from "../../public/images/ico-whatsapp.png"

const Footer = () => {

  const {state} = useContext(ContextGlobal);

  return (
    <footer className={`${FooterStyles.footer} ${state.theme === "light" ? FooterStyles.light : FooterStyles.dark}`}>
        <p>Powered by Andres Ruiz</p>
        <img 
          src={logoFooter}
          alt="DH-logo" 
          className={`${FooterStyles.logo} ${state.theme === "light" ? FooterStyles.logoLight : FooterStyles.logoDark}`}/>
        <div className={FooterStyles.socialMediaIcons}>
          <img src={FBicon} alt="facebook" />
          <img src={IGicon} alt="instagram" />
          <img src={TTicon} alt="tiktok" />
          <img src={WPicon} alt="whatsapp" />
        </div>
    </footer>
  )
}

export default Footer
