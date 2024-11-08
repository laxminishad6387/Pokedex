import { useState } from "react";
import "./Search.css"
function Search({updateSearchTearm})
{
    
      return(
            <div className="search-wrapper">
    
                  <input
                  id="search-pokemon-name" 
                  type="text"
                  placeholder="pokemon name ......" 
                        onChange={(e)=>updateSearchTearm(e.target.value)}
                  />
        {updateSearchTearm}
            </div>

          
      )
}
export default Search;