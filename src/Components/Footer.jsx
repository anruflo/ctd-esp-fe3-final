import { useContext } from "react"
import { ContextGlobal } from "./utils/global.context"
import FooterStyles from "../Styles/Footer.module.css"

const Footer = () => {

  const {state} = useContext(ContextGlobal);
  const logoFooter = "../../public/images/DH.png";

  return (
    <footer className={`${FooterStyles.footer} ${state.theme === "light" ? FooterStyles.light : FooterStyles.dark}`}>
        <p>Powered by Andres Ruiz</p>
        <img 
          src={logoFooter}
          alt="DH-logo" 
          className={`${FooterStyles.logo} ${state.theme === "light" ? FooterStyles.logoLight : FooterStyles.logoDark}`}/>
        <div className={FooterStyles.socialMediaIcons}>
          <img src="../../public/images/ico-facebook.png" alt="facebook" />
          <img src="../../public/images/ico-instagram.png" alt="instagram" />
          <img src="../../public/images/ico-tiktok.png" alt="tiktok" />
          <img src="../../public/images/ico-whatsapp.png" alt="whatsapp" />
        </div>
    </footer>
  )
}

export default Footer
