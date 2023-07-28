import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import request from "../../config/Request";
import { fetchData, formatDate } from "../../utils/Utils";
import QuickView from "../QuickView/QuickView";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false);

  //Appel de la data pour le header de l'application
  useEffect(() => {
    fetchData( `${request.at(1).genreUrl}&page=${Math.floor(Math.random() * 100)}`)
      .then((response) => {
        const { data: { results } } = response;
        setMovie(results[Math.floor(Math.random() * results.length - 1)]);
      })
      .catch((err) => console.log(err));
  }, []);

  //Constante qui affiche le poster de manière dynamique
  const bannerstyle = {
    backgroundImage: `url('https://image.tmdb.org/t/p/original/${ movie?.backdrop_path || movie?.poster_path }')`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <>
      {(movie?.backdrop_path || movie?.poster_path) && (
        <header className='banner' style={bannerstyle}>
          <div className='bannerContent'>
            <h1 className='bannerContent__title'>
              {movie?.title || movie?.original_title || movie?.name || movie?.original_name}
            </h1>
            <h5 className='bannerContent__date'>
              Sortie : {formatDate(movie?.first_air_date || movie?.release_date)}
            </h5>
            <p className='bannerContent__description'>
              {/* {truncateText(movie?.overview, 120)} */}
              {movie?.overview}
            </p>
            <div className='bannerContent__buttons'>
              <button className='bannerContent__buttons--button' onClick={ _ => setPopup(!popup)}>
                <PlayArrowIcon /> Lecture
              </button>
              <button className='bannerContent__buttons--button'>
                <HelpOutlineIcon /> Plus d'infos
              </button>
            </div>
          </div>
          <QuickView movie={movie} popupFonction={ _ => setPopup(!popup)} popup={popup} />
          <div className='bannerContent__fadebottom' />
        </header>
      )}
    </>
  );
};

export default Banner;
