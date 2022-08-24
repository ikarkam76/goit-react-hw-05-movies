import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovies } from "Services/getmovies";


export const MovieDetails = () => {
    const id  = useParams();
    const [movie, setMovie] = useState([]);
    console.log(movie);
    useEffect(() => {
        getMovies(`movie/${id.movieId}`).then(res => {
          setMovie(res);
        });
    },[id])
    
    return (
        <div>
            <h3>GOOO!</h3>
        </div>
    );
    
}