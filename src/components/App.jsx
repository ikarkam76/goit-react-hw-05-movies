import { Movies } from 'components/movies';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/home';
import { Container, Header, Logo, Link } from 'components/App.styled';


export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
        <Logo>
          <span role="img" aria-label="tv icon">
            📺
          </span>{' '}
          Moviemania
        </Logo>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Container>
  );
};
