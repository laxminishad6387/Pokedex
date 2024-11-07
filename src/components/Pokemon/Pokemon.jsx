function Pokemon({name,image})
{
    return(
      <>
          <div>
            <h1>{name}</h1>
           <div><img src={image} /></div> 
          </div>
          
      </>
    )
}
export default Pokemon;