import { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FetchSearchMovies } from '../Components/Api/Api';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [search, setSearch] = useState(null);

  const searchOrder = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!searchOrder) {
      setSearch(null);
      return;
    }

    FetchSearchMovies(searchOrder).then(({ results }) => {
      setSearch(results);
    });
  }, [searchOrder]);

  const searchMovies = e => {
    e.preventDefault();

    history.push({
      ...location.pathname,
      search: `query=${e.target[0].value}`,
    });

    FetchSearchMovies(e.target[0].value)
      .then(({ results }) => {
        setSearch(results);
      })
      .finally((e.target[0].value = ''));
  };

  return (
    <div>
      <form onSubmit={searchMovies}>
        <label>
          <input type="text" />
        </label>
        <button type="submit">Search</button>
      </form>
      {search && (
        <ol>
          {search.map(i => {
            return (
              <li key={i.id}>
                <Link to={`/movies/${i.id}`}>{i.title} </Link>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}