import React from "react";
import { movies } from "../data";


function Movies() {
 return <div>
 <h1>Movies Page</h1>
   {movies.map(movie => (
        <li key={movie.title}>{movie.title} {movie.time} {movie.genres}</li>
       
      ))}
 </div>;

}

export default Movies;
