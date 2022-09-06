import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from '../Services/getmovies';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviewsById(movieId).then(res => setReviews(res.data.results));
  }, [movieId]);

  if (!reviews) {
    return <h4>We don`t have any reviews for this movie</h4>;
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


// author:"NancyLDraper@gmail.com"
// author_details: {name: '', username: 'NancyLDraper@gmail.com', avatar_path: null, rating: 8}
// content: "By January 2022,out of 10. [Drama]"
// created_at: "2022-07-16T14:57:32.259Z"
// id:"62d2d1dcd399e6004bfb74f6"
// updated_at:"2022-07-26T14:22:09.164Z"
// url:"https://www.themoviedb.org/review/62d2d1dcd399e6004bfb74f6"