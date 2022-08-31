import { Movies } from 'components/Movies';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { MovieDetails } from 'components/MovieDetails';
import { SharedLayout } from './SharedLayout';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';


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
