
import { useContext } from 'react';
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContext(ContextGlobal);
  
  return (
    <main className={state.theme === 'light' ? 'light' : 'dark'} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} isFavorite={false} />
        ))}
      </div>
    </main>
  )
}

export default Home