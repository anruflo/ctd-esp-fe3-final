import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DetailStyles from '../Styles/Detail.module.css'


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
      <div className={DetailStyles.container}>
        {dentist ? (
          <div className={DetailStyles.card}>
            <h3>Name: </h3><p>{dentist.name}</p>
            <h5>Email: </h5><p>{dentist.email}</p>
            <h5>Phone: </h5><p>{dentist.phone}</p>
            <h5>Website: </h5><Link className={DetailStyles.link}>{dentist.website}</Link>
          </div>
        ): (
          <p>Loading...</p>
        )}
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </>
  )
}

export default Detail