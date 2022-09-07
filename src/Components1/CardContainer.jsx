
import { Container, Img, InfoContainer } from "Components1/CardContainer.styled";

export const CardContainer = ({ movie }) => {
    return (
      <Container>
        <Img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="poster"
        />
        <InfoContainer>
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>User score: {movie.vote_average}</p>
          <h4>Overview:</h4>
          <p>{movie.overview}</p>
          <h4>Genres:</h4>
          {movie.genres.map(item => (
            <p key={item.id}> ☑️ {item.name}</p>
          ))}
        </InfoContainer>
      </Container>
    );
}