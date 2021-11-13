import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { castAPI } from "../../Services/moviesAPI";
import default_poster from "../../images/anonymous_anonim.jpg";
import styles from "./Cast.module.css";

export default function Cast() {
    const { moviesId } = useParams();
    const [cast, setCast] = useState(null);
  
    useEffect(() => {
      castAPI(moviesId)
        .then(setCast)
        .catch((e) => console.log(e));
    }, [moviesId]);
  
    const { castSt, castSt__txt, castSt__item, castSt__img } = styles;
    return (
      <ul className={castSt}>
        {cast &&
          cast.map((actor) => (
            <li className={castSt__item} key={actor.cast_id}>
              <img
                className={castSt__img}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : default_poster
                }
                alt={actor.name}
                style={{ width: 100 }}
              />
              <p className={castSt__txt}>{actor.name}</p>
            </li>
          ))}
      </ul>
    );
  }