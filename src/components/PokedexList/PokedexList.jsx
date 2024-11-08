import { useEffect, useState } from "react"
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
import "./PokedexList.css"
function PokedexList()
{
//       const [pokemonList, setPokemonList]=useState([]);
//       const [isLoading, setIsLoading]=useState(true);
//       const [podexUrl, setPodexUrl]=useState(' https://pokeapi.co/api/v2/pokemon/');
//       const [prevUrl , setPrevUrl]=useState('');
//       const [nextUrl, setNextUrl]=useState('');
      const [pokemonListState,setPokemonListState]=useState({
            pokemonList:[],
            isLoading:true,
            podexUrl:' https://pokeapi.co/api/v2/pokemon/',
            nextUrl:'',
            prevUrl:''

      })
     async function downloadPokedex()
     {
      // setIsLoading(true);
      setPokemonListState((state)=>({...state,isLoading:true}));
        const response=await axios.get(pokemonListState.podexUrl) ;
      //   console.log(response.data);
      //   setNextUrl(response.data.next);
      //   setPrevUrl(response.data. previous );

      // setPokemonListState({...pokemonListState,prevUrl:response.data.previous})
          const pokemonResult=response.data.results;
          setPokemonListState((state)=>({...state,nextUrl:response.data.next,prevUrl:response.data.previous}));
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
//      setIsLoading(false);
// setPokemonListState({...pokemonListState,isLoading:false});
            // console.log(res);
            // setPokemonList(res);
            setPokemonListState((state)=>({
                  ...state,
                  pokemonList:res,
                  isLoading:false
            }));
            console.log(res);
     }

   
      useEffect(()=>{
            downloadPokedex();
         ;
      },[pokemonListState.podexUrl])
      return(
            <div className="pokemon-list-wrapper">
               <div className="pokemon-wrapper">
                  {(pokemonListState.isLoading)?"loading....":
            pokemonListState.pokemonList.map((poke)=><Pokemon name={poke.name}
                  image={poke.image}
                  key={poke.id}
                  id={poke.id}
             />)}
                  </div>
                  <div className="controls">
                        <button disabled={pokemonListState.prevUrl==null}onClick={()=>{
                              const urlToSet=pokemonListState.prevUrl;
                              setPokemonListState({...pokemonListState,podexUrl:urlToSet})}
                              } className="controls-btn">prev</button>
                        <button disabled={pokemonListState.nextUrl==null} onClick={()=>{
                              const  urlToSet=pokemonListState.nextUrl;
                        setPokemonListState({...pokemonListState,podexUrl:urlToSet})}
                        } className="controls-btn">next</button>
                  </div>
            
            </div>
      )
}
export default  PokedexList;