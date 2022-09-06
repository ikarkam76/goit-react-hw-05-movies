import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById } from 'Services/getmovies';

export const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState(null);

    useEffect(() => {
        getMovieCastById(movieId).then(res => setActors(res.data.cast))
    }, [movieId])

    if (!actors) {
        return null;
    }

    return (
      <main>
            {actors.map(actor => {
                return (
                  <div key={actor.credit_id}>
                        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={`Foto of ${actor.character}`} />
                        <h4>{actor.name}</h4>
                        <p>Character: {actor.character}</p>
                  </div>
                );
          })}
      <h4>Cast from this!</h4>
    </main>
  );
};
