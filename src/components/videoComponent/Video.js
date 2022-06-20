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
        setMovietrailerId(
          results[Math.floor(Math.random() * results.length)].key
        );
      });

      if (!movieTrailerId) {
        fetchData(
          `${baseURL}/tv/${movie?.id}/videos?api_key=${API_KEY}&language=fr-FR`
        ).then((response) => {
          const {
            data: { results },
          } = response;
          setMovietrailerId(
            results[Math.floor(Math.random() * results.length)].key
          );
        });
      }
    }
  }, [movie.id, movieTrailerId, popup]);

  return (
    <div className='video'>
      {movieTrailerId && (
        <iframe
          src={`https://www.youtube.com/embed/${movieTrailerId}? rel=0&autoplay=${
            popup ? 1 : 0
          }`}
          title='video'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
      )}
    </div>
  );
};

export default Video;
