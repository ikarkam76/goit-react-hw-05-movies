import { Suspense, useEffect, useState } from 'react';
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieByID } from "Services/getmovies";
import { CardContainer} from 'Components/CardContainer/CardContainer';
import { BackLink } from 'Components/BackLink/BackLink';
import { LinkContainer } from './MovieDetails.styled';




const MovieDetails = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backHref = location.state?.from ?? '/';

  
    useEffect(() => {
      getMovieByID(Number(movieId)).then(res => setMovie(res.data));
    }, [movieId])
  
  if (!movie) {
    return null;
  } 

  return (
    <main>
      <BackLink to={backHref}>⬅️ Go back</BackLink>
      <CardContainer movie={movie} />
      <LinkContainer>
        <ul>
          <li>
            <Link to="cast" state={{ from: backHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </LinkContainer>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
}
export default MovieDetails;