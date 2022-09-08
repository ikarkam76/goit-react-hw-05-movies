import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from 'Services/getmovies';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviewsById(movieId).then(res => setReviews(res.data.results));
  }, [movieId]);

  if (!reviews) {
    return <h4>Loading...</h4>
  }
  
  if (reviews.length === 0) {
    return <h4>We dont find any reviews about this movie</h4>
  }

  return (
    <main>
      {reviews.map(item => {
        return (
          <div key={item.id}>
            <h4> 📝 Review from {item.author}</h4>
            <p>{item.content}</p>
          </div>
        );
      })}
    </main>
  );
};

