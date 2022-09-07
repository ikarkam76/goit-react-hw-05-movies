import { Movies } from 'Pages/Movies';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'Pages/Home';
import { MovieDetails } from 'Pages/MovieDetails';
import { SharedLayout } from 'Components/SharedLayout';
import { Cast } from 'Components/Cast';
import { Reviews } from 'Components/Reviews';


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
