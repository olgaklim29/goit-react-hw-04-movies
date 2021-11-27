import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchApi } from '../Components/Api/Api.js';

export default function HomePage({ location }) {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    FetchApi().then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    movies && (
      <>
        <h1>Trending today</h1>
        <ol>
          {movies.map(el => {
            return (
              <li className="list-item_movies" key={el.id}>
                <Link
                  to={{
                    pathname: `/movies/${el.id}`,
                    state: { from: location },
                  }}
                >
                  {el.title}{' '}
                </Link>
              </li>
            );
          })}
        </ol>
      </>
    )
  );
}