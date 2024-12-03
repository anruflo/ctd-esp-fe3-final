
import { useEffect, useState } from 'react';
import Card from '../Components/Card'
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setDentists(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError("We were unable to load the data. Please try again later.", );
      });
  }, []);
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {error && <p>{error}</p>}
        {dentists.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </main>
  )
}

export default Home