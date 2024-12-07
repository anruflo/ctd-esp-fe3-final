import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DetailStyles from '../Styles/Detail.module.css';

const Detail = () => {
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
      <h1>Detail Dentist ID: {id}</h1>
        <div className={DetailStyles.container}>
        {dentist ? (
          <div className={DetailStyles.card}>
            <div className={DetailStyles.row}>
              <span className={DetailStyles.label}>Name:</span>
              <span className={DetailStyles.value}>{dentist.name}</span>
            </div>
            <div className={DetailStyles.row}>
              <span className={DetailStyles.label}>Email:</span>
              <span className={DetailStyles.value}>{dentist.email}</span>
            </div>
            <div className={DetailStyles.row}>
              <span className={DetailStyles.label}>Phone:</span>
              <span className={DetailStyles.value}>{dentist.phone}</span>
            </div>
            <div className={DetailStyles.row}>
              <span className={DetailStyles.label}>Website:</span>
              <span className={DetailStyles.value}>
                <Link className={DetailStyles.link}>
                  {dentist.website}
                </Link>
              </span>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Detail;