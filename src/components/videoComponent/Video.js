import React, { useEffect, useState } from "react";
import { API_KEY, baseURL } from "../../config/Request";
import { fetchData } from "../../utils/Utils";

const Video = ({ movie, popup }) => {
  const [movieTrailerId, setMovietrailerId] = useState();

  //   const fetchtrailer = `${baseURL}/${movie.media_type}/${movie?.id}/videos?api_key=${API_KEY}&language=fr-FR`;

  //Appel de la data pour les rows de l'application
  useEffect(() => {
    if (popup) {
      fetchData(
        `${baseURL}/movie/${movie?.id}/videos?api_key=${API_KEY}&language=fr-FR`
      ).then((response) => {
        const {
          data: { results },
        } = response;
        results && setMovietrailerId(results[0].key);
      });

      if (!movieTrailerId) {
        fetchData(
          `${baseURL}/tv/${movie?.id}/videos?api_key=${API_KEY}&language=fr-FR`
        )
          .then((response) => {
            const {
              data: { results },
            } = response;
            results && setMovietrailerId(results[0].key);
          })
          .catch((err) => console.log(err));
      }
    }
  }, [movie.id, movieTrailerId, popup]);

  return (
    <div className={`video ${popup && "visible"}`}>
      {movieTrailerId && (
        <iframe
          src={
            movieTrailerId &&
            `https://www.youtube.com/embed/${movieTrailerId}? rel=0&autoplay=${
              popup ? 1 : 0
            }`
          }
          title='video'
          frameborder='0'
          allowFullScreen></iframe>
      )}
    </div>
  );
};

export default Video;
