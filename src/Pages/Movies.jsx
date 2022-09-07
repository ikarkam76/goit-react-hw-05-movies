import { SearchBox } from 'Components/SearchBox';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useSearchParams, Link, useLocation } from 'react-router-dom';
import { getMovieByName } from 'Services/getmovies';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? 'current';

  useEffect(() => {
    getMovieByName(queryName).then(res => setMovies(res.data.results))
  }, [queryName])

  const changeSearch = (value) => {
    setSearchParams(value !== '' ? {query: value} : {})
    console.log(value);
  }

  if (!movies) {
    return null;
  }
    return (
      <div>
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
      </div>
    );
}