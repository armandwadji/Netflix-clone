import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { API_KEY, baseURL, urlDetail } from "../../config/Request";
import { fetchData } from "../../utils/Utils";

const Video = ({ movie, popup }) => {
  const [movieTrailerKey, setMovieTrailerKey] = useState("");

  //Appel de la data pour la lecture de la vidéo
  useEffect(() => {
    if (popup) {
      fetchData(
        `${urlDetail}${
          movie.title ||
          movie.original_title ||
          movie.name ||
          movie.original_name
        }`
      )
        .then((res) => {
          const movieDetail = res.data.results.filter(
            (res) => res.id === movie.id
          );
          // console.log(res.data.results);
          return movieDetail;
        })
        .then((res) => {
          const { id, media_type } = res[0];
          // console.log(id, media_type);

          fetchData(
            `${baseURL}/${media_type}/${id}/videos?api_key=${API_KEY}&language=fr-FR`
          )
            .then((response) => {
              const {
                data: { results },
              } = response;

              results && setMovieTrailerKey(results[0].key);
              // console.log(movieTrailerKey);
            })
            .catch((err) => console.log(`Error movieKey: ${err}`));
        })
        .catch((err) => console.log(`Error movieDetail: ${err}`));
    }
  }, [
    movie.id,
    movie.name,
    movie.original_name,
    movie.original_title,
    movie.title,
    movieTrailerKey,
    popup,
  ]);

  return (
    <>
      {popup && (
        <div className={`video ${popup && "visible"}`}>
          {movieTrailerKey && (
            <Iframe
              src={
                movieTrailerKey &&
                `https://www.youtube.com/embed/${movieTrailerKey}? rel=0&autoplay=${
                  popup ? 1 : 0
                }`
              }
              title={movie.title || movie.original_title || movie.name}
              frameborder='0'
              allowFullScreen
              loading='eager'
            />
          )}
        </div>
      )}
    </>
  );
};

export default Video;
