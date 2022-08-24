import { getMovies } from "components/Services/getmovies";
import { useState, useEffect } from "react";


export const Home = () => {
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    getMovies('trending/movie/day').then(response => {
      setMovies(response.data.results);
    });
  }, [])

  console.log(movies);

  return (
    <div>
      <h2>Trending movies today</h2>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>{movie.title}</li>
         )
       })}
      </ul>
    </div>
  )
};

