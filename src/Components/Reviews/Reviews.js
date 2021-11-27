import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FetchMoviesReviews } from '../Api/Api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    FetchMoviesReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(i => {
        return (
          <li key={i.id}>
            <h2>Author: {i.author}</h2>
            <p>{i.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
}