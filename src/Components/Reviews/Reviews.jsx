import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from 'Services/getmovies';
import { ReviewItem } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviewsById(movieId).then(res => setReviews(res.data.results));
  }, [movieId]);

  if (!reviews) {
    return (
      <ReviewItem>
        <h4>Loading...</h4>
      </ReviewItem>
    );
  }
  
  if (reviews.length === 0) {
    return (
      <ReviewItem>
        <h4>We dont find any reviews about this movie</h4>
      </ReviewItem>
    );
  }

  return (
    <main>
      {reviews.map(item => {
        return (
          <ReviewItem key={item.id}>
            <h4> 📝 Review from {item.author}</h4>
            <p>{item.content}</p>
          </ReviewItem>
        );
      })}
    </main>
  );
};

