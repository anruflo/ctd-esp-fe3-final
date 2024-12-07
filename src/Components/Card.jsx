import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { FaStar, FaXmark } from "react-icons/fa6";
import CardStyles from "../Styles/Card.module.css"


const Card = ({ name, username, id, isFavorite}) => {
  const {state, dispatch} = useContext(ContextGlobal);

  const addFav = ()=>{
    const newFav = { name, username, id };
    
    if (isFavorite) {
      dispatch({type: "REMOVE_FAV", payload: newFav});
      alert(`${name} has been removed from your favorites`);   
    } else {
      const isAlreadyFav = state.favs.some((fav) => fav.id === id);
      if (!isAlreadyFav) {
        dispatch({type: "ADD_FAV", payload: newFav});
        alert(`${name} has been added to your favorites`);
      } else {
        alert(`${name} is already in your favorites`);
      }
    }
  };
  return (
    <div className={`${CardStyles.card} ${CardStyles[state.theme]}`}>
      <img src="../../public/images/doctor.jpg" alt="doctor" />
      <Link to={`/dentist/${id}`}><h4>{name}</h4></Link>
      <p>{username}</p>
      <button onClick={addFav} className={CardStyles.favButton}>
        {isFavorite ? <FaXmark color="#ff0000" /> : <FaStar color="#ffe100" />}
      </button>
    </div>
  );
};

export default Card;
