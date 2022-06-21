import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { genreFinder } from "../../utils/Utils";
import Video from "../videoComponent/Video";

const QuickView = ({ movie, popupFonction, popup }) => {
  return (
    <div className={`quickview ${popup && "open"}`}>
      <div className='quickview__video'>
        <Video movie={movie} popup={popup} />
      </div>
      <div className='quickview__banner'>
        <div className='quickview__content'>
          <h3 className='quickview__title'>
            {movie?.title || movie?.original_title || movie?.name}
          </h3>

          {movie.first_air_date && (
            <h5 className='quickview__date'>
              Sortie : {movie.first_air_date.split("-").reverse().join("/")}
            </h5>
          )}

          {movie?.genre_ids && (
            <ul>
              {genreFinder(movie.genre_ids).map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          )}
          <p>{movie?.overview}</p>
        </div>
        <button className='quickview__close' onClick={popupFonction}>
          <CancelIcon fontSize='large' />
        </button>
      </div>
    </div>
  );
};

export default QuickView;
