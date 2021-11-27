import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import { FetchMoviesDetail } from '../Components/Api/Api';

const Cast = lazy(() =>
  import('../Components/Cast/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../Components/Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

const IMAGE_URL = 'https://image.tmdb.org/t/p/w400';

export default function MovieDetails({ match, history, location }) {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    FetchMoviesDetail(movieId).then(data => {
      setDetails(data);
    });
  }, [movieId]);

  const goBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <button type="button" onClick={goBack}>
        Go back
      </button>
      {details && (
        <div className="details">
          {details.backdrop_path ? (
            <img
              className="image-details"
              src={`${IMAGE_URL}${details.backdrop_path}`}
              alt=""
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
              alt="not found"
            />
          )}

          <div className="details-info">
            <h1>{details.title}</h1>
            <p>User Score: {details.vote_average}</p>
            <h2>Overview</h2>
            <p>{details.overview}</p>
            <h3>Genres</h3>
            <div className="details-genre">
              {details.genres.map(i => {
                return (
                  <p key={i.id} className="details-genre_paragraph">
                    {i.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <hr />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`${match.url}/credits`}>Cast</Link>
          </li>
          <li>
            <Link to={`${match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Suspense
        fallback={<h1>Загрузка дополнительной информации о фильме...</h1>}
      >
        <Switch>
          <Route path={`${match.path}/credits`} component={Cast}></Route>
          <Route path={`${match.path}/reviews`} component={Reviews}></Route>
        </Switch>
      </Suspense>
    </>
  );
}