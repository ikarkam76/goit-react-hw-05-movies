import { Movies } from 'components/movies';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/home';
import { MovieDetails } from 'components/movieDetails';
import { SharedLayout } from './sharedLayout';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
