import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './sharedLayout.styled';


export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            📺
          </span>{' '}
          Filmoteka
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
