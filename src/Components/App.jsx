import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Home } from 'Pages/Home/Home';
import { SharedLayout } from 'Components/SharedLayout/SharedLayout';

const Movies = lazy(() => import('Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('Components/Cast/Cast'));
const Reviews = lazy(() => import('Components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<SharedLayout />} />
    </Routes>
  );
};
