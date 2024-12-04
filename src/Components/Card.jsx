
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { FaStar, FaXmark } from "react-icons/fa6";


const Card = ({ name, username, id, }) => {
  const {state, dispatch} = useContext(ContextGlobal);
  const isFavorite = state.favs.some((fav) => fav.id === id);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    
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
    <div className={`card ${state.theme}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <img src="../../public/images/doctor.jpg" alt="doctor" />
      <Link to={`/dentist/${id}`}><h4>{name}</h4></Link>
      <p>{username}</p>
      <h5>{id}</h5>
      <button onClick={addFav} className="favButton">
        {isFavorite ? <FaXmark/> : <FaStar/>}
      </button>
    </div>
  );
};

export default Card;
