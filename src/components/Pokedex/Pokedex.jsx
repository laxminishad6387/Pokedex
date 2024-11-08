import { useState } from "react";
import PokedexList from "../PokedexList/PokedexList";
import Search from "../Search/Search";
import "./Pokedex.css"

function Pokedex()
{
   const [searchTerm,setSearchTerm]=useState('');
   return (
      <div className="pokedex-wrapper">
        
            <Search updateSearchTearm={setSearchTerm}/>
            {searchTerm}
          { (searchTerm.length==0)?<PokedexList/>:''}
      </div>
   )
}
export default Pokedex;