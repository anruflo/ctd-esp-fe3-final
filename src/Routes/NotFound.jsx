import { Link } from "react-router-dom"
import NotFoundStyles from "../Styles/NotFound.module.css"
import { useContext } from "react"
import { ContextGlobal } from "../Components/utils/global.context"

export const NotFound = () => {
    const {state} = useContext(ContextGlobal);

    return (
        <div className={NotFoundStyles.container}>
            <img 
                className={`${NotFoundStyles.image} ${state.theme === "dark" ? NotFoundStyles.dark : ""}`} 
                src="../../public/images/404 error.png" 
                alt="404" 
            />
            <Link to="/">
                <button className={NotFoundStyles.button}>
                    Back to Home
                </button>
            </Link>
        </div>
    )
}
