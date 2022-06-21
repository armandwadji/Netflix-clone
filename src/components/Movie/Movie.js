import React, { useState } from "react";
import { genreFinder } from "../../utils/Utils";
// import QuickView from "../QuickView/QuickView";
import Video from "../videoComponent/Video";

const Movie = ({ movie, isPoster }) => {
  const [popup, setPopup] = useState(false);

  const handleClickpopup = () => {
    setPopup(!popup);
  };

  const handleFalsePopup = () => {
    setPopup(false);
  };

  return (
    <div
      className='movie'
      // onMouseEnter={handleClickpopup}
      onMouseLeave={handleFalsePopup}>
      <Video movie={movie} popup={popup} />
      <div className='description' onClick={handleClickpopup}>
        <div className={Math.random() > 0.5 ? "row__images--image" : ""}>
          <img
            src={`https://image.tmdb.org/t/p/original/${
              isPoster ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.title || movie?.original_title || movie?.name}
          />
        </div>

        {/* TODO: implement the description by items */}
        <div className='row__images--description'>
          <h3>{movie?.title || movie?.original_title || movie?.name}</h3>

          {/* Condtion pour afficher la dte de sortie de la date disponible dans l'API */}
          {isPoster
            ? movie.first_air_date && (
                <h5>
                  Sortie : {movie.first_air_date.split("-").reverse().join("/")}
                </h5>
              )
            : movie.release_date && (
                <h5>
                  Sortie : {movie?.release_date.split("-").reverse().join("/")}
                </h5>
              )}

          {movie.genre_ids && (
            <ul>
              {genreFinder(movie.genre_ids).map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
              {/* Lien vers la video */}
            </ul>
          )}

          {movie.overview && <p>{movie.overview}</p>}
        </div>
      </div>
    </div>
  );
};

export default Movie;
