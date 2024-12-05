
import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import FavsSyles from "../Styles/Favs.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContext(ContextGlobal)

  return (
    <div className={FavsSyles.container}>
      <h1>Dentists Favs</h1>
      <div className={FavsSyles.cardGrid}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.length > 0 ? (state.favs.map((fav) => (
            <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} isFavorite={true}/>
        ))
        ) : (
          <p>No favorites yet</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
