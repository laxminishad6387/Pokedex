import PokedexList from "../PokedexList/PokedexList";
import Search from "../Search/Search";
import "./Pokedex.css"

function Pokedex()
{
   return (
      <div className="pokedex-wrapper">
           <h1 id="pokemon-heading">Pokemon</h1>
            <Search/>
           <PokedexList/>
      </div>
   )
}
export default Pokedex;