import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import request from "../../config/Request";
import { fetchData } from "../../utils/Utils";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  //Appel de la data pour le header de l'application
  useEffect(() => {
    fetchData(request.fetchTrending).then((response) => {
      const {
        data: { results },
      } = response;

      setMovie(results[Math.floor(Math.random() * results.length - 1)]);
    });
  }, []);

  //Constante qui affiche le poster de manière dynamique
  const bannerstyle = {
    backgroundImage: `url('https://image.tmdb.org/t/p/original/${
      movie?.backdrop_path || movie?.poster_path
    }')`,
    backgroundSize: "cover",
    backgroundPosition: "top center",
    objectFit: "contain",
  };

  return (
    <header className='banner' style={bannerstyle}>
      <div className='bannerContent'>
        <h1 className='bannerContent__title'>
          {movie?.title || movie?.original_title || movie?.name}
        </h1>
        <p className='bannerContent__description'>
          {/* {truncateText(movie?.overview, 120)} */}
          {movie?.overview}
        </p>
        <div className='bannerContent__buttons'>
          <button className='bannerContent__buttons--button'>
            <PlayArrowIcon />
            Lecture
          </button>
          <button className='bannerContent__buttons--button'>
            <HelpOutlineIcon />
            Plus d'infos
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
