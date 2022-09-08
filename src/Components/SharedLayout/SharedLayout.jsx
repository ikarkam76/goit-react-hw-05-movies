
import { Container, Header, Logo, Link } from 'Components/SharedLayout/SharedLayout.styled';
import { Suspense } from 'react';
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
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    );
}