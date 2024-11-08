import './App.css'

import CustomRoutes from './Routes/CustomRoutes/CustomRoutes'
// import Pokedex from './components/Pokedex/Pokedex'
import { Link } from 'react-router-dom'

function App() {
 return (
    <div className='pokemon-deatils-page'>
    <h1  id="pokemon-heading">
    <Link   to="/">
      Pokemon
    </Link>
    </h1>
         <CustomRoutes/>
  
 
    </div>
  )
}

export default App
