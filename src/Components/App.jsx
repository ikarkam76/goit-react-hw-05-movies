import { Movies } from 'Pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'Pages/Home/Home';
import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
import { SharedLayout } from 'Components/SharedLayout/SharedLayout';
import { Cast } from 'Components/Cast/Cast';
import { Reviews } from 'Components/Reviews/Reviews';


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
