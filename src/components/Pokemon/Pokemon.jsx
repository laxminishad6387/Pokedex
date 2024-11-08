import { Link } from "react-router-dom";
import "./Pokemon.css"

function Pokemon({name,image,id})
{
    return(
      <>
          <div className="Pokemon">
  
          <Link to={`/pokemon/${id}`}>
          <h1 className="Pokemon-name">{name}</h1>
           <div><img
             className="Pokemon-image"
            src={image} />
   

            </div> 
          </Link>
           
          </div>
          
      </>
    )
}

export default Pokemon;