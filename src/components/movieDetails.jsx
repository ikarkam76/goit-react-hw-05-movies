import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { getMovies } from "Services/getmovies";


export const MovieDetails = () => {
    const id  = useParams();
    const [movie, setMovie] = useState([]);
    console.log(movie);
    useEffect(() => {
        getMovies(`movie/${id.movieId}`).then(res => {
          setMovie(res.data);
        });
    },[id])
    
    const { title, release_date, vote_average, overview, poster_path } = movie;
    const imgUrl = 'https://image.tmdb.org/t/p/w500' + poster_path;
    return (
      <main>
        <div>
                <h2>
                    <img src={imgUrl} alt='poster' />
            {title} ({release_date})
          </h2>
          <p>User score: {vote_average}</p>
          <h4>Overview:</h4>
          <p>{overview}</p>
          <h4>Genres:</h4>
            {/* {genres.map(({ name }) => (<span>{name} </span>))} */}
        </div>
        <ul>
          <li>
            <Link to={`${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </main>
    );
    
}