import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById } from 'Services/getmovies';
import { ActorImg, CastItem } from 'Components/Cast/Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    getMovieCastById(movieId).then(res => setActors(res.data.cast));
  }, [movieId]);

  if (!actors) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <ul>
        {actors.map(item => {
          return (
            <CastItem key={item.credit_id}>
              <ActorImg
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={`Foto of ${item.name}`}
              />
              <h3>{item.name}</h3>
              <p>Character: {item.character}</p>
            </CastItem>
          );
        })}
      </ul>
    </div>
  );
};
