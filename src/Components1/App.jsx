import { Movies } from 'Pages1/Movies';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'Pages1/Home';
import { MovieDetails } from 'Pages1/MovieDetails';
import { SharedLayout } from 'Components1/SharedLayout';
import { Cast } from 'Components1/Cast';
import { Reviews } from 'Components1/Reviews';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
