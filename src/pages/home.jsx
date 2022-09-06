import { Link } from "react-router-dom";
import { getMovies } from "../Services/getmovies";
import { useState, useEffect } from "react";
import { HomeContainer } from "./Home.styled";


export const Home = () => {
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    getMovies('trending/movie/day').then(response => {
      setMovies(response.data.results);
    });
  }, [])

  return (
    <HomeContainer>
      <h2>Trending movies today</h2>
      <ul>
        {movies.map(({id ,title}) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
       })}
      </ul>
    </HomeContainer>
  )
};

