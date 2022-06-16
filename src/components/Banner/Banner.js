import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import axios from "axios";
import request from "../../config/Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  //Méthode qui appel la data du header
  const fetchData = async () => {
    const response = await axios.get(request.fetchTrending);
    const {
      data: { results },
    } = response;

    setMovie(await results[Math.floor(Math.random() * results.length - 1)]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Méthode pour afficher la description sur 150 lettres
  //   const truncateText = (string, n) => {
  //     return string?.length > n
  //       ? string.substr(0, n - 1) + "..."
  //       : "pas de description";
  //   };

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
