// import { lazy, Suspense } from "react";
// import { Switch, Route } from "react-router-dom";
// import Container from "./Components/Container";
// import Navigation from "./Components/Navigation";

// const NotFoundView = lazy(() =>
//   import("./views/NotFound")
// );
// const HomePage = lazy(() =>
//   import("./Components/HomePage")
// );
// const MoviesPage = lazy(() =>
//   import("./Components/MoviesPage")
// );
// const MovieDetailsPage = lazy(() =>
//   import(
//     "./Components/MovieDetailsPage")
// );

// export default function App() {
//   return (
//     <Container>
//       <Navigation />
//       <Suspense fallback="Wait a sec :)">
//         <Switch>
//           <Route exact path="/">
//             <HomePage title="TRENDING TODAY" />
//           </Route>

//           <Route path="/movies" exact>
//             <MoviesPage />
//           </Route>

//           <Route path="/movies/:movieId">
//             <MovieDetailsPage />
//           </Route>

//           <Route>
//             <NotFoundView />
//           </Route>
//         </Switch>
//       </Suspense>
//     </Container>
//   );
// }


import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Navigation } from './Page/Navigation';

const HomePage = lazy(() =>
  import('./Page/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./Page/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetails = lazy(() =>
  import('./Page/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const NotFound = lazy(() =>
  import('./Components/NotFound/NotFound' /* webpackChunkName: "NotFound" */),
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>ЗАГРУЗКА...</h1>}>
        {/*Если навигацию переместить на уровень выше, то ломается код(в Suspence не видит fallback)*/}
        <Switch>
          <Route exact path={`/`} component={HomePage} />
          <Route path={`/movies/:movieId`} component={MovieDetails} />
          <Route path={`/movies`} component={MoviesPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;