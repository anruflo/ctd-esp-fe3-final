import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [dentist, setDentist] = useState({});
  const {state} = useContext(ContextGlobal)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setDentist(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className={state.theme === 'light' ? 'light' : 'dark'}>
      <h1>Detail Dentist id </h1>
      {dentist ? (
        <div>
          <h3>Name: {dentist.name}</h3>
          <h5>Email: {dentist.email}</h5>
          <h5>Phone: {dentist.phone}</h5>
          <h5>Website:{dentist.website}</h5>
        </div>
      ): (
        <p>Loading...</p>
      )}
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail