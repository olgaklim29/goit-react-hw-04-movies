import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink
          exact
          to={`/`}
          className="nav-link"
          activeClassName="active_nav-link"
        >
          Home
        </NavLink>
        <NavLink
          to={`/movies`}
          className="nav-link"
          activeClassName="active_nav-link"
        >
          Movies
        </NavLink>
      </nav>
      <hr />
    </>
  );
};