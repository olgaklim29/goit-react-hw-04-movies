import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { popularMoviesAPI } from "../../Services/moviesAPI.js";
import styles from "./HomePage.module.css";



export default function HomePage({ title }) {
  // const {url} = useRouteMatch();
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  // const [status, setStatus] = useState(IDLE);

  useEffect(() => {
    popularMoviesAPI()
      .then(setMovies)
      
      .catch((e) => console.log(e));
  }, []);

  const {
    homePage,
    homePage__title,
    homePage__list,
    homePage__link,
    homePage__item,
  } = styles;
  return (
    <div className={homePage}>
      <h1 className={homePage__title}>{title}</h1>
      <ul className={homePage__list}>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id} className={homePage__item}>
              <Link
                className={homePage__link}
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location, label: "Back to popular" },
                }}
              >
                {movie.name || movie.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

HomePage.propTypes = {
  title: PropTypes.string,
};