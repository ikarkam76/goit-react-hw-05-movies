
import { Container, Header, Logo, Link } from 'components/App.styled';
import { Outlet } from 'react-router-dom';


export const SharedLayout = () => {
    return (
      <Container>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
          <Logo>
            <span role="img" aria-label="tv icon">
              🎥
            </span>{' '}
            Moviemania
          </Logo>
        </Header>
        <Outlet />
      </Container>
    );
}