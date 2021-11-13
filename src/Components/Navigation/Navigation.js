import { NavLink } from "react-router-dom";
import { FaHouseDamage, FaVideo } from "react-icons/fa";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const { navigation, nav__link, nav__activeLink } = styles;
  return (
    <nav className={navigation}>
      <NavLink
        exact
        to="/"
        className={nav__link}
        activeClassName={nav__activeLink}
      >
        <FaHouseDamage style={{ marginRight: 8 }} />
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={nav__link}
        activeClassName={nav__activeLink}
      >
        <FaVideo style={{ marginRight: 8 }} />
        Movies
      </NavLink>
    </nav>
  );
}