
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const currentFavs = JSON.parse(localStorage.getItem("favs")) || [];
    
    const isAlreadyFav = currentFavs.some(fav => fav.id === id);
    if (isAlreadyFav) {
      const updatedFavs = [...currentFavs, { name, username, id }];
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      alert(`${name} has been added to your favorites`);  
    } else {
      alert(`${name} is already in your favorites`);
    }
  };

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src="../../public/images/doctor.jpg" alt="doctor" />
        <Link to={`/dentist/${id}`}><h4>{name}</h4></Link>
        <p>{username}</p>
        <h5>{id}</h5>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
