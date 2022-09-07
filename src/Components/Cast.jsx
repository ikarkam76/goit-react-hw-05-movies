import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById } from 'Services/getmovies';
import { ActorImg } from 'Components/Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    getMovieCastById(movieId).then(res => setActors(res.data.cast));
  }, [movieId]);

  if (!actors) {
    return null;
  }

  return (
    <div>
      {actors.map(item => {
        return (
          <div key={item.credit_id}>
            <ActorImg
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={`Foto of ${item.name}`}
            />
            <h4>{item.name}</h4>
            <p>Character: {item.character}</p>
          </div>
        );
      })}
    </div>
  );
};
