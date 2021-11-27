import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { FetchMoviesCast } from '../Api/Api';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    FetchMoviesCast(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    cast && (
      <ul>
        {cast.map(i => {
          return (
            <li key={i.id}>
              {i.profile_path ? (
                <img src={`${IMAGE_URL}${i.profile_path}`} alt={i.name} />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                  alt="Not found"
                  width={200}
                />
              )}
              <p>{i.name}</p>
              <p>{i.character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
}




// import { useParams } from "react-router";
// import { useState, useEffect } from "react";
// import { castAPI } from "../../Services/moviesAPI";
// import default_poster from "../../images/anonymous_anonim.jpg";
// import styles from "../Cast/Cast.module.css";

// export default function Cast() {
//   const { moviesId } = useParams();
//   const [cast, setCast] = useState(null);

//   useEffect(() => {
//     castAPI(moviesId)
//       .then(setCast)
//       .catch((e) => console.log(e));
//   }, [moviesId]);

//   const { castSt, castSt__txt, castSt__item, castSt__img } = styles;
//   return (
//     <ul className={castSt}>
//       {cast &&
//         cast.map((actor) => (
//           <li className={castSt__item} key={actor.cast_id}>
//             <img
//               className={castSt__img}
//               src={
//                 actor.profile_path
//                   ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
//                   : default_poster
//               }
//               alt={actor.name}
//               style={{ width: 100 }}
//             />
//             <p className={castSt__txt}>{actor.name}</p>
//           </li>
//         ))}
//     </ul>
//   );
// }