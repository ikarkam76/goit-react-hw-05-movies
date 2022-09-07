import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from "react-router-dom";
import { getMovieByID } from "Services/getmovies";
import { CardContainer} from 'Components/CardContainer';




export const MovieDetails = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      getMovieByID(Number(movieId)).then(res => setMovie(res.data));
    }, [movieId])
  
  if (!movie) {
    return null;
  } 
  
  return (
    <main>
      <CardContainer movie={movie} />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
