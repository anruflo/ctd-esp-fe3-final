import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [dentist, setDentist] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setDentist(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {dentist ? (
        <div>
          <h1>{dentist.name}</h1>
          <p>{dentist.email}</p>
          <p>{dentist.phone}</p>
          <p>{dentist.website}</p>
        </div>
      ): (
        <p>Loading...</p>
      )}
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail