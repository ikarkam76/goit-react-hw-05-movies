import { Movies } from 'pages/Movies';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home1';
import { MovieDetails } from 'pages/MovieDetails';
import { SharedLayout } from './SharedLayout1';
import { Cast } from 'components/Cast1';
import { Reviews } from 'components/Reviews1';


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
