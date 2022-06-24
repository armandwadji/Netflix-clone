import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import request from "../../config/Request";
import { formatDate } from "../../utils/Utils";
import QuickView from "../QuickView/QuickView";
import UseFetchData from "../../Hooks/UseFetchData";

const Banner = () => {
  const [popup, setPopup] = useState(false);

  //Fonction pour le popup de la video
  const handleClickpopup = () => {
    setPopup(!popup);
  };

  const results = UseFetchData(request.fetchTrending);
  const movie =
    results && results[Math.floor(Math.random() * results.length - 1)];

  //Constante qui affiche le poster de manière dynamique
  const bannerstyle = {
    backgroundImage: `url('https://image.tmdb.org/t/p/original/${
      movie?.backdrop_path || movie?.poster_path
    }')`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <>
      {movie && (movie.backdrop_path || movie.poster_path) && (
        <header className='banner' style={bannerstyle}>
          <div className='bannerContent'>
            <h1 className='bannerContent__title'>
              {movie?.title ||
                movie?.original_title ||
                movie?.name ||
                movie?.original_name}
            </h1>
            {formatDate(movie.first_air_date) ? (
              <h5 className='bannerContent__date'>
                Sortie : {formatDate(movie.first_air_date)}
              </h5>
            ) : (
              <h5 className='bannerContent__date'>
                Sortie : {formatDate(movie.release_date)}
              </h5>
            )}
            <p className='bannerContent__description'>
              {/* {truncateText(movie?.overview, 120)} */}
              {movie?.overview}
            </p>
            <div className='bannerContent__buttons'>
              <button className='bannerContent__buttons--button'>
                <PlayArrowIcon />
                Lecture
              </button>

              <button
                className='bannerContent__buttons--button'
                onClick={(e) => handleClickpopup()}>
                <HelpOutlineIcon />
                Plus d'infos
              </button>
            </div>
          </div>
          <QuickView
            movie={movie}
            popupFonction={(e) => handleClickpopup()}
            popup={popup}
          />
          <div className='bannerContent__fadebottom' />
        </header>
      )}
    </>
  );
};

export default Banner;
