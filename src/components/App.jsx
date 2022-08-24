import { Movies } from 'components/movies';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/home';
import { MovieDetails } from 'components/movieDetails';
import { SharedLayout } from './sharedLayout';
import { Cast } from 'components/cast';
import { Reviews } from 'components/reviews';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path=":movieId/cast" element={<Cast />} />
          <Route path=":movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
