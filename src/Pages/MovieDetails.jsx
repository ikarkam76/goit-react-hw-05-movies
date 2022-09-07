import { useEffect, useState } from 'react';
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieByID } from "Services/getmovies";
import { CardContainer} from 'Components/CardContainer';
import { BackLink } from 'Components/BackLink';




export const MovieDetails = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backHref = location.state?.from ?? '/movies';

  
    useEffect(() => {
      getMovieByID(Number(movieId)).then(res => setMovie(res.data));
    }, [movieId])
  
  if (!movie) {
    return null;
  } 

  return (
    <main>
      <BackLink to={backHref}>⬅️ Back to movies</BackLink>
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
