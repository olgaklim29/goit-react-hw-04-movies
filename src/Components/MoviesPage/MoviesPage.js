import { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { moreMoviesFromUserQuery } from "../../Services/moviesAPI";
import { ImSearch } from "react-icons/im";
import styles from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const urlQuery = new URLSearchParams(location.search).get("query");

  const handleValueChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      return alert("wate a second :)");
    }
    moreMoviesFromUserQuery(query)
      
      .then(setMovies)
      .catch((e) => console.log(e));
    setQuery("");
  };

  const pushSearch = () => {
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  // console.log(query);
  // console.log(urlQuery);
  useEffect(() => {
    if (urlQuery)
      moreMoviesFromUserQuery(urlQuery)
        .then(setMovies)
        .catch((e) => console.log(e));
  }, [urlQuery]);

  const {
    moviesPage,
    form,
    btn,
    input,
    moviesBox,
    moviesSt,
    moviesST__item,
    moviesSt__link,
  } = styles;

  // useLocation(location.state.from: {`/movies/${movie.id}`})

  // console.log(location);
  return (
    <div className={moviesPage}>
      <form className={form} onSubmit={handleSubmit}>
        <input
          className={input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleValueChange}
        />
        <button className={btn} type="submit" onClick={pushSearch}>
          <ImSearch style={{ marginRight: 8 }} />
          Search
        </button>
      </form>
      <div className={moviesBox}>
        <ul className={moviesSt}>
          {movies &&
            movies.map((movie) => (
              <li key={movie.id} className={moviesST__item}>
                <Link
                  query={urlQuery}
                  className={moviesSt__link}
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                      from:
                        `${history.location.pathname}` +
                        `${history.location.search}`,
                      label: "To movies",
                    },
                  }}
                >
                  {movie.name || movie.original_title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}