import { SearchBox } from 'Components/SearchBox/SearchBox';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useSearchParams, Link, useLocation } from 'react-router-dom';
import { getMovieByName } from 'Services/getmovies';
import { MoviesContainer } from 'Pages/Movies/Movies.styled';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!queryName) {
      setMovies(null);
      return;
    }
    getMovieByName(queryName).then(res =>
      setMovies(res.data.results)
    );
  }, [queryName])

  const changeSearch = (value) => {
    setSearchParams(value !== '' ? {query: value} : {})
  }

  if (!movies) {
    return (
      <MoviesContainer>
        <Outlet />
        <SearchBox sendSearchName={changeSearch} />
      </MoviesContainer>
    );
  }
    return (
      <MoviesContainer>
        <Outlet />
        <SearchBox sendSearchName={changeSearch} />
        <ul>
          {movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </MoviesContainer>
    );
}