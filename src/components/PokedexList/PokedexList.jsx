import { useEffect, useState } from "react"
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
function PokedexList()
{
      const [pokemonList, setPokemonList]=useState([]);
      const [isLoading, setIsLoading]=useState(true);
     async function downloadPokedex()
     {
        const response=await axios.get(' https://pokeapi.co/api/v2/pokemon/') ;
          const pokemonResult=response.data.results;
          const pokemonResultPromise = pokemonResult.map((pokemon)=>axios.get(pokemon.url))
          const pokemonData=await axios.all(pokemonResultPromise);
          console.log(pokemonData);
          const res=pokemonData.map((pokeData)=>
            {
                  const pokemon=pokeData.data;
               
                 return{
                  id:pokemon.id,
                  name:pokemon.name,
                  types:pokemon.types,
                  image:pokemon.sprites.other.
                  dream_world.front_default
 }

            })
     setIsLoading(false);
            console.log(res);
            setPokemonList(res);
            console.log(res);
     }

   
      useEffect(()=>{
            downloadPokedex();
         ;
      },[])
      return(
            <div className="pokemon-list-wrapper">
                  pokemon list
             {(isLoading)?"loading....":
             pokemonList.map((poke)=><Pokemon name={poke.name}
                  image={poke.image}
                  key={poke.id}
             />)}
            </div>
      )
}
export default  PokedexList;