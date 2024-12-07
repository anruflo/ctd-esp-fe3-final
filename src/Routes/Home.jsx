
import { useContext } from 'react';
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';
import HomeStyles from "../Styles/Home.module.css";

const Home = () => {
  const {state} = useContext(ContextGlobal);
  
  return (
    <main className={`${HomeStyles.main} ${state.theme === 'light' ? 'light' : 'dark'}`}>
      <h1>Home</h1>
      <div className={HomeStyles.cardGrid}>
        {state.data.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} isFavorite={false} />
        ))}
      </div>
    </main>
  )
}

export default Home